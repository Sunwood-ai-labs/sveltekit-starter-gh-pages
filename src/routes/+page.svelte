<script>
	import { base } from '$app/paths';
	import Counter from '$lib/components/Counter.svelte';
	import ParticleEffect from '$lib/components/ParticleEffect.svelte';
	import EngineDashboard from '$lib/components/EngineDashboard.svelte';
	import PerformanceMonitor from '$lib/components/PerformanceMonitor.svelte';

	// State for particle system controls
	let complexity = $state(85);
	let attraction = $state(42);
	let collisionMesh = $state(true);
	let bloomEffect = $state(false);
</script>

<svelte:head>
	<title>SvelteKit Starter GH Pages Demo</title>
	<meta name="description" content="SvelteKit starter template configured for GitHub Pages deployment" />
</svelte:head>

<div class="fixed inset-0 particle-container z-0">
	<ParticleEffect
		{complexity}
		{attraction}
		{collisionMesh}
		{bloomEffect}
	/>
	<div class="absolute inset-0 opacity-30">
		<div class="absolute top-[15%] left-[10%] w-1 h-1 bg-primary rounded-full neon-glow-primary"></div>
		<div class="absolute top-[45%] left-[25%] w-2 h-2 bg-secondary rounded-full neon-glow-secondary blur-[1px]"></div>
		<div class="absolute top-[80%] left-[15%] w-1.5 h-1.5 bg-primary rounded-full opacity-60"></div>
		<div class="absolute top-[25%] right-[20%] w-1 h-1 bg-primary rounded-full neon-glow-primary"></div>
		<div class="absolute top-[60%] right-[30%] w-2 h-2 bg-secondary rounded-full opacity-40"></div>
		<div class="absolute top-[10%] left-[50%] w-1 h-1 bg-white/20 rounded-full"></div>
	</div>
</div>

<div class="relative z-10 flex flex-col h-screen overflow-hidden">
	<header class="glass-card border-t-0 border-x-0 h-20 flex items-center justify-between px-8">
		<div class="flex items-center gap-8">
			<div class="flex items-center gap-2 group cursor-pointer">
				<div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow-primary group-hover:scale-105 transition-transform">
					<span class="material-symbols-outlined text-white font-bold">bolt</span>
				</div>
				<span class="text-xl font-bold tracking-tight">SVELTE<span class="text-primary">CORE</span></span>
			</div>
			<nav class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
				<a class="nav-item-active hover:text-primary transition-colors" href="{base}/">Particles</a>
				<a class="text-white/60 hover:text-white transition-colors" href="{base}/about/">About</a>
				<a class="text-white/60 hover:text-white transition-colors" href="{base}/demo/">Demo</a>
			</nav>
		</div>
		<div class="flex items-center gap-4">
			<div class="flex items-center gap-2 px-3 py-1.5 glass-card rounded-full text-[10px] font-mono border-white/10">
				<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
				<span class="text-white/60">NODE_VERSION:</span>
				<span class="text-primary font-bold tracking-tighter">v4.2.0-STABLE</span>
			</div>
			<button class="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all flex items-center gap-2">
				<span class="material-symbols-outlined text-sm">rocket_launch</span>
				Deploy
			</button>
		</div>
	</header>

	<main class="flex-1 overflow-y-auto p-8 space-y-12">
		<section class="max-w-7xl mx-auto flex flex-col items-center text-center">
			<div class="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-xs font-semibold text-secondary uppercase tracking-[0.2em] border-secondary/20">
				<span class="material-symbols-outlined text-xs">auto_awesome</span>
				Performance Demo v2.0
			</div>
			<h1 class="text-6xl md:text-8xl font-serif italic font-light tracking-tight mb-6 bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
				SvelteKit Starter GH Pages
			</h1>
			<p class="max-w-2xl text-lg text-white/50 font-light leading-relaxed">
				A high-performance animation playground showcasing the sub-millisecond reactivity of SvelteKit
				deployed on modern infrastructure. Optimized for 120Hz displays.
			</p>
		</section>

		<section class="max-w-7xl mx-auto grid grid-cols-12 gap-6">
			<div class="col-span-12 lg:col-span-3 space-y-6">
				<EngineDashboard
					onComplexityChange={(v) => complexity = v}
					onAttractionChange={(v) => attraction = v}
					onCollisionMeshChange={(v) => collisionMesh = v}
					onBloomEffectChange={(v) => bloomEffect = v}
				/>

				<div class="glass-card rounded-2xl p-6 border-white/5">
					<div class="flex items-center justify-between mb-4">
						<h3 class="text-xs font-bold uppercase tracking-widest text-white/40">Real-time Metrics</h3>
						<span class="material-symbols-outlined text-xs text-primary">analytics</span>
					</div>
					<PerformanceMonitor />
				</div>
			</div>

			<div class="col-span-12 lg:col-span-6 flex flex-col gap-6">
				<div class="glass-card rounded-2xl border-white/10 flex-1 relative min-h-[400px] overflow-hidden">
					<div class="absolute inset-0 flex items-center justify-center">
						<div class="relative w-full h-full p-8 flex items-end justify-between">
							<div class="space-y-2">
								<div class="flex items-center gap-2">
									<span class="px-2 py-0.5 rounded bg-primary text-background-dark text-[10px] font-bold">LIVE</span>
									<span class="text-xs font-mono text-white/40">Viewport_01.render</span>
								</div>
								<div class="flex -space-x-2">
									<div class="size-6 rounded-full border border-background-dark bg-primary/40"></div>
									<div class="size-6 rounded-full border border-background-dark bg-secondary/40"></div>
									<div class="size-6 rounded-full border border-background-dark bg-white/20"></div>
									<div class="size-6 rounded-full border border-background-dark bg-white/10 flex items-center justify-center text-[8px]">+12</div>
								</div>
							</div>
							<div class="flex gap-2">
								<button class="size-10 glass-card rounded-full flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/50 transition-all">
									<span class="material-symbols-outlined text-xl">fullscreen</span>
								</button>
								<button class="size-10 glass-card rounded-full flex items-center justify-center text-white/60 hover:text-secondary hover:border-secondary/50 transition-all">
									<span class="material-symbols-outlined text-xl">settings_input_component</span>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="glass-card rounded-2xl overflow-hidden border-white/5">
					<div class="terminal-header px-4 py-2 flex items-center justify-between">
						<div class="flex gap-1.5">
							<div class="size-3 rounded-full bg-red-500/50"></div>
							<div class="size-3 rounded-full bg-yellow-500/50"></div>
							<div class="size-3 rounded-full bg-green-500/50"></div>
						</div>
						<div class="text-[10px] font-mono text-white/30 tracking-widest uppercase">src/lib/ParticleSystem.svelte</div>
						<div class="flex gap-4">
							<span class="material-symbols-outlined text-sm text-white/20">content_copy</span>
							<span class="material-symbols-outlined text-sm text-white/20">terminal</span>
						</div>
					</div>
					<div class="p-4 font-mono text-xs leading-relaxed overflow-x-auto">
						<pre><span class="text-secondary italic">script:</span>
  <span class="text-white/40">import &#123; onMount &#125; from 'svelte';</span>
  <span class="text-white/40">import &#123; spring &#125; from 'svelte/motion';</span>
  <span class="text-primary">export let density = 2500;</span>
  <span class="text-white/80">let canvas;</span>
  <span class="text-white/40">onMount(() =&gt; &#123;</span>
    <span class="text-white/60">const ctx = canvas.getContext('2d');</span>
    <span class="text-white/60">// Highly optimized render loop</span>
    <span class="text-primary">requestAnimationFrame(render);</span>
  <span class="text-white/40">&#125;);</span></pre>
					</div>
				</div>
			</div>

			<div class="col-span-12 lg:col-span-3 space-y-6">
				<h3 class="text-xs font-bold uppercase tracking-widest text-white/30 ml-2">Key Advantages</h3>

				<div class="glass-card glass-card-hover rounded-2xl p-5 border-white/5 transition-all group">
					<div class="size-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:neon-glow-primary transition-all">
						<span class="material-symbols-outlined">speed</span>
					</div>
					<h4 class="text-sm font-bold mb-2">Zero Runtime overhead</h4>
					<p class="text-xs text-white/40 leading-relaxed">Svelte compiles your animations to highly efficient vanilla JS with no virtual DOM diffing.</p>
				</div>

				<div class="glass-card glass-card-hover rounded-2xl p-5 border-white/5 transition-all group">
					<div class="size-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:neon-glow-secondary transition-all">
						<span class="material-symbols-outlined">auto_graph</span>
					</div>
					<h4 class="text-sm font-bold mb-2">Native Transitions</h4>
					<p class="text-xs text-white/40 leading-relaxed">Built-in spring and tween motions for fluid, physics-based interactions at 144fps.</p>
				</div>

				<div class="glass-card glass-card-hover rounded-2xl p-5 border-white/5 transition-all group">
					<div class="size-10 bg-white/10 rounded-lg flex items-center justify-center text-white mb-4 transition-all">
						<span class="material-symbols-outlined">cloud_done</span>
					</div>
					<h4 class="text-sm font-bold mb-2">Edge Optimized</h4>
					<p class="text-xs text-white/40 leading-relaxed">Pre-rendered static assets served from GitHub Pages with global CDN propagation.</p>
				</div>

				<div class="mt-8 p-4 glass-card border-white/5 rounded-2xl flex items-center gap-4">
					<div class="relative size-12 flex-shrink-0">
						<svg class="size-full -rotate-90" viewBox="0 0 36 36">
							<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="3"></path>
							<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831" fill="none" stroke="url(#grad1)" stroke-dasharray="98, 100" stroke-width="3"></path>
							<defs>
								<linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
									<stop offset="0%" style="stop-color:#00e6d2;stop-opacity:1"></stop>
									<stop offset="100%" style="stop-color:#C200E5;stop-opacity:1"></stop>
								</linearGradient>
							</defs>
						</svg>
						<div class="absolute inset-0 flex items-center justify-center text-[10px] font-bold">98</div>
					</div>
					<div>
						<p class="text-[10px] font-bold uppercase tracking-tighter text-white/40">Performance Score</p>
						<p class="text-xs font-mono text-primary">Lighthouse Optima</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent pointer-events-none"></footer>
</div>
