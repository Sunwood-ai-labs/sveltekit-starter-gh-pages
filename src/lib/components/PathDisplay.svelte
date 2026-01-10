<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;
	$: fullUrl = $page.url.href;
</script>

<div class="path-display">
	<h3>Path Configuration Status</h3>

	<div class="info-grid">
		<div class="info-item">
			<strong>Base Path:</strong>
			<code>{base || '/'}</code>
		</div>

		<div class="info-item">
			<strong>Current Path:</strong>
			<code>{currentPath}</code>
		</div>

		<div class="info-item">
			<strong>Full URL:</strong>
			<code class="url">{fullUrl}</code>
		</div>

		<div class="info-item">
			<strong>Environment:</strong>
			<code>{import.meta.env.MODE}</code>
		</div>
	</div>

	<div class="status">
		{#if base}
			<span class="badge success">✓ Base path configured (Production mode)</span>
		{:else}
			<span class="badge info">Development mode (no base path)</span>
		{/if}
	</div>
</div>

<style>
	.path-display {
		padding: 1.5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	h3 {
		margin-top: 0;
		color: #333;
	}

	.info-grid {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin: 1rem 0;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	strong {
		color: #666;
		font-size: 0.9rem;
	}

	code {
		background: #f0f0f0;
		padding: 0.5rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		word-break: break-all;
	}

	.url {
		font-size: 0.8rem;
	}

	.status {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid #e0e0e0;
	}

	.badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		font-weight: 500;
	}

	.success {
		background: #d4edda;
		color: #155724;
	}

	.info {
		background: #d1ecf1;
		color: #0c5460;
	}
</style>
