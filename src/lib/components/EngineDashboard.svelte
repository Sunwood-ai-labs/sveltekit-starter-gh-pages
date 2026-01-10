<script lang="ts">
	let complexity = $state(85);
	let attraction = $state(42);
	let collisionMesh = $state(true);
	let bloomEffect = $state(false);

	function formatComplexity(value: number): string {
		return `${(value / 10).toFixed(1)}k`;
	}

	function formatAttraction(value: number): string {
		return `${(value / 100).toFixed(2)}v`;
	}
</script>

<div class="glass-card rounded-2xl p-6 border-white/5 relative overflow-hidden group">
	<div class="absolute top-0 right-0 p-2 opacity-20">
		<span class="material-symbols-outlined text-4xl">tune</span>
	</div>
	<h3 class="text-sm font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
		Engine Dashboard
	</h3>
	<div class="space-y-8">
		<!-- Complexity Slider -->
		<div class="space-y-3">
			<div class="flex justify-between items-center">
				<span class="text-xs font-medium text-white/60 uppercase">Complexity</span>
				<span class="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
					{formatComplexity(complexity)}
				</span>
			</div>
			<div class="relative">
				<input
					type="range"
					min="10"
					max="100"
					bind:value={complexity}
					class="slider-primary w-full"
				/>
			</div>
		</div>

		<!-- Attraction Slider -->
		<div class="space-y-3">
			<div class="flex justify-between items-center">
				<span class="text-xs font-medium text-white/60 uppercase">Attraction</span>
				<span class="text-xs font-mono text-secondary bg-secondary/10 px-2 py-0.5 rounded">
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
		</div>

		<!-- Toggles -->
		<div class="pt-4 space-y-3">
			<div class="flex items-center justify-between">
				<span class="text-xs text-white/60 font-medium uppercase">Collision Mesh</span>
				<button
					onclick={() => collisionMesh = !collisionMesh}
					class="toggle-switch {collisionMesh ? 'active-primary' : ''}"
					aria-label="Toggle Collision Mesh"
				>
					<div class="toggle-thumb"></div>
				</button>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-xs text-white/60 font-medium uppercase">Bloom Effect</span>
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

	.slider-primary {
		background: linear-gradient(
			to right,
			rgba(0, 230, 210, 0.3) 0%,
			rgba(0, 230, 210, 0.3) var(--value, 85%),
			rgba(255, 255, 255, 0.05) var(--value, 85%),
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	.slider-secondary {
		background: linear-gradient(
			to right,
			rgba(194, 0, 229, 0.3) 0%,
			rgba(194, 0, 229, 0.3) var(--value, 42%),
			rgba(255, 255, 255, 0.05) var(--value, 42%),
			rgba(255, 255, 255, 0.05) 100%
		);
	}

	input[type='range']::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #06090f;
		cursor: pointer;
		border: 2px solid;
		transition: all 0.2s;
	}

	input[type='range']::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: #06090f;
		cursor: pointer;
		border: 2px solid;
		transition: all 0.2s;
	}

	.slider-primary::-webkit-slider-thumb {
		border-color: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.5);
	}

	.slider-primary::-moz-range-thumb {
		border-color: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.5);
	}

	.slider-secondary::-webkit-slider-thumb {
		border-color: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.5);
	}

	.slider-secondary::-moz-range-thumb {
		border-color: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.5);
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
		background: rgba(255, 255, 255, 0.05);
		border-radius: 10px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		cursor: pointer;
		transition: all 0.3s;
	}

	.toggle-thumb {
		position: absolute;
		top: 2px;
		left: 2px;
		width: 14px;
		height: 14px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		transition: all 0.3s;
	}

	.toggle-switch.active-primary {
		background: rgba(0, 230, 210, 0.2);
		border-color: rgba(0, 230, 210, 0.3);
	}

	.toggle-switch.active-primary .toggle-thumb {
		left: 22px;
		background: #00e6d2;
		box-shadow: 0 0 8px rgba(0, 230, 210, 0.8);
	}

	.toggle-switch.active-secondary {
		background: rgba(194, 0, 229, 0.2);
		border-color: rgba(194, 0, 229, 0.3);
	}

	.toggle-switch.active-secondary .toggle-thumb {
		left: 22px;
		background: #c200e5;
		box-shadow: 0 0 8px rgba(194, 0, 229, 0.8);
	}

	.toggle-switch:hover {
		border-color: rgba(255, 255, 255, 0.2);
	}
</style>
