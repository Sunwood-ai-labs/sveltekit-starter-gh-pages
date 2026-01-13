<script lang="ts">
	let count = 0;

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}

	function reset() {
		count = 0;
	}
</script>

<div class="counter">
	<h3>Interactive Counter</h3>
	<div class="display">
		<span class="count">{count}</span>
	</div>
	<div class="buttons">
		<button on:click={decrement}>-</button>
		<button on:click={reset}>Reset</button>
		<button on:click={increment}>+</button>
	</div>
</div>

<style>
	.counter {
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

	.display {
		text-align: center;
		margin: 2rem 0;
	}

	.count {
		font-size: 3rem;
		font-weight: bold;
	}

	:global(:root.dark) .count {
		color: #00e6d2;
		text-shadow: 0 0 20px rgba(0, 230, 210, 0.3);
	}

	:global(:root.light) .count {
		color: #4F9D9C;
		text-shadow: none;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1.2rem;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.2s;
		font-weight: 600;
	}

	:global(:root.dark) button {
		background: rgba(0, 230, 210, 0.1);
		color: #00e6d2;
		border: 1px solid rgba(0, 230, 210, 0.3);
	}

	:global(:root.dark) button:hover {
		background: rgba(0, 230, 210, 0.2);
		border-color: rgba(0, 230, 210, 0.5);
		transform: scale(1.05);
		box-shadow: 0 0 15px rgba(0, 230, 210, 0.3);
	}

	:global(:root.light) button {
		background: rgba(79, 157, 156, 0.1);
		color: #4F9D9C;
		border: 1px solid rgba(79, 157, 156, 0.3);
	}

	:global(:root.light) button:hover {
		background: rgba(79, 157, 156, 0.2);
		border-color: rgba(79, 157, 156, 0.5);
		transform: scale(1.05);
		box-shadow: 0 4px 12px rgba(79, 157, 156, 0.2);
	}

	button:active {
		transform: scale(0.95);
	}
</style>
