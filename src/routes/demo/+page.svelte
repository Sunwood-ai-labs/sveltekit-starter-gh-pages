<script>
	import { base } from '$app/paths';
	import Counter from '$lib/components/Counter.svelte';
	import PathDisplay from '$lib/components/PathDisplay.svelte';
</script>

<svelte:head>
	<title>Demo - SvelteKit Starter</title>
</svelte:head>

<div class="container">
	<h1>Interactive Demo</h1>

	<section>
		<h2>Counter Component</h2>
		<p>A simple interactive component to demonstrate client-side reactivity:</p>
		<Counter />
	</section>

	<section>
		<h2>Path Configuration</h2>
		<p>This component displays the current base path configuration:</p>
		<PathDisplay />
	</section>

	<section>
		<h2>Navigation Test</h2>
		<p>Test that navigation works correctly with the base path:</p>
		<nav>
			<a href="{base}/">Home</a>
			<a href="{base}/about/">About</a>
			<a href="{base}/demo/">Demo (Current)</a>
		</nav>
	</section>

	<nav class="back-nav">
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

	h1 {
		color: #ff3e00;
	}

	section {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #f5f5f5;
		border-radius: 8px;
	}

	h2 {
		color: #333;
		margin-top: 0;
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

	.back-nav {
		margin-top: 3rem;
		padding-top: 2rem;
		border-top: 1px solid #ddd;
	}
</style>
