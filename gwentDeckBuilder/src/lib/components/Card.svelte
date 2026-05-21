<script lang="ts">
	import { abilities as abilitySymbols, rows as rowSymbols } from '$lib/cards/metadata';
	import type { CardDefinition } from '$lib/cards/types';

	const BASE_PATH = '/resources/cards/';
	const ELEMENTS_PATH = `${BASE_PATH}elements/`;

	type Faction = 'MO' | 'NIL' | 'NOR' | 'SC' | 'SK';
	type CardType = 'HERO' | 'STANDARD' | 'LEADER';

	interface Props {
		card?: CardDefinition;
		faction?: string;
		type?: string;
		name?: string;
		power?: number | null;
		imagePath?: string;
		description?: string;
	}

	let {
		card,
		faction = card?.faction ?? 'MO',
		type = card?.type ?? 'standard',
		name = card?.name ?? '',
		power = card?.power ?? null,
		imagePath = card?.imagePath ?? '',
		description = card?.description ?? ''
	}: Props = $props();

	const factions: Faction[] = ['MO', 'NIL', 'NOR', 'SC', 'SK'];
	const cardTypes: CardType[] = ['HERO', 'STANDARD', 'LEADER'];
	const goldFactions = new Set<Faction>(['NIL', 'SC']);

	const factionStripes: Record<Faction, string> = {
		MO: `${ELEMENTS_PATH}mo_stripe.png`,
		NIL: `${ELEMENTS_PATH}nil_stripe.png`,
		NOR: `${ELEMENTS_PATH}nor_stripe.png`,
		SC: `${ELEMENTS_PATH}sc_stripe.png`,
		SK: `${ELEMENTS_PATH}sk_stripe.png`
	};

	const premiumPowerNumbers: Record<Faction, string> = {
		MO: `${ELEMENTS_PATH}power_number_premium_MO.png`,
		NIL: `${ELEMENTS_PATH}power_number_premium_NIL.png`,
		NOR: `${ELEMENTS_PATH}power_number_premium_NOR.png`,
		SC: `${ELEMENTS_PATH}power_number_premium_SC.png`,
		SK: `${ELEMENTS_PATH}power_number_premium_SK.png`
	};

	const normalizeFaction = (value: string): Faction => {
		const factionKey = value.toUpperCase() as Faction;
		return factions.includes(factionKey) ? factionKey : 'MO';
	};

	const normalizeType = (value: string): CardType => {
		const typeKey = value.toUpperCase();
		if (typeKey === 'NORMAL' || typeKey === 'PREMIUM') {
			return 'STANDARD';
		}
		const normalizedTypeKey = typeKey as CardType;
		return cardTypes.includes(normalizedTypeKey) ? normalizedTypeKey : 'STANDARD';
	};

	const src = $derived(`${BASE_PATH}${imagePath}`);
	const displayedRows = $derived(card?.rows.slice(0, 2) ?? []);
	const ability = $derived(card?.abilities[0]);
	const abilitySymbol = $derived(ability ? abilitySymbols[ability] : undefined);
	const factionKey = $derived(normalizeFaction(faction));
	const typeKey = $derived(normalizeType(type));
	const isGoldFaction = $derived(goldFactions.has(factionKey));
	const cardTypeClass = $derived(typeKey.toLowerCase());
	const shouldShowPowerDetails = $derived(typeKey !== 'LEADER');
	const shouldShowPowerNumberBorder = $derived(typeKey === 'HERO' || typeKey === 'LEADER');
	const shouldShowPowerValue = $derived(power !== null);
	const powerNumberCircleSrc = $derived(
		typeKey === 'HERO' || typeKey === 'LEADER'
			? premiumPowerNumbers[factionKey]
			: isGoldFaction
				? `${ELEMENTS_PATH}power_number_gold.png`
				: `${ELEMENTS_PATH}power_number_silver.png`
	);
	const powerNumberBorderSrc = $derived(
		isGoldFaction
			? `${ELEMENTS_PATH}power_number_border_gold.png`
			: `${ELEMENTS_PATH}power_number_border_silver.png`
	);
	const powerNumberCircleClass = $derived(`power-number-circle power-number-circle-${cardTypeClass}`);
	const powerNumberValueClass = $derived(`power-number-value power-number-value-${cardTypeClass}`);
	const factionStripeSrc = $derived(factionStripes[factionKey]);
	const descriptionBackgroundSrc = $derived(
		typeKey === 'HERO'
			? `${ELEMENTS_PATH}desc_background_hero.png`
			: `${ELEMENTS_PATH}desc_background_normal.png`
	);
	const descriptionTopbarSrc = $derived(
		typeKey === 'HERO'
			? isGoldFaction
				? `${ELEMENTS_PATH}desc_background_top_bar_hero_gold.png`
				: `${ELEMENTS_PATH}desc_background_top_bar_hero_silver.png`
			: isGoldFaction
				? `${ELEMENTS_PATH}desc_background_top_ bar_gold.png`
				: `${ELEMENTS_PATH}desc_background_top_bar_silver.png`
	);
</script>

<div class="card-wrap">
	<div
		class="card"
		class:card-standard={typeKey === 'STANDARD'}
		class:card-hero={typeKey === 'HERO'}
		class:card-leader={typeKey === 'LEADER'}
	>
		<div class="card-image">
			<img {src} alt={name} />
		</div>

		<div
			class="card-description"
			class:card-description-standard={typeKey === 'STANDARD'}
			class:card-description-hero={typeKey === 'HERO'}
			class:card-description-leader={typeKey === 'LEADER'}
		>
			<img class="description-topbar" src={descriptionTopbarSrc} alt="" />

			<div class="description-background">
				<img class="description-background-image" src={descriptionBackgroundSrc} alt="" />

				<div class="description-text">
					<p class="description-name">{name}</p>
					<span class="description-divider" aria-hidden="true"></span>
					<p class="description-body">{description}</p>
				</div>
			</div>
		</div>
	</div>

	<div class="power-number">
		<img class={powerNumberCircleClass} src={powerNumberCircleSrc} alt="" />
		{#if shouldShowPowerValue}
			<span class={powerNumberValueClass}>{power}</span>
		{/if}
		{#if shouldShowPowerNumberBorder}
			<img class="power-number-border" src={powerNumberBorderSrc} alt="" />
		{/if}
		{#if shouldShowPowerDetails}
			<img class="faction-stripe" src={factionStripeSrc} alt="" />
			{#if displayedRows.length > 0}
				<div class="row-info-stack">
					{#each displayedRows as row (row)}
						<div class="row-info">
							<img
								class="row-info-background"
								src="/resources/cards/elements/additional_info_silver_1.png"
								alt=""
							/>
							<img
								class="row-info-icon"
								src={rowSymbols[row].symbolPath}
								alt={rowSymbols[row].label}
							/>
						</div>
					{/each}
				</div>
			{/if}
			{#if abilitySymbol}
				<div class="ability-info">
					<img
						class="ability-info-background"
						src="/resources/cards/elements/additional_info_silver_2.png"
						alt=""
					/>
					<img class="ability-info-icon" src={abilitySymbol.symbolPath} alt={abilitySymbol.label} />
				</div>
			{/if}
		{/if}
	</div>
</div>

<style>
	.card-wrap {
		overflow: hidden;
		position: relative;
		width: 150px;
		isolation: isolate;
	}

	.card {
		position: relative;
		width: 100%;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		border: 5px solid black;
		background: #1a1a1a;
		z-index: 1;
	}

	.card-image {
		width: 100%;
		height: 153px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center -11px;
		display: block;
	}

	.card-description {
		position: relative;
		display: flex;
		flex-direction: column;
		font-size: 4px;
		height: 60px;
		color: black;
		overflow: hidden;
	}

	.description-topbar {
		display: block;
		width: 100%;
		height: auto;
		max-width: none;
		flex: 0 0 auto;
	}

	.description-background {
		position: relative;
		flex: 1;
		min-height: 0;
		overflow: hidden;
	}

	.description-background-image {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.description-text {
		position: absolute;
		inset: 0 0 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 3px;
		overflow: hidden;
		text-align: center;
		z-index: 1;
	}

	.description-text p {
		margin: 0;
	}

	.description-name {
		width: 100%;
		font-size: 8px;
		font-weight: 700;
		line-height: 1;
	}

	.description-divider {
		width: 78%;
		height: 2px;
		flex: 0 0 auto;
		background: linear-gradient(
			to right,
			transparent 0%,
			rgba(0, 0, 0, 0.95) 10%,
			rgba(0, 0, 0, 0.98) 50%,
			rgba(0, 0, 0, 0.95) 90%,
			transparent 100%
		);
		clip-path: polygon(0 50%, 10% 22%, 90% 22%, 100% 50%, 90% 78%, 10% 78%);
	}

	.description-body {
		width: 100%;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		font-size: 6px;
		line-height: 1.15;
	}

	.power-number {
		position: absolute;
		pointer-events: none;
		left: 14px;
		top: 15px;
		z-index: 2;
	}

	.power-number-circle {
		position: absolute;
		display: block;
		max-width: none;
		z-index: 3;
	}

	.power-number-circle-hero {
		width: 50px;
		height: auto;
		top: -15px;
		left: -15px;
	}

	.power-number-circle-standard {
		width: 35px;
		height: 35px;
		top: -7px;
		left: -7px;
	}

	.power-number-circle-leader {
		width: 50px;
		height: 50px;
		top: -15px;
		left: -15px;
	}

	.power-number-value {
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Gwent ExtraBold', serif;
		line-height: 1;
		z-index: 4;
	}

	.power-number-value-hero,
	.power-number-value-leader {
		width: 50px;
		height: 51px;
		top: -15px;
		left: -15px;
		font-size: 25px;
		color: white;
		text-shadow:
			0 1px 1px black,
			1px 0 1px black,
			0 -1px 1px black,
			-1px 0 1px black;
	}

	.power-number-value-standard {
		width: 35px;
		height: 35px;
		top: -7px;
		left: -7px;
		font-size: 25px;
		color: black;
		text-shadow:
			0 1px 1px #808080 ,
			1px 1px 1px #808080,
			0 0 1px #808080,
			0 0 1px #808080;
	}

	.row-info-stack {
		position: absolute;
		top: 37px;
		left: -4.9px;
		display: flex;
		flex-direction: column;
		gap: 1px;
		z-index: 3;
	}

	.row-info {
		position: relative;
		width: 31px;
		height: 31px;
	}

	.row-info-background {
		display: block;
		width: 100%;
		height: 100%;
		max-width: none;
	}

	.row-info-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 19px;
		height: 19px;
		max-width: none;
		object-fit: contain;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.ability-info {
		position: absolute;
		top: 85px;
		left: -2.7px;
		width: 26px;
		height: 26px;
		z-index: 3;
	}

	.ability-info-background {
		display: block;
		width: 100%;
		height: 100%;
		max-width: none;
	}

	.ability-info-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 28px;
		height: 28px;
		max-width: none;
		object-fit: contain;
		transform: translate(-50%, -50%);
		z-index: 1;
	}

	.faction-stripe {
		position: absolute;
		display: block;
		top: 13px;
		left: -8.5px;
		width: 40px;
		height: auto;
		max-width: none;
		z-index: 2;
	}

	.power-number-border {
		position: absolute;
		display: block;
		top: -14px;
		left: -14px;
		width: 74px;
		height: 74px;
		max-width: none;
		z-index: 1;
	}
</style>
