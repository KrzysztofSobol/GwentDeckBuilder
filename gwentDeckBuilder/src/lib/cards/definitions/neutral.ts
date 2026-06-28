import type { CardDefinition } from '../types';

export const neutralCards = [
  {
		id: 'geralt',
		faction: null,
		type: 'hero',
		power: 15,
		rows: ['close'],
		abilities: ['muster'],
		imagePath: 'standard/neutral/neu_geralt.png'
  },
  {
		id: 'ciri',
		faction: null,
		type: 'hero',
		power: 15,
		rows: ['close'],
		abilities: ['muster'],
		imagePath: 'standard/neutral/neu_ciri.png'
	},
  {
  	id: 'triss',
  	faction: null,
  	type: 'hero',
  	power: 7,
  	rows: ['close'],
  	abilities: [],
  	imagePath: 'standard/neutral/neu_triss.png'
  },
  {
		id: 'yen',
		faction: null,
		type: 'hero',
		power: 7,
		rows: ['ranged'],
		abilities: ['medic'],
    imagePath: 'standard/neutral/neu_yennefer.png',
    imageOffset: 8
	},
  {
  	id: 'avallach',
  	faction: null,
  	type: 'hero',
  	power: 0,
  	rows: ['close'],
  	abilities: ['spy'],
  	imagePath: 'standard/neutral/neu_avallach.png'
  }
] satisfies CardDefinition[];
