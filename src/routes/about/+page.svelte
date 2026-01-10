<script>
	import { base } from '$app/paths';
	import ParticleEffect from '$lib/components/ParticleEffect.svelte';
</script>

<svelte:head>
	<title>About - SvelteKit Starter GH Pages</title>
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
				<span class="text-xl font-bold tracking-tight">SVELTE<span class="text-primary">CORE</span></span>
			</a>
			<nav class="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
				<a class="text-white/60 hover:text-white transition-colors" href="{base}/">Particles</a>
				<a class="nav-item-active hover:text-primary transition-colors" href="{base}/about/">About</a>
				<a class="text-white/60 hover:text-white transition-colors" href="{base}/demo/">Demo</a>
			</nav>
		</div>
	</header>

	<main class="flex-1 p-8">
		<div class="max-w-5xl mx-auto space-y-8">
			<div class="text-center mb-12">
				<div class="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full glass-card text-xs font-semibold text-primary uppercase tracking-[0.2em] border-primary/20">
					<span class="material-symbols-outlined text-xs">info</span>
					Project Information
				</div>
				<h1 class="text-5xl md:text-7xl font-serif italic font-light tracking-tight mb-4 bg-gradient-to-r from-white via-primary to-secondary bg-clip-text text-transparent">
					About This Starter
				</h1>
				<p class="text-lg text-white/50 font-light max-w-2xl mx-auto">
					A comprehensive guide to the architecture and configuration of this modern SvelteKit deployment
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-6">
				<div class="glass-card rounded-2xl p-8 border-white/5 space-y-4">
					<div class="flex items-center gap-3 mb-6">
						<div class="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
							<span class="material-symbols-outlined text-2xl">rocket_launch</span>
						</div>
						<h2 class="text-2xl font-bold">Purpose</h2>
					</div>
					<p class="text-white/60 leading-relaxed">
						This starter template demonstrates how to configure SvelteKit for deployment
						to GitHub Pages with proper base path handling, modern UI patterns, and optimal performance configurations.
					</p>
				</div>

				<div class="glass-card rounded-2xl p-8 border-white/5 space-y-4">
					<div class="flex items-center gap-3 mb-6">
						<div class="size-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
							<span class="material-symbols-outlined text-2xl">code</span>
						</div>
						<h2 class="text-2xl font-bold">Technology Stack</h2>
					</div>
					<div class="space-y-3">
						<div class="flex items-center gap-3">
							<span class="text-primary text-xl">→</span>
							<div>
								<span class="text-white/80 font-medium">Framework:</span>
								<span class="text-white/50 ml-2">SvelteKit + Svelte 5</span>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-primary text-xl">→</span>
							<div>
								<span class="text-white/80 font-medium">Language:</span>
								<span class="text-white/50 ml-2">TypeScript</span>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-primary text-xl">→</span>
							<div>
								<span class="text-white/80 font-medium">Styling:</span>
								<span class="text-white/50 ml-2">Tailwind CSS v4</span>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-primary text-xl">→</span>
							<div>
								<span class="text-white/80 font-medium">Package Manager:</span>
								<span class="text-white/50 ml-2">pnpm</span>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<span class="text-primary text-xl">→</span>
							<div>
								<span class="text-white/80 font-medium">Deployment:</span>
								<span class="text-white/50 ml-2">GitHub Actions → Pages</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="glass-card rounded-2xl p-8 border-white/5">
				<div class="flex items-center gap-3 mb-8">
					<div class="size-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
						<span class="material-symbols-outlined text-2xl">settings</span>
					</div>
					<h2 class="text-2xl font-bold">Configuration Highlights</h2>
				</div>
				<div class="grid md:grid-cols-2 gap-6">
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
							<div>
								<h3 class="font-semibold text-white/90 mb-1">Base Path Configuration</h3>
								<p class="text-sm text-white/50">Configured for subdirectory hosting on GitHub Pages</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
							<div>
								<h3 class="font-semibold text-white/90 mb-1">Static Site Generation</h3>
								<p class="text-sm text-white/50">Prerendering enabled for all routes with adapter-static</p>
							</div>
						</div>
					</div>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-secondary mt-1">check_circle</span>
							<div>
								<h3 class="font-semibold text-white/90 mb-1">Trailing Slash Support</h3>
								<p class="text-sm text-white/50">Always enabled for GitHub Pages compatibility</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-secondary mt-1">check_circle</span>
							<div>
								<h3 class="font-semibold text-white/90 mb-1">404 Fallback</h3>
								<p class="text-sm text-white/50">SPA-style routing with custom error pages</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="flex justify-center pt-8">
				<a href="{base}/" class="group flex items-center gap-3 px-6 py-3 glass-card glass-card-hover rounded-xl border-primary/30 hover:border-primary/50 transition-all">
					<span class="material-symbols-outlined text-primary">arrow_back</span>
					<span class="font-medium">Back to Home</span>
				</a>
			</div>
		</div>
	</main>

	<footer class="h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></footer>
</div>
