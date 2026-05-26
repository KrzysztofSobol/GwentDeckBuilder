import type { CardText } from '../types';

export const englishCardText = {
	mo_toad: {
		title: 'Toad Prince',
		subtitle: '',
		abilityDescription: '',
		quote: 'A prince, even in that shape.'
	},
	mo_geralt: {
		title: 'Geralt of Rivia',
		subtitle: '',
		abilityDescription: 'Hero: Immune to special cards and abilities.',
		quote: 'Evil is evil.'
	},
	mo_eredin_breacc_glas: {
		title: 'Eredin Breacc Glas',
		subtitle: 'King of the Wild Hunt',
		abilityDescription: 'Discard 2 cards, next take any card from your deck.',
		quote: 'The White Frost draws near.'
  },
  mo_fire_elemental: {
   	title: '',
		subtitle: '',
		abilityDescription: '',
		quote: ''
  },
  mo_fiend: {
   	title: '',
		subtitle: '',
		abilityDescription: '',
		quote: ''
  },
  mo_bruxa: {
   	title: '',
		subtitle: '',
		abilityDescription: '',
		quote: ''
  }
} satisfies Record<string, CardText>;

export type CardTextId = keyof typeof englishCardText;
