export type Faction = 'MO' | 'NIL' | 'SK' | 'SC' | 'NOR';

export type CardType = 'standard' | 'hero' | 'leader' | 'premium';

export type CardLanguage = 'en' | 'pl';

export type Row = 'close' | 'ranged' | 'siege' | 'close_ranged';

export type Ability =
	| 'agile'
	| 'commanders_horn'
	| 'medic'
	| 'morale_boost'
	| 'muster'
	| 'tight_bond'
	| 'scorch'
	| 'unit_scorch'
	| 'spy'
	| 'summon'
	| 'berserker'
	| 'mardroeme'
	| 'decoy'
	| 'biting_frost'
	| 'impenetrable_fog'
	| 'torrential_rain'
	| 'skellige_storm'
	| 'clear_weather';

export interface CardDefinition {
	id: string;
	faction: Faction | null;
	type: CardType;
	power: number | null;
	rows: Row[];
	abilities: Ability[];
	imagePath: string;
}

export interface CardText {
	title: string;
	subtitle: string;
	abilityDescription: string;
	quote: string;
}

export interface CardSymbolDefinition<TId extends string> {
	id: TId;
	label: string;
	symbolPath: string;
}
