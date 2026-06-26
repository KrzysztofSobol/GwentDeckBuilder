<script lang="ts">
	import DeckRow from './DeckRow.svelte';
	import type { CardDefinition } from '$lib/cards/types';

	// Karta z już rozwiązaną nazwą — page.svelte zna getDisplayText, komponent nie musi
	export interface DeckEntry {
		card: CardDefinition;
		name: string;
	}

	interface Props {
		entries: DeckEntry[];
		leader: DeckEntry | null;
		onRemoveCard: (card: CardDefinition) => void;
		onRemoveLeader: () => void;
	}

	let { entries, leader, onRemoveCard, onRemoveLeader }: Props = $props();
</script>

<div class="deck-list-root">
	<!-- Leader slot — zawsze widoczny, nie scrolluje się razem z listą -->
	<div class="leader-slot" class:leader-slot--filled={leader !== null}>
		{#if leader}
			<DeckRow card={leader.card} name={leader.name} onclick={onRemoveLeader} />
		{:else}
			<div class="leader-slot__empty">
				<span class="leader-slot__label">Leader</span>
			</div>
		{/if}
	</div>

	<!-- Scrollowalna lista kart -->
	<ul class="deck-list">
		{#each entries as entry (entry.card.id)}
			<li>
				<DeckRow card={entry.card} name={entry.name} onclick={() => onRemoveCard(entry.card)} />
			</li>
		{/each}

		{#if entries.length === 0}
			<li class="deck-empty">No cards yet</li>
		{/if}
	</ul>
</div>

<style>
	.deck-list-root {
		/* Wypełnia resztę .deck-column pod headerem ze statystykami */
		flex: 1 1 auto;
		min-height: 0;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	/* ── Leader slot ── */

	.leader-slot {
		flex: 0 0 auto;
		padding: 8px 0;
		margin-bottom: 8px;
		border-bottom: 1px solid rgba(188, 145, 75, 0.25);
	}

	.leader-slot--filled :global(.deck-row) {
		/* Złoty border gdy leader jest wybrany */
		border-color: rgba(214, 173, 97, 0.9);
		box-shadow:
			0 0 6px rgba(214, 173, 97, 0.25),
			inset 0 0 0 1px rgba(255, 220, 120, 0.12);
	}

	.leader-slot__empty {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 36px;
		border-radius: 4px;
		border: 1px dashed rgba(214, 173, 97, 0.45);
		cursor: default;
		max-width: 280px;
	}

	.leader-slot__label {
		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.6rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(214, 173, 97, 0.4);
	}

	/* ── Card list ── */

	.deck-list {
		list-style: none;
		margin: 0;
		padding: 0;
		padding-right: 4px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		flex: 1 1 auto;
		min-height: 0;
		overflow-x: hidden;
		overflow-y: auto;
		scrollbar-gutter: stable;
		scrollbar-color: #3a2818 #6f542d;
		scrollbar-width: thin;
	}

	.deck-list::-webkit-scrollbar {
		width: 14px;
	}

	.deck-list::-webkit-scrollbar-track {
		border: 1px solid rgba(214, 173, 97, 0.5);
		border-radius: 6px;
		background: #6f542d;
	}

	.deck-list::-webkit-scrollbar-thumb {
		border: 2px solid rgba(230, 195, 122, 0.78);
		border-radius: 6px;
		background: #3a2818;
	}

	.deck-list::-webkit-scrollbar-thumb:hover {
		background: #4a321d;
	}

	.deck-list li {
		display: flex;
	}

	.deck-empty {
		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.65rem;
		color: rgba(220, 196, 146, 0.35);
		text-align: center;
		padding: 16px 0;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		justify-content: center;
	}
</style>
