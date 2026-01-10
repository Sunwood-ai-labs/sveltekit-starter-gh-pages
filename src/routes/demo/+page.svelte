<script>
	import { base } from '$app/paths';
	import Counter from '$lib/components/Counter.svelte';
	import PathDisplay from '$lib/components/PathDisplay.svelte';
	import ParticleEffect from '$lib/components/ParticleEffect.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
</script>

<svelte:head>
	<title>Demo - SvelteKit Starter GH Pages</title>
</svelte:head>

<div class="fixed inset-0 particle-container z-0">
	<ParticleEffect />
</div>

<div class="relative z-10 min-h-screen flex flex-col">
	<header class="glass-card border-t-0 border-x-0 h-20 flex items-center justify-between px-8">
		<div class="flex items-center gap-8">
			<a href="{base}/" class="flex items-center gap-2 group cursor-pointer">
				<div class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-glow-primary group-hover:scale-105 transition-transform">
					<span class="material-symbols-outlined text-white font-bold">bolt</span>
				</div>
				<span class="text-xl font-bold tracking-tight text-theme-base">SVELTE<span class="text-theme-primary">CORE</span></span>
			</a>
			<nav class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
				<a class="text-theme-muted hover:text-theme-base transition-colors" href="{base}/">Particles</a>
				<a class="text-theme-muted hover:text-theme-base transition-colors" href="{base}/about/">About</a>
				<a class="nav-item-active hover:text-theme-primary transition-colors" href="{base}/demo/">Demo</a>
			</nav>
		</div>
		<div class="flex items-center gap-4">
			<ThemeToggle />
		</div>
	</header>

	<main class="flex-1 p-8">
		<div class="max-w-6xl mx-auto space-y-8">
			<div class="text-center mb-12">
				<div class="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-xs font-semibold text-theme-secondary uppercase tracking-[0.2em] border-theme-secondary">
					<span class="material-symbols-outlined text-xs">science</span>
					Interactive Playground
				</div>
				<h1 class="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-4 hero-title">
					Interactive Demo
				</h1>
				<p class="text-lg text-theme-muted font-light max-w-2xl mx-auto">
					Experience the reactivity and performance of SvelteKit with live components and real-time path configuration
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-6">
				<div class="glass-card rounded-2xl p-8 border-theme-subtle space-y-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="size-12 bg-theme-primary/10 rounded-xl flex items-center justify-center text-theme-primary">
							<span class="material-symbols-outlined text-2xl">add_circle</span>
						</div>
						<h2 class="text-2xl font-bold text-theme-base">Counter Component</h2>
					</div>
					<p class="text-theme-muted leading-relaxed mb-6">
						A simple interactive component demonstrating Svelte 5's reactive state management and sub-millisecond DOM updates.
					</p>
					<div class="bg-theme-card rounded-xl p-6 border border-theme-subtle">
						<Counter />
					</div>
					<div class="flex items-center gap-2 text-xs text-theme-subtle">
						<span class="material-symbols-outlined text-sm">info</span>
						<span>Click the buttons to test reactive state updates</span>
					</div>
				</div>

				<div class="glass-card rounded-2xl p-8 border-theme-subtle space-y-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="size-12 bg-theme-secondary/10 rounded-xl flex items-center justify-center text-theme-secondary">
							<span class="material-symbols-outlined text-2xl">route</span>
						</div>
						<h2 class="text-2xl font-bold text-theme-base">Path Configuration</h2>
					</div>
					<p class="text-theme-muted leading-relaxed mb-6">
						Real-time display of the current base path configuration, essential for GitHub Pages subdirectory deployment.
					</p>
					<div class="bg-theme-card rounded-xl p-6 border border-theme-subtle">
						<PathDisplay />
					</div>
					<div class="flex items-center gap-2 text-xs text-theme-subtle">
						<span class="material-symbols-outlined text-sm">deployed_code</span>
						<span>Base path automatically configured for your repository</span>
					</div>
				</div>
			</div>

			<div class="glass-card rounded-2xl p-8 border-theme-subtle">
				<div class="flex items-center gap-3 mb-8">
					<div class="size-12 bg-theme-card rounded-xl flex items-center justify-center text-theme-base">
						<span class="material-symbols-outlined text-2xl">explore</span>
					</div>
					<h2 class="text-2xl font-bold text-theme-base">Navigation Test</h2>
				</div>
				<p class="text-theme-muted leading-relaxed mb-6">
					Test that SvelteKit's client-side navigation works correctly with the base path configuration across all routes.
				</p>
				<div class="flex flex-wrap gap-4">
					<a href="{base}/" class="group flex items-center gap-2 px-6 py-3 glass-card glass-card-hover rounded-xl border-theme-primary transition-all">
						<span class="material-symbols-outlined text-theme-primary">home</span>
						<span class="font-medium text-theme-base">Home</span>
					</a>
					<a href="{base}/about/" class="group flex items-center gap-2 px-6 py-3 glass-card glass-card-hover rounded-xl border-theme-secondary transition-all">
						<span class="material-symbols-outlined text-theme-secondary">info</span>
						<span class="font-medium text-theme-base">About</span>
					</a>
					<a href="{base}/demo/" class="group flex items-center gap-2 px-6 py-3 bg-theme-card rounded-xl border border-theme-muted cursor-not-allowed">
						<span class="material-symbols-outlined text-theme-base">science</span>
						<span class="font-medium text-theme-base">Demo (Current)</span>
					</a>
				</div>
				<div class="mt-6 p-4 bg-theme-primary/5 border border-theme-primary rounded-xl">
					<div class="flex items-start gap-3">
						<span class="material-symbols-outlined text-theme-primary mt-0.5">lightbulb</span>
						<div class="text-sm text-theme-muted">
							<span class="font-semibold text-theme-primary">Pro Tip:</span>
							Notice how navigation is instant with no page reload. SvelteKit's client-side router provides a seamless SPA experience while maintaining SSG benefits.
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-center pt-8">
				<a href="{base}/" class="group flex items-center gap-3 px-6 py-3 glass-card glass-card-hover rounded-xl border-theme-primary transition-all">
					<span class="material-symbols-outlined text-theme-primary">arrow_back</span>
					<span class="font-medium text-theme-base">Back to Home</span>
				</a>
			</div>
		</div>
	</main>

	<footer class="h-1 bg-gradient-to-r from-transparent via-theme-secondary/20 to-transparent"></footer>
</div>

<style>
	:global(:root.dark) .hero-title {
		background: linear-gradient(to right, white, #c200e5, #00e6d2);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	:global(:root.light) .hero-title {
		background: linear-gradient(to right, #1E293B, #A78BFA, #4F9D9C);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
</style>
