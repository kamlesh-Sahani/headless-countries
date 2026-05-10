export interface CountryData {
  code: string;
  name: string;
  dial: string;
  flag: string;
  digits: number;
  format: string;
  continent?: string;
  capital?: string;
  currency?: string;
  languages?: string[];
}

export const COUNTRIES: CountryData[] = [
  {"code":"AF","name":"Afghanistan","dial":"+93","flag":"🇦🇫","digits":9,"format":"## ### ####","continent":"AS","capital":"Kabul","currency":"AFN","languages":["ps","fa","uz","tk"]},
  {"code":"AL","name":"Albania","dial":"+355","flag":"🇦🇱","digits":9,"format":"## ### ####","continent":"EU","capital":"Tirana","currency":"ALL","languages":["sq"]},
  {"code":"DZ","name":"Algeria","dial":"+213","flag":"🇩🇿","digits":9,"format":"### ## ## ##","continent":"AF","capital":"Algiers","currency":"DZD","languages":["ar"]},
  {"code":"AS","name":"American Samoa","dial":"+1684","flag":"🇦🇸","digits":7,"format":"### ####","continent":"OC","capital":"Pago Pago","currency":"USD","languages":["en","sm"]},
  {"code":"AD","name":"Andorra","dial":"+376","flag":"🇦🇩","digits":6,"format":"### ###","continent":"EU","capital":"Andorra la Vella","currency":"EUR","languages":["ca"]},
  {"code":"AO","name":"Angola","dial":"+244","flag":"🇦🇴","digits":9,"format":"### ### ###","continent":"AF","capital":"Luanda","currency":"AOA","languages":["pt"]},
  {"code":"AI","name":"Anguilla","dial":"+1264","flag":"🇦🇮","digits":7,"format":"### ####","continent":"NA","capital":"The Valley","currency":"XCD","languages":["en"]},
  {"code":"AG","name":"Antigua & Barbuda","dial":"+1268","flag":"🇦🇬","digits":7,"format":"### ####","continent":"NA","capital":"Saint John's","currency":"XCD","languages":["en"]},
  {"code":"AR","name":"Argentina","dial":"+54","flag":"🇦🇷","digits":10,"format":"## #### ####","continent":"SA","capital":"Buenos Aires","currency":"ARS","languages":["es","gn"]},
  {"code":"AM","name":"Armenia","dial":"+374","flag":"🇦🇲","digits":8,"format":"## ######","continent":"AS","capital":"Yerevan","currency":"AMD","languages":["hy","ru"]},
  {"code":"AW","name":"Aruba","dial":"+297","flag":"🇦🇼","digits":7,"format":"### ####","continent":"NA","capital":"Oranjestad","currency":"AWG","languages":["nl","pa"]},
  {"code":"AU","name":"Australia","dial":"+61","flag":"🇦🇺","digits":9,"format":"### ### ###","continent":"OC","capital":"Canberra","currency":"AUD","languages":["en"]},
  {"code":"AT","name":"Austria","dial":"+43","flag":"🇦🇹","digits":10,"format":"### ### ####","continent":"EU","capital":"Vienna","currency":"EUR","languages":["de"]},
  {"code":"AZ","name":"Azerbaijan","dial":"+994","flag":"🇦🇿","digits":9,"format":"## ### ## ##","continent":"AS","capital":"Baku","currency":"AZN","languages":["az"]},
  {"code":"BS","name":"Bahamas","dial":"+1242","flag":"🇧🇸","digits":7,"format":"### ####","continent":"NA","capital":"Nassau","currency":"BSD","languages":["en"]},
  {"code":"BH","name":"Bahrain","dial":"+973","flag":"🇧🇭","digits":8,"format":"#### ####","continent":"AS","capital":"Manama","currency":"BHD","languages":["ar"]},
  {"code":"BD","name":"Bangladesh","dial":"+880","flag":"🇧🇩","digits":10,"format":"#### ######","continent":"AS","capital":"Dhaka","currency":"BDT","languages":["bn"]},
  {"code":"BB","name":"Barbados","dial":"+1246","flag":"🇧🇧","digits":7,"format":"### ####","continent":"NA","capital":"Bridgetown","currency":"BBD","languages":["en"]},
  {"code":"BY","name":"Belarus","dial":"+375","flag":"🇧🇾","digits":9,"format":"## ###-##-##","continent":"EU","capital":"Minsk","currency":"BYN","languages":["be","ru"]},
  {"code":"BE","name":"Belgium","dial":"+32","flag":"🇧🇪","digits":9,"format":"### ## ## ##","continent":"EU","capital":"Brussels","currency":"EUR","languages":["nl","fr","de"]},
  {"code":"BZ","name":"Belize","dial":"+501","flag":"🇧🇿","digits":7,"format":"### ####","continent":"NA","capital":"Belmopan","currency":"BZD","languages":["en","es"]},
  {"code":"BJ","name":"Benin","dial":"+229","flag":"🇧🇯","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Porto-Novo","currency":"XOF","languages":["fr"]},
  {"code":"BM","name":"Bermuda","dial":"+1441","flag":"🇧🇲","digits":7,"format":"### ####","continent":"NA","capital":"Hamilton","currency":"BMD","languages":["en"]},
  {"code":"BT","name":"Bhutan","dial":"+975","flag":"🇧🇹","digits":8,"format":"## ## ## ##","continent":"AS","capital":"Thimphu","currency":"BTN","languages":["dz"]},
  {"code":"BO","name":"Bolivia","dial":"+591","flag":"🇧🇴","digits":8,"format":"#### ####","continent":"SA","capital":"Sucre","currency":"BOB","languages":["es","ay","qu"]},
  {"code":"BA","name":"Bosnia & Herzegovina","dial":"+387","flag":"🇧🇦","digits":8,"format":"## ### ###","continent":"EU","capital":"Sarajevo","currency":"BAM","languages":["bs","hr","sr"]},
  {"code":"BW","name":"Botswana","dial":"+267","flag":"🇧🇼","digits":7,"format":"## ### ##","continent":"AF","capital":"Gaborone","currency":"BWP","languages":["en","tn"]},
  {"code":"BR","name":"Brazil","dial":"+55","flag":"🇧🇷","digits":11,"format":"## ##### ####","continent":"SA","capital":"Brasília","currency":"BRL","languages":["pt"]},
  {"code":"IO","name":"British Indian Ocean Territory","dial":"+246","flag":"🇮🇴","digits":7,"format":"### ####","continent":"AS","capital":"Diego Garcia","currency":"USD","languages":["en"]},
  {"code":"VG","name":"British Virgin Islands","dial":"+1284","flag":"🇻🇬","digits":7,"format":"### ####","continent":"NA","capital":"Road Town","currency":"USD","languages":["en"]},
  {"code":"BN","name":"Brunei","dial":"+673","flag":"🇧🇳","digits":7,"format":"### ####","continent":"AS","capital":"Bandar Seri Begawan","currency":"BND","languages":["ms"]},
  {"code":"BG","name":"Bulgaria","dial":"+359","flag":"🇧🇬","digits":9,"format":"### ### ###","continent":"EU","capital":"Sofia","currency":"EUR","languages":["bg"]},
  {"code":"BF","name":"Burkina Faso","dial":"+226","flag":"🇧🇫","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Ouagadougou","currency":"XOF","languages":["fr","ff"]},
  {"code":"BI","name":"Burundi","dial":"+257","flag":"🇧🇮","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Gitega","currency":"BIF","languages":["fr","rn"]},
  {"code":"CV","name":"Cabo Verde","dial":"+238","flag":"🇨🇻","digits":7,"format":"### ## ##","continent":"AF","capital":"Praia","currency":"CVE","languages":["pt"]},
  {"code":"KH","name":"Cambodia","dial":"+855","flag":"🇰🇭","digits":9,"format":"## ### ####","continent":"AS","capital":"Phnom Penh","currency":"KHR","languages":["km"]},
  {"code":"CM","name":"Cameroon","dial":"+237","flag":"🇨🇲","digits":9,"format":"#### #####","continent":"AF","capital":"Yaoundé","currency":"XAF","languages":["en","fr"]},
  {"code":"CA","name":"Canada","dial":"+1","flag":"🇨🇦","digits":10,"format":"### ### ####","continent":"NA","capital":"Ottawa","currency":"CAD","languages":["en","fr"]},
  {"code":"KY","name":"Cayman Islands","dial":"+1345","flag":"🇰🇾","digits":7,"format":"### ####","continent":"NA","capital":"George Town","currency":"KYD","languages":["en"]},
  {"code":"CF","name":"Central African Republic","dial":"+236","flag":"🇨🇫","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Bangui","currency":"XAF","languages":["fr","sg"]},
  {"code":"TD","name":"Chad","dial":"+235","flag":"🇹🇩","digits":8,"format":"## ## ## ##","continent":"AF","capital":"N'Djamena","currency":"XAF","languages":["fr","ar"]},
  {"code":"CL","name":"Chile","dial":"+56","flag":"🇨🇱","digits":9,"format":"# #### ####","continent":"SA","capital":"Santiago","currency":"CLP","languages":["es"]},
  {"code":"CN","name":"China","dial":"+86","flag":"🇨🇳","digits":11,"format":"### #### ####","continent":"AS","capital":"Beijing","currency":"CNY","languages":["zh"]},
  {"code":"CX","name":"Christmas Island","dial":"+61","flag":"🇨🇽","digits":9,"format":"### ### ###","continent":"AS","capital":"Flying Fish Cove","currency":"AUD","languages":["en"]},
  {"code":"CC","name":"Cocos (Keeling) Islands","dial":"+61","flag":"🇨🇨","digits":9,"format":"### ### ###","continent":"AS","capital":"West Island","currency":"AUD","languages":["en"]},
  {"code":"CO","name":"Colombia","dial":"+57","flag":"🇨🇴","digits":10,"format":"### ### ####","continent":"SA","capital":"Bogotá","currency":"COP","languages":["es"]},
  {"code":"KM","name":"Comoros","dial":"+269","flag":"🇰🇲","digits":7,"format":"### ## ##","continent":"AF","capital":"Moroni","currency":"KMF","languages":["ar","fr"]},
  {"code":"CG","name":"Congo","dial":"+242","flag":"🇨🇬","digits":9,"format":"## ### ####","continent":"AF","capital":"Brazzaville","currency":"XAF","languages":["fr","ln"]},
  {"code":"CD","name":"Congo (DRC)","dial":"+243","flag":"🇨🇩","digits":9,"format":"### ### ###","continent":"AF","capital":"Kinshasa","currency":"CDF","languages":["fr","ln","kg","sw","lu"]},
  {"code":"CK","name":"Cook Islands","dial":"+682","flag":"🇨🇰","digits":5,"format":"#####","continent":"OC","capital":"Avarua","currency":"NZD","languages":["en"]},
  {"code":"CR","name":"Costa Rica","dial":"+506","flag":"🇨🇷","digits":8,"format":"#### ####","continent":"NA","capital":"San José","currency":"CRC","languages":["es"]},
  {"code":"HR","name":"Croatia","dial":"+385","flag":"🇭🇷","digits":9,"format":"## ### ####","continent":"EU","capital":"Zagreb","currency":"EUR","languages":["hr"]},
  {"code":"CU","name":"Cuba","dial":"+53","flag":"🇨🇺","digits":8,"format":"# ### ####","continent":"NA","capital":"Havana","currency":"CUP","languages":["es"]},
  {"code":"CW","name":"Curaçao","dial":"+599","flag":"🇨🇼","digits":7,"format":"### ####","continent":"NA","capital":"Willemstad","currency":"ANG","languages":["nl","pa","en"]},
  {"code":"CY","name":"Cyprus","dial":"+357","flag":"🇨🇾","digits":8,"format":"## ######","continent":"EU","capital":"Nicosia","currency":"EUR","languages":["el","tr","hy"]},
  {"code":"CZ","name":"Czech Republic","dial":"+420","flag":"🇨🇿","digits":9,"format":"### ### ###","continent":"EU","capital":"Prague","currency":"CZK","languages":["cs"]},
  {"code":"DK","name":"Denmark","dial":"+45","flag":"🇩🇰","digits":8,"format":"## ## ## ##","continent":"EU","capital":"Copenhagen","currency":"DKK","languages":["da"]},
  {"code":"DJ","name":"Djibouti","dial":"+253","flag":"🇩🇯","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Djibouti","currency":"DJF","languages":["fr","ar"]},
  {"code":"DM","name":"Dominica","dial":"+1767","flag":"🇩🇲","digits":7,"format":"### ####","continent":"NA","capital":"Roseau","currency":"XCD","languages":["en"]},
  {"code":"DO","name":"Dominican Republic","dial":"+1809","flag":"🇩🇴","digits":7,"format":"### ####","continent":"NA","capital":"Santo Domingo","currency":"DOP","languages":["es"]},
  {"code":"EC","name":"Ecuador","dial":"+593","flag":"🇪🇨","digits":9,"format":"## ### ####","continent":"SA","capital":"Quito","currency":"USD","languages":["es"]},
  {"code":"EG","name":"Egypt","dial":"+20","flag":"🇪🇬","digits":10,"format":"### ### ####","continent":"AF","capital":"Cairo","currency":"EGP","languages":["ar"]},
  {"code":"SV","name":"El Salvador","dial":"+503","flag":"🇸🇻","digits":8,"format":"#### ####","continent":"NA","capital":"San Salvador","currency":"USD","languages":["es"]},
  {"code":"GQ","name":"Equatorial Guinea","dial":"+240","flag":"🇬🇶","digits":9,"format":"## ### ####","continent":"AF","capital":"Malabo","currency":"XAF","languages":["es","fr"]},
  {"code":"ER","name":"Eritrea","dial":"+291","flag":"🇪🇷","digits":7,"format":"# ### ###","continent":"AF","capital":"Asmara","currency":"ERN","languages":["ti","ar","en"]},
  {"code":"EE","name":"Estonia","dial":"+372","flag":"🇪🇪","digits":8,"format":"#### ####","continent":"EU","capital":"Tallinn","currency":"EUR","languages":["et"]},
  {"code":"SZ","name":"Eswatini","dial":"+268","flag":"🇸🇿","digits":8,"format":"#### ####","continent":"AF","capital":"Lobamba","currency":"SZL","languages":["en","ss"]},
  {"code":"ET","name":"Ethiopia","dial":"+251","flag":"🇪🇹","digits":9,"format":"## ### ####","continent":"AF","capital":"Addis Ababa","currency":"ETB","languages":["am"]},
  {"code":"FK","name":"Falkland Islands","dial":"+500","flag":"🇫🇰","digits":5,"format":"#####","continent":"SA","capital":"Stanley","currency":"FKP","languages":["en"]},
  {"code":"FO","name":"Faroe Islands","dial":"+298","flag":"🇫🇴","digits":6,"format":"######","continent":"EU","capital":"Tórshavn","currency":"DKK","languages":["fo"]},
  {"code":"FJ","name":"Fiji","dial":"+679","flag":"🇫🇯","digits":7,"format":"### ####","continent":"OC","capital":"Suva","currency":"FJD","languages":["en","fj","hi","ur"]},
  {"code":"FI","name":"Finland","dial":"+358","flag":"🇫🇮","digits":10,"format":"## ### ## ###","continent":"EU","capital":"Helsinki","currency":"EUR","languages":["fi","sv"]},
  {"code":"FR","name":"France","dial":"+33","flag":"🇫🇷","digits":9,"format":"# ## ## ## ##","continent":"EU","capital":"Paris","currency":"EUR","languages":["fr"]},
  {"code":"GF","name":"French Guiana","dial":"+594","flag":"🇬🇫","digits":9,"format":"### ## ## ##","continent":"SA","capital":"Cayenne","currency":"EUR","languages":["fr"]},
  {"code":"PF","name":"French Polynesia","dial":"+689","flag":"🇵🇫","digits":8,"format":"## ## ## ##","continent":"OC","capital":"Papeetē","currency":"XPF","languages":["fr"]},
  {"code":"GA","name":"Gabon","dial":"+241","flag":"🇬🇦","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Libreville","currency":"XAF","languages":["fr"]},
  {"code":"GM","name":"Gambia","dial":"+220","flag":"🇬🇲","digits":7,"format":"### ####","continent":"AF","capital":"Banjul","currency":"GMD","languages":["en"]},
  {"code":"GE","name":"Georgia","dial":"+995","flag":"🇬🇪","digits":9,"format":"### ## ## ##","continent":"AS","capital":"Tbilisi","currency":"GEL","languages":["ka"]},
  {"code":"DE","name":"Germany","dial":"+49","flag":"🇩🇪","digits":11,"format":"### ## ## ####","continent":"EU","capital":"Berlin","currency":"EUR","languages":["de"]},
  {"code":"GH","name":"Ghana","dial":"+233","flag":"🇬🇭","digits":9,"format":"## ### ####","continent":"AF","capital":"Accra","currency":"GHS","languages":["en"]},
  {"code":"GI","name":"Gibraltar","dial":"+350","flag":"🇬🇮","digits":8,"format":"#### ####","continent":"EU","capital":"Gibraltar","currency":"GIP","languages":["en"]},
  {"code":"GR","name":"Greece","dial":"+30","flag":"🇬🇷","digits":10,"format":"### ### ####","continent":"EU","capital":"Athens","currency":"EUR","languages":["el"]},
  {"code":"GL","name":"Greenland","dial":"+299","flag":"🇬🇱","digits":6,"format":"## ## ##","continent":"NA","capital":"Nuuk","currency":"DKK","languages":["kl"]},
  {"code":"GD","name":"Grenada","dial":"+1473","flag":"🇬🇩","digits":7,"format":"### ####","continent":"NA","capital":"St. George's","currency":"XCD","languages":["en"]},
  {"code":"GP","name":"Guadeloupe","dial":"+590","flag":"🇬🇵","digits":9,"format":"### ## ## ##","continent":"NA","capital":"Basse-Terre","currency":"EUR","languages":["fr"]},
  {"code":"GU","name":"Guam","dial":"+1671","flag":"🇬🇺","digits":7,"format":"### ####","continent":"OC","capital":"Hagåtña","currency":"USD","languages":["en","ch","es"]},
  {"code":"GT","name":"Guatemala","dial":"+502","flag":"🇬🇹","digits":8,"format":"#### ####","continent":"NA","capital":"Guatemala City","currency":"GTQ","languages":["es"]},
  {"code":"GG","name":"Guernsey","dial":"+44","flag":"🇬🇬","digits":10,"format":"#### ######","continent":"EU","capital":"St. Peter Port","currency":"GBP","languages":["en","fr"]},
  {"code":"GN","name":"Guinea","dial":"+224","flag":"🇬🇳","digits":9,"format":"### ## ## ##","continent":"AF","capital":"Conakry","currency":"GNF","languages":["fr","ff"]},
  {"code":"GW","name":"Guinea-Bissau","dial":"+245","flag":"🇬🇼","digits":7,"format":"### ####","continent":"AF","capital":"Bissau","currency":"XOF","languages":["pt"]},
  {"code":"GY","name":"Guyana","dial":"+592","flag":"🇬🇾","digits":7,"format":"### ####","continent":"SA","capital":"Georgetown","currency":"GYD","languages":["en"]},
  {"code":"HT","name":"Haiti","dial":"+509","flag":"🇭🇹","digits":8,"format":"#### ####","continent":"NA","capital":"Port-au-Prince","currency":"HTG","languages":["fr","ht"]},
  {"code":"HN","name":"Honduras","dial":"+504","flag":"🇭🇳","digits":8,"format":"#### ####","continent":"NA","capital":"Tegucigalpa","currency":"HNL","languages":["es"]},
  {"code":"HK","name":"Hong Kong","dial":"+852","flag":"🇭🇰","digits":8,"format":"#### ####","continent":"AS","capital":"City of Victoria","currency":"HKD","languages":["zh","en"]},
  {"code":"HU","name":"Hungary","dial":"+36","flag":"🇭🇺","digits":9,"format":"## ### ####","continent":"EU","capital":"Budapest","currency":"HUF","languages":["hu"]},
  {"code":"IS","name":"Iceland","dial":"+354","flag":"🇮🇸","digits":7,"format":"### ####","continent":"EU","capital":"Reykjavik","currency":"ISK","languages":["is"]},
  {"code":"IN","name":"India","dial":"+91","flag":"🇮🇳","digits":10,"format":"##### #####","continent":"AS","capital":"New Delhi","currency":"INR","languages":["hi","en"]},
  {"code":"ID","name":"Indonesia","dial":"+62","flag":"🇮🇩","digits":11,"format":"### #### #####","continent":"AS","capital":"Jakarta","currency":"IDR","languages":["id"]},
  {"code":"IR","name":"Iran","dial":"+98","flag":"🇮🇷","digits":10,"format":"### ### ####","continent":"AS","capital":"Tehran","currency":"IRR","languages":["fa"]},
  {"code":"IQ","name":"Iraq","dial":"+964","flag":"🇮🇶","digits":10,"format":"### ### ####","continent":"AS","capital":"Baghdad","currency":"IQD","languages":["ar","ku"]},
  {"code":"IE","name":"Ireland","dial":"+353","flag":"🇮🇪","digits":9,"format":"## ### ####","continent":"EU","capital":"Dublin","currency":"EUR","languages":["ga","en"]},
  {"code":"IM","name":"Isle of Man","dial":"+44","flag":"🇮🇲","digits":10,"format":"#### ######","continent":"EU","capital":"Douglas","currency":"GBP","languages":["en","gv"]},
  {"code":"IL","name":"Israel","dial":"+972","flag":"🇮🇱","digits":9,"format":"## ### ####","continent":"AS","capital":"Jerusalem","currency":"ILS","languages":["he","ar"]},
  {"code":"IT","name":"Italy","dial":"+39","flag":"🇮🇹","digits":10,"format":"### ### ####","continent":"EU","capital":"Rome","currency":"EUR","languages":["it"]},
  {"code":"JM","name":"Jamaica","dial":"+1876","flag":"🇯🇲","digits":7,"format":"### ####","continent":"NA","capital":"Kingston","currency":"JMD","languages":["en"]},
  {"code":"JP","name":"Japan","dial":"+81","flag":"🇯🇵","digits":10,"format":"## #### ####","continent":"AS","capital":"Tokyo","currency":"JPY","languages":["ja"]},
  {"code":"JE","name":"Jersey","dial":"+44","flag":"🇯🇪","digits":10,"format":"#### ######","continent":"EU","capital":"Saint Helier","currency":"GBP","languages":["en","fr"]},
  {"code":"JO","name":"Jordan","dial":"+962","flag":"🇯🇴","digits":9,"format":"# ### ####","continent":"AS","capital":"Amman","currency":"JOD","languages":["ar"]},
  {"code":"KZ","name":"Kazakhstan","dial":"+7","flag":"🇰🇿","digits":10,"format":"### ### ## ##","continent":"AS","capital":"Astana","currency":"KZT","languages":["kk","ru"]},
  {"code":"KE","name":"Kenya","dial":"+254","flag":"🇰🇪","digits":9,"format":"### ######","continent":"AF","capital":"Nairobi","currency":"KES","languages":["en","sw"]},
  {"code":"KI","name":"Kiribati","dial":"+686","flag":"🇰🇮","digits":5,"format":"#####","continent":"OC","capital":"South Tarawa","currency":"AUD","languages":["en"]},
  {"code":"XK","name":"Kosovo","dial":"+383","flag":"🇽🇰","digits":8,"format":"## ### ###","continent":"EU","capital":"Pristina","currency":"EUR","languages":["sq","sr"]},
  {"code":"KW","name":"Kuwait","dial":"+965","flag":"🇰🇼","digits":8,"format":"#### ####","continent":"AS","capital":"Kuwait City","currency":"KWD","languages":["ar"]},
  {"code":"KG","name":"Kyrgyzstan","dial":"+996","flag":"🇰🇬","digits":9,"format":"### ## ## ##","continent":"AS","capital":"Bishkek","currency":"KGS","languages":["ky","ru"]},
  {"code":"LA","name":"Laos","dial":"+856","flag":"🇱🇦","digits":9,"format":"## ## ### ##","continent":"AS","capital":"Vientiane","currency":"LAK","languages":["lo"]},
  {"code":"LV","name":"Latvia","dial":"+371","flag":"🇱🇻","digits":8,"format":"## ### ###","continent":"EU","capital":"Riga","currency":"EUR","languages":["lv"]},
  {"code":"LB","name":"Lebanon","dial":"+961","flag":"🇱🇧","digits":8,"format":"## ### ###","continent":"AS","capital":"Beirut","currency":"LBP","languages":["ar","fr"]},
  {"code":"LS","name":"Lesotho","dial":"+266","flag":"🇱🇸","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Maseru","currency":"LSL","languages":["en","st"]},
  {"code":"LR","name":"Liberia","dial":"+231","flag":"🇱🇷","digits":8,"format":"## ### ###","continent":"AF","capital":"Monrovia","currency":"LRD","languages":["en"]},
  {"code":"LY","name":"Libya","dial":"+218","flag":"🇱🇾","digits":9,"format":"## ### ## ##","continent":"AF","capital":"Tripoli","currency":"LYD","languages":["ar"]},
  {"code":"LI","name":"Liechtenstein","dial":"+423","flag":"🇱🇮","digits":7,"format":"### ####","continent":"EU","capital":"Vaduz","currency":"CHF","languages":["de"]},
  {"code":"LT","name":"Lithuania","dial":"+370","flag":"🇱🇹","digits":8,"format":"## ## ## ##","continent":"EU","capital":"Vilnius","currency":"EUR","languages":["lt"]},
  {"code":"LU","name":"Luxembourg","dial":"+352","flag":"🇱🇺","digits":9,"format":"## ## ## ###","continent":"EU","capital":"Luxembourg","currency":"EUR","languages":["fr","de","lb"]},
  {"code":"MO","name":"Macao","dial":"+853","flag":"🇲🇴","digits":8,"format":"#### ####","continent":"AS","capital":"","currency":"MOP","languages":["zh","pt"]},
  {"code":"MG","name":"Madagascar","dial":"+261","flag":"🇲🇬","digits":9,"format":"## ## ### ##","continent":"AF","capital":"Antananarivo","currency":"MGA","languages":["fr","mg"]},
  {"code":"MW","name":"Malawi","dial":"+265","flag":"🇲🇼","digits":9,"format":"### ## ## ##","continent":"AF","capital":"Lilongwe","currency":"MWK","languages":["en","ny"]},
  {"code":"MY","name":"Malaysia","dial":"+60","flag":"🇲🇾","digits":10,"format":"##-#### ####","continent":"AS","capital":"Kuala Lumpur","currency":"MYR","languages":["ms"]},
  {"code":"MV","name":"Maldives","dial":"+960","flag":"🇲🇻","digits":7,"format":"### ####","continent":"AS","capital":"Malé","currency":"MVR","languages":["dv"]},
  {"code":"ML","name":"Mali","dial":"+223","flag":"🇲🇱","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Bamako","currency":"XOF","languages":["fr"]},
  {"code":"MT","name":"Malta","dial":"+356","flag":"🇲🇹","digits":8,"format":"## ## ## ##","continent":"EU","capital":"Valletta","currency":"EUR","languages":["mt","en"]},
  {"code":"MH","name":"Marshall Islands","dial":"+692","flag":"🇲🇭","digits":7,"format":"### ####","continent":"OC","capital":"Majuro","currency":"USD","languages":["en","mh"]},
  {"code":"MQ","name":"Martinique","dial":"+596","flag":"🇲🇶","digits":9,"format":"### ## ## ##","continent":"NA","capital":"Fort-de-France","currency":"EUR","languages":["fr"]},
  {"code":"MR","name":"Mauritania","dial":"+222","flag":"🇲🇷","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Nouakchott","currency":"MRU","languages":["ar"]},
  {"code":"MU","name":"Mauritius","dial":"+230","flag":"🇲🇺","digits":8,"format":"#### ####","continent":"AF","capital":"Port Louis","currency":"MUR","languages":["en"]},
  {"code":"YT","name":"Mayotte","dial":"+262","flag":"🇾🇹","digits":9,"format":"### ## ## ##","continent":"AF","capital":"Mamoudzou","currency":"EUR","languages":["fr"]},
  {"code":"MX","name":"Mexico","dial":"+52","flag":"🇲🇽","digits":10,"format":"### ### ####","continent":"NA","capital":"Mexico City","currency":"MXN","languages":["es"]},
  {"code":"FM","name":"Micronesia","dial":"+691","flag":"🇫🇲","digits":7,"format":"### ####","continent":"OC","capital":"Palikir","currency":"USD","languages":["en"]},
  {"code":"MD","name":"Moldova","dial":"+373","flag":"🇲🇩","digits":8,"format":"## ## ## ##","continent":"EU","capital":"Chișinău","currency":"MDL","languages":["ro"]},
  {"code":"MC","name":"Monaco","dial":"+377","flag":"🇲🇨","digits":8,"format":"## ## ## ##","continent":"EU","capital":"Monaco","currency":"EUR","languages":["fr"]},
  {"code":"MN","name":"Mongolia","dial":"+976","flag":"🇲🇳","digits":8,"format":"#### ####","continent":"AS","capital":"Ulan Bator","currency":"MNT","languages":["mn"]},
  {"code":"ME","name":"Montenegro","dial":"+382","flag":"🇲🇪","digits":8,"format":"## ### ###","continent":"EU","capital":"Podgorica","currency":"EUR","languages":["sr","bs","sq","hr"]},
  {"code":"MS","name":"Montserrat","dial":"+1664","flag":"🇲🇸","digits":7,"format":"### ####","continent":"NA","capital":"Plymouth","currency":"XCD","languages":["en"]},
  {"code":"MA","name":"Morocco","dial":"+212","flag":"🇲🇦","digits":9,"format":"## ## ## ###","continent":"AF","capital":"Rabat","currency":"MAD","languages":["ar"]},
  {"code":"MZ","name":"Mozambique","dial":"+258","flag":"🇲🇿","digits":9,"format":"## ### ####","continent":"AF","capital":"Maputo","currency":"MZN","languages":["pt"]},
  {"code":"MM","name":"Myanmar","dial":"+95","flag":"🇲🇲","digits":9,"format":"## ### ####","continent":"AS","capital":"Naypyidaw","currency":"MMK","languages":["my"]},
  {"code":"NA","name":"Namibia","dial":"+264","flag":"🇳🇦","digits":9,"format":"## ### ####","continent":"AF","capital":"Windhoek","currency":"NAD","languages":["en","af"]},
  {"code":"NR","name":"Nauru","dial":"+674","flag":"🇳🇷","digits":7,"format":"### ####","continent":"OC","capital":"Yaren","currency":"AUD","languages":["en","na"]},
  {"code":"NP","name":"Nepal","dial":"+977","flag":"🇳🇵","digits":10,"format":"## ### #####","continent":"AS","capital":"Kathmandu","currency":"NPR","languages":["ne"]},
  {"code":"NL","name":"Netherlands","dial":"+31","flag":"🇳🇱","digits":9,"format":"# ## ## ## ##","continent":"EU","capital":"Amsterdam","currency":"EUR","languages":["nl"]},
  {"code":"NC","name":"New Caledonia","dial":"+687","flag":"🇳🇨","digits":6,"format":"## ## ##","continent":"OC","capital":"Nouméa","currency":"XPF","languages":["fr"]},
  {"code":"NZ","name":"New Zealand","dial":"+64","flag":"🇳🇿","digits":9,"format":"## ### ####","continent":"OC","capital":"Wellington","currency":"NZD","languages":["en","mi"]},
  {"code":"NI","name":"Nicaragua","dial":"+505","flag":"🇳🇮","digits":8,"format":"#### ####","continent":"NA","capital":"Managua","currency":"NIO","languages":["es"]},
  {"code":"NE","name":"Niger","dial":"+227","flag":"🇳🇪","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Niamey","currency":"XOF","languages":["fr"]},
  {"code":"NG","name":"Nigeria","dial":"+234","flag":"🇳🇬","digits":10,"format":"### ### ####","continent":"AF","capital":"Abuja","currency":"NGN","languages":["en"]},
  {"code":"NU","name":"Niue","dial":"+683","flag":"🇳🇺","digits":4,"format":"####","continent":"OC","capital":"Alofi","currency":"NZD","languages":["en"]},
  {"code":"NF","name":"Norfolk Island","dial":"+672","flag":"🇳🇫","digits":6,"format":"######","continent":"OC","capital":"Kingston","currency":"AUD","languages":["en"]},
  {"code":"KP","name":"North Korea","dial":"+850","flag":"🇰🇵","digits":10,"format":"### ### ####","continent":"AS","capital":"Pyongyang","currency":"KPW","languages":["ko"]},
  {"code":"MK","name":"North Macedonia","dial":"+389","flag":"🇲🇰","digits":8,"format":"## ### ###","continent":"EU","capital":"Skopje","currency":"MKD","languages":["mk"]},
  {"code":"MP","name":"Northern Mariana Islands","dial":"+1670","flag":"🇲🇵","digits":7,"format":"### ####","continent":"OC","capital":"Saipan","currency":"USD","languages":["en","ch"]},
  {"code":"NO","name":"Norway","dial":"+47","flag":"🇳🇴","digits":8,"format":"### ## ###","continent":"EU","capital":"Oslo","currency":"NOK","languages":["no","nb","nn"]},
  {"code":"OM","name":"Oman","dial":"+968","flag":"🇴🇲","digits":8,"format":"#### ####","continent":"AS","capital":"Muscat","currency":"OMR","languages":["ar"]},
  {"code":"PK","name":"Pakistan","dial":"+92","flag":"🇵🇰","digits":10,"format":"### ### ####","continent":"AS","capital":"Islamabad","currency":"PKR","languages":["en","ur"]},
  {"code":"PW","name":"Palau","dial":"+680","flag":"🇵🇼","digits":7,"format":"### ####","continent":"OC","capital":"Ngerulmud","currency":"USD","languages":["en"]},
  {"code":"PS","name":"Palestine","dial":"+970","flag":"🇵🇸","digits":9,"format":"## ### ####","continent":"AS","capital":"Ramallah","currency":"ILS","languages":["ar"]},
  {"code":"PA","name":"Panama","dial":"+507","flag":"🇵🇦","digits":8,"format":"#### ####","continent":"NA","capital":"Panama City","currency":"PAB","languages":["es"]},
  {"code":"PG","name":"Papua New Guinea","dial":"+675","flag":"🇵🇬","digits":8,"format":"#### ####","continent":"OC","capital":"Port Moresby","currency":"PGK","languages":["en"]},
  {"code":"PY","name":"Paraguay","dial":"+595","flag":"🇵🇾","digits":9,"format":"### ### ###","continent":"SA","capital":"Asunción","currency":"PYG","languages":["es","gn"]},
  {"code":"PE","name":"Peru","dial":"+51","flag":"🇵🇪","digits":9,"format":"### ### ###","continent":"SA","capital":"Lima","currency":"PEN","languages":["es"]},
  {"code":"PH","name":"Philippines","dial":"+63","flag":"🇵🇭","digits":10,"format":"### ### ####","continent":"AS","capital":"Manila","currency":"PHP","languages":["en","tl"]},
  {"code":"PN","name":"Pitcairn Islands","dial":"+870","flag":"🇵🇳","digits":9,"format":"#########","continent":"OC","capital":"Adamstown","currency":"NZD","languages":["en"]},
  {"code":"PL","name":"Poland","dial":"+48","flag":"🇵🇱","digits":9,"format":"## ### ## ##","continent":"EU","capital":"Warsaw","currency":"PLN","languages":["pl"]},
  {"code":"PT","name":"Portugal","dial":"+351","flag":"🇵🇹","digits":9,"format":"### ### ###","continent":"EU","capital":"Lisbon","currency":"EUR","languages":["pt"]},
  {"code":"PR","name":"Puerto Rico","dial":"+1787","flag":"🇵🇷","digits":7,"format":"### ####","continent":"NA","capital":"San Juan","currency":"USD","languages":["es","en"]},
  {"code":"QA","name":"Qatar","dial":"+974","flag":"🇶🇦","digits":8,"format":"#### ####","continent":"AS","capital":"Doha","currency":"QAR","languages":["ar"]},
  {"code":"RE","name":"Réunion","dial":"+262","flag":"🇷🇪","digits":9,"format":"### ## ## ##","continent":"AF","capital":"Saint-Denis","currency":"EUR","languages":["fr"]},
  {"code":"RO","name":"Romania","dial":"+40","flag":"🇷🇴","digits":9,"format":"### ### ###","continent":"EU","capital":"Bucharest","currency":"RON","languages":["ro"]},
  {"code":"RU","name":"Russia","dial":"+7","flag":"🇷🇺","digits":10,"format":"### ###-##-##","continent":"AS","capital":"Moscow","currency":"RUB","languages":["ru"]},
  {"code":"RW","name":"Rwanda","dial":"+250","flag":"🇷🇼","digits":9,"format":"### ### ###","continent":"AF","capital":"Kigali","currency":"RWF","languages":["rw","en","fr"]},
  {"code":"BL","name":"Saint Barthélemy","dial":"+590","flag":"🇧🇱","digits":9,"format":"### ## ## ##","continent":"NA","capital":"Gustavia","currency":"EUR","languages":["fr"]},
  {"code":"SH","name":"Saint Helena","dial":"+290","flag":"🇸🇭","digits":4,"format":"####","continent":"AF","capital":"Jamestown","currency":"SHP","languages":["en"]},
  {"code":"KN","name":"Saint Kitts & Nevis","dial":"+1869","flag":"🇰🇳","digits":7,"format":"### ####","continent":"NA","capital":"Basseterre","currency":"XCD","languages":["en"]},
  {"code":"LC","name":"Saint Lucia","dial":"+1758","flag":"🇱🇨","digits":7,"format":"### ####","continent":"NA","capital":"Castries","currency":"XCD","languages":["en"]},
  {"code":"MF","name":"Saint Martin","dial":"+590","flag":"🇲🇫","digits":9,"format":"### ## ## ##","continent":"NA","capital":"Marigot","currency":"EUR","languages":["en","fr","nl"]},
  {"code":"PM","name":"Saint Pierre & Miquelon","dial":"+508","flag":"🇵🇲","digits":6,"format":"## ## ##","continent":"NA","capital":"Saint-Pierre","currency":"EUR","languages":["fr"]},
  {"code":"VC","name":"Saint Vincent & Grenadines","dial":"+1784","flag":"🇻🇨","digits":7,"format":"### ####","continent":"NA","capital":"Kingstown","currency":"XCD","languages":["en"]},
  {"code":"WS","name":"Samoa","dial":"+685","flag":"🇼🇸","digits":7,"format":"## #####","continent":"OC","capital":"Apia","currency":"WST","languages":["sm","en"]},
  {"code":"SM","name":"San Marino","dial":"+378","flag":"🇸🇲","digits":10,"format":"## ## ## ## ##","continent":"EU","capital":"City of San Marino","currency":"EUR","languages":["it"]},
  {"code":"ST","name":"São Tomé & Príncipe","dial":"+239","flag":"🇸🇹","digits":7,"format":"### ####","continent":"AF","capital":"São Tomé","currency":"STN","languages":["pt"]},
  {"code":"SA","name":"Saudi Arabia","dial":"+966","flag":"🇸🇦","digits":9,"format":"## ### ####","continent":"AS","capital":"Riyadh","currency":"SAR","languages":["ar"]},
  {"code":"SN","name":"Senegal","dial":"+221","flag":"🇸🇳","digits":9,"format":"## ### ## ##","continent":"AF","capital":"Dakar","currency":"XOF","languages":["fr"]},
  {"code":"RS","name":"Serbia","dial":"+381","flag":"🇷🇸","digits":9,"format":"## ### ####","continent":"EU","capital":"Belgrade","currency":"RSD","languages":["sr"]},
  {"code":"SC","name":"Seychelles","dial":"+248","flag":"🇸🇨","digits":7,"format":"# ### ###","continent":"AF","capital":"Victoria","currency":"SCR","languages":["fr","en"]},
  {"code":"SL","name":"Sierra Leone","dial":"+232","flag":"🇸🇱","digits":8,"format":"## ######","continent":"AF","capital":"Freetown","currency":"SLL","languages":["en"]},
  {"code":"SG","name":"Singapore","dial":"+65","flag":"🇸🇬","digits":8,"format":"#### ####","continent":"AS","capital":"Singapore","currency":"SGD","languages":["en","ms","ta","zh"]},
  {"code":"SX","name":"Sint Maarten","dial":"+1721","flag":"🇸🇽","digits":7,"format":"### ####","continent":"NA","capital":"Philipsburg","currency":"ANG","languages":["nl","en"]},
  {"code":"SK","name":"Slovakia","dial":"+421","flag":"🇸🇰","digits":9,"format":"### ### ###","continent":"EU","capital":"Bratislava","currency":"EUR","languages":["sk"]},
  {"code":"SI","name":"Slovenia","dial":"+386","flag":"🇸🇮","digits":8,"format":"## ### ###","continent":"EU","capital":"Ljubljana","currency":"EUR","languages":["sl"]},
  {"code":"SB","name":"Solomon Islands","dial":"+677","flag":"🇸🇧","digits":7,"format":"### ####","continent":"OC","capital":"Honiara","currency":"SBD","languages":["en"]},
  {"code":"SO","name":"Somalia","dial":"+252","flag":"🇸🇴","digits":8,"format":"## ### ###","continent":"AF","capital":"Mogadishu","currency":"SOS","languages":["so","ar"]},
  {"code":"ZA","name":"South Africa","dial":"+27","flag":"🇿🇦","digits":9,"format":"## ### ####","continent":"AF","capital":"Pretoria","currency":"ZAR","languages":["af","en","nr","st","ss","tn","ts","ve","xh","zu"]},
  {"code":"SS","name":"South Sudan","dial":"+211","flag":"🇸🇸","digits":9,"format":"### ### ###","continent":"AF","capital":"Juba","currency":"SSP","languages":["en"]},
  {"code":"ES","name":"Spain","dial":"+34","flag":"🇪🇸","digits":9,"format":"### ### ###","continent":"EU","capital":"Madrid","currency":"EUR","languages":["es","eu","ca","gl","oc"]},
  {"code":"LK","name":"Sri Lanka","dial":"+94","flag":"🇱🇰","digits":9,"format":"## ### ####","continent":"AS","capital":"Colombo","currency":"LKR","languages":["si","ta"]},
  {"code":"SD","name":"Sudan","dial":"+249","flag":"🇸🇩","digits":9,"format":"## ### ####","continent":"AF","capital":"Khartoum","currency":"SDG","languages":["ar","en"]},
  {"code":"SR","name":"Suriname","dial":"+597","flag":"🇸🇷","digits":7,"format":"### ####","continent":"SA","capital":"Paramaribo","currency":"SRD","languages":["nl"]},
  {"code":"SE","name":"Sweden","dial":"+46","flag":"🇸🇪","digits":9,"format":"## ### ## ##","continent":"EU","capital":"Stockholm","currency":"SEK","languages":["sv"]},
  {"code":"CH","name":"Switzerland","dial":"+41","flag":"🇨🇭","digits":9,"format":"## ### ## ##","continent":"EU","capital":"Bern","currency":"CHF","languages":["de","fr","it"]},
  {"code":"SY","name":"Syria","dial":"+963","flag":"🇸🇾","digits":9,"format":"### ### ###","continent":"AS","capital":"Damascus","currency":"SYP","languages":["ar"]},
  {"code":"TW","name":"Taiwan","dial":"+886","flag":"🇹🇼","digits":9,"format":"### ### ###","continent":"AS","capital":"Taipei","currency":"TWD","languages":["zh"]},
  {"code":"TJ","name":"Tajikistan","dial":"+992","flag":"🇹🇯","digits":9,"format":"## ### ####","continent":"AS","capital":"Dushanbe","currency":"TJS","languages":["tg","ru"]},
  {"code":"TZ","name":"Tanzania","dial":"+255","flag":"🇹🇿","digits":9,"format":"### ### ###","continent":"AF","capital":"Dodoma","currency":"TZS","languages":["sw","en"]},
  {"code":"TH","name":"Thailand","dial":"+66","flag":"🇹🇭","digits":9,"format":"## ### ####","continent":"AS","capital":"Bangkok","currency":"THB","languages":["th"]},
  {"code":"TL","name":"Timor-Leste","dial":"+670","flag":"🇹🇱","digits":8,"format":"#### ####","continent":"OC","capital":"Dili","currency":"USD","languages":["pt"]},
  {"code":"TG","name":"Togo","dial":"+228","flag":"🇹🇬","digits":8,"format":"## ## ## ##","continent":"AF","capital":"Lomé","currency":"XOF","languages":["fr"]},
  {"code":"TK","name":"Tokelau","dial":"+690","flag":"🇹🇰","digits":4,"format":"####","continent":"OC","capital":"Fakaofo","currency":"NZD","languages":["en"]},
  {"code":"TO","name":"Tonga","dial":"+676","flag":"🇹🇴","digits":7,"format":"### ####","continent":"OC","capital":"Nuku'alofa","currency":"TOP","languages":["en","to"]},
  {"code":"TT","name":"Trinidad & Tobago","dial":"+1868","flag":"🇹🇹","digits":7,"format":"### ####","continent":"NA","capital":"Port of Spain","currency":"TTD","languages":["en"]},
  {"code":"TN","name":"Tunisia","dial":"+216","flag":"🇹🇳","digits":8,"format":"## ### ###","continent":"AF","capital":"Tunis","currency":"TND","languages":["ar"]},
  {"code":"TR","name":"Turkey","dial":"+90","flag":"🇹🇷","digits":10,"format":"### ### ## ##","continent":"AS","capital":"Ankara","currency":"TRY","languages":["tr"]},
  {"code":"TM","name":"Turkmenistan","dial":"+993","flag":"🇹🇲","digits":8,"format":"## ## ## ##","continent":"AS","capital":"Ashgabat","currency":"TMT","languages":["tk","ru"]},
  {"code":"TC","name":"Turks & Caicos Islands","dial":"+1649","flag":"🇹🇨","digits":7,"format":"### ####","continent":"NA","capital":"Cockburn Town","currency":"USD","languages":["en"]},
  {"code":"TV","name":"Tuvalu","dial":"+688","flag":"🇹🇻","digits":5,"format":"#####","continent":"OC","capital":"Funafuti","currency":"AUD","languages":["en"]},
  {"code":"UG","name":"Uganda","dial":"+256","flag":"🇺🇬","digits":9,"format":"### ### ###","continent":"AF","capital":"Kampala","currency":"UGX","languages":["en","sw"]},
  {"code":"UA","name":"Ukraine","dial":"+380","flag":"🇺🇦","digits":9,"format":"## ### ## ##","continent":"EU","capital":"Kyiv","currency":"UAH","languages":["uk"]},
  {"code":"AE","name":"United Arab Emirates","dial":"+971","flag":"🇦🇪","digits":9,"format":"## ### ####","continent":"AS","capital":"Abu Dhabi","currency":"AED","languages":["ar"]},
  {"code":"GB","name":"United Kingdom","dial":"+44","flag":"🇬🇧","digits":10,"format":"#### ######","continent":"EU","capital":"London","currency":"GBP","languages":["en"]},
  {"code":"US","name":"United States","dial":"+1","flag":"🇺🇸","digits":10,"format":"### ### ####","continent":"NA","capital":"Washington D.C.","currency":"USD","languages":["en"]},
  {"code":"VI","name":"U.S. Virgin Islands","dial":"+1340","flag":"🇻🇮","digits":7,"format":"### ####","continent":"NA","capital":"Charlotte Amalie","currency":"USD","languages":["en"]},
  {"code":"UY","name":"Uruguay","dial":"+598","flag":"🇺🇾","digits":9,"format":"## ### ## ##","continent":"SA","capital":"Montevideo","currency":"UYU","languages":["es"]},
  {"code":"UZ","name":"Uzbekistan","dial":"+998","flag":"🇺🇿","digits":9,"format":"## ### ## ##","continent":"AS","capital":"Tashkent","currency":"UZS","languages":["uz","ru"]},
  {"code":"VU","name":"Vanuatu","dial":"+678","flag":"🇻🇺","digits":7,"format":"### ####","continent":"OC","capital":"Port Vila","currency":"VUV","languages":["bi","en","fr"]},
  {"code":"VA","name":"Vatican City","dial":"+379","flag":"🇻🇦","digits":10,"format":"## #### ####","continent":"EU","capital":"Vatican City","currency":"EUR","languages":["it","la"]},
  {"code":"VE","name":"Venezuela","dial":"+58","flag":"🇻🇪","digits":10,"format":"### ### ####","continent":"SA","capital":"Caracas","currency":"VES","languages":["es"]},
  {"code":"VN","name":"Vietnam","dial":"+84","flag":"🇻🇳","digits":10,"format":"### ### ####","continent":"AS","capital":"Hanoi","currency":"VND","languages":["vi"]},
  {"code":"WF","name":"Wallis & Futuna","dial":"+681","flag":"🇼🇫","digits":6,"format":"## ## ##","continent":"OC","capital":"Mata-Utu","currency":"XPF","languages":["fr"]},
  {"code":"EH","name":"Western Sahara","dial":"+212","flag":"🇪🇭","digits":9,"format":"## ## ## ###","continent":"AF","capital":"El Aaiún","currency":"MAD","languages":["es"]},
  {"code":"YE","name":"Yemen","dial":"+967","flag":"🇾🇪","digits":9,"format":"### ### ###","continent":"AS","capital":"Sana'a","currency":"YER","languages":["ar"]},
  {"code":"ZM","name":"Zambia","dial":"+260","flag":"🇿🇲","digits":9,"format":"### ### ###","continent":"AF","capital":"Lusaka","currency":"ZMW","languages":["en"]},
  {"code":"ZW","name":"Zimbabwe","dial":"+263","flag":"🇿🇼","digits":9,"format":"## ### ####","continent":"AF","capital":"Harare","currency":"USD","languages":["en","sn","nd"]},
];

/**
 * Format a raw phone number string based on a specific country format template.
 * @param value The raw string containing numbers
 * @param format The format string where "#" represents a digit (e.g. "## ### ####")
 * @returns The formatted phone number string
 */
export function formatPhone(value: string, format: string): string {
  const digits = value.replace(/\D/g, "");
  let formatted = "";
  let di = 0;
  for (let i = 0; i < format.length && di < digits.length; i++) {
    if (format[i] === "#") {
      formatted += digits[di++];
    } else {
      if (di < digits.length) formatted += format[i];
    }
  }
  return formatted;
}

/**
 * Validates a phone number based on the expected number of digits for a given country.
 * @param phone The input phone string
 * @param country The CountryData object
 * @returns True if the number of digits matches the expected digits for the country
 */
export function validatePhone(phone: string, country: CountryData): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length === country.digits;
}

/**
 * Helper to get a CountryData object by its 2-letter ISO code.
 * @param code The 2-letter ISO country code (e.g. "IN", "US")
 * @returns The matching CountryData or undefined
 */
export function getCountryByCode(code: string): CountryData | undefined {
  return COUNTRIES.find(c => c.code.toUpperCase() === code.toUpperCase());
}

/**
 * Tries to guess the country based on the dial code present in a full phone number.
 * Note: Some dial codes are shared (e.g. +1 for US/Canada). This returns the first match, 
 * usually the primary country for that dial code.
 * @param phone The raw phone string starting with a country code (e.g. "+919876543210")
 * @returns The guessed CountryData or undefined
 */
export function guessCountryByNumber(phone: string): CountryData | undefined {
  if (!phone.startsWith('+')) return undefined;
  
  // Sort by dial length descending to match longest prefix first (e.g. +1268 before +1)
  const sorted = [...COUNTRIES].sort((a, b) => b.dial.length - a.dial.length);
  return sorted.find(c => phone.startsWith(c.dial));
}

/**
 * Formats a local phone number into the international E.164 standard format.
 * @param phone The local phone number (e.g. "9876543210")
 * @param country The CountryData object
 * @returns The E.164 formatted string (e.g. "+919876543210")
 */
export function formatAsE164(phone: string, country: CountryData): string {
  const digits = phone.replace(/\D/g, "");
  return `${country.dial}${digits}`;
}

/**
 * Searches for countries by name, iso code, or dial code. 
 * Perfect for building dropdown filtering and search bars.
 * @param query The search query string
 * @returns Array of matching CountryData objects
 */
export function searchCountries(query: string): CountryData[] {
  const lowerQuery = query.toLowerCase().trim();
  if (!lowerQuery) return COUNTRIES;
  
  return COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) || 
    c.code.toLowerCase().includes(lowerQuery) || 
    c.dial.includes(lowerQuery)
  );
}

/**
 * Generates an array mask based on the country's format.
 * Useful for integrating with masked input libraries (like react-text-mask).
 * @param format The country's format string (e.g. "## ### ####")
 * @returns Array of strings and RegExps (e.g. [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/])
 */
export function getMaskArray(format: string): Array<string | RegExp> {
  return format.split('').map(char => char === '#' ? /\d/ : char);
}

/**
 * Returns all countries belonging to a specific continent.
 * @param continent The continent code (e.g., 'AS', 'EU', 'AF', 'NA', 'SA', 'OC', 'AN')
 * @returns Array of CountryData objects
 */
export function getCountriesByContinent(continent: string): CountryData[] {
  return COUNTRIES.filter(c => c.continent && c.continent.toUpperCase() === continent.toUpperCase());
}

/**
 * Returns all countries that use a specific currency.
 * @param currency The 3-letter currency code (e.g., 'USD', 'EUR', 'INR')
 * @returns Array of CountryData objects
 */
export function getCountriesByCurrency(currency: string): CountryData[] {
  return COUNTRIES.filter(c => c.currency && c.currency.toUpperCase() === currency.toUpperCase());
}

/**
 * Returns all countries that speak a specific language.
 * @param language The 2-letter language code (e.g., 'en', 'es', 'fr')
 * @returns Array of CountryData objects
 */
export function getCountriesByLanguage(language: string): CountryData[] {
  return COUNTRIES.filter(c => c.languages && c.languages.some(l => l.toLowerCase() === language.toLowerCase()));
}

/**
 * Returns a unique list of all currencies used globally.
 * @returns Array of unique currency strings (e.g., 'USD', 'EUR')
 */
export function getAllCurrencies(): string[] {
  const currencies = new Set<string>();
  COUNTRIES.forEach(c => {
    if (c.currency) currencies.add(c.currency);
  });
  return Array.from(currencies).sort();
}

/**
 * Returns a unique list of all languages spoken globally.
 * @returns Array of unique language strings (e.g., 'en', 'es')
 */
export function getAllLanguages(): string[] {
  const languages = new Set<string>();
  COUNTRIES.forEach(c => {
    if (c.languages) c.languages.forEach(l => languages.add(l));
  });
  return Array.from(languages).sort();
}

/**
 * Returns a unique list of all continents.
 * @returns Array of unique continent strings
 */
export function getAllContinents(): string[] {
  const continents = new Set<string>();
  COUNTRIES.forEach(c => {
    if (c.continent) continents.add(c.continent);
  });
  return Array.from(continents).sort();
}
