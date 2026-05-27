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
	},
  {
    id: 'mo_garkain',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_garkain.png'
  },
  {
    id: 'mo_ekkima',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_ekkima.png'
  },
  {
    id: 'mo_katakan',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_karakan.png'
  },
  {
    id: 'mo_arachas',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_arachas.png'
  },
  {
    id: 'mo_arachas_1',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_arachas_1.png'
  },
  {
    id: 'mo_arachas_2',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_arachas_2.png'
  },
  {
    id: 'mo_arachas_behemoth',
    faction: 'MO',
    type: 'standard',
    power: 6,
    rows: ['siege'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_arachas_behemoth.png'
  },
  {
    id: 'mo_endrega',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['siege'],
    abilities: [],
    imagePath: 'standard/monsters/nml_endrega.png'
  },
  {
    id: 'mo_witch_velen',
    faction: 'MO',
    type: 'standard',
    power: 6,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_witch_velen.png'
  },
  {
    id: 'mo_witch_velen_1',
    faction: 'MO',
    type: 'standard',
    power: 6,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_witch_velen_1.png'
  },
  {
    id: 'mo_witch_velen_2',
    faction: 'MO',
    type: 'standard',
    power: 6,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_witch_velen_2.png'
  },
  {
    id: 'mo_fogling',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_fogling.png'
  },
  {
    id: 'mo_frightener',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_frightener.png'
  },
  {
    id: 'mo_emiel',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/neutral/neu_emiel.png'
  },
  {
    id: 'mo_celaeno_harpy',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close_ranged'],
    abilities: ['agile'],
    imagePath: 'standard/monsters/nml_celaeno_harpy.png'
  },
  {
    id: 'mo_poroniec',
    faction: 'MO',
    type: 'standard',
    power: 4,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_poroniec.png'
  },
  {
    id: 'mo_nekker',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_nekker.png'
  },
  {
    id: 'mo_nekker_1',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_nekker_1.png'
  },
  {
    id: 'mo_nekker_2',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_nekker_2.png'
  },
  {
    id: 'mo_ghoul',
    faction: 'MO',
    type: 'standard',
    power: 1,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_ghoul.png'
  },
  {
    id: 'mo_ghoul_1',
    faction: 'MO',
    type: 'standard',
    power: 1,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_ghoul_1.png'
  },
  {
    id: 'mo_ghoul_2',
    faction: 'MO',
    type: 'standard',
    power: 1,
    rows: ['close'],
    abilities: ['muster'],
    imagePath: 'standard/monsters/nml_ghoul_2.png'
  },
  {
    id: 'mo_forktail',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_forktail.png'
  },
  {
    id: 'mo_earth_elemental',
    faction: 'MO',
    type: 'standard',
    power: 6,
    rows: ['siege'],
    abilities: [],
    imagePath: 'standard/monsters/nml_earth_elemental.png'
  },
  {
    id: 'mo_gargoyle',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['ranged'],
    abilities: [],
    imagePath: 'standard/monsters/nml_gargoyle.png'
  },
  {
    id: 'mo_gravehag',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['ranged'],
    abilities: [],
    imagePath: 'standard/monsters/nml_gravehag.png'
  },
  {
    id: 'mo_gryffin',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_gryffin.png'
  },
  {
    id: 'mo_frost_giant',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['siege'],
    abilities: [],
    imagePath: 'standard/monsters/nml_frost_giant.png'
  },
  {
    id: 'mo_mighty_maiden',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_mighty_maiden.png'
  },
  {
    id: 'mo_wyvern',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['ranged'],
    abilities: [],
    imagePath: 'standard/monsters/nml_wyvern.png'
  },
  {
    id: 'mo_werewolf',
    faction: 'MO',
    type: 'standard',
    power: 5,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_werewolf.png'
  },
  {
    id: 'mo_harpy',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close_ranged'],
    abilities: ['agile'],
    imagePath: 'standard/monsters/nml_harpy.png'
  },
  {
    id: 'mo_cockatrice',
    faction: 'MO',
    type: 'standard',
    power: 2,
    rows: ['close'],
    abilities: [],
    imagePath: 'standard/monsters/nml_cockatrice.png'
  }
] satisfies CardDefinition[];
