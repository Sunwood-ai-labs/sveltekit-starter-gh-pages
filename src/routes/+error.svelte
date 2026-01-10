<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>404 - Page Not Found</title>
</svelte:head>

<div class="container">
	<div class="error-content">
		<h1>404</h1>
		<h2>Page Not Found</h2>
		<p>Sorry, the page you're looking for doesn't exist.</p>

		<div class="details">
			<strong>Requested path:</strong>
			<code>{$page.url.pathname}</code>
		</div>

		<nav>
			<a href="{base}/">Go Home</a>
		</nav>
	</div>
</div>

<style>
	.container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		font-family: system-ui, -apple-system, sans-serif;
	}

	.error-content {
		text-align: center;
		max-width: 500px;
	}

	h1 {
		font-size: 6rem;
		color: #ff3e00;
		margin: 0;
	}

	h2 {
		font-size: 2rem;
		color: #333;
		margin: 1rem 0;
	}

	p {
		color: #666;
		font-size: 1.1rem;
	}

	.details {
		margin: 2rem 0;
		padding: 1rem;
		background: #f5f5f5;
		border-radius: 8px;
	}

	code {
		background: #e0e0e0;
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-family: 'Courier New', monospace;
	}

	nav {
		margin-top: 2rem;
	}

	nav a {
		display: inline-block;
		padding: 0.75rem 1.5rem;
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
