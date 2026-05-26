import type { CardText } from '../types';
import type { CardTextId } from './en';

export const polishCardText: Partial<Record<CardTextId, Partial<CardText>>> = {
	mo_toad: {
		title: 'Królewicz Ropuch',
		subtitle: '',
		abilityDescription: '',
		quote: 'Czy pocałuneg go odczaruje?\n Nie wiem, nikt nie próbował'
	},
	mo_geralt: {
		title: 'Geralt z rivii',
		subtitle: '',
		abilityDescription: 'Znajdź w swojej talii albo na ręce kartę Płotka i natychmiast ją zagraj.',
		quote: 'Jeżeli mam wybierać pomiędzy jednym złem a drugim, to wolę nie wybierać wcale.'
	},
	mo_eredin_breacc_glas: {
		title: 'Eredin Breacc Glas',
		subtitle: 'Władca Tir Na Lia',
		abilityDescription: 'Odrzuć 2 karty, a następnie dobierz 1 dowolną kartę ze swojej talii',
		quote: 'Im byli bliżej, tym piękno tego miejsca silniej chwytało za serce.'
  },
	mo_fire_elemental: {
  	title: 'Żywiołak Ognia',
  	subtitle: '',
  	abilityDescription: '',
  	quote: 'No, teraz to się robi gorąco.'
  },
  mo_fiend: {
   	title: 'Bydlęce Siły Zbrojne',
		subtitle: '',
		abilityDescription: 'Ta karta nie może znajdować się w talii na początku rozgrywki. Nie można jej przywrócić za poocą zdolności wskrzeszenia.',
		quote: 'Grrrrr!'
  },
  mo_bruxa: {
   	title: 'Wampiry: Bruxa',
		subtitle: '',
		abilityDescription: 'Znajdź w swojej talii i na ręce wszystkie karty wampirów i natychmiast je zagraj.',
		quote: 'Spod burzy splątanych włosów błyszczały ogromne oczy kolru antracytów.'
  }
};
