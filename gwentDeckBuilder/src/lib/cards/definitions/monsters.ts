import type { CardDefinition } from '../types';

export const monsterCards = [
	{
		id: 'mo_toad',
		name: 'Toad Prince',
		description: '',
		faction: 'MO',
		type: 'standard',
		power: 7,
		rows: ['ranged'],
		abilities: ['unit_scorch'],
		imagePath: 'standard/monsters/nml_toad.png'
  },
  {
		id: 'mo_geralt',
		name: 'Geralt of Rivia',
		description: 'gerald',
		faction: 'MO',
		type: 'hero',
		power: 15,
		rows: ['close'],
		abilities: ['muster'],
		imagePath: 'standard/neutral/neu_geralt.png'
	}
] satisfies CardDefinition[];
