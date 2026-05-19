import type { Ability, CardSymbolDefinition, Faction, Row } from './types';

export const CARD_SYMBOL_BASE_PATH = '/resources/cards/icons/';

export const factions = {
	MO: {
		id: 'MO',
		label: 'Monsters',
		symbolPath: '/resources/icons/shield_monster_unit.png'
	},
	NIL: {
		id: 'NIL',
		label: 'Nilfgaard',
		symbolPath: '/resources/icons/shield_nilfgard.png'
	},
	SK: {
		id: 'SK',
		label: 'Skellige',
		symbolPath: '/resources/icons/shield_skellige.png'
	},
	SC: {
		id: 'SC',
		label: "Scoia'tael",
		symbolPath: '/resources/icons/shield_scoiatael.png'
	},
	NOR: {
		id: 'NOR',
		label: 'Northern Realms',
		symbolPath: '/resources/icons/shield_northern_realms.png'
	}
} satisfies Record<Faction, CardSymbolDefinition<Faction>>;

export const rows = {
	close: {
		id: 'close',
		label: 'Close combat',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}close.png`
	},
	ranged: {
		id: 'ranged',
		label: 'Ranged combat',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}ranged.png`
	},
	siege: {
		id: 'siege',
		label: 'Siege combat',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}620.png`
	}
} satisfies Record<Row, CardSymbolDefinition<Row>>;

export const abilities = {
	agile: {
		id: 'agile',
		label: 'Agile',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}abilities/agile.png`
	},
	commanders_horn: {
		id: 'commanders_horn',
		label: "Commander's horn",
		symbolPath: `${CARD_SYMBOL_BASE_PATH}commanders_horn.png`
	},
	medic: {
		id: 'medic',
		label: 'Medic',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}medic.png`
	},
	morale_boost: {
		id: 'morale_boost',
		label: 'Morale boost',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}morale_boost.png`
	},
	muster: {
		id: 'muster',
		label: 'Muster',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}muster.png`
	},
	tight_bond: {
		id: 'tight_bond',
		label: 'Tight bond',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}tight_bond.png`
	},
	scorch: {
		id: 'scorch',
		label: 'Scorch',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}scorch.png`
  },
  unit_scorch: {
		id: 'unit_scorch',
		label: 'unit_scorch',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}unit_scorch.png`
	},
	spy: {
		id: 'spy',
		label: 'Spy',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}spy.png`
	},
	summon: {
		id: 'summon',
		label: 'Summon',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}summon.png`
	},
	berserker: {
		id: 'berserker',
		label: 'Berserker',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}berserker.png`
	},
	mardroeme: {
		id: 'mardroeme',
		label: 'Mardroeme',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}mardroeme.png`
	},
	decoy: {
		id: 'decoy',
		label: 'Decoy',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}decoy.png`
	},
	biting_frost: {
		id: 'biting_frost',
		label: 'Biting frost',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}biting_frost.png`
	},
	impenetrable_fog: {
		id: 'impenetrable_fog',
		label: 'Impenetrable fog',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}impenetrable_fog.png`
	},
	torrential_rain: {
		id: 'torrential_rain',
		label: 'Torrential rain',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}torrential_rain.png`
	},
	skellige_storm: {
		id: 'skellige_storm',
		label: 'Skellige storm',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}skellige_storm.png`
	},
	clear_weather: {
		id: 'clear_weather',
		label: 'Clear weather',
		symbolPath: `${CARD_SYMBOL_BASE_PATH}clear_weather.png`
	}
} satisfies Record<Ability, CardSymbolDefinition<Ability>>;
