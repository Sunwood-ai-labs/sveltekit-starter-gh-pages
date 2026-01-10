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
		padding: 1.5rem;
		background: white;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	h3 {
		margin-top: 0;
		color: #333;
	}

	.display {
		text-align: center;
		margin: 2rem 0;
	}

	.count {
		font-size: 3rem;
		font-weight: bold;
		color: #ff3e00;
	}

	.buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1.2rem;
		background: #ff3e00;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s;
	}

	button:hover {
		background: #cc3200;
		transform: scale(1.05);
	}

	button:active {
		transform: scale(0.95);
	}
</style>
