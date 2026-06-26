<script lang="ts">
	import type { CardDefinition } from '$lib/cards/types';

	interface Props {
		card: CardDefinition;
		name: string;
		// Opcjonalny handler — rodzic decyduje co się dzieje po kliknięciu.
		// Gdybyśmy logikę usuwania wsadzili tutaj, DeckRow wiedziałby za dużo.
		onclick?: () => void;
	}

	let { card, name, onclick }: Props = $props();

	const imageSrc = $derived(`/resources/cards/${card.imagePath}`);
	const displayName = $derived(name.length > 20 ? name.slice(0, 20).trimEnd() + '…' : name);
</script>

<div
	class="deck-row"
	style="background-image: url('{imageSrc}'); background-position: center {-(70 - (card.imageOffset ?? 0))}px"
	role="button"
	tabindex="0"
	{onclick}
	onkeydown={(e) => e.key === 'Enter' && onclick?.()}
>
	{#if card.power !== null}
		<span class="deck-row__power">{card.power}</span>
	{/if}
	<span class="deck-row__name">{displayName}</span>
</div>

<style>
	.deck-row {
		display: flex;
		align-items: stretch;
		height: 36px;
		width: 100%;
		max-width: 280px;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		background-size: cover;
		border: 1px solid rgba(188, 145, 75, 1);
		transition: border-color 0.15s ease, filter 0.15s ease;
	}

	.deck-row:hover {
		border-color: rgba(214, 173, 97, 0.75);
		filter: brightness(1.1);
	}

	.deck-row__power {
		flex: 0 0 32px;
		width: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Gwent ExtraBold', Georgia, serif;
		font-size: 1rem;
		font-weight: 900;
		color: #fff;
		background: rgba(10, 7, 4, 0.82);
		border-right: 1px solid rgba(188, 145, 75, 1);
		text-shadow:
			0 1px 2px rgba(0, 0, 0, 0.9),
			0 0 6px rgba(0, 0, 0, 0.6);
	}

	.deck-row__name {
		flex: 1 1 auto;
		min-width: 0;

		display: flex;
		align-items: center;
		padding: 0 8px;

		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: #ffffff;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		background: linear-gradient(to right, rgba(8, 5, 2, 0.85) 0%, rgba(8, 5, 2, 0.0) 50%);

		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.95);
	}
</style>
