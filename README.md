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

## 🚨 WARNING Upgrading from 1.x 🚨
* Methods to generate RegExp were moved to Pattern class
* Former Validator.isValid method was migrated to Validator.codiceFiscale(cf: string).valid (getter)
* ***name*** was renamed into ***firstName*** due to typescript migration (in method names and data models)
* ***surname*** was renamed into ***lastName*** according to the new naming convention (even in method names and data models)

## 📗 FAQs?
1. **Why should I need a library? Can't I use just a RegExp?**
    *A RegExp would just check the form of a CodiceFiscale, not coherence between birth date and place, not validity of 16th check digit char*

2. **What about the omocodes (Omocodia/Omocodice) problem, does it work?**
   *Absolutely! There's a dedicated class to encode or decode such kind of CodiceFiscale and it's properly integrated in* [***Parser***](#parser), [***Validator***](#validator) and [***Pattern***](#pattern) *methods*

3. **Why it's ~240KB? Seems a lot**
   *It contains all you need in a FE or BE environment to properly check and validate a CodiceFiscale by its own or against spare personal informations, the full list of all Italian cities and foregin countries since [1861](https://en.wikipedia.org/wiki/Kingdom_of_Italy) including belfiore codes, province for cities,  begin and end date*

4. **Should I trust such city/country informations and do I need them?**
   *Sure, every single information is provided with original source referrals like website, license and name. The script used to create the embedded dataset uses only official informations provided by Italian istitutional sources under* ***CC-BY*** *like 'Agenzia delle entrate', 'Ministero dell'interno' or 'ISTAT'; Give a look at the* [Assets Licenses and Authors](#assets-licenses-and-authors) *chapters*

5. **Can I use this library in a FE project with other frameworks?**
    *Sure, it's built to work both in node and browser environments! Give a look at the [Demo section](#demo)*

## 📙 [CHANGELOG](CHANGELOG.MD)
## 🚃 [ROADMAP](ROADMAP.MD)

## 🔌 INSTALLATION
```{r, engine='bash', global_install}
npm i -s @marketto/codice-fiscale-utils
```

## 🔧 USAGE
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
<script src="https://unpkg.com/@marketto/codice-fiscale-utils@2.0.0/dist/codice-fiscale-utils.bundle.min.js"></script>
```

## 💻 DEMO
### NodeJS Express
* [Node/Express Demo on Github](https://github.com/Marketto/codice-fiscale-utils/tree/master/demo/express)
### VueJs
* [Code sandbox](https://codesandbox.io/s/github/Marketto/codice-fiscale-utils-vue-demo)
* [Github](https://github.com/Marketto/codice-fiscale-utils-vue-demo)
### Angular
* [Code sandbox](https://codesandbox.io/s/github/Marketto/codice-fiscale-utils-angular-demo)
* [Github](https://github.com/Marketto/codice-fiscale-utils-angular-demo)

## 📖 DOCUMENTATION
[JsDocs @ GitHub Pages](https://marketto.github.io/codice-fiscale-utils/)


### Parser
*Class* with *static* methods
```javascript
const {Parser} = codiceFiscaleUtils;
```
<details>
    <summary>Show code examples</summary>

#### Parser.cfDeomocode
```javascript
Parser.cfDeomocode("KKALMNVMAPLB331Z"); //KKALMN91A30B331P
Parser.cfDeomocode("kkalmnvmaplb331z"); //kkalmn91a30b331p
```
#### Parser.cfOmocodeId
```javascript
Parser.cfOmocodeId("VRNGNYLtdsucprmt"); //127
Parser.cfOmocodeId("kkalmn91as0b331z"); //16
Parser.cfOmocodeId("kkalmn91a30b331z"); //0
```
#### Parser.cfOmocode
```javascript
Parser.cfOmocode("VRNGNY07d68c351v", 0); //VRNGNY07d68c351v
Parser.cfOmocode("VRNGNY07d68c351v", 1); //VRNGNY07d68c35Mn
Parser.cfOmocode("VRNGNY07d68c351v", 2); //VRNGNY07d68c3R1h
Parser.cfOmocode("VRNGNY07d68c351v", 3); //VRNGNY07d68c3RMz
Parser.cfOmocode("VRNGNY07d68c351v", 8); //VRNGNY07d6Uc351s
Parser.cfOmocode("VRNGNY07d68c351v", 32); //VRNGNY0Td68c351h
Parser.cfOmocode("VRNGNY07d68c351v", 127); //VRNGNYLTdSUcPRMt
//Re-omocode
Parser.cfOmocode("kkalmnvmaplb331z", 0); //kkalmn91a30b331p
Parser.cfOmocode("kkalmnvmaplb331z", 1); //kkalmn91a30b33Mh
Parser.cfOmocode("kkalmnvmaplb331z", 74); //kkalmnv1a3lb3P1t
Parser.cfOmocode("kkalmnvmaplb331z", 127); //kkalmnvmaplbPPMe
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
</details>


### Pattern
Class with static methods
```javascript
const {Pattern} = codiceFiscaleUtils;
```
<details>
    <summary>Show code examples</summary>

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
</details>

### Validator
*Class* with *static* methods
```javascript
const {Validator} = codiceFiscaleUtils;
```
<details>
    <summary>Show code examples</summary>

#### isLastNameValid
```javascript
Validator.isLastNameValid("Test"); //true
Validator.isLastNameValid("Tést N'àme"); //true
Validator.isLastNameValid(""); //false
Validator.isLastNameValid("@!#"); //false
```
#### isLastNameInvalid
```javascript
Validator.isLastNameInvalid("Test"); //false
Validator.isLastNameInvalid("Tést N'àme"); //false
Validator.isLastNameInvalid(""); //false
Validator.isLastNameInvalid("@!#"); //true
```
#### isFirstNameValid
```javascript
Validator.isFirstNameValid("Test"); //true
Validator.isFirstNameValid("Tést N'àme"); //true
Validator.isFirstNameValid(""); //false
Validator.isFirstNameValid("@!#"); //false
```
#### isFirstNameInvalid
```javascript
Validator.isFirstNameInvalid("Test"); //false
Validator.isFirstNameInvalid("Tést N'àme"); //false
Validator.isFirstNameInvalid(""); //false
Validator.isFirstNameInvalid("@!#"); //true
```

#### isBirthDateValid
```javascript
Validator.isBirthDateValid("1999-01-01"); //true
Validator.isBirthDateValid([1999, 0, 1]); //true
Validator.isBirthDateValid(""); //false
Validator.isBirthDateValid("2000-02-30"); //false
Validator.isBirthDateValid("No date"); //false
Validator.isBirthDateValid("@!#"); //false
```

#### isBirthDateInvalid
```javascript
Validator.isBirthDateInvalid("1999-01-01"); //false
Validator.isBirthDateInvalid([1999, 0, 1]); //false
Validator.isBirthDateInvalid(""); //false
Validator.isBirthDateInvalid("2000-02-30"); //true
Validator.isBirthDateInvalid("No date"); //true
Validator.isBirthDateInvalid("@!#"); //true
```

#### isBirthPlaceValid
```javascript
Validator.isBirthPlaceValid("Roma"); //true
Validator.isBirthPlaceValid("H501"); //true
Validator.isBirthPlaceValid(""); //false
Validator.isBirthPlaceValid("Moon"); //false
//With scoped BelfioreConnector
//By active places
Validator.isBirthPlaceValid("Unione sovietica", Belfiore.active()); //false
Validator.isBirthPlaceValid("Unione sovietica", Belfiore.active([1980])); //true
//By cities
Validator.isBirthPlaceValid("Francia", Belfiore.cities); //false
Validator.isBirthPlaceValid("A662", Belfiore.cities) //true
//By countries
Validator.isBirthPlaceValid("Belgio", Belfiore.countries); //true
//By province
Validator.isBirthPlaceValid("Vibo Valentia", Belfiore.byProvince("VV")); //true
Validator.isBirthPlaceValid("H501", Belfiore.byProvince("VV")); //false
```

#### isBirthPlaceInvalid
```javascript
Validator.isBirthPlaceInvalid("Roma"); //false
Validator.isBirthPlaceInvalid("H501"); //false
Validator.isBirthPlaceInvalid(""); //false
Validator.isBirthPlaceInvalid("Moon"); //true
//With scoped BelfioreConnector
//By active places
Validator.isBirthPlaceInvalid("Unione sovietica", Belfiore.active()); //true
Validator.isBirthPlaceInvalid("Unione sovietica", Belfiore.active([1980])); //false
//By cities
Validator.isBirthPlaceInvalid("Francia", Belfiore.cities); //true
Validator.isBirthPlaceInvalid("A662", Belfiore.cities); //false
//By countries
Validator.isBirthPlaceInvalid("Belgio", Belfiore.countries); //false
//By province
Validator.isBirthPlaceInvalid("Vibo Valentia", Belfiore.byProvince("VV")); //false
Validator.isBirthPlaceInvalid("H501", Belfiore.byProvince("VV")); //true
```

#### birthDatePlaceMatch
```javascript
Validator.birthDatePlaceMatch("1990-05-21", "Repubblica Socialista Federale di Jugoslavia"); //true
Validator.birthDatePlaceMatch(new Date(), "Repubblica Socialista Federale di Jugoslavia"); //false
Validator.birthDatePlaceMatch("1988-03-11", "Roma"); //true
Validator.birthDatePlaceMatch(new Date(), "Roma"); //true
Validator.birthDatePlaceMatch(new Date(), ""); //false
Validator.birthDatePlaceMatch("", "Palermo"); //false
Validator.birthDatePlaceMatch("", ""); //false
```
#### birthDatePlaceMismatch
```javascript
Validator.birthDatePlaceMismatch("1990-05-21", "Repubblica Socialista Federale di Jugoslavia"); //false
Validator.birthDatePlaceMismatch(new Date(), "Repubblica Socialista Federale di Jugoslavia"); //true
Validator.birthDatePlaceMismatch("1988-03-11", "Roma"); //false
Validator.birthDatePlaceMismatch(new Date(), "Roma"); //false
Validator.birthDatePlaceMismatch(new Date(), ""); //false
Validator.birthDatePlaceMismatch("", "Palermo"); //false
Validator.birthDatePlaceMismatch("", ""); //false
```

#### matchPersonalInfo
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V")
    .matchPersonalInfo({
        day: 28,
        firstName: "Génny",
        gender: "F",
        lastName: "Verònesi",
        month: 3,
        place: "Catania",
        year: 1907,
    }); //true

Validator.codiceFiscale("VRNGNY07D68C351V")
    .mismatchPersonalInfo({
        day: 28,
        firstName: "Génny",
        gender: "F",
        lastName: "Verònesi",
        month: 3,
        place: "Firenze",
        year: 1907,
    }); //false
```

#### mismatchPersonalInfo
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V")
    .mismatchPersonalInfo({
        day: 28,
        firstName: "Génny",
        gender: "F",
        lastName: "Verònesi",
        month: 3,
        place: "Catania",
        year: 1907,
    }); //false

Validator.codiceFiscale("VRNGNY07D68C351V")
    .mismatchPersonalInfo({
        day: 28,
        firstName: "Génny",
    }); //false
```
</details>

### codiceFiscale (CFMismatchValidator)
*Class* instance
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V"); //CFMismatchValidator
```
<details>
    <summary>Show code examples</summary>

#### valid
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").valid //true
Validator.codiceFiscale("MRNMIA02E45L219X").valid //true
Validator.codiceFiscale("GSTPPP31C06D620Z").valid //true
Validator.codiceFiscale("VRNGNY07D68C351K").valid //false - invalid check digit
Validator.codiceFiscale("GSTPPP99C06D620V").valid //false - invalid birth date/place
Validator.codiceFiscale("").valid; //false - empty cf
```
#### invalid
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").invalid //false - OK
Validator.codiceFiscale("MRNMIA02E45L219X").invalid //false - OK
Validator.codiceFiscale("GSTPPP31C06D620Z").invalid //false - OK
Validator.codiceFiscale("VRNGNY07D68C351K").invalid //true - invalid check digit
Validator.codiceFiscale("GSTPPP99C06D620V").invalid //true - invalid birth date/place
Validator.codiceFiscale("").invalid //false - empty cf is not invalid!
```

#### matchLastName
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("Vareni"); //true
Validator.codiceFiscale("VRN").matchLastName("Vareni"); //true
Validator.codiceFiscale("").matchLastName("Vareni"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("John"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("V"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName(""); //false
```
#### mismatchLastName
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("Vareni"); //false
Validator.codiceFiscale("VRN").mismatchLastName("Vareni"); //false
Validator.codiceFiscale("").mismatchLastName("Vareni"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("John"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("V"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName(""); //false
```

#### matchFirstName
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("Genny"); //true
Validator.codiceFiscale("VRNGNY").matchFirstName("Genny"); //true
Validator.codiceFiscale("").matchFirstName("Genny"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("John"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("G"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName(""); //false
```
#### mismatchFirstName
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("Genny"); //false
Validator.codiceFiscale("VRN").mismatchFirstName("Genny"); //false
Validator.codiceFiscale("").mismatchFirstName("Genny"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("John"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("G"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName(""); //false
```

#### matchBirthDate
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate("2007-04-28"); //true
Validator.codiceFiscale("VRNGNY07D68").matchBirthDate("2007-04-28"); //true
Validator.codiceFiscale("").matchBirthDate("2007-04-28"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate("2008-02-16"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate(""); //false
```
#### mismatchBirthDate
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate("2007-04-28"); //false
Validator.codiceFiscale("VRNGNY07D68").mismatchBirthDate("2007-04-28"); //false
Validator.codiceFiscale("").mismatchBirthDate("2007-04-28"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate("2008-02-16"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate(""); //false
```

#### matchGender
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").matchGender("F"); //true
Validator.codiceFiscale("VRNGNY07D68").matchGender("F"); //true
Validator.codiceFiscale("VRNGNY07D6").matchGender("F"); //true
Validator.codiceFiscale("").matchGender("F"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchGender("M"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchGender(""); //false
```
#### mismatchGender
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender("F"); //false
Validator.codiceFiscale("VRNGNY07D68").mismatchGender("F"); //false
Validator.codiceFiscale("VRNGNY07D6").mismatchGender("F"); //false
Validator.codiceFiscale("").mismatchGender("F"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender("M"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender(""); //false
```

#### matchBirthPlace
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace("CATANIA"); //true
Validator.codiceFiscale("VRNGNY07D68C351").matchBirthPlace("CATANIA"); //true
Validator.codiceFiscale("").matchBirthPlace("CATANIA"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace("ROMA"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace(""); //false
```
#### mismatchBirthPlace
```javascript
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace("CATANIA"); //false
Validator.codiceFiscale("VRNGNY07D68C351").mismatchBirthPlace("CATANIA"); //false
Validator.codiceFiscale("").mismatchBirthPlace("CATANIA"); //false
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace("ROMA"); //true
Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace(""); //false
```

</details>

## 🔃 Compatibility
* [X] NodeJs
* [X] Chrome
* [X] Firefox
* [X] Edge

## ✋ DISCLAMER
All names, informations, and fiscal codes used in this README and all unit tests are fictitious.
No identification with actual persons (living or deceased) is intended or should be inferred

## 📜 LICENSE
[MIT License](LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_large)

## 📚 ASSETS LICENSES AND AUTHORS
* Cities List of Values: [CC BY 4.0](asset/MINISTERO_DELL_INTERNO.LICENSE) Ministero dell'interno
* Cities List of Values: [CC BY 4.0](asset/AGENZIA_DELLE_ENTRATE.LICENSE) Agenzia delle Entrate
* Countries List of Values: [CC BY 3.0](asset/ISTITUTO_NAZIONALE_DI_STATISTICA.LICENSE) Istituto nazionale di statistica

## 📝 AUTHOR
[Marco Ricupero](mailto:marco.ricupero@gmail.com)

## 📬 CONTRIBUTORS
* [Giacomo Gregoletto](https://github.com/greguz)