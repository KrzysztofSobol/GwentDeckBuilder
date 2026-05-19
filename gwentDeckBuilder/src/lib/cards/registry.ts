import { allCards } from './allCards';
import type { Ability, CardDefinition, CardType, Faction, Row } from './types';

export const cardsById = new Map<string, CardDefinition>();

for (const card of allCards) {
	if (cardsById.has(card.id)) {
		throw new Error(`Duplicate card id: ${card.id}`);
	}

	cardsById.set(card.id, card);
}

export const getCardById = (id: string) => {
	const card = cardsById.get(id);

	if (!card) {
		throw new Error(`Unknown card id: ${id}`);
	}

	return card;
};

export const getCardsByFaction = (faction: Faction) =>
	allCards.filter((card) => card.faction === faction);

export const getCardsByType = (type: CardType) => allCards.filter((card) => card.type === type);

export const getCardsByRow = (row: Row) => allCards.filter((card) => card.rows.includes(row));

export const getCardsByAbility = (ability: Ability) =>
	allCards.filter((card) => card.abilities.includes(ability));

export const searchCards = (query: string) => {
	const normalizedQuery = query.trim().toLowerCase();

	if (!normalizedQuery) {
		return allCards;
	}

	return allCards.filter((card) => {
		const searchableText = `${card.name} ${card.description} ${card.id}`.toLowerCase();
		return searchableText.includes(normalizedQuery);
	});
};
