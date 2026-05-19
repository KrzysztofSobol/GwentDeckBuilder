import type { CardDefinition } from './types';
import { leaderCards } from './definitions/leaders';
import { monsterCards } from './definitions/monsters';
import { nilfgaardCards } from './definitions/nilfgaard';
import { northernRealmsCards } from './definitions/northernRealms';
import { scoiataelCards } from './definitions/scoiatael';
import { skelligeCards } from './definitions/skellige';
import { specialCards } from './definitions/special';

export const allCards: CardDefinition[] = [
	...monsterCards,
	...nilfgaardCards,
	...northernRealmsCards,
	...scoiataelCards,
	...skelligeCards,
	...specialCards,
	...leaderCards
];
