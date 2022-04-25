export function findCountryFlagHelper(countryName: string) {
  const formattedCountryName = countryName.toLocaleLowerCase().replace(/\s/g, "")
  if (formattedCountryName === "brazil") {
    return "br"
  }
  else if (formattedCountryName === "afghanistan") {
    return "af"
  }
  else if (formattedCountryName === "angola") {
    return "ao"
  }
  else if (formattedCountryName === "albania") {
    return "al"
  }
  else if (formattedCountryName === "unitedarabemirates" || formattedCountryName === "emirates" || formattedCountryName === "uae") {
    return "ae"
  }
  else if (formattedCountryName === "argentina") {
    return "ar"
  }
  else if (formattedCountryName === "armenia") {
    return "am"
  }
  else if (formattedCountryName === "antarctica") {
    return "aq"
  }
  else if (formattedCountryName === "antiguaandbarbuda") {
    return "ag"
  }
  else if (formattedCountryName === "australia") {
    return "au"
  }
  else if (formattedCountryName === "andorra") {
    return "ad"
  }
  else if (formattedCountryName === "austria") {
    return "at"
  }
  else if (formattedCountryName === "azerbaijan") {
    return "az"
  }
  else if (formattedCountryName === "burundi") {
    return "bi"
  }
  else if (formattedCountryName === "belgium") {
    return "be"
  }
  else if (formattedCountryName === "benin") {
    return "bj"
  }
  else if (formattedCountryName === "burkinafaso") {
    return "bf"
  }
  else if (formattedCountryName === "bangladesh") {
    return "bd"
  }
  else if (formattedCountryName === "bulgaria") {
    return "bg"
  }
  else if (formattedCountryName === "bahamas") {
    return "bs"
  }
  else if (formattedCountryName === "bahrain") {
    return "bh"
  }
  else if (formattedCountryName === "bosniaandherz." || formattedCountryName === "bosnia" || formattedCountryName === "bosniaandherzegovina") {
    return "ba"
  }
  else if (formattedCountryName === "belarus") {
    return "by"
  }
  else if (formattedCountryName === "belize") {
    return "bz"
  }
  else if (formattedCountryName === "bolivia") {
    return "bo"
  }
  else if (formattedCountryName === "brunei") {
    return "bn"
  }
  else if (formattedCountryName === "bhutan") {
    return "bt"
  }
  else if (formattedCountryName === "botswana") {
    return "bw"
  }
  else if (formattedCountryName === "centralafricanrep." || formattedCountryName === "centralafricanrepublic") {
    return "cf"
  }
  else if (formattedCountryName === "canada") {
    return "ca"
  }
  else if (formattedCountryName === "switzerland") {
    return "ch"
  }
  else if (formattedCountryName === "chile") {
    return "cl"
  }
  else if (formattedCountryName === "cameroon") {
    return "cm"
  }
  else if (formattedCountryName === "china") {
    return "cn"
  }
  else if (formattedCountryName === "côted'ivoire" || formattedCountryName === "coted'ivoire" || formattedCountryName === "ivorycoast") {
    return "ci"
  }
  else if (formattedCountryName === "dem.rep.congo" || formattedCountryName === "democraticrepublicofthecongo" || formattedCountryName === "drc") {
    return "cd"
  }
  else if (formattedCountryName === "congo") {
    return "cg"
  }
  else if (formattedCountryName === "colombia") {
    return "co"
  }
  else if (formattedCountryName === "costarica") {
    return "cr"
  }
  else if (formattedCountryName === "cuba") {
    return "cu"
  }
  else if (formattedCountryName === "cyprus") {
    return "cy"
  }
  else if (formattedCountryName === "czechia" || formattedCountryName === "czechrepublic") {
    return "cz"
  }
  else if (formattedCountryName === "germany") {
    return "de"
  }
  else if (formattedCountryName === "djibouti") {
    return "dj"
  }
  else if (formattedCountryName === "denmark") {
    return "dk"
  }
  else if (formattedCountryName === "dominica") {
    return "dm"
  }
  else if (formattedCountryName === "dominicanrep." || formattedCountryName === "dominicanrepublic") {
    return "do"
  }
  else if (formattedCountryName === "algeria") {
    return "dz"
  }
  else if (formattedCountryName === "ecuador") {
    return "ec"
  }
  else if (formattedCountryName === "egypt") {
    return "eg"
  }
  else if (formattedCountryName === "eritrea") {
    return "er"
  }
  else if (formattedCountryName === "spain") {
    return "es"
  }
  else if (formattedCountryName === "tonga") {
    return "to"
  }
  else if (formattedCountryName === "seychelles") {
    return "sc"
  }
  else if (formattedCountryName === "estonia") {
    return "ee"
  }
  else if (formattedCountryName === "ethiopia") {
    return "et"
  }
  else if (formattedCountryName === "finland") {
    return "fi"
  }
  else if (formattedCountryName === "fiji") {
    return "fj"
  }
  else if (formattedCountryName === "france") {
    return "fr"
  }
  else if (formattedCountryName === "gabon") {
    return "ga"
  }
  else if (formattedCountryName === "georgia") {
    return "ge"
  }
  else if (formattedCountryName === "ghana") {
    return "gh"
  }
  else if (formattedCountryName === "guinea") {
    return "gn"
  }
  else if (formattedCountryName === "unitedkingdom" || formattedCountryName === "greatbritain" || formattedCountryName === "uk") {
    return "gb"
  }
  else if (formattedCountryName === "gambia") {
    return "gm"
  }
  else if (formattedCountryName === "guinea-bissau" || formattedCountryName === "guineabissau") {
    return "gw"
  }
  else if (formattedCountryName === "eq.guinea" || formattedCountryName === "equatorialguinea" || formattedCountryName === "eqguinea") {
    return "gq"
  }
  else if (formattedCountryName === "grenada") {
    return "gd"
  }
  else if (formattedCountryName === "saintvincentandthegrenadines" || formattedCountryName === "stvincentandthegrenadines") {
    return "vc"
  }
  else if (formattedCountryName === "greece") {
    return "gr"
  }
  else if (formattedCountryName === "greenland") {
    return "gl"
  }
  else if (formattedCountryName === "guatemala") {
    return "gt"
  }
  else if (formattedCountryName === "guyana") {
    return "gy"
  }
  else if (formattedCountryName === "honduras") {
    return "hn"
  }
  else if (formattedCountryName === "croatia") {
    return "hr"
  }
  else if (formattedCountryName === "haiti") {
    return "ht"
  }
  else if (formattedCountryName === "hungary") {
    return "hu"
  }
  else if (formattedCountryName === "singapore") {
    return "sg"
  }
  else if (formattedCountryName === "indonesia") {
    return "id"
  }
  else if (formattedCountryName === "india") {
    return "in"
  }
  else if (formattedCountryName === "ireland") {
    return "ie"
  }
  else if (formattedCountryName === "iraq") {
    return "iq"
  }
  else if (formattedCountryName === "iran") {
    return "ir"
  }
  else if (formattedCountryName === "iceland") {
    return "is"
  }
  else if (formattedCountryName === "israel") {
    return "il"
  }
  else if (formattedCountryName === "italy") {
    return "it"
  }
  else if (formattedCountryName === "jamaica") {
    return "jm"
  }
  else if (formattedCountryName === "jordan") {
    return "jo"
  }
  else if (formattedCountryName === "japan") {
    return "jp"
  }
  else if (formattedCountryName === "kazakhstan") {
    return "kz"
  }
  else if (formattedCountryName === "kenya") {
    return "ke"
  }
  else if (formattedCountryName === "kyrgyzstan") {
    return "kg"
  }
  else if (formattedCountryName === "cambodia") {
    return "kh"
  }
  else if (formattedCountryName === "southkorea") {
    return "kr"
  }
  else if (formattedCountryName === "kosovo") {
    return "xk"
  }
  else if (formattedCountryName === "kuwait") {
    return "kw"
  }
  else if (formattedCountryName === "laos") {
    return "la"
  }
  else if (formattedCountryName === "lebanon") {
    return "lb"
  }
  else if (formattedCountryName === "liberia") {
    return "lr"
  }
  else if (formattedCountryName === "libya") {
    return "ly"
  }
  else if (formattedCountryName === "srilanka") {
    return "lk"
  }
  else if (formattedCountryName === "lesotho") {
    return "ls"
  }
  else if (formattedCountryName === "lithuania") {
    return "lt"
  }
  else if (formattedCountryName === "liechtenstein") {
    return "li"
  }
  else if (formattedCountryName === "luxembourg") {
    return "lu"
  }
  else if (formattedCountryName === "latvia") {
    return "lv"
  }
  else if (formattedCountryName === "morocco") {
    return "ma"
  }
  else if (formattedCountryName === "moldova") {
    return "md"
  }
  else if (formattedCountryName === "madagascar") {
    return "mg"
  }
  else if (formattedCountryName === "marshallislands") {
    return "mh"
  }
  else if (formattedCountryName === "mexico") {
    return "mx"
  }
  else if (formattedCountryName === "macedonia" || formattedCountryName === "northmacedonia") {
    return "mk"
  }
  else if (formattedCountryName === "mali") {
    return "ml"
  }
  else if (formattedCountryName === "myanmar") {
    return "mm"
  }
  else if (formattedCountryName === "montenegro") {
    return "me"
  }
  else if (formattedCountryName === "mongolia") {
    return "mn"
  }
  else if (formattedCountryName === "monaco") {
    return "mc"
  }
  else if (formattedCountryName === "mozambique") {
    return "mz"
  }
  else if (formattedCountryName === "mauritania") {
    return "mr"
  }
  else if (formattedCountryName === "mauritius") {
    return "mu"
  }
  else if (formattedCountryName === "comoros") {
    return "km"
  }
  else if (formattedCountryName === "caboverde" || formattedCountryName === "capeverde") {
    return "cv"
  }
  else if (formattedCountryName === "kiribati") {
    return "ki"
  }
  else if (formattedCountryName === "micronesia") {
    return "fm"
  }
  else if (formattedCountryName === "malawi") {
    return "mw"
  }
  else if (formattedCountryName === "malta") {
    return "mt"
  }
  else if (formattedCountryName === "maldives") {
    return "mv"
  }
  else if (formattedCountryName === "malaysia") {
    return "my"
  }
  else if (formattedCountryName === "barbados") {
    return "bb"
  }
  else if (formattedCountryName === "namibia") {
    return "na"
  }
  else if (formattedCountryName === "niger") {
    return "ne"
  }
  else if (formattedCountryName === "nigeria") {
    return "ng"
  }
  else if (formattedCountryName === "nicaragua") {
    return "ni"
  }
  else if (formattedCountryName === "netherlands") {
    return "nl"
  }
  else if (formattedCountryName === "norway") {
    return "no"
  }
  else if (formattedCountryName === "nepal") {
    return "np"
  }
  else if (formattedCountryName === "palau") {
    return "pw"
  }
  else if (formattedCountryName === "tuvalu") {
    return "tv"
  }
  else if (formattedCountryName === "nauru") {
    return "nr"
  }
  else if (formattedCountryName === "vatican" || formattedCountryName === "vaticancity" || formattedCountryName === "holysee") {
    return "va"
  }
  else if (formattedCountryName === "newzealand") {
    return "nz"
  }
  else if (formattedCountryName === "oman") {
    return "om"
  }
  else if (formattedCountryName === "pakistan") {
    return "pk"
  }
  else if (formattedCountryName === "tanzania") {
    return "tz"
  }
  else if (formattedCountryName === "panama") {
    return "pa"
  }
  else if (formattedCountryName === "peru") {
    return "pe"
  }
  else if (formattedCountryName === "philippines") {
    return "ph"
  }
  else if (formattedCountryName === "papuanewguinea") {
    return "pg"
  }
  else if (formattedCountryName === "northkorea") {
    return "kp"
  }
  else if (formattedCountryName === "poland") {
    return "pl"
  }
  else if (formattedCountryName === "portugal") {
    return "pt"
  }
  else if (formattedCountryName === "paraguay") {
    return "py"
  }
  else if (formattedCountryName === "palestine" || formattedCountryName === "stateofpalestine") {
    return "ps"
  }
  else if (formattedCountryName === "qatar") {
    return "qa"
  }
  else if (formattedCountryName === "romania") {
    return "ro"
  }
  else if (formattedCountryName === "russia") {
    return "ru"
  }
  else if (formattedCountryName === "rwanda") {
    return "rw"
  }
  else if (formattedCountryName === "saudiarabia") {
    return "sa"
  }
  else if (formattedCountryName === "sanmarino") {
    return "sm"
  }
  else if (formattedCountryName === "sudan") {
    return "sd"
  }
  else if (formattedCountryName === "samoa") {
    return "ws"
  }
  else if (formattedCountryName === "saintkittsandnevis" || formattedCountryName === "stkittsandnevis") {
    return "kn"
  }
  else if (formattedCountryName === "saintlucia" || formattedCountryName === "stlucia") {
    return "lc"
  }
  else if (formattedCountryName === "saotome&principe" || formattedCountryName === "saotomeandprincipe") {
    return "st"
  }
  else if (formattedCountryName === "s.sudan" || formattedCountryName === "southsudan") {
    return "ss"
  }
  else if (formattedCountryName === "senegal") {
    return "sn"
  }
  else if (formattedCountryName === "solomonis." || formattedCountryName === "solomonislands") {
    return "sb"
  }
  else if (formattedCountryName === "sierraleone") {
    return "sl"
  }
  else if (formattedCountryName === "elsalvador") {
    return "sv"
  }
  else if (formattedCountryName === "somalia") {
    return "so"
  }
  else if (formattedCountryName === "serbia") {
    return "rs"
  }
  else if (formattedCountryName === "suriname") {
    return "sr"
  }
  else if (formattedCountryName === "slovakia") {
    return "sk"
  }
  else if (formattedCountryName === "slovenia") {
    return "si"
  }
  else if (formattedCountryName === "sweden") {
    return "se"
  }
  else if (formattedCountryName === "swaziland") {
    return "sz"
  }
  else if (formattedCountryName === "syria") {
    return "sy"
  }
  else if (formattedCountryName === "chad") {
    return "td"
  }
  else if (formattedCountryName === "togo") {
    return "tg"
  }
  else if (formattedCountryName === "thailand") {
    return "th"
  }
  else if (formattedCountryName === "tajikistan") {
    return "tj"
  }
  else if (formattedCountryName === "turkmenistan") {
    return "tm"
  }
  else if (formattedCountryName === "timor-leste" || formattedCountryName === "timorleste" || formattedCountryName === "easttimor") {
    return "tl"
  }
  else if (formattedCountryName === "trinidadandtobago") {
    return "tt"
  }
  else if (formattedCountryName === "tunisia") {
    return "tn"
  }
  else if (formattedCountryName === "turkey") {
    return "tr"
  }
  else if (formattedCountryName === "taiwan") {
    return "tw"
  }
  else if (formattedCountryName === "uganda") {
    return "ug"
  }
  else if (formattedCountryName === "ukraine") {
    return "ua"
  }
  else if (formattedCountryName === "uruguay") {
    return "uy"
  }
  else if (formattedCountryName === "unitedstatesofamerica" || formattedCountryName === "unitedstates" || formattedCountryName === "usa") {
    return "us"
  }
  else if (formattedCountryName === "uzbekistan") {
    return "uz"
  }
  else if (formattedCountryName === "venezuela") {
    return "ve"
  }
  else if (formattedCountryName === "vietnam") {
    return "vn"
  }
  else if (formattedCountryName === "vanuatu") {
    return "vu"
  }
  else if (formattedCountryName === "yemen") {
    return "ye"
  }
  else if (formattedCountryName === "southafrica") {
    return "za"
  }
  else if (formattedCountryName === "zambia") {
    return "zm"
  }
  else if (formattedCountryName === "zimbabwe") {
    return "zw"
  }
  else {
    return ""
  }
}