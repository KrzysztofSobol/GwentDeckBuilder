<script lang="ts">
	const BASE_PATH = '/resources/cards/';
	const ELEMENTS_PATH = `${BASE_PATH}elements/`;

	type Faction = 'MO' | 'NIL' | 'NOR' | 'SC' | 'SK';
	type CardType = 'HERO' | 'NORMAL' | 'LEADER';

	interface Props {
		faction: string;
		type: string;
		name: string;
		imagePath: string;
		description?: string;
	}

	let { faction, type, name, imagePath, description = '' }: Props = $props();

	const factions: Faction[] = ['MO', 'NIL', 'NOR', 'SC', 'SK'];
	const cardTypes: CardType[] = ['HERO', 'NORMAL', 'LEADER'];
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
		const typeKey = value.toUpperCase() as CardType;
		return cardTypes.includes(typeKey) ? typeKey : 'NORMAL';
	};

	const src = $derived(`${BASE_PATH}${imagePath}`);
	const factionKey = $derived(normalizeFaction(faction));
	const typeKey = $derived(normalizeType(type));
	const isGoldFaction = $derived(goldFactions.has(factionKey));
	const shouldShowPowerNumber = $derived(typeKey !== 'LEADER');
	const shouldShowPowerNumberBorder = $derived(typeKey === 'HERO');
	const powerNumberCircleSrc = $derived(
		typeKey === 'HERO'
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
	const powerNumberCircleClass = $derived(
		`power-number-circle power-number-circle-${typeKey.toLowerCase()}`
	);
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
	<div class="card">
		<div class="card-image">
			<img {src} alt={name} />
		</div>

		<div class="card-description">
			<img class="description-topbar" src={descriptionTopbarSrc} alt="" />

			<div class="description-background">
				<img class="description-background-image" src={descriptionBackgroundSrc} alt="" />

				<div class="description-text">
					<p>{name}</p>
					<p>{description}</p>
				</div>
			</div>
		</div>
	</div>

	{#if shouldShowPowerNumber}
		<div class="power-number">
			<img class={powerNumberCircleClass} src={powerNumberCircleSrc} alt="" />
			{#if shouldShowPowerNumberBorder}
				<img class="power-number-border" src={powerNumberBorderSrc} alt="" />
			{/if}
			<img class="faction-stripe" src={factionStripeSrc} alt="" />
			<img
				class="info1-stripe"
				src="/resources/cards/elements/additional_info_silver_1.png"
				alt=""
			/>
			<img
				class="info2-stripe"
				src="/resources/cards/elements/additional_info_silver_2.png"
				alt=""
			/>
		</div>
	{/if}
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
		position: relative;
		z-index: 1;
	}

	.description-text p {
		margin: 0;
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
		height: 50px;
		top: -15px;
		left: -15px;
	}

	.power-number-circle-normal {
		width: 35px;
		height: 35px;
		top: -7px;
		left: -7px;
	}

	.info1-stripe {
		position: absolute;
		top: 37px;
		left: -4.9px;
		width: 31px;
		height: 31px;
		max-width: none;
		z-index: 3;
	}

	.info2-stripe {
		position: absolute;
		top: 85px;
		left: -2.7px;
		width: 26px;
		height: 26px;
		max-width: none;
		z-index: 3;
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
