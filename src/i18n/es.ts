// Spanish (es)

export { default as locale } from "@angular/common/locales/es";
export { default as dateFnsLocale } from "date-fns/locale/es";

import { VSTATS_DISCORD_URL } from "src/constants/misc";
import type { translations as t } from "./messages.json";

export const translations: typeof t = {
  "updated-at": "Última vez actualizado {$INTERPOLATION}",
  "channel-no-results": "No results, try selecting at least one VTuber",
  "select-vtuber": "Select VTuber ",
  name: "Nombre",
  total: "Total",
  subscribers: "Subscriptores",
  views: "Visualizaciones",
  "last-day": "Último día",
  "last-7days": "Últimos 7 días",
  "last-30days": "Últimos 30 días",
  channel: "Canales de",
  stream: "Directo de",
  settings: "Configuración",
  "toggle-dark-mode": "Modo Noche",
  "average-viewers": "Promedio de Espectadores",
  "maximum-viewers": "Máximo de Espectadores",
  "select-language": "Seleccionar Lenguaje",
  "recent-streams": "Transmisiones recientes",
  "stream-viewers": "Espectadores",
  "no-stream": "No stream",
  "stream-times": "Stream Times",
  "live-chat": "Chat en directo",
  revenue: "Revenue",
  "select-date": "Select Date",
  about: "About",
  "about-1":
    "vtstats is a platform for VTubers Statistics and Data Visualization. ",
  "about-2":
    "This is an open source project, you can find the source code at {$START_LINK}GitHub{$CLOSE_LINK}. ",
  "about-3":
    "If you find this website useful, consider supporting it with a donation by ",
  "about-4": `Join our discord server at {$START_LINK}${VSTATS_DISCORD_URL}{$CLOSE_LINK}. `,
  "about-5":
    "Credits to {$START_LINK}Return YouTube Dislike{$CLOSE_LINK} for providing youtube like/dislike data. ",
  misc: "Miscellaneous",
  "filter-by-vtuber": "Filter by VTuber",
  clear: "Clear ",
  "live-stream": "Directo de",
  scheduled: "Horario",
  "super-chats": "Super Chat",
  "super-sticker": "Super Stickers",
  "new-member": "New Member",
  "member-milestone": "Member Milestone",
  cheering: "Cheering",
  timed: "Timed",
  member: "Member",
  "hyper-chat": "Hyper Chat",
  search: "Search",
  today: "Hoy",
  yesterday: "Ayer",
  tomorrow: "Mañana",
  "this-week": "Esta semana",
  "this-month": "Este mes",
  "this-year": "Este año",
  future: "Futuro",
  "on-air": "On Air",
  currency: "Currency",
  "display-language": "Display Language",
  "name-language": "Name Language",
  appearance: "Appearance",
  language: "Language",
  region: "Region",
  vtuber: "VTuber",
  "yt-account": "YouTube Account",
  theme: "Theme",
  timezone: "Timezone",
  "selected-vtuber-per-total":
    "Selected {$INTERPOLATION} out of {$INTERPOLATION_1}\n",
  "currency-aed": "United Arab Emirates Dirham",
  "currency-afn": "Afghan Afghani",
  "currency-all": "Albanian Lek",
  "currency-amd": "Armenian Dram",
  "currency-ang": "Netherlands Antillean Guilder",
  "currency-aoa": "Angolan Kwanza",
  "currency-ars": "Argentine Peso",
  "currency-aud": "Australian Dollar",
  "currency-awg": "Aruban Florin",
  "currency-azn": "Azerbaijani Manat",
  "currency-bam": "Bosnia-Herzegovina Convertible Mark",
  "currency-bbd": "Barbadian Dollar",
  "currency-bdt": "Bangladeshi Taka",
  "currency-bgn": "Bulgarian Lev",
  "currency-bhd": "Bahraini Dinar",
  "currency-bif": "Burundian Franc",
  "currency-bmd": "Bermudan Dollar",
  "currency-bnd": "Brunei Dollar",
  "currency-bob": "Bolivian Boliviano",
  "currency-brl": "Brazilian Real",
  "currency-bsd": "Bahamian Dollar",
  "currency-btc": "Bitcoin",
  "currency-btn": "Bhutanese Ngultrum",
  "currency-bwp": "Botswanan Pula",
  "currency-byn": "Belarusian Ruble",
  "currency-bzd": "Belize Dollar",
  "currency-cad": "Canadian Dollar",
  "currency-cdf": "Congolese Franc",
  "currency-chf": "Swiss Franc",
  "currency-clf": "Chilean Unit of Account (UF)",
  "currency-clp": "Chilean Peso",
  "currency-cny": "Chinese Yuan",
  "currency-cop": "Colombian Peso",
  "currency-crc": "Costa Rican Colón",
  "currency-cuc": "Cuban Convertible Peso",
  "currency-cup": "Cuban Peso",
  "currency-cve": "Cape Verdean Escudo",
  "currency-czk": "Czech Republic Koruna",
  "currency-djf": "Djiboutian Franc",
  "currency-dkk": "Danish Krone",
  "currency-dop": "Dominican Peso",
  "currency-dzd": "Algerian Dinar",
  "currency-egp": "Egyptian Pound",
  "currency-ern": "Eritrean Nakfa",
  "currency-etb": "Ethiopian Birr",
  "currency-eur": "Euro",
  "currency-fjd": "Fijian Dollar",
  "currency-fkp": "Falkland Islands Pound",
  "currency-gbp": "British Pound Sterling",
  "currency-gel": "Georgian Lari",
  "currency-ggp": "Guernsey Pound",
  "currency-ghs": "Ghanaian Cedi",
  "currency-gip": "Gibraltar Pound",
  "currency-gmd": "Gambian Dalasi",
  "currency-gnf": "Guinean Franc",
  "currency-gtq": "Guatemalan Quetzal",
  "currency-gyd": "Guyanaese Dollar",
  "currency-hkd": "Hong Kong Dollar",
  "currency-hnl": "Honduran Lempira",
  "currency-hrk": "Croatian Kuna",
  "currency-htg": "Haitian Gourde",
  "currency-huf": "Hungarian Forint",
  "currency-idr": "Indonesian Rupiah",
  "currency-ils": "Israeli New Sheqel",
  "currency-imp": "Manx pound",
  "currency-inr": "Indian Rupee",
  "currency-iqd": "Iraqi Dinar",
  "currency-irr": "Iranian Rial",
  "currency-isk": "Icelandic Króna",
  "currency-jep": "Jersey Pound",
  "currency-jmd": "Jamaican Dollar",
  "currency-jod": "Jordanian Dinar",
  "currency-jpy": "Japanese Yen",
  "currency-kes": "Kenyan Shilling",
  "currency-kgs": "Kyrgystani Som",
  "currency-khr": "Cambodian Riel",
  "currency-kmf": "Comorian Franc",
  "currency-kpw": "North Korean Won",
  "currency-krw": "South Korean Won",
  "currency-kwd": "Kuwaiti Dinar",
  "currency-kyd": "Cayman Islands Dollar",
  "currency-kzt": "Kazakhstani Tenge",
  "currency-lak": "Laotian Kip",
  "currency-lbp": "Lebanese Pound",
  "currency-lkr": "Sri Lankan Rupee",
  "currency-lrd": "Liberian Dollar",
  "currency-lsl": "Lesotho Loti",
  "currency-lyd": "Libyan Dinar",
  "currency-mad": "Moroccan Dirham",
  "currency-mdl": "Moldovan Leu",
  "currency-mga": "Malagasy Ariary",
  "currency-mkd": "Macedonian Denar",
  "currency-mmk": "Myanma Kyat",
  "currency-mnt": "Mongolian Tugrik",
  "currency-mop": "Macanese Pataca",
  "currency-mru": "Mauritanian Ouguiya",
  "currency-mur": "Mauritian Rupee",
  "currency-mvr": "Maldivian Rufiyaa",
  "currency-mwk": "Malawian Kwacha",
  "currency-mxn": "Mexican Peso",
  "currency-myr": "Malaysian Ringgit",
  "currency-mzn": "Mozambican Metical",
  "currency-nad": "Namibian Dollar",
  "currency-ngn": "Nigerian Naira",
  "currency-nio": "Nicaraguan Córdoba",
  "currency-nok": "Norwegian Krone",
  "currency-npr": "Nepalese Rupee",
  "currency-nzd": "New Zealand Dollar",
  "currency-omr": "Omani Rial",
  "currency-pab": "Panamanian Balboa",
  "currency-pen": "Peruvian Nuevo Sol",
  "currency-pgk": "Papua New Guinean Kina",
  "currency-php": "Philippine Peso",
  "currency-pkr": "Pakistani Rupee",
  "currency-pln": "Polish Zloty",
  "currency-pyg": "Paraguayan Guarani",
  "currency-qar": "Qatari Rial",
  "currency-ron": "Romanian Leu",
  "currency-rsd": "Serbian Dinar",
  "currency-rub": "Russian Ruble",
  "currency-rwf": "Rwandan Franc",
  "currency-sar": "Saudi Riyal",
  "currency-sbd": "Solomon Islands Dollar",
  "currency-scr": "Seychellois Rupee",
  "currency-sdg": "Sudanese Pound",
  "currency-sek": "Swedish Krona",
  "currency-sgd": "Singapore Dollar",
  "currency-shp": "Saint Helena Pound",
  "currency-sll": "Sierra Leonean Leone",
  "currency-sos": "Somali Shilling",
  "currency-srd": "Surinamese Dollar",
  "currency-ssp": "South Sudanese Pound",
  "currency-stn": "Sao Tomean Dobra",
  "currency-svc": "Salvadoran Colón",
  "currency-syp": "Syrian Pound",
  "currency-szl": "Swazi Lilangeni",
  "currency-thb": "Thai Baht",
  "currency-tjs": "Tajikistani Somoni",
  "currency-tmt": "Turkmenistani Manat",
  "currency-tnd": "Tunisian Dinar",
  "currency-top": "Tongan Pa'anga",
  "currency-try": "Turkish Lira",
  "currency-ttd": "Trinidad and Tobago Dollar",
  "currency-twd": "New Taiwan Dollar",
  "currency-tzs": "Tanzanian Shilling",
  "currency-uah": "Ukrainian Hryvnia",
  "currency-ugx": "Ugandan Shilling",
  "currency-usd": "United States Dollar",
  "currency-uyu": "Uruguayan Peso",
  "currency-uzs": "Uzbekistan Som",
  "currency-ves": "Venezuelan Bolívar",
  "currency-vnd": "Vietnamese Dong",
  "currency-vuv": "Vanuatu Vatu",
  "currency-wst": "Samoan Tala",
  "currency-xaf": "CFA Franc BEAC",
  "currency-xag": "Silver Ounce",
  "currency-xau": "Gold Ounce",
  "currency-xcd": "East Caribbean Dollar",
  "currency-xdr": "Special Drawing Rights",
  "currency-xof": "CFA Franc BCEAO",
  "currency-xpd": "Palladium Ounce",
  "currency-xpf": "CFP Franc",
  "currency-xpt": "Platinum Ounce",
  "currency-yer": "Yemeni Rial",
  "currency-zar": "South African Rand",
  "currency-zmw": "Zambian Kwacha",
  "currency-zwl": "Zimbabwean Dollar",
};
