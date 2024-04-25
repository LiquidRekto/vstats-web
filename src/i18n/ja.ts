// Japanese (ja)

export { default as locale } from "@angular/common/locales/ja";
export { default as dateFnsLocale } from "date-fns/locale/ja";

import type { translations as t } from "./messages.json";

export const translations: typeof t = {
  "updated-at": "更新時間: {$ INTERPOLATION}",
  "channel-no-results": "No results, try selecting at least one VTuber",
  "select-vtuber": " Select VTuber ",
  name: "名前",
  total: "合計",
  subscribers: "登録者数",
  views: "再生回数",
  "last-day": "過去 1 日",
  "last-7days": "過去 7 日",
  "last-30days": "過去 30 日",
  channel: "チャネル",
  stream: "配信",
  "live-stream": "ライブ",
  scheduled: "予定",
  settings: "設定",
  "toggle-dark-mode": "ダークテーマに切り替える",
  "average-viewers": "平均的な視聴者",
  "maximum-viewers": "最大視聴者数",
  // streamHasEnded: "配信終了",
  // streaming: "配信中",
  // streamStartTime: "開始時間",
  // streamDuration: "間隔",
  // vtuberSelected: "Vtuber を選択し",
  "select-language": "言語を選択",
  "recent-streams": "最近の配信",
  "stream-viewers": "配信視聴者",
  "select-date": "日付を選択し",
  "no-stream": "配信なし",
  // streamTimeOn: "{$ INTERPOLATION_1}: 配信時間 {$ INTERPOLATION}",
  "stream-times": "配信時間",
  "live-chat": "チャット",
  today: "今日",
  yesterday: "昨日",
  tomorrow: "明日",
  "this-week": "今週",
  "this-month": "今月",
  "this-year": "今年",
  future: "未来",
  revenue: "收入",
  about: "About",
  "about-1": " vtstats is a platform for VTubers Statistics and Data Visualization. ",
  "about-2": " This is an open source project, you can find the source code at {$START_LINK}GitHub{$CLOSE_LINK}. ",
  "about-3": " If you find this website useful, consider supporting it with a donation by ",
  "about-4": " Join our discord server at {$START_LINK}https://discord.gg/m9NwUzKbkK{$CLOSE_LINK}. ",
  "about-5": " Credits to {$START_LINK}Return YouTube Dislike{$CLOSE_LINK} for providing youtube like/dislike data. ",
  "filter-by-vtuber": "Filter by VTuber",
  "clear": " Clear ",
  "misc": "Miscellaneous",
  "super-chats": "Super Chat",
  "super-sticker": "Super Stickers",
  "new-member": "New Member",
  "member-milestone": "Member Milestone",
  cheering: "Cheering",
  timed: "Timed",
  member: "メンバー",
  "hyper-chat": "Hyper Chat",
  search: "検索",
  "currency": "Currency",
  "display-language": "Display Language",
  "name-language": "Name Language",
  "appearance": "Appearance",
  "language": "Language",
  "region": "Region",
  "vtuber": "VTuber",
  "yt-account": "YouTube Account",
  "theme": "Theme",
  "timezone": "Timezone",
  "selected-vtuber-per-total": " Selected {$INTERPOLATION} out of {$INTERPOLATION_1}\n",
  // streamLikes: "高く評価",
  "currency-gbp": "UKポンド",
  "currency-jpy": "円",
  "currency-krw": "韓国ウォン",
  "currency-ils": "新シェケル",
  "currency-eur": "ユーロ",
  "currency-php": "フィリピン・ペソ",
  "currency-inr": "インド・ルピー",
  "currency-usd": "USドル",
  "currency-aud": "オーストラリア・ドル",
  "currency-aed": "UAEディルハム",
  "currency-ars": "アルゼンチン・ペソ",
  "currency-bam": "兌換マルク",
  "currency-bgn": "レフ",
  "currency-bob": "ボリビアーノ",
  "currency-byn": "ベラルーシ・ルーブル",
  "currency-cad": "カナダ・ドル",
  "currency-chf": "スイス・フラン",
  "currency-clp": "チリ・ペソ",
  "currency-cop": "コロンビア・ペソ",
  "currency-crc": "コスタリカ・コロン",
  "currency-czk": "チェコ・コルナ",
  "currency-dkk": "デンマーク・クローネ",
  "currency-egp": "エジプト・ポンド",
  "currency-gtq": "ケツァル",
  "currency-hkd": "香港ドル",
  "currency-hnl": "レンピラ",
  "currency-hrk": "クーナ",
  "currency-huf": "フォリント",
  "currency-isk": "アイスランド・クローナ",
  "currency-mxn": "メキシコ・ペソ",
  "currency-myr": "リンギット",
  "currency-nio": "コルドバ",
  "currency-nok": "ノルウェー・クローネ",
  "currency-twd": "ニュー台湾ドル",
  "currency-nzd": "ニュージーランド・ドル",
  "currency-pen": "ヌエボ・ソル",
  "currency-pln": "ズウォティ",
  "currency-brl": "レアル",
  "currency-ron": "ルーマニア・レウ",
  "currency-rsd": "セルビア・ディナール",
  "currency-rub": "ロシア・ルーブル",
  "currency-sar": "サウジアラビア・リヤル",
  "currency-sek": "スウェーデン・クローナ",
  "currency-sgd": "シンガポール・ドル",
  "currency-try": "トルコリラ",
  "currency-zar": "ランド",
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
