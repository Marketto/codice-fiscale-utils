# codice-fiscale-utils
***The Final and definitive solution to handle the Italian Tax Code***

[![NPM Version](https://img.shields.io/npm/v/@marketto/codice-fiscale-utils.svg)](https://www.npmjs.com/package/@marketto/codice-fiscale-utils)
[![NPM Downloads](https://img.shields.io/npm/dm/@marketto/codice-fiscale-utils.svg)](https://www.npmjs.com/package/@marketto/codice-fiscale-utils)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_shield)
[![Dependency status](https://david-dm.org/Marketto/codice-fiscale-utils.svg)](https://david-dm.org/Marketto/codice-fiscale-utils)
[![Dev dependency status](https://david-dm.org/Marketto/codice-fiscale-utils/dev-status.svg)](https://david-dm.org/Marketto/codice-fiscale-utils?type=dev)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=alert_status)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=coverage)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=sqale_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Reliability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=reliability_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
![Build Status](http://ci.marketto.it/buildStatus/icon?job=codice-fiscale-utils)
[![LICENSE](https://img.shields.io/badge/licese-MIT-gold.svg)](https://github.com/Marketto/codice-fiscale-utils/blob/master/LICENSE)
[![Blog](https://img.shields.io/badge/blog-marketto-blue.svg)](http://blog.marketto.it)
[![Buy me a coffee](https://img.shields.io/badge/Ko--fi-donate-blueviolet)](https://ko-fi.com/marketto)

TS utilities to handle Italian Codice Fiscale

## 🚨 WARNING Upgrading from 1.1.x 🚨
* #### Methods to generate RegExp were moved to Pattern class
* #### Former Validator.isValid method was migrated to Validator.codiceFiscale(cf: string).valid (getter)
* #### ***name*** was renamed into ***firstName*** due to typescript migration (in method names and data models)
* #### ***surname*** was renamed into ***lastName*** according to the new naming convention (even in method names and data models)

## 📗FAQs?
1. **Why should I need a library? Can't I use just a RegExp?**
    *A RegExp would just check the form of a CodiceFiscale, not coherence between birth date and place, not validity of 16th check digit char*

2. **What about the omocodes (Omocodia/Omocodice) problem, does it work?**
   *Absolutely! There's a dedicated class to encode or decode such kind of CodiceFiscale and it's properly integrated in* [***Parser***](#parser), [***Validator***](#validator) and [***Pattern***](#pattern) *methods*

3. **Why it's ~250KB? Seems a lot**
   *It contains all you need in a FE or BE environment to properly check and validate a CodiceFiscale by its own or against spare personal informations, the full list of all Italian cities and foregin countries since [1861](https://en.wikipedia.org/wiki/Kingdom_of_Italy) including belfiore codes, province for cities,  begin and end date*

4. **Should I trust such city/country informations and do I need them?**
   *Sure, every single information is provided with original source referrals like website, license and name. The script used to create the embedded dataset uses only official informations provided by Italian istitutional sources under* ***CC-BY*** *like 'Agenzia delle entrate', 'Ministero dell'interno' or 'ISTAT'; Give a look at the* [Assets Licenses and Authors](#assets-licenses-and-authors) *chapters*

5. **Can I use this library in a FE project with other frameworks?**
    *Sure, it's built to work both in node and browser environments! Give a look at the [Demo section](#demo)*

## 📙[CHANGELOG](CHANGELOG.MD)
## 🚃[ROADMAP](ROADMAP.MD)

## INSTALLATION
```{r, engine='bash', global_install}
npm i -s @marketto/codice-fiscale-utils
```

## USAGE
### NodeJs
```javascript
const codiceFiscaleUtils = require('@marketto/codice-fiscale-utils');
```
### ES6
```javascript
import codiceFiscaleUtils from '@marketto/codice-fiscale-utils';
```
### TypeScript
```typescript
import * as codiceFiscaleUtils from '@marketto/codice-fiscale-utils';
```
### Script
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://unpkg.com/browse/@marketto/codice-fiscale-utils/dist/codice-fiscale-utils.amd.min.js"></script>
```

## DOCUMENTATION
[JsDocs @ GitHub Pages](https://marketto.github.io/codice-fiscale-utils/)

## DEMO
Check out [CodiceFiscaleUtils](https://github.com/Marketto/codice-fiscale-utils) repo on Github
### NodeJS Express
[Node/Express Demo on Github](https://github.com/Marketto/codice-fiscale-utils/tree/master/demo/express)
### VueJs
[Vue Demo on Github](https://github.com/Marketto/codice-fiscale-utils/tree/master/demo/vue)
### Angular
[Angular Demo on Github](https://github.com/Marketto/codice-fiscale-utils/tree/master/demo/angular)

### Parser
*Class* with *static* methods
```javascript
const {Parser} = codiceFiscaleUtils;
```

#### Parser.deomocode
```javascript
Parser.cfDeomocode('KKALMNVMAPLB331Z'); //KKALMN91A30B331Z
```

#### Parser.cfToLastName
```javascript
Parser.cfToLastName('WYZ'); //W*Y*Z*
```

#### Parser.cfToFirstName
```javascript
Parser.cfToFirstName('ZZZWAE'); //WAE*
```

#### Parser.cfToGender
```javascript
Parser.cfToGender('XXXYYY90B20'); //M
Parser.cfToGender('XXXYYY90B63'); //F
```

#### Parser.cfToBirthDay
```javascript
Parser.cfToBirthDay('XXXYYY90B71'); //31
```

#### Parser.cfToBirthMonth
```javascript
Parser.cfToBirthMonth('XXXYYY92C'); //2
```

#### Parser.cfToBirthYear
Parser will consider dates that can be both *19xx* and *20xx* as ***20xx*** if they would be valid in the last 100 years range from now
```javascript
Parser.cfToBirthYear('XXXYYY92'); //1992
Parser.cfToBirthYear('XXXYYY12'); //2012
```

#### Parser.cfToBirthDate
```javascript
const dt = Parser.cfToBirthDate('XXXYYY81A63'); //Date
dt.toJSON(); //1981-01-23T...
```

#### Parser.cfToBirthPlace
```javascript
const birthPlace = Parser.cfToBirthPlace('XXXYYY92B20H501');
/*
{
    firstName: "ROMA",
    belfioreCode: "H501",
    creationDate: Date("1884-09-10T22:00:00.000Z"),
    expirationDate: Date("9999-12-31T22:59:59.999Z"),
    province: "RM",
    dataSource: {
        "name": "Ministero dell\'Interno",
        "url": "https://developers.italia.it/en/anpr",
        "license": "cc-by-4.0",
        "licenseUrl": "https://creativecommons.org/licenses/by/4.0/legalcode.it",
        "termsAndConditions": "https://github.com/italia/anpr/blob/master/src/archivi/ANPR_archivio_comuni_legenda.md",
        "authors": "https://github.com/italia/anpr/blob/master/AUTHORS"
    }
}
*/
```

#### Parser.cfDecode
```javascript
Parser.cfDecode('VRNGNY07D68C351V');
/*
{
    lastName: 'V*R*N*',
    firstName: 'G*N*Y*',
    day: 28,
    month: 3,
    year: 2017,
    gender: 'F',
    place: 'CATANIA'
}
*/
```

#### Parser.removeDiacritics
```javascript
Parser.removeDiacritics('Tést Tèxt'); //Test Text
```

#### Parser.lastNameToCf
```javascript
Parser.lastNameToCf('Rossi'); //RSS
Parser.lastNameToCf('Réno'); //RNE
Parser.lastNameToCf('Aieie'); //AIE
```

#### Parser.firstNameToCf
```javascript
Parser.firstNameToCf('Dòminique'); //DNQ
Parser.firstNameToCf('Mark'); //MRK
Parser.firstNameToCf('Tom'); //TMO
Parser.firstNameToCf('Ania'); //NAI
```

#### Parser.yearToCf
```javascript
Parser.yearToCf('1990'); //90
Parser.yearToCf(2010); //10
Parser.yearToCf('02'); //02
```

#### Parser.monthToCf
```javascript
Parser.monthToCf(0); //A
Parser.monthToCf(4); //E
Parser.monthToCf(8); //P
```

#### Parser.monthToCf
```javascript
Parser.monthToCf(0); //A
Parser.monthToCf(4); //E
Parser.monthToCf(8); //P
```

#### Parser.dayGenderToCf
```javascript
Parser.dayGenderToCf(3, 'M'); //03
Parser.dayGenderToCf(7, 'F'); //47
```

#### Parser.dateGenderToCf
```javascript
Parser.dateGenderToCf([2016, 3, 23], 'M'); //16D23
Parser.dateGenderToCf('1987-09-22', 'F'); //87P62
Parser.dateGenderToCf(new Date(2016, 2, 23, 12), 'M'); //16C23
Parser.dateGenderToCf(moment(1988, 7, 3, 12), 'F'); //88M43
```

#### Parser.placeToCf
```javascript
Parser.placeToCf('Bologna');
/*
{
    belfioreCode: 'A944',
    firstName: 'BOLOGNA',
    creationDate: 1861-03-16T23:00:00.000Z,
    expirationDate: 9999-12-31T22:59:59.999Z,
    dataSource: {...},
    province: 'BO'
}
*/
Parser.placeToCf([1990],'Unione Sovietica');
/*
{
    belfioreCode: 'Z135',
    firstName: 'Unione Sovietica',
    creationDate: 1860-12-31T23:00:00.000Z,
    expirationDate: 1991-12-31T22:59:59.999Z,
    dataSource: {...},
    iso3166: 'SU'
}
*/
Parser.placeToCf([2000],'Unione Sovietica'); //null
```

#### Parser.encodeCf
```javascript
Parser.encodeCf({
    lastName: 'Veronesi',
    firstName: 'Genny',
    year: 1907,
    month: 3,
    day: 28,
    gender: 'F',
    place: 'Catania'
}); //VRNGNY07D68C351V
```


### Pattern
Class with static methods
```javascript
const {Pattern} = codiceFiscaleUtils;
```

#### Pattern.cfLastName
```javascript
Pattern.cfLastName().test('KST'); //true
Pattern.cfLastName().test('AST'); //false
Pattern.cfLastName('Alex').test('KST'); //false
Pattern.cfLastName('Alex').test('LXA'); //true
```

#### Pattern.cfFirstName
```javascript
Pattern.cfFirstName().test('NIX'); //true
Pattern.cfFirstName().test('UIK'); //false
Pattern.cfFirstName('Dominique').test('DMN'); //false
Pattern.cfFirstName('Dominique').test('DNQ'); //true
```

#### Pattern.cfYear
```javascript
Pattern.cfYear().test('07'); //true
Pattern.cfYear().test('3'); //false
Pattern.cfYear(1907).test('07'); //true
Pattern.cfYear(1986).test('U6'); //true - omocode
Pattern.cfYear(1986).test('87'); //false
```

#### Pattern.cfMonth
```javascript
Pattern.cfMonth().test('C'); //true
Pattern.cfMonth().test('Z'); //false
Pattern.cfMonth(3).test('D'); //true
Pattern.cfMonth(3).test('A'); //false
```

#### Pattern.cfDay
```javascript
Pattern.cfDay().test('0M'); //true - omocode
Pattern.cfDay().test('33'); //false
Pattern.cfDay(12).test('12'); //true - male
Pattern.cfDay(12).test('52'); //true - female
Pattern.cfDay(12).test('MN'); //true - omocode
Pattern.cfDay(12).test('22'); //false
```

#### Pattern.cfDayGender
```javascript
Pattern.cfDayGender().test('0M'); //true
Pattern.cfDayGender().test('73'); //false
Pattern.cfDayGender(9, 'F').test('RM'); //true
Pattern.cfDayGender(1, 'F').test('41'); //true
Pattern.cfDayGender(1, 'M').test('41'); //false
```

#### Pattern.cfDateGender
```javascript
Pattern.cfDateGender().test('83D22'); //true
Pattern.cfDateGender().test('83Z32'); //false
Pattern.cfDateGender([1983, 3, 22], 'M').test('U3D2N'); //true
Pattern.cfDateGender("1995-05-01", 'F').test('V5EQ1'); //true
Pattern.cfDateGender([1983, 3, 22], 'M').test('83D62'); //false
```

#### Pattern.cfPlace
```javascript
Pattern.cfPlace().test('A662'); //true
Pattern.cfPlace().test('Z974'); //false
Pattern.cfPlace('Bari').test('H501'); //true
Pattern.cfPlace([1933], 'Fiume').test('D620'); //true
Pattern.cfPlace([2000], 'Fiume').test('D620'); //false - Always invalid
```

#### Pattern.codiceFiscale
```javascript
Pattern.codiceFiscale().test('VRNGNY07D68C351V'); //true
Pattern.codiceFiscale().test('MRNMIA02E45L2193'); //false
//Partial info
Pattern.codiceFiscale({
    lastName: 'Veronesi',
    firstName: 'Genny',
    gender: 'F',
    place: 'Catania'
}).test('VRNGNY97A65C351V'); //true
//Full info
Pattern.codiceFiscale({
    lastName: 'Veronesi',
    firstName: 'Genny',
    year: 1907,
    month: 3,
    day: 28,
    gender: 'F',
    place: 'Catania'
}).test('VRNGNY07D68C351V'); //true
```

#### Pattern.lastName
```javascript
Pattern.lastName().test('Kristersen'); //true
Pattern.lastName('VLD').test('Vàlidàtòr'); //true
Pattern.lastName('AIX').test('Air'); //false
```

#### Pattern.firstName
```javascript
Pattern.firstName().test('Rossi'); //true
Pattern.firstName('XYZAIE').test('Aieie'); //true
Pattern.firstName('XYZAIX').test('Air'); //false
```

#### Pattern.date
```javascript
Pattern.date().test('1995'); //true
Pattern.date().test('1985-01'); //true
Pattern.date().test('1970-03-03'); //true
Pattern.date().test('1970-03-'); //false
Pattern.date('XYZXYZ88H61').test('1988-06-21'); //true
Pattern.date('XYZXYZ92C16').test('1992-03-26'); //false
```

#### Pattern.gender
```javascript
Pattern.gender().test('F'); //true
Pattern.gender().test('X'); //false
Pattern.gender('XYZXYZ88H61').test('F'); //true
Pattern.gender('XYZXYZ88H61').test('M'); //false
```

#### Pattern.place
```javascript
Pattern.place().test('Roma'); //true
Pattern.place('XYZXYZ92C16A662').test('Bari'); //true
Pattern.place('XYZXYZ12S30A662').test('Bologna'); //false
```


### Validator
### CFMismatchValidator
#### isValid
```javascript
Validator.codiceFiscale('VRNGNY07D68C351V').valid; //true
Validator.codiceFiscale('VRNGNY07D68C351K').valid; //false - invalid check digit
Validator.codiceFiscale('GSTPPP99C06D620V').valid; //false - invalid birth date/place
```


## Compatibility (tested)
* [X] NodeJs
* [X] Chrome
* [X] Firefox
* [X] Edge

## LICENSE
[MIT License](LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_large)

## ASSETS LICENSES AND AUTHORS
* Cities List of Values: [CC BY 4.0](asset/MINISTERO_DELL_INTERNO.LICENSE) Ministero dell'interno
* Cities List of Values: [CC BY 4.0](asset/AGENZIA_DELLE_ENTRATE.LICENSE) Agenzia delle Entrate
* Countries List of Values: [CC BY 3.0](asset/ISTITUTO_NAZIONALE_DI_STATISTICA.LICENSE) Istituto nazionale di statistica

## AUTHOR
[Marco Ricupero](mailto:marco.ricupero@gmail.com)