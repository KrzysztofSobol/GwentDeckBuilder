<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import DeckList from '$lib/components/DeckList.svelte';
	import { allCards } from '$lib/cards/allCards';
	import { getCardText } from '$lib/cards/text';
	import type { CardDefinition, CardLanguage, CardText, Faction } from '$lib/cards/types';

	const language: CardLanguage = 'en';

	const FACTIONS: Faction[] = ['MO', 'NIL', 'NOR', 'SC', 'SK'];

	const expandedAllCards: CardDefinition[] = allCards.flatMap((card) => {
		if (card.faction !== null) return [card];
		return FACTIONS.map((f) => ({ ...card, id: `${card.id}__${f}`, faction: f }));
	});

	const getBaseId = (id: string) => id.includes('__') ? id.split('__')[0] : id;

	// there can only be 1 leader in the deck, its a bit of seperate thing
	let deckLeader = $state<CardDefinition | null>(null);
	let deckCards = $state<CardDefinition[]>([]);

	const addToDeck = (card: CardDefinition) => {
		if (card.type === 'leader') {
			deckLeader = card;
		} else {
			deckCards.push(card);
		}
	};

	const removeFromDeck = (card: CardDefinition) => {
		const index = deckCards.findIndex((c) => c.id === card.id);
		if (index !== -1) deckCards.splice(index, 1);
	};

	const removeLeader = () => {
		deckLeader = null;
	};

	const onRemoveCard = removeFromDeck;
	const onRemoveLeader = removeLeader;

	const isSpecial = (card: CardDefinition) => card.id.startsWith('spc_');
	const isUnit = (card: CardDefinition) => !isSpecial(card) && card.type !== 'leader';

	const deckCardIds = $derived(
		new Set([...deckCards.map((c) => c.id), ...(deckLeader ? [deckLeader.id] : [])])
	);

	const deckStats = $derived({
		units: deckCards.filter(isUnit).length,
		special: deckCards.filter(isSpecial).length,
		totalPower: deckCards.reduce((sum, c) => sum + (c.power ?? 0), 0)
	});

	const sortedDeckEntries = $derived(
		[...deckCards]
			.sort((a, b) => {
				if (a.power === null && b.power === null) return 0;
				if (a.power === null) return 1;
				if (b.power === null) return -1;
				return b.power - a.power;
			})
			.map((card) => ({ card, name: getDisplayText(getBaseId(card.id)).title }))
	);

	const leaderEntry = $derived(
		deckLeader ? { card: deckLeader, name: getDisplayText(deckLeader.id).title } : null
	);

	type SortMode = 'original' | 'ascending' | 'descending';
	type FactionFilter = 'all' | 'MO' | 'NIL' | 'NOR' | 'SC' | 'SK';
	type TypeFilter = 'all' | 'unit' | 'special' | 'hero' | 'leader';

	let searchTerm = $state('');
	let sortMode = $state<SortMode>('original');
	let factionFilter = $state<FactionFilter>('all');
	let typeFilter = $state<TypeFilter>('all');

	const factionFilterOptions: { value: FactionFilter; label: string }[] = [
		{ value: 'all', label: 'All' },
		{ value: 'MO', label: 'Monsters' },
		{ value: 'NIL', label: 'Nilfgaard' },
		{ value: 'NOR', label: 'Northern Realms' },
		{ value: 'SC', label: "Scoia'tael" },
		{ value: 'SK', label: 'Skellige' }
	];

	const typeFilterOptions: { value: TypeFilter; label: string }[] = [
		{ value: 'all', label: 'All' },
		{ value: 'unit', label: 'Unit' },
		{ value: 'special', label: 'Special' },
		{ value: 'hero', label: 'Hero' },
		{ value: 'leader', label: 'Leader' }
	];

	const sortLabels: Record<SortMode, string> = {
		original: 'Random',
		ascending: 'Ascending',
		descending: 'Descending'
	};

	const sortModes: SortMode[] = ['original', 'ascending', 'descending'];

	const cycleSortMode = () => {
		const currentSortIndex = sortModes.indexOf(sortMode);
		sortMode = sortModes[(currentSortIndex + 1) % sortModes.length];
	};

	const getTitleFromId = (cardId: string) =>
		cardId
			.replace(/^(mo|nil|nor|sco|ske|neu|spc)_/, '')
			.replace(/_/g, ' ')
			.replace(/\b\w/g, (letter) => letter.toUpperCase());

	const getSafeCardText = (cardId: string, cardLanguage: CardLanguage) => {
		try {
			return getCardText(cardId, cardLanguage);
		} catch {
			return null;
		}
	};

	const getDisplayText = (cardId: string): CardText => {
		const primaryText = getSafeCardText(cardId, language) ?? {
			title: '',
			subtitle: '',
			abilityDescription: '',
			quote: ''
		};

		if (primaryText.title.trim()) {
			return primaryText;
		}

		const fallbackText = getSafeCardText(cardId, 'pl');

		if (fallbackText?.title.trim()) {
			return {
				title: fallbackText.title,
				subtitle: primaryText.subtitle || fallbackText.subtitle,
				abilityDescription: primaryText.abilityDescription || fallbackText.abilityDescription,
				quote: primaryText.quote || fallbackText.quote
			};
		}

		return {
			...primaryText,
			title: getTitleFromId(cardId)
		};
	};

	const cardItems = $derived(
		expandedAllCards.map((card, index) => ({
			card,
			index,
			text: getDisplayText(getBaseId(card.id))
		}))
	);

	const normalizedSearchTerm = $derived(searchTerm.trim().toLowerCase());
	const filteredCards = $derived(
		cardItems.filter(({ card, text }) => {
			if (!text.title.toLowerCase().includes(normalizedSearchTerm)) return false;
			if (factionFilter !== 'all' && card.faction !== factionFilter) return false;
			if (typeFilter === 'unit' && (isSpecial(card) || card.type === 'leader' || card.type === 'hero')) return false;
			if (typeFilter === 'hero' && card.type !== 'hero') return false;
			if (typeFilter === 'special' && !isSpecial(card)) return false;
			if (typeFilter === 'leader' && card.type !== 'leader') return false;
			return true;
		})
	);
	const displayedCards = $derived(
		sortMode === 'original'
			? filteredCards
			: [...filteredCards].sort((firstCard, secondCard) => {
					const direction = sortMode === 'ascending' ? 1 : -1;
					const firstPower = firstCard.card.power;
					const secondPower = secondCard.card.power;

					if (firstPower === null && secondPower !== null) {
						return 1;
					}

					if (firstPower !== null && secondPower === null) {
						return -1;
					}

					if (firstPower !== null && secondPower !== null && firstPower !== secondPower) {
						return (firstPower - secondPower) * direction;
					}

					return firstCard.index - secondCard.index;
				})
	);
</script>

<svelte:head>
	<title>Deck Builder</title>
</svelte:head>

<main class="deckbuilder-page">
	<h1 class="sr-only">Deck Builder</h1>

	<aside class="deck-column" aria-label="Deck view">
		<header class="deck-header">
			<div class="deck-stat" title="Units">
				<span class="deck-stat__value">{deckStats.units}</span>
				<span class="deck-stat__label">Units</span>
			</div>
			<span class="deck-stat-divider" aria-hidden="true">|</span>
			<div class="deck-stat" title="Special cards">
				<span class="deck-stat__value">{deckStats.special}</span>
				<span class="deck-stat__label">Special</span>
			</div>
			<span class="deck-stat-divider" aria-hidden="true">|</span>
			<div class="deck-stat" title="Total power">
				<span class="deck-stat__value">{deckStats.totalPower}</span>
				<span class="deck-stat__label">Power</span>
			</div>
		</header>

		<DeckList
			entries={sortedDeckEntries}
			leader={leaderEntry}
			{onRemoveCard}
			{onRemoveLeader}
		/>
	</aside>

	<section class="cards-column" aria-label="Cards">
		<div class="search-bar">
			<label for="card-name-search">Cards</label>
			<button class="sort-button" type="button" onclick={cycleSortMode}>
				Sort: {sortLabels[sortMode]}
			</button>
			<input
				id="card-name-search"
				type="search"
				bind:value={searchTerm}
				placeholder="Search card name"
				autocomplete="off"
			/>
		</div>

		<div class="card-grid" aria-live="polite">
			{#each displayedCards as item (item.card.id)}
				<Card
					card={item.card}
					text={item.text}
					inDeck={deckCardIds.has(item.card.id)}
					onclick={() => addToDeck(item.card)}
				/>
			{/each}
		</div>
	</section>

	<aside class="filters-column" aria-label="Card filters">
		<h2>Filters</h2>

		<div class="filter-section">
			<h3 class="filter-section__title">Faction</h3>
			<div class="filter-btn-group">
				{#each factionFilterOptions as option}
					<button
						class="filter-btn"
						class:filter-btn--active={factionFilter === option.value}
						type="button"
						onclick={() => (factionFilter = option.value)}
					>
						{option.label}
					</button>
				{/each}
			</div>
		</div>

		<div class="filter-section">
			<h3 class="filter-section__title">Type</h3>
			<div class="filter-btn-group">
				{#each typeFilterOptions as option}
					<button
						class="filter-btn"
						class:filter-btn--active={typeFilter === option.value}
						type="button"
						onclick={() => (typeFilter = option.value)}
					>
						{option.label}
					</button>
				{/each}
			</div>
		</div>
	</aside>
</main>

<style>
	:global(body) {
		margin: 0;
		overflow: hidden;
		background:
			radial-gradient(circle at 50% 0%, rgba(145, 112, 61, 0.2), transparent 35%),
			linear-gradient(135deg, #15110b 0%, #24180e 45%, #11100d 100%);
		color: #ead8ab;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(img) {
		user-select: none;
		-webkit-user-drag: none;
	}

	.deckbuilder-page {
		--deck-column-width: clamp(240px, 20vw, 320px);
		--filters-column-width: clamp(200px, 16vw, 280px);

		display: grid;
		grid-template-columns: var(--deck-column-width) minmax(0, 1fr) var(--filters-column-width);
		grid-template-rows: minmax(0, 1fr);
		gap: 16px;
		height: 100vh;
		min-width: 980px;
		padding: 16px;
		overflow: hidden;
		font-family: 'Cinzel Card Title', Georgia, serif;
	}

	.deck-column,
	.cards-column,
	.filters-column {
		min-height: 0;
		border: 1px solid rgba(188, 145, 75, 0.42);
		border-radius: 6px;
		background: rgba(15, 12, 8, 0.72);
		box-shadow: inset 0 0 0 1px rgba(255, 234, 176, 0.05);
	}

	.deck-column {
		display: flex;
		flex-direction: column;
		padding: 16px;
		overflow: hidden;
	}

	.filters-column {
		padding: 16px;
		overflow: auto;
	}

	h2 {
		margin: 0 0 16px;
		color: #dcc492;
		font-size: 0.82rem;
		line-height: 1;
		text-transform: uppercase;
	}

	.filter-section {
		margin-bottom: 20px;
	}

	.filter-section__title {
		margin: 0 0 8px;
		color: rgba(220, 196, 146, 0.55);
		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.filter-btn-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.filter-btn {
		width: 100%;
		padding: 6px 10px;
		border: 1px solid rgba(188, 145, 75, 0.35);
		border-radius: 4px;
		background: transparent;
		color: rgba(220, 196, 146, 0.65);
		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.72rem;
		font-weight: 700;
		text-align: left;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition:
			border-color 0.15s ease,
			background 0.15s ease,
			color 0.15s ease;
	}

	.filter-btn:hover {
		border-color: rgba(214, 173, 97, 0.65);
		background: rgba(188, 145, 75, 0.1);
		color: #f1ddb1;
	}

	.filter-btn--active {
		border-color: rgba(214, 173, 97, 0.85);
		background: rgba(188, 145, 75, 0.18);
		color: #f1ddb1;
	}

	.filter-btn:focus-visible {
		outline: none;
		border-color: #d6ad61;
		box-shadow: 0 0 0 2px rgba(214, 173, 97, 0.22);
	}

	.deck-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 4px;
		margin-bottom: 12px;
		padding-bottom: 10px;
		border-bottom: 1px solid rgba(188, 145, 75, 0.25);
	}

	.deck-stat {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2px;
		flex: 1;
	}

	.deck-stat__value {
		font-family: 'Gwent ExtraBold', Georgia, serif;
		font-size: 1.5rem;
		line-height: 1;
		color: #f1ddb1;
	}

	.deck-stat__label {
		font-family: 'Cinzel Card Title', Georgia, serif;
		font-size: 0.70rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: rgba(220, 196, 146, 0.5);
	}

	.deck-stat-divider {
		color: rgba(188, 145, 75, 0.35);
		font-size: 0.9rem;
		align-self: center;
	}


	.cards-column {
		display: flex;
		flex-direction: column;
		min-width: 0;
		overflow: hidden;
		border-color: rgba(214, 173, 97, 0.58);
		background:
			linear-gradient(180deg, rgba(64, 47, 27, 0.72), rgba(34, 25, 16, 0.82)),
			rgba(32, 24, 15, 0.86);
		box-shadow:
			inset 0 0 0 1px rgba(255, 234, 176, 0.08),
			0 12px 32px rgba(0, 0, 0, 0.22);
	}

	.search-bar {
		display: grid;
		grid-template-columns: auto 148px minmax(180px, 360px);
		align-items: center;
		gap: 10px;
		padding: 14px 16px;
		border-bottom: 1px solid rgba(188, 145, 75, 0.32);
		background: rgba(30, 22, 14, 0.72);
	}

	.search-bar label {
		color: #dcc492;
		font-size: 0.72rem;
		line-height: 1;
		text-transform: uppercase;
	}

	.sort-button {
		width: 148px;
		height: 36px;
		border: 1px solid rgba(188, 145, 75, 0.58);
		border-radius: 4px;
		background: linear-gradient(180deg, rgba(88, 61, 31, 0.92), rgba(45, 30, 17, 0.95)), #33200f;
		color: #e5c785;
		font:
			700 0.72rem/1 'Cinzel Card Title',
			Georgia,
			serif;
		text-transform: uppercase;
		cursor: pointer;
	}

	.sort-button:hover {
		border-color: rgba(230, 195, 122, 0.82);
		background: linear-gradient(180deg, rgba(106, 74, 38, 0.96), rgba(55, 36, 19, 0.98)), #412813;
		color: #f1ddb1;
	}

	.sort-button:focus-visible {
		outline: none;
		border-color: #d6ad61;
		box-shadow: 0 0 0 2px rgba(214, 173, 97, 0.22);
	}

	.search-bar input {
		width: 100%;
		min-width: 0;
		height: 36px;
		border: 1px solid rgba(188, 145, 75, 0.54);
		border-radius: 4px;
		background: rgba(12, 10, 7, 0.9);
		color: #f1ddb1;
		padding: 0 12px;
		font:
			700 0.88rem/1 'Cinzel Card Title',
			Georgia,
			serif;
		outline: none;
	}

	.search-bar input:focus {
		border-color: #d6ad61;
		box-shadow: 0 0 0 2px rgba(214, 173, 97, 0.22);
	}

	.search-bar input::placeholder {
		color: rgba(220, 196, 146, 0.48);
	}

	.search-bar input::-webkit-search-cancel-button {
		filter: invert(1) sepia(1) saturate(5) hue-rotate(310deg);
		cursor: pointer;
	}

	.card-grid {
		flex: 1 1 auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, 150px);
		grid-auto-rows: 245px;
		align-content: start;
		align-items: start;
		justify-content: center;
		gap: 24px 20px;
		min-height: 0;
		padding: 24px;
		overflow-x: hidden;
		overflow-y: auto;
		scrollbar-gutter: stable both-edges;
		scrollbar-color: #3a2818 #6f542d;
		scrollbar-width: thin;
	}

	.card-grid::-webkit-scrollbar {
		width: 14px;
	}

	.card-grid::-webkit-scrollbar-track {
		border: 1px solid rgba(214, 173, 97, 0.5);
		border-radius: 6px;
		background: #6f542d;
	}

	.card-grid::-webkit-scrollbar-thumb {
		border: 2px solid rgba(230, 195, 122, 0.78);
		border-radius: 6px;
		background: #3a2818;
	}

	.card-grid::-webkit-scrollbar-thumb:hover {
		background: #4a321d;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	@media (max-width: 1100px) {
		.deckbuilder-page {
			--deck-column-width: 230px;
			--filters-column-width: 190px;
			gap: 12px;
			padding: 12px;
		}

		.card-grid {
			padding: 20px;
		}
	}

	@media (max-width: 980px) {
		.deckbuilder-page {
			grid-template-columns: 190px minmax(420px, 1fr) 170px;
			width: 100vw;
			min-width: 0;
			overflow-x: auto;
		}
	}
</style>
