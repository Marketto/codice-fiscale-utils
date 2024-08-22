/**
 * @marketto/codice-fiscale-utils 3.0.0
 * Copyright (c) 2019-2024, Marco Ricupero <marco.ricupero@gmail.com>
 * License: MIT
 */

import t from"moment";import e from"@marketto/diacritic-remover";const i=15,r="[12][0-9]{3}",s="0[1-9]|1[0-2]",a="0[469]|11",n="0[13578]|1[02]",o=`(?:${s})-(?:0[1-9]|[12]\\d)|(?:${a})-30|(?:${n})-3[01]`,c="[01]\\d|2[0-3]",h="[0-5]\\d",l=h,d="\\d{3}",T=`Z|[-+](?:${c})(?::?${h})?`,f=`(?:${c})(?::${h}(?::${l}(\\.${d})?)?(?:${T})?)?`,$=`${r}-(?:${o})(?:T${f})?`,u=`${r}(?:-(?:(?:${s})|(?:${o})(?:T${f})?))?`;var A=Object.freeze({__proto__:null,DAY:"0[1-9]|[12][0-9]|3[01]",DAYS_30_MONTHS:a,DAYS_31_MONTHS:n,HOURS:c,ISO8601_DATE_TIME:u,ISO8601_SHORT_DATE:$,LEAP_MONTH:"02",MILLISECONDS:d,MINUTES:h,MONTH:s,MONTH_DAY:o,SECONDS:l,TIME:f,TIMEZONE:T,YEAR:r});class E{static parseDate(e){if(!(e instanceof Date||e instanceof t||"string"==typeof e&&new RegExp(`^(?:${u})$`).test(e)||Array.isArray(e)&&e.length&&!e.some((t=>"number"!=typeof t||isNaN(t)))))return null;try{let i;if(Array.isArray(e)){const[r,s=0,a=1]=e;if(!(s>=0&&s<=11&&a>0&&a<=31))return null;i=t(Date.UTC(r,s||0,a||1))}else i=t(e);return i.isValid()?i.toDate():null}catch(t){return null}}static ymdToDate(t,e,i){return this.parseDate([t,e,i])}}const _="B-DF-HJ-NP-TV-Z",p="AEIOU",C="\\dLMNP-V",m="1-9MNP-V",R="0L",D="A-EHLMPR-T",N="DHPS",M="ACELMRT",I="A-M",S="Z",O=`[A-Z][${p}][${p}X]|[${p}]X{2}|[${_}]{2}[A-Z]`,y=O,g=`(?:${O}){2}`,L=`[${C}]{2}`,P="[02468LNQSU][048LQU]|[13579MPRTV][26NS]",F=`[${D}]`,w="[26NS]",B="[37PT]",b=`[${R}4Q][${m}]|[1256MNRS][${C}]`,v=`[${B}][${R}]`,H=`[${B}][${R}1M]`,Y=`(?:${b}|${B}[${R}1M])`,V=`(?:[${R}][${m}]|[12MN][${C}]|[3P][${R}1M])`,G=`(?:[4Q][${m}]|[56RS][${C}]|[7T][${R}1M])`,U=`${F}(?:${b})|[${N}]${v}|[${M}]${H}`,j=`${L}(?:${F}(?:[${R}4Q][${m}]|[15MR][${C}]|${w}[0-8LMNP-U])|[${N}]${B}[${R}]|[${M}]${B}[${R}1M]|[${N}${M}]${w}[9V])|(?:${P})B${w}[9V]`,x=`${L}(?:${F}(?:[${R}][${m}]|[1M][${C}]|[2N][0-8LMNP-U])|[${N}][3P][${R}]|[${M}][3P][${R}1M]|[${N}${M}][2N][9V])|(?:${P})B[2N][9V]`,Z=`${L}(?:${F}(?:[4Q][${m}]|[5R][${C}]|[6S][0-8LMNP-U])|[${N}][7T][${R}]|[${M}][7T][${R}1M]|[${N}${M}][6S][9V])|(?:${P})B[6S][9V]`,k=`[${I}](?:[${m}][${C}]{2}|[${R}](?:[${m}][${C}]|[${R}][${m}]))`,X=`${S}[${m}][${C}]{2}`,Q=`(?:[${I}${S}][${m}][${C}]{2})|(?:[${I}][${R}](?:[${m}][${C}]|[${R}][${m}]))`,J="[A-Z]",z=`${g}(?:${j})(?:${Q})${J}`,K=`[A-Z][${p}]?|[${_}]{1,2}`,W=`(?:${K})|(?:(?:${O})(?:${K})?)`,q=`[${C}]`,tt=`${F}[${R}12456MNQRS]?|[${N}${M}]${B}`,et=`${q}|(?:${L}(?:${tt})?)`,it=`[${I}${S}](?:[${m}][${C}]?)?|[${S}](?:[${R}][${C}]?)?`,rt=`${W}|(?:${g}(?:(?:${et})|(?:${j})(?:(?:${it})|(?:${Q})${J}?)?)?)?`;var st,at=Object.freeze({__proto__:null,BELFIORE_CODE_MATCHER:Q,CF_FULL_NAME_MATCHER:g,CF_NAME_MATCHER:O,CF_SURNAME_MATCHER:y,CHECK_DIGIT:J,CITY_CODE_LIST:I,CITY_CODE_MATCHER:k,CODICE_FISCALE:z,CONSONANT_LIST:_,COUNTRY_CODE_LIST:S,COUNTRY_CODE_MATCHER:X,DAY_29_MATCHER:b,DAY_2X_MATCHER:w,DAY_30_MATCHER:v,DAY_31_MATCHER:H,DAY_3X_MATCHER:B,DAY_MATCHER:Y,FEMALE_DAY_MATCHER:G,FEMALE_FULL_DATE_MATCHER:Z,FULL_DATE_MATCHER:j,LEAP_YEAR_MATCHER:P,MALE_DAY_MATCHER:V,MALE_FULL_DATE_MATCHER:x,MONTH_30DAYS_LIST:N,MONTH_31DAYS_LIST:M,MONTH_DAY_MATCHER:U,MONTH_LIST:D,MONTH_MATCHER:F,OMOCODE_NON_ZERO_NUMBER_LIST:m,OMOCODE_NUMBER_LIST:C,OMOCODE_ZERO_LIST:R,PARTIAL_BELFIORE_CODE_MATCHER:it,PARTIAL_CF:rt,PARTIAL_CF_FULL_NAME:W,PARTIAL_CF_NAME_MATCHER:K,PARTIAL_FULL_DATE:et,PARTIAL_MONTH_DAY:tt,PARTIAL_YEAR:q,VOWEL_LIST:p,YEAR_MATCHER:L});!function(t){t[t.B=0]="B",t[t.A=1]="A",t[t.K=2]="K",t[t.P=3]="P",t[t.L=4]="L",t[t.C=5]="C",t[t.Q=6]="Q",t[t.D=7]="D",t[t.R=8]="R",t[t.E=9]="E",t[t.V=10]="V",t[t.O=11]="O",t[t.S=12]="S",t[t.F=13]="F",t[t.T=14]="T",t[t.G=15]="G",t[t.U=16]="U",t[t.H=17]="H",t[t.M=18]="M",t[t.I=19]="I",t[t.N=20]="N",t[t.J=21]="J",t[t.W=22]="W",t[t.Z=23]="Z",t[t.Y=24]="Y",t[t.X=25]="X"}(st||(st={}));var nt,ot=st;class ct{static checkDigit(t){if("string"==typeof t&&new RegExp(rt).test(t)){const e=t.substr(0,i);let r=0;for(const t of this.evaluateChar(e))r+=t;return String.fromCharCode(r%this.CRC_MOD+this.CHAR_OFFSET)}return null}static evaluateChar(t=""){return(e=this.evaluateCharGenerator(t))[Symbol.iterator]=()=>e,e;var e}static CHAR_OFFSET=65;static CRC_MOD=26;static*evaluateCharGenerator(t=""){if("string"==typeof t&&t.length)for(let e=0;e<t.length;e++){let i=t[e].toUpperCase();/^\d$/u.test(i)&&(i=String.fromCharCode(parseInt(i,10)+this.CHAR_OFFSET));!(e%2)?yield parseInt(ot[i],10):yield i.charCodeAt(0)-this.CHAR_OFFSET}return 0}}!function(t){t[t.A=0]="A",t[t.B=1]="B",t[t.C=2]="C",t[t.D=3]="D",t[t.E=4]="E",t[t.H=5]="H",t[t.L=6]="L",t[t.M=7]="M",t[t.P=8]="P",t[t.R=9]="R",t[t.S=10]="S",t[t.T=11]="T"}(nt||(nt={}));var ht,lt=nt;!function(t){t[t.M=0]="M",t[t.F=40]="F"}(ht||(ht={}));var dt,Tt=ht;!function(t){t[t.L=0]="L",t[t.M=1]="M",t[t.N=2]="N",t[t.P=3]="P",t[t.Q=4]="Q",t[t.R=5]="R",t[t.S=6]="S",t[t.T=7]="T",t[t.U=8]="U",t[t.V=9]="V"}(dt||(dt={}));var ft=dt;class $t{static getDay(t){const e=t%Tt.F;return e>0&&e<=this.MAX_MONTH_DAY?e:null}static getGender(t){return this.toArray().find((e=>t>=Tt[e]&&t<=Tt[e]+this.MAX_MONTH_DAY))||null}static genderizeDay(t,e){return t+Tt[e]}static toArray(){return["M","F"]}static MAX_MONTH_DAY=31}const ut=new Date("1973-09-29"),At=new e;class Et{belfioreConnector;constructor(t){this.belfioreConnector=t}OMOCODE_BITMAP=30400;cfDeomocode(t){if(t&&t.length<=6)return t;const e=this.partialCfDeomocode(t);if(e.length<i)return e;return e.substring(0,i)+this.appyCaseToChar(ct.checkDigit(e)||"",e.substring(i,16))}cfOmocode(t,e){if(!e)return this.cfDeomocode(t);const r=t.split("");for(let i=t.length-1,s=0;i>=0;i--)if(2**i&this.OMOCODE_BITMAP){if(!!(e&2**s)!==isNaN(parseInt(r[i],10))){const t=r[i].toUpperCase();r[i]=ft[t]}s++}const s=r[15];if(s){const t=r.slice(0,i).join("");r[15]=this.appyCaseToChar(ct.checkDigit(t)||"",s)}return r.join("")}cfOmocodeId(t){const e=t.split("").filter(((t,e)=>2**e&this.OMOCODE_BITMAP)).map((t=>/^[a-z]$/i.test(At[t])?1:0)).join("");return parseInt(e,2)}cfToLastName(t){const e=t?.substring(0,3);if("string"!=typeof t||3!==e.length||!new RegExp(`^(?:${y})`,"iu").test(e))return null;const i=t.substring(0,3),[r=""]=i.match(new RegExp(`^[${_}]{1,3}`,"ig"))||[],[s=""]=i.match(new RegExp(`[${p}]{1,3}`,"ig"))||[],a=r.length+s.length;if(a<2||a<3&&"X"!==i[2].toUpperCase())return null;switch(r.length){case 3:return(r+s).split("").join(this.JOLLY_CHAR)+this.JOLLY_CHAR;case 2:return`${r[0]}${s[0]}*${r[1]}${this.JOLLY_CHAR}`;case 1:return`${r[0]}${s}${this.JOLLY_CHAR}`;default:return`${s}${3===s.length?this.JOLLY_CHAR:""}`}}cfToFirstName(t){const e=t?.substring(3,6);return"string"==typeof t&&3===e?.length&&new RegExp(`^(${O})$`,"iu").test(e)?this.cfToLastName(e):null}cfToGender(t){if("string"!=typeof t||t.length<10)return null;const e=t.substring(9,10),i=10*parseInt(this.partialCfDeomocode(e,9),10);return $t.getGender(i)}cfToBirthYear(e){if("string"!=typeof e||e.length<8)return null;const i=e.substring(6,8),r=parseInt(this.partialCfDeomocode(i,6),10);if(isNaN(r))return null;const s=parseInt(t().format("YY"),10),a=100*(r>s?1:0);return t().subtract(s-r+a,"years").year()}cfToBirthMonth(t){if("string"!=typeof t||t.length<9)return null;const e=t.substring(8,9).toUpperCase(),i=lt[e];return"number"!=typeof i||i<0||i>11?null:i}cfToBirthDay(t){if("string"!=typeof t||t.length<11)return null;const e=t.substring(9,11),i=parseInt(this.partialCfDeomocode(e,9),10);return isNaN(i)?null:$t.getDay(i)}cfToBirthDate(t){const e=this.cfToBirthDay(t);if(!e)return null;const i=this.cfToBirthMonth(t);if("number"!=typeof i)return null;const r=this.cfToBirthYear(t);return E.ymdToDate(r,i,e)}async cfToBirthPlace(e,i=!0){if("string"!=typeof e||e.length<15)return null;const r=e.substring(11,15),s=this.partialCfDeomocode(r,11),a=await this.belfioreConnector.findByCode(s);if(!a)return null;const{creationDate:n,expirationDate:o}=a;if((n||o)&&i){const i=this.cfToBirthDate(e),r=t(ut).add(5,"years").isBefore(i,"day");if(i&&r){if(!((!o||t(i).isBefore(o,"day"))&&(!n||t(i).isAfter(n,"day"))))return null}}return a}async cfDecode(t){const e=this.cfToBirthYear(t)||void 0,i=this.cfToBirthMonth(t)??void 0,r=this.cfToBirthDay(t)||void 0,s=E.ymdToDate(e,i,r)||void 0,a=await this.cfToBirthPlace(t),n={firstName:this.cfToFirstName(t)||void 0,lastName:this.cfToLastName(t)||void 0,day:r,month:i,year:e,date:s,gender:this.cfToGender(t)||void 0,place:a||void 0,omocodeId:this.cfOmocodeId(t)};return e&&i&&r&&(n.date=new Date(Date.UTC(e,i,r))),n}lastNameToCf(t){if(!t||(t||"").trim().length<2)return null;if(!/^[A-Z ']{1,32}$/iu.test(At.replace(t)))return null;const e=(this.charExtractor(t,_)+this.charExtractor(t,p)).padEnd(3,"X").substring(0,3);return e.length<3?null:e.toUpperCase()}firstNameToCf(t){if(!t||(t||"").trim().length<2)return null;const e=this.charExtractor(t,_);return e.length>=4?(e[0]+e.substring(2,4)).toUpperCase():this.lastNameToCf(t)}yearToCf(t){let e;return e="string"==typeof t?parseInt(t,10):t,"number"!=typeof e||isNaN(e)||!(e>=1900||e<100)?null:`0${e}`.substr(-2)}monthToCf(t){return t<0||t>11?null:lt[t]||null}dayGenderToCf(t,e){if(t<1||t>31)return null;const i=Tt[e];return"number"!=typeof i?null:`0${t+i}`.substr(-2)}yearMonthDayToDate(e,i=0,r=1){if(!e||e<1861||[i,r].some((t=>"number"!=typeof t)))return null;const s=t(Date.UTC(e,i||0,r||1));return s.isValid()&&s.year()===e&&s.month()===i&&s.date()===r?s.toDate():null}async parsePlace(t){let e;return t?("object"==typeof t&&t.belfioreCode?e=await this.belfioreConnector.findByCode(t.belfioreCode):"string"==typeof t&&(e=await this.belfioreConnector.findByCode(t)||await this.belfioreConnector.findByName(t)),e||null):null}dateGenderToCf(t,e){const i=E.parseDate(t);if(!i)return null;return`${this.yearToCf(i.getFullYear())}${this.monthToCf(i.getMonth())}${this.dayGenderToCf(i.getDate(),e)}`}async placeToCf(t,e,i){const r=E.parseDate(t);let s,a;if(r||"string"!=typeof t){if(!e)return null;s=e,a=i}else s=t,a=e;let n=this.belfioreConnector;if(a&&(n=n.byProvince(a)),r&&n&&(n=n.from(r)),n){const t=await new Et(n).parsePlace(s);if(t)return t.belfioreCode}return null}async encodeCf({lastName:t,firstName:e,year:i,month:r,day:s,date:a,gender:n,place:o,omocodeId:c=0}){const h=E.parseDate(a)||this.yearMonthDayToDate(i,r,s);if(!(h&&t&&e&&n&&o))return null;const l=[async()=>this.lastNameToCf(t),async()=>this.firstNameToCf(e),async()=>this.dateGenderToCf(h,n),async()=>await this.placeToCf(h,o?.belfioreCode||o)];let d="";for(const t of l){const e=await t();if(!e)return null;d+=e}return this.cfOmocode(d,c)}JOLLY_CHAR="*";checkBitmap(t){return!!(2**t&this.OMOCODE_BITMAP)}charOmocode(t,e){return/^[A-Z]$/giu.test(t)&&this.checkBitmap(e)?ft[t.toUpperCase()]:t}charExtractor(t,e){const i=new RegExp(`[${e}]{1,24}`,"ig");return(At.replace(t).trim().match(i)||[]).join("")}partialCfDeomocode(t,e=0){return t.replace(/[\dA-Z]/giu,((t,i)=>this.charOmocode(t,i+e)))}appyCaseToChar(t,e){if(t&&e){const i=e[0]===e[0].toUpperCase(),r=e[0]===e[0].toLowerCase();if(i&&!r)return t[0].toUpperCase();if(!i&&r)return t[0].toLowerCase()}return t[0]}}const _t="Provided lastName is not valid, only letters, diacritics and apostrophe allowed",pt="Provided name is not valid, only letters, diacritics and apostrophe allowed",Ct="Provided day is not valid",mt="Provided gender is not valid",Rt="Provided day and/or gender are not valid",Dt="Provided year is not valid, only 2 or 4 digit numbers are allowed",Nt="Provided date is not valid";var Mt=Object.freeze({__proto__:null,INVALID_DATE:Nt,INVALID_DAY:Ct,INVALID_DAY_OR_GENDER:Rt,INVALID_GENDER:mt,INVALID_NAME:pt,INVALID_PLACE_NAME:"Proviced City/Country name is not valid",INVALID_SURNAME:_t,INVALID_YEAR:Dt});class It extends Error{constructor(t){super((Object.entries(Mt).find((([e])=>e===t))||[])[1]||t)}}const St=new e;class Ot{belfioreConnector;parser;constructor(t){this.belfioreConnector=t,this.parser=new Et(t)}cfLastName(t){let e=y;if(t){if(!this.lastName().test(t))throw new It(_t);e=this.parser.lastNameToCf(t)||e}return this.isolatedInsensitiveTailor(e)}cfFirstName(t){let e=O;if(t){if(!this.lastName().test(t))throw new It(pt);e=this.parser.firstNameToCf(t)||e}return this.isolatedInsensitiveTailor(e)}cfYear(t){let e=L;if(t){const i=this.parser.yearToCf(t);if(!i)throw new It(Dt);e=this.deomocode(i)}return this.isolatedInsensitiveTailor(e)}cfMonth(t){let e=F;return t&&(e=this.parser.monthToCf(t)||e),this.isolatedInsensitiveTailor(e)}cfDay(t){let e=Y;if(t){const i=this.parser.dayGenderToCf(t,"M"),r=this.parser.dayGenderToCf(t,"F");if(!i||!r)throw new It(Ct);e=`(?:${this.deomocode(i)})|(?:${this.deomocode(r)})`}return this.isolatedInsensitiveTailor(e)}cfDayGender(t,e){if(!e)return this.cfDay(t);let i;if(t){const r=this.parser.dayGenderToCf(t,e);if(!r)throw new It(Rt);i=this.deomocode(r)}else switch(e){case"M":i=V;break;case"F":i=G;break;default:throw new It(mt)}return this.isolatedInsensitiveTailor(i)}cfDateGender(t,e){if(t&&!E.parseDate(t))throw new It(Nt);if(e&&!$t.toArray().includes(e))throw new It(mt);let i=j;if(t){const r=e&&this.parser.dateGenderToCf(t,e);if(r)i=this.deomocode(r);else{const e=e=>{const i=this.parser.dateGenderToCf(t,e);if(!i)throw new It(Nt);return i&&this.deomocode(i)};i=`(?:${$t.toArray().map(e).join("|")})`}}else"M"===e?i=x:"F"===e&&(i=Z);return this.isolatedInsensitiveTailor(i)}async cfPlace(t,e){let i=Q;if(t){const r=E.parseDate(t);if(r&&e){const t=e,s=await this.parser.placeToCf(r,t);i=this.deomocode(s||"")}else if(!r&&"string"==typeof t){const e=t,r=await this.parser.placeToCf(e);i=this.deomocode(r||"")}}return this.isolatedInsensitiveTailor(i)}async codiceFiscale(t){let e=z;if(t){const i=await this.parser.encodeCf(t);if(i)e=this.deomocode(i);else{const{lastName:i,firstName:r,year:s,month:a,day:n,date:o,gender:c,place:h}=t;if(i||r||s||a||n||o||c||h){let t=null;o?t=E.parseDate(o):s&&(t=this.parser.yearMonthDayToDate(s,a,n));const l=[async()=>this.cfLastName(i),async()=>this.cfFirstName(r),async()=>this.cfDateGender(t,c),async()=>await this.cfPlace(t,h?.belfioreCode||h)];e="";for(const t of l){const i=(await t()).toString(),r=i.match(/\^(.{1,256})\$/),s=r&&r[1];if(!s)throw new Error(`Unable to handle [${i}]`);e+=`(?:${s})`}e+=J}}}return this.isolatedInsensitiveTailor(e)}LETTER_SET=`[A-Z${St.matcherBy(/^[A-Z]$/iu)}]`;SEPARATOR_SET="(?:'?\\s{0,4})";lastName(t){let e=`${this.LETTER_SET}{1,24}`;if(t&&/^[A-Z]{1,3}/iu.test(t)){const i=t.substr(0,3),r=t=>t.split("").map((t=>`[${St.insensitiveMatcher[t]}]`)),[s,a]=[`^[${_}]{1,3}`,`[${p}]{1,3}`].map((t=>r((i.match(new RegExp(t,"ig"))||[])[0]||""))),n=`[${p+St.matcherBy(new RegExp(`^[${p}]$`,"ui"))}]`,o=`(?:${n}${this.SEPARATOR_SET}){0,24}`,c=`(?:${this.SEPARATOR_SET}${o}${n})?`;switch(s.length){case 3:{const t=o;e=t+s.join(`${this.SEPARATOR_SET}${t}`)+`(?:${this.SEPARATOR_SET}${this.LETTER_SET}{0,24}${this.LETTER_SET})?`;break}case 2:e=`(?:${[`${a[0]}${o}${this.SEPARATOR_SET}${s[0]}${o}${s[1]}`,`${s[0]}${this.SEPARATOR_SET}`+a.join(`${this.SEPARATOR_SET}`)+`${this.SEPARATOR_SET}${o}${s[1]}`,s.join(`${this.SEPARATOR_SET}`)+`${this.SEPARATOR_SET}${a[0]}`].join("|")})${c}`;break;case 1:e=`(?:${[a.slice(0,2).join(`${this.SEPARATOR_SET}`)+o+s.join(`${this.SEPARATOR_SET}`),`${a[0]}${this.SEPARATOR_SET}`+s.join(`${this.SEPARATOR_SET}`)+a[1],[s[0],...a.slice(0,2)].join(`${this.SEPARATOR_SET}`)].join("|")})${c}`;break;default:e=`${a.join(`${this.SEPARATOR_SET}`)}${c}`}if(a?.length+s?.length<3)return this.isolatedInsensitiveTailor(`\\s{0,4}(${e})\\s{0,4}`)}return this.isolatedInsensitiveTailor(`\\s{0,4}((?:${e})(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24})\\s{0,4}`)}firstName(t){if(t&&new RegExp(`^[A-Z]{3}[${_}]{3}`,"iu").test(t)){const e=((t.substr(3,3).match(new RegExp(`^[${_}]{1,3}`,"ig"))||[])[0]||"").split("").map((t=>`[${St.insensitiveMatcher[t]}]`)),[i,r]=[p,_].map((t=>t+St.matcherBy(new RegExp(`^[${t}]$`,"ui")))),s=`(?:[${i}]{1,24}${this.SEPARATOR_SET}){0,24}${e[0]}${this.SEPARATOR_SET}(?:[${i}]{1,24}${this.SEPARATOR_SET}){0,24}(?:[${r}]${this.SEPARATOR_SET}(?:[${i}]{1,24}${this.SEPARATOR_SET}){0,24})?`+e.slice(1,3).join(`(?:[${i}]{1,24}${this.SEPARATOR_SET}){0,24}`)+`(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24}`;return this.isolatedInsensitiveTailor(s)}return this.lastName((t||"").substr(3,3))}date(e){let i=u;if(e){const r=this.parser.cfToBirthDate(e);if(r){const e=r.toJSON();if(t().diff(t(r),"y")<50){const t=parseInt(e.substr(0,2),10);i=`(?:${[t-1,t].map((t=>t.toString().padStart(2,"0"))).join("|")})`+e.substr(2,8)}else i=e.substr(0,10)}}return this.isolatedInsensitiveTailor(`${i}(?:T${f}(?:${T})?)?`)}gender(t){const e=t&&this.parser.cfToGender(t)||`[${$t.toArray().join("")}]`;return this.isolatedInsensitiveTailor(e)}async place(t){let e=".{1,32}";const i=t&&await this.parser.cfToBirthPlace(t);if(i){e=`(?:(?:${i.name.replace(/./gu,(t=>St[t]===t?t:`[${t}${St[t]}]`))})|${i.belfioreCode})`}return this.isolatedInsensitiveTailor(e)}deomocode(t){return t.replace(/\d/gu,(t=>`[${t}${ft[t]}]`))}isolatedInsensitiveTailor(t){return new RegExp(`^(?:${t})$`,"iu")}}class yt{codiceFiscale;pattern;parser;constructor(t,e){this.codiceFiscale=e,this.pattern=new Ot(t),this.parser=new Et(t)}get hasLastName(){return this.codiceFiscale?.length>=3}get hasFirstName(){return this.codiceFiscale?.length>=6}get hasBirthYear(){return this.codiceFiscale?.length>=8}get hasBirthDate(){return this.codiceFiscale?.length>=11}get hasGender(){return this.codiceFiscale?.length>=10}get hasBirthPlace(){return this.codiceFiscale?.length>=15}get hasCRC(){return this.codiceFiscale?.length>=16}async matchPersonalInfo(t){return(await this.pattern.codiceFiscale(t)).test(this.codiceFiscale)}async mismatchPersonalInfo(t){return!(!(this.codiceFiscale&&t&&t.lastName&&t.firstName&&(t.date||t.day&&t.month&&t.year)&&t.gender&&t.place)||await this.matchPersonalInfo(t))}matchLastName(t){return this.hasLastName&&this.pattern.lastName(this.codiceFiscale).test(t||"")}mismatchLastName(t){return this.hasLastName&&!!t&&!this.matchLastName(t)}matchFirstName(t){return this.hasFirstName&&this.pattern.firstName(this.codiceFiscale).test(t||"")}mismatchFirstName(t){return this.hasFirstName&&!!t&&!this.matchFirstName(t)}matchBirthDate(e){if(this.hasBirthDate){const i=this.parser.cfToBirthDate(this.codiceFiscale),r=E.parseDate(e);if(i&&r)return t(i).isSame(r,"d")}return!1}mismatchBirthDate(t){return this.hasBirthYear&&!!E.parseDate(t)&&!this.matchBirthDate(t)}matchGender(t){return this.hasGender&&this.pattern.gender(this.codiceFiscale).test(t||"")}mismatchGender(t){return this.hasGender&&!!t&&!this.matchGender(t)}async matchBirthPlace(t){if(this.hasBirthPlace&&t){const e=await this.pattern.place(this.codiceFiscale),i=await this.parser.parsePlace(t);return!!i&&e.test(i?.belfioreCode)}return!1}async mismatchBirthPlace(t){return this.hasBirthPlace&&!!t&&!await this.matchBirthPlace(t)}get errors(){return Promise.all([this.parser.cfToBirthPlace(this.codiceFiscale,!1),this.parser.cfToBirthPlace(this.codiceFiscale,!0)]).then((([t,e])=>({...this.parser.cfToLastName(this.codiceFiscale)?{}:{lastName:"MISSING_OR_INVALID_LAST_NAME"},...this.parser.cfToFirstName(this.codiceFiscale)?{}:{firstName:"MISSING_OR_INVALID_FIRST_NAME"},...this.parser.cfToBirthDate(this.codiceFiscale)?{}:{date:"MISSING_OR_INVALID_DATE"},...this.parser.cfToBirthDay(this.codiceFiscale)?{}:{date:"MISSING_OR_INVALID_DAY"},...this.parser.cfToBirthMonth(this.codiceFiscale)?{}:{date:"MISSING_OR_INVALID_MONTH"},...this.parser.cfToBirthYear(this.codiceFiscale)?{}:{date:"MISSING_OR_INVALID_YEAR"},...this.parser.cfToGender(this.codiceFiscale)?{}:{gender:"MISSING_DAY"},...t?{}:{place:"MISSING_OR_INVALID_PLACE"},...e?{}:{place:"PLACE_EXPIRED_OR_NOT_YET_CREATED_ON_BIRTDATE",date:"BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE"},...this.codiceFiscale?.substring(i,16)?.toUpperCase()===ct.checkDigit(this.codiceFiscale)?{}:{crc:"INVALID_CRC_CODE"},...this.hasCRC?{}:{crc:"MISSING_CRC_CODE"}}))).then((t=>Object.keys(t).length?t:null))}get valid(){return Promise.all([this.pattern.codiceFiscale(),this.parser.cfToBirthPlace(this.codiceFiscale)]).then((([t,e])=>!(!this.hasCRC||!t.test(this.codiceFiscale)||this.codiceFiscale?.substring(i,16)?.toUpperCase()!==ct.checkDigit(this.codiceFiscale)||!e)))}get invalid(){return this.valid.then((t=>!!this.codiceFiscale&&!t))}}class gt{belfioreConnector;parser;pattern;constructor(t){this.belfioreConnector=t,this.parser=new Et(t),this.pattern=new Ot(t)}codiceFiscale(t){return new yt(this.belfioreConnector,t)}isLastNameValid(t){return this.pattern.lastName().test(t)}isLastNameInvalid(t){return!!t&&!this.isLastNameValid(t)}isFirstNameValid(t){return this.pattern.firstName().test(t)}isFirstNameInvalid(t){return!!t&&!this.isFirstNameValid(t)}isBirthDateValid(t){return!!E.parseDate(t)}isBirthDateInvalid(t){return!!t&&!this.isBirthDateValid(t)}isGenderValid(t){return this.pattern.gender().test(t)}isGenderInvalid(t){return!!t&&!this.isGenderValid(t)}async isBirthPlaceValid(t){const e=await this.parser.parsePlace(t);return!!e&&!!await this.belfioreConnector.findByCode(e.belfioreCode)}async isBirthPlaceInvalid(t){return!!t&&!await this.isBirthPlaceValid(t)}async birthDatePlaceMatch(e,i){const r=await this.parser.parsePlace(i);return this.isBirthDateValid(e)&&!!r&&(!!await this.belfioreConnector.from(e).findByCode(r.belfioreCode)||t(E.parseDate(e)).isSameOrBefore(ut,"day"))}async birthDatePlaceMismatch(t,e){const i=await this.parser.parsePlace(e);return this.isBirthDateValid(t)&&!!i&&!await this.birthDatePlaceMatch(t,e)}async birthPlaceDateMatch(t,e){return await this.birthDatePlaceMatch(e,t)}async birthPlaceDateMismatch(t,e){return await this.birthDatePlaceMismatch(e,t)}}class Lt{belfioreConnector;validator;parser;pattern;constructor(t){this.belfioreConnector=t,this.validator=new gt(t),this.parser=new Et(t),this.pattern=new Ot(t)}}export{lt as BirthMonth,yt as CFMismatchValidator,ot as CRC,ct as CheckDigitizer,Lt as CodiceFiscaleUtils,A as DATE_MATCHER,E as DateUtils,$t as Gender,at as Matcher,ft as Omocodes,Et as Parser,Ot as Pattern,at as VALIDATOR,gt as Validator,Lt as default};
//# sourceMappingURL=index.mjs.map
