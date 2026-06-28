import type { CardDefinition } from '../types';

export const specialCards = [
  // ### MO ###
	{
		id: 'spc_dummy',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: [],
    imagePath: 'standard/weather/spc_dummy.png',
    symbolPath: 'resources/cards/icons/decoy.png'
	},
	{
		id: 'spc_horn',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: [],
    imagePath: 'standard/weather/spc_horn.png',
		symbolPath: 'resources/cards/icons/commanders_horn.png'
	},
	{
		id: 'spc_scorch',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: [],
    imagePath: 'standard/weather/spc_scorch.png',
		symbolPath: 'resources/cards/icons/scorch.png'
	},
	{
		id: 'spc_frost',
		faction: null,
		type: 'standard',
		power: null,
		rows: ['close'],
		abilities: [],
		imagePath: 'standard/weather/spc_frost.png',
		symbolPath: 'resources/cards/icons/biting_frost.png'
	},
	{
		id: 'spc_fog',
		faction: null,
		type: 'standard',
		power: null,
		rows: ['ranged'],
		abilities: [],
		imagePath: 'standard/weather/spc_fog.png',
		symbolPath: 'resources/cards/icons/impenetrable_fog.png'
	},
	{
		id: 'spc_rain',
		faction: null,
		type: 'standard',
		power: null,
		rows: ['siege'],
		abilities: [],
		imagePath: 'standard/weather/spc_rain.png',
		symbolPath: 'resources/cards/icons/torrential_rain.png'
	},
	{
		id: 'spc_skellige_storm',
		faction: null,
		type: 'standard',
		power: null,
		rows: ['ranged', 'siege'],
		abilities: [],
		imagePath: 'standard/skellige/spc_skellige_storm.png',
		symbolPath: 'resources/cards/icons/skellige_storm.png'
	},
	{
		id: 'spc_clearsky',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: [],
		imagePath: 'standard/weather/spc_clearsky.png',
		symbolPath: 'resources/cards/icons/clear_weather.png'
	},
	{
		id: 'spc_mushroom',
		faction: 'SK',
		type: 'standard',
		power: null,
		rows: [],
		abilities: [],
		imagePath: 'standard/weather/spc_mushroom.png',
		symbolPath: 'resources/cards/icons/mardroeme.png'
	}
] satisfies CardDefinition[];
