<script lang="ts">
	import { onMount } from 'svelte';

	// Props for controlling the particle system
	interface Props {
		complexity?: number;      // 10-200: number of particles
		attraction?: number;      // 0-100: connection distance multiplier
		collisionMesh?: boolean;  // show connections between particles
		bloomEffect?: boolean;    // add glow effect to particles
	}

	let {
		complexity = 85,
		attraction = 42,
		collisionMesh = true,
		bloomEffect = false
	}: Props = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null;
	let particles: Particle[] = [];
	let animationId: number;

	// Reactive values that update when props change
	$effect(() => {
		// Reinitialize particles when complexity changes
		if (ctx && canvas) {
			const targetCount = Math.floor(complexity);
			if (particles.length !== targetCount) {
				particles = [];
				for (let i = 0; i < targetCount; i++) {
					particles.push(new Particle(canvas.width, canvas.height));
				}
			}
		}
	});

	class Particle {
		x: number;
		y: number;
		vx: number;
		vy: number;
		size: number;
		color: string;
		opacity: number;

		constructor(width: number, height: number) {
			this.x = Math.random() * width;
			this.y = Math.random() * height;
			this.vx = (Math.random() - 0.5) * 1.5;
			this.vy = (Math.random() - 0.5) * 1.5;
			this.size = Math.random() * 3 + 1;
			this.color = Math.random() > 0.5 ? '#00e6d2' : '#C200E5';
			this.opacity = Math.random() * 0.5 + 0.3;
		}

		update(width: number, height: number) {
			this.x += this.vx;
			this.y += this.vy;

			if (this.x < 0 || this.x > width) this.vx *= -1;
			if (this.y < 0 || this.y > height) this.vy *= -1;
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
			ctx.fillStyle = this.color;
			ctx.globalAlpha = this.opacity;

			// Add bloom effect if enabled
			if (bloomEffect) {
				ctx.shadowBlur = 20;
				ctx.shadowColor = this.color;
			}

			ctx.fill();
			ctx.shadowBlur = 0;
			ctx.globalAlpha = 1;
		}
	}

	function init() {
		if (!canvas) return;

		ctx = canvas.getContext('2d');
		if (!ctx) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		particles = [];
		const particleCount = Math.floor(complexity);
		for (let i = 0; i < particleCount; i++) {
			particles.push(new Particle(canvas.width, canvas.height));
		}

		animate();
	}

	function animate() {
		if (!ctx || !canvas) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		particles.forEach((particle, i) => {
			particle.update(canvas.width, canvas.height);
			particle.draw(ctx!);

			// Draw connections if collision mesh is enabled
			if (collisionMesh) {
				// Connection distance based on attraction (100-300px range)
				const maxDistance = 100 + (attraction * 2);

				particles.slice(i + 1).forEach(otherParticle => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < maxDistance) {
						ctx!.beginPath();
						ctx!.moveTo(particle.x, particle.y);
						ctx!.lineTo(otherParticle.x, otherParticle.y);
						ctx!.strokeStyle = particle.color;
						const opacity = (1 - distance / maxDistance) * 0.3;
						ctx!.globalAlpha = opacity;
						ctx!.lineWidth = bloomEffect ? 1.5 : 0.5;

						// Add glow to lines if bloom is enabled
						if (bloomEffect) {
							ctx!.shadowBlur = 10;
							ctx!.shadowColor = particle.color;
						}

						ctx!.stroke();
						ctx!.shadowBlur = 0;
						ctx!.globalAlpha = 1;
					}
				});
			}
		});

		animationId = requestAnimationFrame(animate);
	}

	function handleResize() {
		if (canvas) {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			particles.forEach(particle => {
				particle.x = Math.min(particle.x, canvas.width);
				particle.y = Math.min(particle.y, canvas.height);
			});
		}
	}

	onMount(() => {
		init();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	});
</script>

<canvas bind:this={canvas} class="absolute inset-0 w-full h-full"></canvas>
