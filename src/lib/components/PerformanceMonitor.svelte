<script lang="ts">
	import { onMount } from 'svelte';

	let fps = $state(0);
	let renderTime = $state(0);
	let updateCount = $state(0);
	let memoryUsage = $state(0);

	let frameCount = 0;
	let lastTime = performance.now();
	let animationId: number;

	onMount(() => {
		// FPS calculation
		const calculateFPS = () => {
			frameCount++;
			const currentTime = performance.now();
			const elapsed = currentTime - lastTime;

			if (elapsed >= 1000) {
				fps = Math.round(frameCount * 1000 / elapsed);
				frameCount = 0;
				lastTime = currentTime;
			}

			animationId = requestAnimationFrame(calculateFPS);
		};

		calculateFPS();

		// Measure component update performance
		const measureUpdate = () => {
			const start = performance.now();
			updateCount += 1;
			const end = performance.now();
			renderTime = Number((end - start).toFixed(3));
		};

		const interval = setInterval(measureUpdate, 100);

		// Memory usage (if available)
		const memoryInterval = setInterval(() => {
			if ('memory' in performance) {
				const mem = (performance as any).memory;
				memoryUsage = Math.round(mem.usedJSHeapSize / 1048576); // Convert to MB
			}
		}, 1000);

		return () => {
			cancelAnimationFrame(animationId);
			clearInterval(interval);
			clearInterval(memoryInterval);
		};
	});
</script>

<div class="grid grid-cols-2 gap-4">
	<div class="bg-white/5 rounded-xl p-3 border border-primary/20">
		<div class="flex items-center justify-between mb-1">
			<p class="text-[10px] text-white/40 uppercase">FPS</p>
			<span class="material-symbols-outlined text-xs text-primary">speed</span>
		</div>
		<p class="text-2xl font-bold text-primary">{fps}</p>
		<p class="text-[8px] text-white/30 mt-1">Frames per second</p>
	</div>

	<div class="bg-white/5 rounded-xl p-3 border border-secondary/20">
		<div class="flex items-center justify-between mb-1">
			<p class="text-[10px] text-white/40 uppercase">Update</p>
			<span class="material-symbols-outlined text-xs text-secondary">schedule</span>
		</div>
		<p class="text-2xl font-bold text-secondary">{renderTime}<span class="text-xs font-normal ml-0.5 text-white/30">ms</span></p>
		<p class="text-[8px] text-white/30 mt-1">Render time</p>
	</div>

	<div class="bg-white/5 rounded-xl p-3 border border-white/10">
		<div class="flex items-center justify-between mb-1">
			<p class="text-[10px] text-white/40 uppercase">Updates</p>
			<span class="material-symbols-outlined text-xs text-white/40">update</span>
		</div>
		<p class="text-2xl font-bold text-white/80">{updateCount}</p>
		<p class="text-[8px] text-white/30 mt-1">State updates</p>
	</div>

	{#if memoryUsage > 0}
		<div class="bg-white/5 rounded-xl p-3 border border-white/10">
			<div class="flex items-center justify-between mb-1">
				<p class="text-[10px] text-white/40 uppercase">Memory</p>
				<span class="material-symbols-outlined text-xs text-white/40">memory</span>
			</div>
			<p class="text-2xl font-bold text-white/80">{memoryUsage}<span class="text-xs font-normal ml-0.5 text-white/30">MB</span></p>
			<p class="text-[8px] text-white/30 mt-1">Heap usage</p>
		</div>
	{/if}
</div>
