import type { CardDefinition } from '../types';

export const specialCards = [
	{
		id: 'spc_dummy',
		name: 'Decoy',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['decoy'],
		imagePath: 'standard/weather/spc_dummy.png'
	},
	{
		id: 'spc_horn',
		name: "Commander's Horn",
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['commanders_horn'],
		imagePath: 'standard/weather/spc_horn.png'
	},
	{
		id: 'spc_scorch',
		name: 'Scorch',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['scorch'],
		imagePath: 'standard/weather/spc_scorch.png'
	},
	{
		id: 'spc_frost',
		name: 'Biting Frost',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['biting_frost'],
		imagePath: 'standard/weather/spc_frost.png'
	},
	{
		id: 'spc_fog',
		name: 'Impenetrable Fog',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['impenetrable_fog'],
		imagePath: 'standard/weather/spc_fog.png'
	},
	{
		id: 'spc_rain',
		name: 'Torrential Rain',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['torrential_rain'],
		imagePath: 'standard/weather/spc_rain.png'
	},
	{
		id: 'spc_skellige_storm',
		name: 'Skellige Storm',
		description: '',
		faction: 'SK',
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['skellige_storm'],
		imagePath: 'standard/skellige/spc_skellige_storm.png'
	},
	{
		id: 'spc_clearsky',
		name: 'Clear Weather',
		description: '',
		faction: null,
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['clear_weather'],
		imagePath: 'standard/weather/spc_clearsky.png'
	},
	{
		id: 'spc_mushroom',
		name: 'Mardroeme',
		description: '',
		faction: 'SK',
		type: 'standard',
		power: null,
		rows: [],
		abilities: ['mardroeme'],
		imagePath: 'standard/weather/spc_mushroom.png'
	}
] satisfies CardDefinition[];
