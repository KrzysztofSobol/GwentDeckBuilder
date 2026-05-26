import type { CardDefinition } from '../types';

export const monsterCards = [
	{
		id: 'mo_toad',
		faction: 'MO',
		type: 'standard',
		power: 7,
		rows: ['ranged'],
		abilities: ['unit_scorch'],
		imagePath: 'standard/monsters/nml_toad.png'
	},
	{
		id: 'mo_geralt',
		faction: 'MO',
		type: 'hero',
		power: 15,
		rows: ['close'],
		abilities: ['muster'],
		imagePath: 'standard/neutral/neu_geralt.png'
	},
	{
		id: 'mo_fire_elemental',
		faction: 'MO',
		type: 'standard',
		power: 6,
		rows: ['siege'],
		abilities: [],
		imagePath: 'standard/monsters/nml_fire_elemental.png'
  },
  {
    id: 'mo_fiend',
    faction: 'MO',
    type: 'standard',
    power: 8,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_fiend.png'
  },
  {
    id: 'mo_bruxa',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_bruxa.png'
	}
] satisfies CardDefinition[];
