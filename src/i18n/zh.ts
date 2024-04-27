// Chinese (zh)

export { default as locale } from "@angular/common/locales/zh-Hant";
export { default as dateFnsLocale } from "date-fns/locale/zh-TW";

import { VSTATS_DISCORD_URL } from "src/constants/misc";
import type { translations as t } from "./messages.json";

export const translations: typeof t = {
  "updated-at": "更新於 {$INTERPOLATION}",
  "channel-no-results": "No results, try selecting at least one VTuber",
  "select-vtuber": " Select VTuber ",
  name: "名稱",
  total: "總計",
  subscribers: "訂閱",
  views: "觀看",
  "last-day": "日增",
  "last-7days": "週增",
  "last-30days": "月增",
  "live-stream": "直播",
  scheduled: "預定直播",
  settings: "設置",
  channel: "頻道",
  stream: "直播",
  "toggle-dark-mode": "切換夜間模式",
  "average-viewers": "平均同接",
  "maximum-viewers": "最高同接",
  // streamHasEnded: "直播結束",
  // streaming: "正在直播",
  // streamStartTime: "開始時間",
  // streamDuration: "持續時間",
  "select-language": "選擇語言",
  "recent-streams": "最近直播",
  "stream-viewers": "直播同接",
  "select-date": "選擇日期",
  "no-stream": "无直播",
  // streamTimeOn: "{$INTERPOLATION_1}: 直播時間 {$INTERPOLATION}",
  "stream-times": "直播時間",
  "live-chat": "聊天室",
  today: "今天",
  yesterday: "昨天",
  tomorrow: "明天",
  "this-week": " 本周",
  "this-month": " 本月",
  "this-year": " 今年",
  future: "未來",
  "on-air": "On Air",
  revenue: "收入",
  about: "關於",
  "about-1": " vtstats is a platform for VTubers Statistics and Data Visualization. ",
  "about-2": " This is an open source project, you can find the source code at {$START_LINK}GitHub{$CLOSE_LINK}. ",
  "about-3": " If you find this website useful, consider supporting it with a donation by ",
  "about-4": ` Join our discord server at {$START_LINK}${VSTATS_DISCORD_URL}{$CLOSE_LINK}. `,
  "about-5": " Credits to {$START_LINK}Return YouTube Dislike{$CLOSE_LINK} for providing youtube like/dislike data. ",
  "filter-by-vtuber": "Filter by VTuber",
  "clear": " Clear ",
  "misc": "Miscellaneous",
  "super-chats": "超級留言",
  "super-sticker": "超級貼圖",
  "new-member": "New Member",
  "member-milestone": "Member Milestone",
  cheering: "Cheering",
  timed: "Timed",
  "start-time": "Start time",
  "end-time": "End time",
  "duration": "Duration",
  "avg-max-viewers": "Avg./max viewers",
  "likes-and-dislikes": " Likes / dislikes ",
  member: "會員",
  "hyper-chat": "Hyper Chat",
  search: "搜索",
  "currency": "Currency",
  "display-language": "Display Language",
  "name-language": "Name Language",
  "native-name-label": "Native (e.g. 白上フブキ, Mori Calliope)",
  "english-name-label": "English (e.g. Shirakami Fubuki, Mori Calliope)",
  "japanese-name-label": "Japanese (e.g. 白上フブキ, 森カリオペ)",
  "appearance": "Appearance",
  "language": "Language",
  "region": "Region",
  "vtuber": "VTuber",
  "yt-account": "YouTube Account",
  "theme": "Theme",
  "theme-sys-default-label": "System default",
  "theme-light": "Light",
  "theme-dark": "Dark",
  "timezone": "Timezone",
  "none": "None",
  "filters": " Filters ",
  "show-retired": " Show graduated/terminated VTubers ",
  "selected-vtuber-per-total": " Selected {$INTERPOLATION} out of {$INTERPOLATION_1}\n",
  // streamLikes: "喜歡",
  "currency-gbp": "英鎊",
  "currency-jpy": "日元",
  "currency-krw": "韓圓",
  "currency-ils": "以色列新謝克爾",
  "currency-eur": "歐元",
  "currency-php": "菲律賓披索",
  "currency-inr": "印度盧比",
  "currency-usd": "美元",
  "currency-aud": "澳元",
  "currency-aed": "阿聯迪拉姆",
  "currency-ars": "阿根廷披索",
  "currency-bam": "波士尼亞與赫塞哥維納可兌換馬克",
  "currency-bgn": "保加利亞列弗",
  "currency-bob": "玻利維亞玻利維亞諾",
  "currency-byn": "白俄羅斯盧布",
  "currency-cad": "加拿大元",
  "currency-chf": "瑞士法郎",
  "currency-clp": "智利披索",
  "currency-cop": "哥倫比亞披索",
  "currency-crc": "哥斯大黎加科朗",
  "currency-czk": "捷克克朗",
  "currency-dkk": "丹麥克朗",
  "currency-egp": "埃及鎊",
  "currency-gtq": "瓜地馬拉格查爾",
  "currency-hkd": "港元",
  "currency-hnl": "宏都拉斯倫皮拉",
  "currency-hrk": "克羅埃西亞庫納",
  "currency-huf": "匈牙利福林",
  "currency-isk": "冰島克朗",
  "currency-mxn": "墨西哥披索",
  "currency-myr": "馬來西亞令吉",
  "currency-nio": "尼加拉瓜科多巴",
  "currency-nok": "挪威克朗",
  "currency-twd": "新台幣",
  "currency-nzd": "紐西蘭元",
  "currency-pen": "秘魯新索爾",
  "currency-pln": "茲羅提",
  "currency-brl": "巴西雷亞爾",
  "currency-ron": "羅馬尼亞列伊",
  "currency-rsd": "塞爾維亞第納爾",
  "currency-rub": "俄羅斯盧布",
  "currency-sar": "沙烏地里亞爾",
  "currency-sek": "瑞典克朗",
  "currency-sgd": "新加坡元",
  "currency-try": "土耳其里拉",
  "currency-zar": "南非蘭特",
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
