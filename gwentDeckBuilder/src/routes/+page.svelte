<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import { getCardsByFaction } from '$lib/cards/registry';
	import { getCardText, isCardLanguage } from '$lib/cards/text';
	import type { CardLanguage } from '$lib/cards/types';

	const LANGUAGE_SETTING_KEY = 'gwent-card-language';
	const cards = getCardsByFaction('MO');
	let language = $state<CardLanguage>('en');

	const localizedCards = $derived(
		cards.map((card) => ({ card, text: getCardText(card.id, language) }))
	);

	onMount(() => {
		const savedLanguage = localStorage.getItem(LANGUAGE_SETTING_KEY);

		if (isCardLanguage(savedLanguage)) {
			language = savedLanguage;
		}
	});

	const setLanguage = (selectedLanguage: CardLanguage) => {
		language = selectedLanguage;
		localStorage.setItem(LANGUAGE_SETTING_KEY, selectedLanguage);
	};
</script>

<fieldset class="language-setting">
	<legend>Card language</legend>
	<button type="button" class:active={language === 'en'} onclick={() => setLanguage('en')}
		>ENG</button
	>
	<button type="button" class:active={language === 'pl'} onclick={() => setLanguage('pl')}
		>PL</button
	>
</fieldset>

<main class="test-page">
	{#each localizedCards as localizedCard (localizedCard.card.id)}
		<Card card={localizedCard.card} text={localizedCard.text} />
	{/each}
</main>

<style>
	.language-setting {
		position: fixed;
		top: 22px;
		right: 24px;
		display: flex;
		gap: 4px;
		margin: 0;
		padding: 7px;
		border: 1px solid #77613f;
		border-radius: 4px;
		background: #18140e;
		color: #dcc492;
		z-index: 5;
	}

	.language-setting legend {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.language-setting button {
		padding: 5px 10px;
		border: 1px solid transparent;
		border-radius: 3px;
		background: transparent;
		color: inherit;
		font:
			700 12px/1 'Cinzel Card Title',
			serif;
		cursor: pointer;
	}

	.language-setting button.active {
		border-color: #af8a4d;
		background: #534023;
		color: #f1ddb1;
	}

	.test-page {
		min-height: 100vh;
		display: flex;
		gap: 24px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
</style>
