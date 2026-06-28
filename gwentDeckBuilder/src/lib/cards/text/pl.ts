import type { CardText } from '../types';
import type { CardTextId } from './en';

const getAllCardsByType = (value: string): string => {
    return `Znajdź w swojej talii i na ręce wszystkie ${value} i natychmiast je zagraj.`
};

export const polishCardText: Partial<Record<CardTextId, Partial<CardText>>> = {
	mo_toad: {
		title: 'Królewicz Ropuch',
		subtitle: '',
		abilityDescription: '',
		quote: 'Czy pocałunek go odczaruje?\n Nie wiem, nikt nie próbował'
	},
	mo_fire_elemental: {
  	title: 'Żywiołak Ognia',
  	subtitle: '',
  	abilityDescription: '',
  	quote: 'No, teraz to się robi gorąco.'
  },
  mo_fiend: {
   	title: 'Bies',
		subtitle: '',
		abilityDescription: '',
		quote: 'Bies wygląda trochę jak jeleń. Wielki, wkurwiony jeleń.'
  },
  mo_bruxa: {
   	title: 'Wampiry: Bruxa',
		subtitle: '',
    abilityDescription: getAllCardsByType('karty wampirów'),
		quote: 'Spod burzy splątanych włosów błyszczały ogromne oczy kolru antracytów.'
  },
  mo_garkain: {
   	title: 'Wampiry: Garkain',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty wampirów'),
		quote: 'Nic nie chroni przed garkainem. Ani święte znaki, ani czosnek, ani osinowy kołek.'
  },
  mo_ekkima: {
   	title: 'Wampiry: Garkain',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty wampirów'),
		quote: 'Ekimma to taki jakby nietoperz... Tyle że wielkości człowieka.'
  },
  mo_katakan: {
   	title: 'Wampiry: Katakan',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty wampirów'),
		quote: 'Melitele, Matko, uchroń nas ode złego, nade wszystko zaś od szponów katakana.'
  },
  mo_fleder: {
   	title: 'Wampiry: Fleder',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty wampirów'),
		quote: 'Łysa głowa, szpiczaste uszy, skóra pokryta brodawkami... Przystojniaczek.'
  },
  mo_arachas: {
    title: 'Krabopająk',
		subtitle: '',
		abilityDescription: getAllCardsByType('standardowe karty Krabopająk'),
		quote: 'Pół krab, pół pająk. Słowem, skurwysyn.'
  },
  mo_arachas_1: {
    title: 'Krabopająk',
		subtitle: '',
		abilityDescription: getAllCardsByType('standardowe karty Krabopająk'),
		quote: 'Pół krab, pół pająk. Słowem, skurwysyn.'
  },
  mo_arachas_2: {
    title: 'Krabopająk',
		subtitle: '',
		abilityDescription: getAllCardsByType('standardowe karty Krabopająk'),
		quote: 'Pół krab, pół pająk. Słowem, skurwysyn.'
  },
  mo_arachas_behemoth: {
   	title: 'Olbrzymi krabopająk',
		subtitle: '',
		abilityDescription: getAllCardsByType('standardowe karty Krabopająk'),
		quote: 'To... To się rusza!'
  },
  mo_endrega: {
   	title: 'Endriaga',
		subtitle: '',
		abilityDescription: '',
		quote: 'Do lasu lepiej teraz nie zachodzić. Endriagi się wyroiły.'
  },
  mo_witch_velen: {
   	title: 'Wiedźma: Kuchta',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Wiedźma'),
		quote: 'Wiem, co mówię. W tej zupie pływają oczy! Nie oka!'
  },
  mo_witch_velen_1: {
   	title: 'Wiedźma: Prządka',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Wiedźma'),
		quote: 'Czuję twój ból, widzę twój strach.'
  },
  mo_witch_velen_2: {
   	title: 'Wiedźma: Szepciucha',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Wiedźma'),
		quote: 'Hi, hi, hi, hi, hi, hi, hi!'
  },
  mo_fogling: {
   	title: 'Mglak',
		subtitle: '',
		abilityDescription: '',
		quote: 'Jak widzisz światło we mgle, zawracaj. Natychmiast.'
  },
  mo_frightener: {
   	title: 'Przeraza',
		subtitle: '',
		abilityDescription: '',
		quote: 'Skąd ta nazwa? Poczekaj, aż ją zobaczysz.'
  },
  mo_emiel: {
   	title: 'Emiel Regis Rohellec Terzieff',
		subtitle: '',
		abilityDescription: 'Uchodzę, delikatnie mówiąc, za potwora. Za krwiożercze monstrum.',
		quote: ''
  },
  mo_celaeno_harpy: {
   	title: 'Harpia Celaeno',
		subtitle: '',
		abilityDescription: '',
		quote: 'Zwykłe harpie żywią się padliną. A Celaneo - snami.'
  },
  mo_poroniec: {
    title: 'Poroniec',
		subtitle: '',
		abilityDescription: '',
		quote: 'Mogiła jest rozkopana... Znaczy, poroniec wyszedł na żer.'
  },
  mo_nekker: {
    title: 'Nekker',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Nekker'),
		quote: 'Małe, szybkie i wredne.'
  },
  mo_nekker_1: {
    title: 'Nekker',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Nekker'),
		quote: 'Małe, szybkie i wredne.'
  },
  mo_nekker_2: {
    title: 'Nekker',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Nekker'),
		quote: 'Małe, szybkie i wredne.'
  },
  mo_ghoul: {
    title: 'Ghul',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Ghul'),
		quote: 'Chodzą ghule koło drogi, zeżrą ręce, zeżrą nogi.'
  },
  mo_ghoul_1: {
    title: 'Ghul',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Ghul'),
		quote: 'Chodzą ghule koło drogi, zeżrą ręce, zeżrą nogi.'
  },
  mo_ghoul_2: {
    title: 'Ghul',
		subtitle: '',
		abilityDescription: getAllCardsByType('karty Ghul'),
		quote: 'Chodzą ghule koło drogi, zeżrą ręce, zeżrą nogi.'
  },
  mo_forktail: {
   	title: 'Widłogon',
		subtitle: '',
		abilityDescription: '',
		quote: 'Widłogon... Dobre sobie. Raczej, kurwa, mieczogon!'
  },
  mo_earth_elemental: {
   	title: 'Żywiołak ziemi',
		subtitle: '',
		abilityDescription: '',
		quote: 'Jak przeżyć spotkanie z żywiołakiem ziemi? Prost. Uciekać, ile sił w nogach.'
  },
  mo_gargoyle: {
   	title: 'Gargulec',
		subtitle: '',
		abilityDescription: '',
		quote: 'Mnie się zdaje, czy ten rzygacz wodzi za nami wzrokiem?'
  },
  mo_gravehag: {
   	title: 'Baba cmentarna',
		subtitle: '',
		abilityDescription: '',
		quote: 'Uważaj... Leziesz po trupach. Smacznych trupach... Hi, hi.'
  },
  mo_gryffin: {
   	title: 'Gryf',
		subtitle: '',
		abilityDescription: '',
		quote: 'Gryfy lubią pomęczyć. Jeść żywcem po kawałku.'
  },
  mo_frost_giant: {
   	title: 'Lodowy gigant',
		subtitle: '',
		abilityDescription: '',
		quote: 'Uciekłem w życiu jeden raz. Przed lodowym gigantem. I nawet się tego nie wstydzę.'
  },
  mo_mighty_maiden: {
   	title: 'Morowa Dziewica',
		subtitle: '',
		abilityDescription: '',
		quote: 'Chorzy majaczyli o pokrytej liszajami kobiecie otoczonej przez oszalałe szczury...'
  },
  mo_wyvern: {
   	title: 'Wiwerna',
		subtitle: '',
		abilityDescription: '',
		quote: 'To było coś, co żyło tylko po to, by zabijać.'
  },
  mo_werewolf: {
   	title: 'Wilkołak',
		subtitle: '',
		abilityDescription: '',
		quote: 'Nie taki wilk straszny, jak go malują. Za to wilkołak jak najbardziej.'
  },
  mo_harpy: {
   	title: 'Harpia',
		subtitle: '',
		abilityDescription: '',
		quote: 'Schowajcie te błyskotki, pani. Bo jeszcze harpie sie zlecą.'
  },
  mo_cockatrice: {
   	title: 'Kuroliszek',
		subtitle: '',
		abilityDescription: '',
		quote: 'Mierzy bezbłędnie między kręgi lub w aortę. Jeden cios i jesteś martwy.'
  },
  mo_kayran: {
   	title: 'Kejran',
		subtitle: '',
		abilityDescription: '',
		quote: '- Ten pień tam, z lewej... On się rusza! - To nie pień. To macka.'
  },
  mo_imlerith: {
   	title: 'Imlerith',
		subtitle: '',
		abilityDescription: '',
		quote: 'Imlerith...? Lepiej od razu się poddajmy.'
  },
  mo_draug: {
   	title: 'Draug',
		subtitle: '',
		abilityDescription: '',
		quote: 'Generał nie pogodził się z przegraną. Zginął, ale walczy dalej.'
  },
  mo_leshan: {
   	title: 'Leszy',
		subtitle: '',
		abilityDescription: '',
		quote: 'W tym lesie się nie poluje. Nigdy. Choćby wieś umierała z głodu.'
  },
  mo_eredin_gold: {
 	  title: 'Eredin Breacc Glas',
		subtitle: 'Władca Tir Na Lia',
		abilityDescription: 'Odrzuć 2 karty, a następnie dobierz 1 dowolną kartę ze swojej talii',
		quote: 'Im byli bliżej, tym piękno tego miejsca silniej chwytało za serce.'
  },
  mo_eredin_platinium: {
   	title: 'Eredin Breacc Glas',
		subtitle: 'Zdradziecki',
		abilityDescription: 'Podwaja siłę wszystkich kart ze zdolnością szpiegostwa (dotyczy obu graczy).',
		quote: 'Bo się tobą bawię.'
  },
  mo_eredin_bronze: {
   	title: 'Eredin Breacc Glas',
		subtitle: 'Zabójca Auberona',
		abilityDescription: 'Przywróć na rękę dowolną kartę ze swojego stosu kart odrzuconych.',
		quote: 'Czerwoni Jeźdźcy zdołają doścignąć cię nawet w otchłani czasów i miejsc.'
  },
  mo_eredin_copper: {
   	title: 'Eredin Breacc Glas',
		subtitle: 'Król Dzikiego Gonu',
		abilityDescription: 'Wybierz kartę pogody ze swojej talii i natychmiast ją zagraj.',
		quote: 'Va faill, luned.'
  },
  mo_eredin_silver: {
    title: 'Eredin Breacc Glas',
		subtitle: 'Dowódca Czerwonych Jeźdźców',
		abilityDescription: 'Podwaja się wszystkich Twoich jednostek (chyba że w ich rzędzie jest karta ze zdolnością rogu dowódcy).',
		quote: 'Król Gonu śmieje się, kłapią przegniłe zęby nad zardzewiały kołnierzem zbroi.'
  },
  spc_dummy: {
    title: 'Manekin do Ćwiczeń',
		subtitle: '',
		abilityDescription: '',
		quote: 'Niespodzianka, skurwysyny!'
  },
  spc_horn: {
		title: 'Róg dowódcy',
		subtitle: '',
		abilityDescription: '',
		quote: 'Do atakuuuuu!!!'
  },
  spc_scorch: {
		title: 'Pożoga',
		subtitle: '',
		abilityDescription: '',
		quote: 'Że też zawsze musi jebnąć tam, gdzie najbardziej boli!'
  },
  spc_frost: {
		title: 'Tezaskający mróz',
		subtitle: '',
		abilityDescription: '',
		quote: 'Tak mi palce zgrabiały, że ledwie miecz trzymam... A tu jeszcze machać trzeba.'
  },
  spc_fog: {
		title: 'Gęsta mgła',
		subtitle: '',
		abilityDescription: '',
		quote: 'Mgła, że oko wykol... Cokolwiek to znaczy.'
  },
  spc_rain: {
		title: 'Ulewny deszcz',
		subtitle: '',
		abilityDescription: '',
		quote: '- Wieża oblężnicza uktnęła w błocie! - Widzę, idioto. Trąb na odwrót.'
  },
  spc_skellige_storm: {
		title: 'Skelligijski sztorm',
		subtitle: '',
		abilityDescription: '',
		quote: 'To nie jest zwykła burza. To gniew bogów.'
  },
  spc_clearsky: {
		title: 'Czyste niebo',
		subtitle: '',
		abilityDescription: '',
		quote: 'Piękny dzień, żeby umrzeć.'
  },
  spc_mushroom: {
		title: 'Mardroeme',
		subtitle: '',
		abilityDescription: '',
		quote: 'Zjedz ich odpowiednio dużo, a świat już nigdy nie będzie taki sam...'
  },
	geralt: {
		title: 'Geralt z rivii',
		subtitle: '',
		abilityDescription: 'Znajdź w swojej talii albo na ręce kartę Płotka i natychmiast ją zagraj.',
		quote: 'Jeżeli mam wybierać pomiędzy jednym złem a drugim, to wolę nie wybierać wcale.'
	},
  ciri: {
  	title: 'Cirilla',
  	subtitle: '',
  	abilityDescription: 'Znajdź w swojej talii albo na ręce kartę Płotka i natychmiast ją zagraj.',
  	quote: 'Wiesz, kiedy bajki przestają być bajkami? Kiedy ludzie zaczynają w nie wierzyć.'
  },
  triss: {
   	title: 'Triss Merigold',
   	subtitle: '',
   	abilityDescription: '',
   	quote: 'Potrafię o siebie zadbać. Wierz mi.'
  },
  yen: {
   	title: 'Yennefer z Vengerbergu',
   	subtitle: '',
   	abilityDescription: '',
   	quote: 'Odziana w kompozycję czerni i bieli, przywodziła na myśl grudniowy poranek.'
  },
  avallach: {
   	title: 'Avallac\'h',
   	subtitle: '',
   	abilityDescription: '',
   	quote: 'Nie zwykłem żartować.'
  },
  neu_czart: {
   	title: 'Bydlęce Siły Zbrojne',
		subtitle: '',
		abilityDescription: 'Ta karta nie może znajdować się w talii na początku rozgrywki. Nie można jej przywrócić za poocą zdolności wskrzeszenia.',
		quote: 'Grrrrr!'
  },
  villen: {
   	title: 'Villentretenmerth',
   	subtitle: '',
   	abilityDescription: '',
   	quote: 'Było w tym stworzeniu coś pełnego niewysłowionej gracji.'
  },
};
