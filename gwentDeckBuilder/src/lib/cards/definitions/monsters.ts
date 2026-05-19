import type { CardDefinition } from '../types';

export const monsterCards = [
	{
		id: 'ml_toad',
		name: 'Toad',
		description: '',
		faction: 'MO',
		type: 'standard',
		power: 7,
		rows: ['ranged'],
		abilities: ['unit_scorch'],
		imagePath: 'standard/monsters/nml_toad.png'
	}
] satisfies CardDefinition[];
