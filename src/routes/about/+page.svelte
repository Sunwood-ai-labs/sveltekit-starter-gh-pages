<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>About - SvelteKit Starter</title>
</svelte:head>

<div class="container">
	<h1>About This Starter</h1>

	<section>
		<h2>Purpose</h2>
		<p>
			This starter template demonstrates how to configure SvelteKit for deployment
			to GitHub Pages with proper base path handling.
		</p>
	</section>

	<section>
		<h2>Technology Stack</h2>
		<ul>
			<li><strong>Framework:</strong> SvelteKit (Static Site Generation)</li>
			<li><strong>Language:</strong> TypeScript</li>
			<li><strong>Package Manager:</strong> pnpm</li>
			<li><strong>Deployment:</strong> GitHub Actions → GitHub Pages</li>
			<li><strong>Adapter:</strong> @sveltejs/adapter-static</li>
		</ul>
	</section>

	<section>
		<h2>Configuration Highlights</h2>
		<ul>
			<li>Base path configured for subdirectory hosting</li>
			<li>Trailing slash always enabled for GitHub Pages compatibility</li>
			<li>404 fallback for SPA-style routing</li>
			<li>Prerendering enabled for all routes</li>
		</ul>
	</section>

	<nav>
		<a href="{base}/">← Back to Home</a>
	</nav>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	section {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #f5f5f5;
		border-radius: 8px;
	}

	h1 {
		color: #ff3e00;
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
		margin-top: 2rem;
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
</style>
