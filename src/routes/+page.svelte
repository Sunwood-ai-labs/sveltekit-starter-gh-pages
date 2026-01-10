<script>
	import { base } from '$app/paths';
	import Counter from '$lib/components/Counter.svelte';
</script>

<svelte:head>
	<title>SvelteKit Starter - GitHub Pages</title>
	<meta name="description" content="SvelteKit starter template configured for GitHub Pages deployment" />
</svelte:head>

<div class="container">
	<header>
		<h1>SvelteKit Starter for GitHub Pages</h1>
		<p class="subtitle">A production-ready template with TypeScript and pnpm</p>
	</header>

	<main>
		<section class="intro">
			<h2>Welcome!</h2>
			<p>
				This is a SvelteKit starter project configured for deployment to GitHub Pages.
				It demonstrates proper base path configuration and static site generation.
			</p>
		</section>

		<section class="demo">
			<h2>Demo Component</h2>
			<Counter />
		</section>

		<section class="features">
			<h2>Features</h2>
			<ul>
				<li>✅ SvelteKit with TypeScript</li>
				<li>✅ Static site generation with adapter-static</li>
				<li>✅ GitHub Actions workflow for automatic deployment</li>
				<li>✅ Base path configuration for subdirectory hosting</li>
				<li>✅ pnpm package manager</li>
				<li>✅ Modern Svelte 5 with runes</li>
			</ul>
		</section>

		<section class="navigation">
			<h2>Navigation Demo</h2>
			<p>Base path is correctly configured: <code>{base || '/'}</code></p>
			<nav>
				<a href="{base}/">Home</a>
				<a href="{base}/about/">About</a>
				<a href="{base}/demo/">Demo</a>
			</nav>
		</section>
	</main>

	<footer>
		<p>
			Built with SvelteKit • Deployed on GitHub Pages •
			<a href="https://github.com/Sunwood-ai-labs/sveltekit-starter-gh-pages" target="_blank" rel="noopener">
				View on GitHub
			</a>
		</p>
	</footer>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 2.5rem;
		color: #ff3e00;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
	}

	section {
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: #f5f5f5;
		border-radius: 8px;
	}

	h2 {
		color: #333;
		margin-top: 0;
	}

	ul {
		list-style-position: inside;
	}

	li {
		margin: 0.5rem 0;
	}

	nav {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
		flex-wrap: wrap;
	}

	nav a {
		padding: 0.5rem 1rem;
		background: #ff3e00;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: background 0.2s;
	}

	nav a:hover {
		background: #cc3200;
	}

	code {
		background: #e0e0e0;
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	footer {
		text-align: center;
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #ddd;
		color: #666;
	}

	footer a {
		color: #ff3e00;
	}
</style>
