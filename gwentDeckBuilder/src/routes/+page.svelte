<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { getCardById } from '$lib/cards/registry';

	const cards = [getCardById('ml_toad')];
</script>

<main class="test-page">
	{#each cards as card (card.id)}
		<Card {card} />
	{/each}
</main>

<style>
	.test-page {
		min-height: 100vh;
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
</style>
