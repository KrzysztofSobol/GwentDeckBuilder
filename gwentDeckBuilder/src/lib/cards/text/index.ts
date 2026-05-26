import type { CardLanguage, CardText } from '../types';
import { englishCardText, type CardTextId } from './en';
import { polishCardText } from './pl';

export const isCardLanguage = (language: string | null): language is CardLanguage =>
	language === 'en' || language === 'pl';

const requireCardText = (cardId: string): CardTextId => {
	if (!(cardId in englishCardText)) {
		throw new Error(`Missing English text for card: ${cardId}`);
	}

	return cardId as CardTextId;
};

export const getCardText = (cardId: string, language: CardLanguage): CardText => {
	const textId = requireCardText(cardId);
	const englishText = englishCardText[textId];

	if (language === 'en') {
		return englishText;
	}

	const localizedText = polishCardText[textId];

	return {
		title: localizedText?.title ?? englishText.title,
		subtitle: localizedText?.subtitle ?? englishText.subtitle,
		abilityDescription: localizedText?.abilityDescription ?? englishText.abilityDescription,
		quote: localizedText?.quote ?? englishText.quote
	};
};
