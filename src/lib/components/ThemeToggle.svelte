<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		theme.init();
		mounted = true;
	});
</script>

{#if mounted}
	<button
		onclick={() => theme.toggle()}
		class="theme-toggle glass-card rounded-xl p-2.5 transition-all hover:scale-105"
		aria-label="Toggle theme"
	>
		{#if $theme === 'dark'}
			<span class="material-symbols-outlined text-xl text-theme-primary">light_mode</span>
		{:else}
			<span class="material-symbols-outlined text-xl text-theme-primary">dark_mode</span>
		{/if}
	</button>
{:else}
	<div class="glass-card rounded-xl p-2.5 w-10 h-10"></div>
{/if}

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border: none;
	}

	:global(:root.dark) .theme-toggle:hover {
		border-color: rgba(0, 230, 210, 0.3);
		background: rgba(255, 255, 255, 0.05);
	}

	:global(:root.light) .theme-toggle:hover {
		border-color: rgba(79, 157, 156, 0.3);
		background: rgba(255, 255, 255, 0.9);
	}
</style>
