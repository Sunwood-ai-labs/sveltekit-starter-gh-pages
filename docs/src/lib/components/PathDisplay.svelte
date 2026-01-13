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
		padding: 0;
		background: transparent;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 1.5rem;
		font-size: 1rem;
		font-weight: 600;
		text-align: center;
	}

	:global(:root.dark) h3 {
		color: white;
	}

	:global(:root.light) h3 {
		color: #1E293B;
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
		font-size: 0.9rem;
		font-weight: 500;
	}

	:global(:root.dark) strong {
		color: rgba(255, 255, 255, 0.6);
	}

	:global(:root.light) strong {
		color: rgba(30, 41, 59, 0.6);
	}

	code {
		padding: 0.5rem;
		border-radius: 4px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 0.85rem;
		word-break: break-all;
	}

	:global(:root.dark) code {
		background: rgba(255, 255, 255, 0.05);
		color: rgba(255, 255, 255, 0.7);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(:root.light) code {
		background: rgba(0, 0, 0, 0.03);
		color: rgba(30, 41, 59, 0.8);
		border: 1px solid rgba(0, 0, 0, 0.08);
	}

	.url {
		font-size: 0.75rem;
	}

	.status {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
	}

	:global(:root.dark) .status {
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(:root.light) .status {
		border-top: 1px solid rgba(0, 0, 0, 0.08);
	}

	.badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		font-weight: 500;
		font-size: 0.85rem;
	}

	:global(:root.dark) .success {
		background: rgba(0, 230, 210, 0.1);
		color: #00e6d2;
		border: 1px solid rgba(0, 230, 210, 0.3);
	}

	:global(:root.light) .success {
		background: rgba(79, 157, 156, 0.1);
		color: #4F9D9C;
		border: 1px solid rgba(79, 157, 156, 0.3);
	}

	:global(:root.dark) .info {
		background: rgba(194, 0, 229, 0.1);
		color: #C200E5;
		border: 1px solid rgba(194, 0, 229, 0.3);
	}

	:global(:root.light) .info {
		background: rgba(167, 139, 250, 0.1);
		color: #A78BFA;
		border: 1px solid rgba(167, 139, 250, 0.3);
	}
</style>
