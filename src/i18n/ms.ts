/// Malay (ms)

export { default as locale } from "@angular/common/locales/ms";
export { default as dateFnsLocale } from "date-fns/locale/ms";

import { VSTATS_DISCORD_URL } from "src/constants/misc";
import type { translations as t } from "./messages.json";

export const translations: typeof t = {
  "updated-at": "Kemas kini terakhir pada {$INTERPOLATION}",
  "channel-no-results": "No results, try selecting at least one VTuber",
  "select-vtuber": "Select VTuber ",
  name: "Nama",
  total: "Jumlah",
  subscribers: "Pelanggan",
  views: "Tontonan",
  compare: "Compare",
  "last-day": "Sehari Lalu",
  "last-7days": "7 Hari Lalu",
  "last-30days": "30 Hari Lalu",
  "page-not-found": "Page Not Found",
  "page-not-found-desc": "But watame did nothing wrong.",
  channel: "Saluran",
  stream: "Siaran",
  "live-stream": "Siaran",
  scheduled: "Jadual",
  settings: "Tetapan",
  "toggle-dark-mode": "Paparan Cerah/Gelap",
  general: "general",
  "average-viewers": "Tontonan Purata",
  "maximum-viewers": "Tontonan Tertinggi",
  "discord-channel": "Discord Channel",
  // streamHasEnded: "Siaran telah tamat",
  // streaming: "Sedang berlangsung",
  // streamStartTime: "Masa Mula",
  // streamDuration: "Tempoh Siaran",
  // youtubeSubscribers: "Langganan YouTube",
  // bilibiliSubscribers: "Langganan bilibili",
  // youtubeViews: "Tontonan YouTube",
  // bilibiliViews: "Tontonan bilibili",
  // vtuberSelected: "Penggiat YouTube Maya Yang Dipaparkan",
  "select-language": "Pilihan Bahasa",
  "recent-streams": "Siaran Terkini",
  "stream-viewers": "Tontonan Siaran",
  "page-under-construction": "Page Under Construction",
  "page-under-construction-desc":
    "This section is currently under development and will be released soon.",
  "select-date": "Select Date",
  "no-stream": "No stream",
  // streamTimeOn: "Stream {$INTERPOLATION} on {$INTERPOLATION_1}",
  "stream-times": "Stream Times",
  "live-chat": "Live chat",
  "no-data": " NO DATA ",
  today: "Hari ini",
  yesterday: "Semalam",
  tomorrow: "Esok",
  "this-week": "Minggu ini",
  "this-month": "Bulan ini",
  "this-year": "Tahun ini",
  future: "Masa depan",
  // streamLikes: "Likes",
  revenue: "Revenue",
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
  "filter-by-vtuber": "Filter by VTuber",
  clear: "Clear ",
  misc: "Miscellaneous",
  "super-chats": "Super Chat",
  "super-sticker": "Super Stickers",
  "new-member": "New Member",
  "member-milestone": "Member Milestone",
  cheering: "Cheering",
  timed: "Timed",
  "start-time": "Start time",
  "end-time": "End time",
  duration: "Duration",
  "avg-max-viewers": "Avg./max viewers",
  "likes-and-dislikes": " Likes / dislikes ",
  "like-dislike-tooltip": "Provided by Return YouTube Dislike",
  "revenue-tooltip-1": "Only includes",
  "revenue-tooltip-youtube": "YouTube Super Chat & Super Sticker",
  "revenue-tooltip-twitch": "Twitch Cheering & Hyper Chat",
  member: "Member",
  "hyper-chat": "Hyper Chat",
  count: "Count",
  value: "Value",
  search: "Search",
  currency: "Currency",
  "display-language": "Display Language",
  "name-language": "Name Language",
  "native-name-label": "Native (e.g. 白上フブキ, Mori Calliope)",
  "english-name-label": "English (e.g. Shirakami Fubuki, Mori Calliope)",
  "japanese-name-label": "Japanese (e.g. 白上フブキ, 森カリオペ)",
  appearance: "Appearance",
  language: "Language",
  region: "Region",
  vtuber: "VTuber",
  "yt-account": "YouTube Account",
  theme: "Theme",
  "theme-sys-default-label": "System default",
  "theme-light": "Light",
  "theme-dark": "Dark",
  timezone: "Timezone",
  none: "None",
  filters: "Filters ",
  "show-retired": "Show graduated/terminated VTubers ",
  "on-air": "On Air",
  "selected-vtuber-per-total":
    "Selected {$INTERPOLATION} out of {$INTERPOLATION_1}\n",
  "currency-gbp": "United Kingdom Pound",
  "currency-jpy": "Japan Yen",
  "currency-krw": "South Korean Won",
  "currency-ils": "Israel Shekel",
  "currency-eur": "Euro",
  "currency-php": "Philippines Peso",
  "currency-inr": "India Rupee",
  "currency-usd": "United States Dollar",
  "currency-aud": "Australia Dollar",
  "currency-aed": "United Arab Emirates Dirham",
  "currency-ars": "Argentina Peso",
  "currency-bam": "Bosnia-Herzegovina Convertible Mark",
  "currency-bgn": "Bulgaria Lev",
  "currency-bob": "Bolivia Bolíviano",
  "currency-byn": "Belarus Ruble",
  "currency-cad": "Canada Dollar",
  "currency-chf": "Switzerland Franc",
  "currency-clp": "Chile Peso",
  "currency-cop": "Colombia Peso",
  "currency-crc": "Costa Rica Colon",
  "currency-czk": "Czech Republic Koruna",
  "currency-dkk": "Denmark Krone",
  "currency-egp": "Egypt Pound",
  "currency-gtq": "Guatemala Quetzal",
  "currency-hkd": "Hong Kong Dollar",
  "currency-hnl": "Honduras Lempira",
  "currency-hrk": "Croatia Kuna",
  "currency-huf": "Hungary Forint",
  "currency-isk": "Iceland Krona",
  "currency-mxn": "Mexico Peso",
  "currency-myr": "Malaysia Ringgit",
  "currency-nio": "Nicaragua Cordoba",
  "currency-nok": "Norway Krone",
  "currency-twd": "Taiwan New Dollar",
  "currency-nzd": "New Zealand Dollar",
  "currency-pen": "Peru Sol",
  "currency-pln": "Poland Zloty",
  "currency-brl": "Brazil Real",
  "currency-ron": "Romania Leu",
  "currency-rsd": "Serbia Dinar",
  "currency-rub": "Russia Ruble",
  "currency-sar": "Saudi Arabia Riyal",
  "currency-sek": "Sweden Krona",
  "currency-sgd": "Singapore Dollar",
  "currency-try": "Turkey Lira",
  "currency-zar": "South Africa Rand",
  "currency-afn": "Afghan Afghani",
  "currency-all": "Albanian Lek",
  "currency-amd": "Armenian Dram",
  "currency-ang": "Netherlands Antillean Guilder",
  "currency-aoa": "Angolan Kwanza",
  "currency-awg": "Aruban Florin",
  "currency-azn": "Azerbaijani Manat",
  "currency-bbd": "Barbadian Dollar",
  "currency-bdt": "Bangladeshi Taka",
  "currency-bhd": "Bahraini Dinar",
  "currency-bif": "Burundian Franc",
  "currency-bmd": "Bermudan Dollar",
  "currency-bnd": "Brunei Dollar",
  "currency-bsd": "Bahamian Dollar",
  "currency-btc": "Bitcoin",
  "currency-btn": "Bhutanese Ngultrum",
  "currency-bwp": "Botswanan Pula",
  "currency-bzd": "Belize Dollar",
  "currency-cdf": "Congolese Franc",
  "currency-clf": "Chilean Unit of Account (UF)",
  "currency-cny": "Chinese Yuan",
  "currency-cuc": "Cuban Convertible Peso",
  "currency-cup": "Cuban Peso",
  "currency-cve": "Cape Verdean Escudo",
  "currency-djf": "Djiboutian Franc",
  "currency-dop": "Dominican Peso",
  "currency-dzd": "Algerian Dinar",
  "currency-ern": "Eritrean Nakfa",
  "currency-etb": "Ethiopian Birr",
  "currency-fjd": "Fijian Dollar",
  "currency-fkp": "Falkland Islands Pound",
  "currency-gel": "Georgian Lari",
  "currency-ggp": "Guernsey Pound",
  "currency-ghs": "Ghanaian Cedi",
  "currency-gip": "Gibraltar Pound",
  "currency-gmd": "Gambian Dalasi",
  "currency-gnf": "Guinean Franc",
  "currency-gyd": "Guyanaese Dollar",
  "currency-htg": "Haitian Gourde",
  "currency-idr": "Indonesian Rupiah",
  "currency-imp": "Manx pound",
  "currency-iqd": "Iraqi Dinar",
  "currency-irr": "Iranian Rial",
  "currency-jep": "Jersey Pound",
  "currency-jmd": "Jamaican Dollar",
  "currency-jod": "Jordanian Dinar",
  "currency-kes": "Kenyan Shilling",
  "currency-kgs": "Kyrgystani Som",
  "currency-khr": "Cambodian Riel",
  "currency-kmf": "Comorian Franc",
  "currency-kpw": "North Korean Won",
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
  "currency-mzn": "Mozambican Metical",
  "currency-nad": "Namibian Dollar",
  "currency-ngn": "Nigerian Naira",
  "currency-npr": "Nepalese Rupee",
  "currency-omr": "Omani Rial",
  "currency-pab": "Panamanian Balboa",
  "currency-pgk": "Papua New Guinean Kina",
  "currency-pkr": "Pakistani Rupee",
  "currency-pyg": "Paraguayan Guarani",
  "currency-qar": "Qatari Rial",
  "currency-rwf": "Rwandan Franc",
  "currency-sbd": "Solomon Islands Dollar",
  "currency-scr": "Seychellois Rupee",
  "currency-sdg": "Sudanese Pound",
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
  "currency-ttd": "Trinidad and Tobago Dollar",
  "currency-tzs": "Tanzanian Shilling",
  "currency-uah": "Ukrainian Hryvnia",
  "currency-ugx": "Ugandan Shilling",
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
  "currency-zmw": "Zambian Kwacha",
  "currency-zwl": "Zimbabwean Dollar",
};
