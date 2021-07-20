<script lang="ts">
	import Calculadora from "./components/Calculadora.svelte";

	let numero = 42
</script>

<main>
	{#if numero === 42}
		<Calculadora />
	{:else}
		<h1>Falso</h1>
	{/if}
</main>

<style>
	:global(body) {
		background-color: black;
	}

	:root {
		--cor-fundo: #555;
	}

	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
</style>
