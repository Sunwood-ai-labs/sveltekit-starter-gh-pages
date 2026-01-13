<script lang="ts">
	interface Props {
		onComplexityChange?: (value: number) => void;
		onAttractionChange?: (value: number) => void;
		onCollisionMeshChange?: (value: boolean) => void;
		onBloomEffectChange?: (value: boolean) => void;
	}

	let {
		onComplexityChange,
		onAttractionChange,
		onCollisionMeshChange,
		onBloomEffectChange
	}: Props = $props();

	let complexity = $state(85);
	let attraction = $state(42);
	let collisionMesh = $state(true);
	let bloomEffect = $state(false);

	// Notify parent when values change
	$effect(() => {
		onComplexityChange?.(complexity);
	});

	$effect(() => {
		onAttractionChange?.(attraction);
	});

	$effect(() => {
		onCollisionMeshChange?.(collisionMesh);
	});

	$effect(() => {
		onBloomEffectChange?.(bloomEffect);
	});

	function formatComplexity(value: number): string {
		return `${value}`;
	}

	function formatAttraction(value: number): string {
		return `${value}%`;
	}
</script>

<div class="glass-card rounded-2xl p-6 border-theme-subtle relative overflow-hidden group">
	<div class="absolute top-0 right-0 p-2 opacity-20 text-theme-subtle">
		<span class="material-symbols-outlined text-4xl">tune</span>
	</div>
	<h3 class="text-sm font-bold uppercase tracking-widest text-theme-primary mb-6 flex items-center gap-2">
		Engine Dashboard
	</h3>
	<div class="space-y-8">
		<!-- Complexity Slider (Particle Count) -->
		<div class="space-y-3">
			<div class="flex justify-between items-center">
				<span class="text-xs font-medium text-theme-muted uppercase">Particle Count</span>
				<span class="text-xs font-mono text-theme-primary bg-theme-primary/10 px-2 py-0.5 rounded">
					{formatComplexity(complexity)}
				</span>
			</div>
			<div class="relative">
				<input
					type="range"
					min="10"
					max="200"
					bind:value={complexity}
					class="slider-primary w-full"
				/>
			</div>
			<div class="flex justify-between text-[9px] text-theme-subtle px-1">
				<span>10</span>
				<span>200</span>
			</div>
		</div>

		<!-- Attraction Slider (Connection Distance) -->
		<div class="space-y-3">
			<div class="flex justify-between items-center">
				<span class="text-xs font-medium text-theme-muted uppercase">Connection Range</span>
				<span class="text-xs font-mono text-theme-secondary bg-theme-secondary/10 px-2 py-0.5 rounded">
					{formatAttraction(attraction)}
				</span>
			</div>
			<div class="relative">
				<input
					type="range"
					min="0"
					max="100"
					bind:value={attraction}
					class="slider-secondary w-full"
				/>
			</div>
			<div class="flex justify-between text-[9px] text-theme-subtle px-1">
				<span>Min</span>
				<span>Max</span>
			</div>
		</div>

		<!-- Toggles -->
		<div class="pt-4 space-y-3">
			<div class="flex items-center justify-between">
				<span class="text-xs text-theme-muted font-medium uppercase">Collision Mesh</span>
				<button
					onclick={() => collisionMesh = !collisionMesh}
					class="toggle-switch {collisionMesh ? 'active-primary' : ''}"
					aria-label="Toggle Collision Mesh"
				>
					<div class="toggle-thumb"></div>
				</button>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-xs text-theme-muted font-medium uppercase">Bloom Effect</span>
				<button
					onclick={() => bloomEffect = !bloomEffect}
					class="toggle-switch {bloomEffect ? 'active-secondary' : ''}"
					aria-label="Toggle Bloom Effect"
				>
					<div class="toggle-thumb"></div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	/* Range Slider Styling */
	input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		height: 4px;
		border-radius: 2px;
		outline: none;
		cursor: pointer;
	}

	/* Dark mode slider */
	:global(:root.dark) .slider-primary {
		background: linear-gradient(
			to right,
			rgba(0, 230, 210, 0.3) 0%,
			rgba(0, 230, 210, 0.3) var(--value, 85%),
			rgba(255, 255, 255, 0.05) var(--value, 85%),
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	:global(:root.dark) .slider-secondary {
		background: linear-gradient(
			to right,
			rgba(194, 0, 229, 0.3) 0%,
			rgba(194, 0, 229, 0.3) var(--value, 42%),
			rgba(255, 255, 255, 0.05) var(--value, 42%),
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	/* Light mode slider */
	:global(:root.light) .slider-primary {
		background: linear-gradient(
			to right,
			rgba(79, 157, 156, 0.4) 0%,
			rgba(79, 157, 156, 0.4) var(--value, 85%),
			rgba(0, 0, 0, 0.08) var(--value, 85%),
			rgba(0, 0, 0, 0.08) 100%
		);
	}

	:global(:root.light) .slider-secondary {
		background: linear-gradient(
			to right,
			rgba(167, 139, 250, 0.4) 0%,
			rgba(167, 139, 250, 0.4) var(--value, 42%),
			rgba(0, 0, 0, 0.08) var(--value, 42%),
			rgba(0, 0, 0, 0.08) 100%
		);
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid;
		transition: all 0.2s;
	}

	input[type='range']::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid;
		transition: all 0.2s;
	}

	:global(:root.dark) input[type='range']::-webkit-slider-thumb {
		background: #06090f;
	}

	:global(:root.dark) input[type='range']::-moz-range-thumb {
		background: #06090f;
	}

	:global(:root.light) input[type='range']::-webkit-slider-thumb {
		background: white;
	}

	:global(:root.light) input[type='range']::-moz-range-thumb {
		background: white;
	}

	:global(:root.dark) .slider-primary::-webkit-slider-thumb {
		border-color: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.5);
	}

	:global(:root.dark) .slider-primary::-moz-range-thumb {
		border-color: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.5);
	}

	:global(:root.light) .slider-primary::-webkit-slider-thumb {
		border-color: #4F9D9C;
		box-shadow: 0 2px 6px rgba(79, 157, 156, 0.3);
	}

	:global(:root.light) .slider-primary::-moz-range-thumb {
		border-color: #4F9D9C;
		box-shadow: 0 2px 6px rgba(79, 157, 156, 0.3);
	}

	:global(:root.dark) .slider-secondary::-webkit-slider-thumb {
		border-color: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.5);
	}

	:global(:root.dark) .slider-secondary::-moz-range-thumb {
		border-color: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.5);
	}

	:global(:root.light) .slider-secondary::-webkit-slider-thumb {
		border-color: #A78BFA;
		box-shadow: 0 2px 6px rgba(167, 139, 250, 0.3);
	}

	:global(:root.light) .slider-secondary::-moz-range-thumb {
		border-color: #A78BFA;
		box-shadow: 0 2px 6px rgba(167, 139, 250, 0.3);
	}

	input[type='range']:hover::-webkit-slider-thumb {
		transform: scale(1.2);
	}

	input[type='range']:hover::-moz-range-thumb {
		transform: scale(1.2);
	}

	/* Toggle Switch Styling */
	.toggle-switch {
		position: relative;
		width: 40px;
		height: 20px;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s;
	}

	:global(:root.dark) .toggle-switch {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	:global(:root.light) .toggle-switch {
		background: rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(0, 0, 0, 0.1);
	}

	.toggle-thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		transition: all 0.3s;
	}

	:global(:root.dark) .toggle-thumb {
		background: rgba(255, 255, 255, 0.2);
	}

	:global(:root.light) .toggle-thumb {
		background: rgba(0, 0, 0, 0.2);
	}

	:global(:root.dark) .toggle-switch.active-primary {
		background: rgba(0, 230, 210, 0.2);
		border-color: rgba(0, 230, 210, 0.3);
	}

	:global(:root.light) .toggle-switch.active-primary {
		background: rgba(79, 157, 156, 0.2);
		border-color: rgba(79, 157, 156, 0.3);
	}

	:global(:root.dark) .toggle-switch.active-primary .toggle-thumb {
		left: 22px;
		background: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.8);
	}

	:global(:root.light) .toggle-switch.active-primary .toggle-thumb {
		left: 22px;
		background: #4F9D9C;
		box-shadow: 0 2px 6px rgba(79, 157, 156, 0.4);
	}

	:global(:root.dark) .toggle-switch.active-secondary {
		background: rgba(194, 0, 229, 0.2);
		border-color: rgba(194, 0, 229, 0.3);
	}

	:global(:root.light) .toggle-switch.active-secondary {
		background: rgba(167, 139, 250, 0.2);
		border-color: rgba(167, 139, 250, 0.3);
	}

	:global(:root.dark) .toggle-switch.active-secondary .toggle-thumb {
		left: 22px;
		background: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.8);
	}

	:global(:root.light) .toggle-switch.active-secondary .toggle-thumb {
		left: 22px;
		background: #A78BFA;
		box-shadow: 0 2px 6px rgba(167, 139, 250, 0.4);
	}

	:global(:root.dark) .toggle-switch:hover {
		border-color: rgba(255, 255, 255, 0.2);
	}

	:global(:root.light) .toggle-switch:hover {
		border-color: rgba(0, 0, 0, 0.2);
	}
</style>
