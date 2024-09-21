# codice-fiscale-utils

**_The Final and definitive solution to handle the Italian Tax Code_**

[![NPM Version](https://img.shields.io/npm/v/@marketto/codice-fiscale-utils.svg)](https://www.npmjs.com/package/@marketto/codice-fiscale-utils)
[![NPM Downloads](https://img.shields.io/npm/dm/@marketto/codice-fiscale-utils.svg)](https://www.npmjs.com/package/@marketto/codice-fiscale-utils)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_shield)
[![LICENSE](https://img.shields.io/badge/licese-MIT-gold.svg)](https://github.com/Marketto/codice-fiscale-utils/blob/master/LICENSE)
[![Blog](https://img.shields.io/badge/blog-marketto-blue.svg)](http://blog.marketto.it)
[![Buy me a coffee](https://img.shields.io/badge/Ko--fi-donate-blueviolet)](https://ko-fi.com/marketto)

TS utilities to handle Italian Codice Fiscale

## 📗 FAQs?

1. **Why should I need a library? Can't I use just a RegExp?**
   _A RegExp would just check the form of a CodiceFiscale, not coherence between birth date and place, not validity of 16th check digit char_

2. **What about the omocodes (Omocodia/Omocodice) problem, does it work?**
   _Absolutely! There's a dedicated class to encode or decode such kind of CodiceFiscale and it's properly integrated in_ [**_Parser_**](#parser), [**_Validator_**](#validator) and [**_Pattern_**](#pattern) _methods_

3. **Can I use this library in a FE project with other frameworks?**
   _Sure, it's built to work both in node and browser environments! Give a look at the [Demo section](#demo)_

## 📙 [CHANGELOG](CHANGELOG.MD)

## 🚃 [ROADMAP](ROADMAP.MD)

## 🖇️ BELFIORE CONNECTOR

Please note that a **BelfioreConnector** is required, download one of the following:

- [**@marketto/belfiore-connector-embedded**](https://www.npmjs.com/package/@marketto/belfiore-connector-embedded): Belfiore Connector with embedded dataset (v2 behavior)
- [**@marketto/belfiore-connector-json**](https://www.npmjs.com/package/@marketto/belfiore-connector-json): Belfiore Connector which load a static place list or call an sync function to retrieve the place list

### 🖋️ WRITE YOUR OWN CONNECTOR

[**@marketto/belfiore-connector**](https://www.npmjs.com/package/@marketto/belfiore-connector): Abstract class & interfaces to write your own connector

## 🔌 INSTALLATION

### NPM

```{r, engine='bash', global_install}
npm i -s @marketto/codice-fiscale-utils
```

### Script

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://unpkg.com/@marketto/diacritic-remover/dist/diacritic-remover.bundle.min.js"></script>
<script src="https://unpkg.com/@marketto/codice-fiscale-utils/dist/codice-fiscale-utils.bundle.min.js"></script>
```

## 🔧 USAGE

### CJS

```javascript
const CodiceFiscaleUtils = require("@marketto/codice-fiscale-utils");
const codiceFiscaleUtils = new CodiceFiscaleUtils(belfioreConnector);
```

### MJS & TypeScript

```typescript
import { CodiceFiscaleUtils } from "@marketto/codice-fiscale-utils";
const codiceFiscaleUtils = new CodiceFiscaleUtils(belfioreConnector);
```

## 📖 [DOCUMENTATION](https://marketto.github.io/codice-fiscale-utils/)

### CodiceFiscaleUtils.parser

<details>
    <summary>Show code examples</summary>

#### CodiceFiscaleUtils.parser.cfDeomocode

```javascript
codiceFiscaleUtils.parser.cfDeomocode("KKALMNVMAPLB331Z"); //KKALMN91A30B331P
codiceFiscaleUtils.parser.cfDeomocode("kkalmnvmaplb331z"); //kkalmn91a30b331p
```

#### CodiceFiscaleUtils.parser.cfOmocodeId

```javascript
codiceFiscaleUtils.parser.cfOmocodeId("VRNGNYLtdsucprmt"); //127
codiceFiscaleUtils.parser.cfOmocodeId("kkalmn91as0b331z"); //16
codiceFiscaleUtils.parser.cfOmocodeId("kkalmn91a30b331z"); //0
```

#### CodiceFiscaleUtils.parser.cfOmocode

```javascript
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 0); //VRNGNY07d68c351v
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 1); //VRNGNY07d68c35Mn
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 2); //VRNGNY07d68c3R1h
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 3); //VRNGNY07d68c3RMz
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 8); //VRNGNY07d6Uc351s
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 32); //VRNGNY0Td68c351h
codiceFiscaleUtils.parser.cfOmocode("VRNGNY07d68c351v", 127); //VRNGNYLTdSUcPRMt
//Re-omocode
codiceFiscaleUtils.parser.cfOmocode("kkalmnvmaplb331z", 0); //kkalmn91a30b331p
codiceFiscaleUtils.parser.cfOmocode("kkalmnvmaplb331z", 1); //kkalmn91a30b33Mh
codiceFiscaleUtils.parser.cfOmocode("kkalmnvmaplb331z", 74); //kkalmnv1a3lb3P1t
codiceFiscaleUtils.parser.cfOmocode("kkalmnvmaplb331z", 127); //kkalmnvmaplbPPMe
```

#### CodiceFiscaleUtils.parser.cfToLastName

```javascript
codiceFiscaleUtils.parser.cfToLastName("WYZ"); //W*Y*Z*
```

#### CodiceFiscaleUtils.parser.cfToFirstName

```javascript
codiceFiscaleUtils.parser.cfToFirstName("ZZZWAE"); //WAE*
```

#### CodiceFiscaleUtils.parser.cfToGender

```javascript
codiceFiscaleUtils.parser.cfToGender("XXXYYY90B20"); //M
codiceFiscaleUtils.parser.cfToGender("XXXYYY90B63"); //F
```

#### Parser.cfToBirthDay

```javascript
codiceFiscaleUtils.parser.cfToBirthDay("XXXYYY90B71"); //31
```

#### CodiceFiscaleUtils.parser.cfToBirthMonth

```javascript
codiceFiscaleUtils.parser.cfToBirthMonth("XXXYYY92C"); //2
```

#### CodiceFiscaleUtils.parser.cfToBirthYear

Parser will consider dates that can be both _19xx_ and _20xx_ as **_20xx_** if they would be valid in the last 100 years range from now

```javascript
codiceFiscaleUtils.parser.cfToBirthYear("XXXYYY92"); //1992
codiceFiscaleUtils.parser.cfToBirthYear("XXXYYY12"); //2012
```

#### Parser.cfToBirthDate

```javascript
const dt = codiceFiscaleUtils.parser.cfToBirthDate("XXXYYY81A63"); //Date
dt.toJSON(); //1981-01-23T...
```

#### CodiceFiscaleUtils.parser.cfToBirthPlace

```javascript
const birthPlace = codiceFiscaleUtils.parser.cfToBirthPlace("XXXYYY92B20H501");
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

#### Parser.cfDecode (async)

```javascript
await codiceFiscaleUtils.parser.cfDecode("VRNGNY07D68C351V");
/*
{
    lastName: 'V*R*N*',
    firstName: 'G*N*Y*',
    day: 28,
    month: 3,
    year: 2017,
    gender: 'F',
    place: {
		belfioreCode: 'C531',
		name: 'CATANIA',
		creationDate: Date('1861-03-17'),
		expirationDate: Date('9999-12-31'),
		province: 'CT',
		dataSource: {
			name: 'Ministero dell\'Interno',
			url: '...',
			authors: '...',
			license: 'cc-by-4.0',
			licenseUrl: '...',
			termsAndConditions: '...'
		}

	}
}
*/
```

#### Parser.lastNameToCf

```javascript
codiceFiscaleUtils.parser.lastNameToCf("Rossi"); //RSS
codiceFiscaleUtils.parser.lastNameToCf("Réno"); //RNE
codiceFiscaleUtils.parser.lastNameToCf("Aieie"); //AIE
```

#### Parser.firstNameToCf

```javascript
codiceFiscaleUtils.parser.firstNameToCf("Dòminique"); //DNQ
codiceFiscaleUtils.parser.firstNameToCf("Mark"); //MRK
codiceFiscaleUtils.parser.firstNameToCf("Tom"); //TMO
codiceFiscaleUtils.parser.firstNameToCf("Ania"); //NAI
```

#### Parser.yearToCf

```javascript
codiceFiscaleUtils.parser.yearToCf("1990"); //90
codiceFiscaleUtils.parser.yearToCf(2010); //10
codiceFiscaleUtils.parser.yearToCf("02"); //02
```

#### Parser.monthToCf

```javascript
codiceFiscaleUtils.parser.monthToCf(0); //A
codiceFiscaleUtils.parser.monthToCf(4); //E
codiceFiscaleUtils.parser.monthToCf(8); //P
```

#### Parser.monthToCf

```javascript
codiceFiscaleUtils.parser.monthToCf(0); //A
codiceFiscaleUtils.parser.monthToCf(4); //E
codiceFiscaleUtils.parser.monthToCf(8); //P
```

#### Parser.dayGenderToCf

```javascript
codiceFiscaleUtils.parser.dayGenderToCf(3, "M"); //03
codiceFiscaleUtils.parser.dayGenderToCf(7, "F"); //47
```

#### Parser.dateGenderToCf

```javascript
codiceFiscaleUtils.parser.dateGenderToCf([2016, 3, 23], "M"); //16D23
codiceFiscaleUtils.parser.dateGenderToCf("1987-09-22", "F"); //87P62
codiceFiscaleUtils.parser.dateGenderToCf(new Date(2016, 2, 23, 12), "M"); //16C23
codiceFiscaleUtils.parser.dateGenderToCf(moment(1988, 7, 3, 12), "F"); //88M43
```

#### Parser.placeToCf (async)

```javascript
await codiceFiscaleUtils.parser.placeToCf("Bologna");
/*
{
    belfioreCode: 'A944',
    name: 'BOLOGNA',
    creationDate: 1861-03-16T23:00:00.000Z,
    expirationDate: 9999-12-31T22:59:59.999Z,
    dataSource: {...},
    province: 'BO'
}
*/
await codiceFiscaleUtils.parser.placeToCf([1990], "Unione Sovietica");
/*
{
    belfioreCode: 'Z135',
    name: 'Unione Sovietica',
    creationDate: 1860-12-31T23:00:00.000Z,
    expirationDate: 1991-12-31T22:59:59.999Z,
    dataSource: {...},
    iso3166: 'SU'
}
*/
await codiceFiscaleUtils.parser.placeToCf([2000], "Unione Sovietica"); //null
```

#### Parser.encodeCf (async)

```javascript
await codiceFiscaleUtils.parser.encodeCf({
	lastName: "Veronesi",
	firstName: "Genny",
	year: 1907,
	month: 3,
	day: 28,
	gender: "F",
	place: "Catania",
}); //VRNGNY07D68C351V
```

```javascript
await codiceFiscaleUtils.parser.encodeCf({
	lastName: "Veronesi",
	firstName: "Genny",
	year: 1907,
	month: 3,
	day: 28,
	gender: "F",
	place: "C531",
}); //VRNGNY07D68C351V
```

</details>

### CodiceFiscaleUtils.pattern

<details>
    <summary>Show code examples</summary>

#### CodiceFiscaleUtils.pattern.cfLastName

```javascript
codiceFiscaleUtils.pattern.cfLastName().test("KST"); //true
codiceFiscaleUtils.pattern.cfLastName().test("AST"); //false
codiceFiscaleUtils.pattern.cfLastName("Alex").test("KST"); //false
codiceFiscaleUtils.pattern.cfLastName("Alex").test("LXA"); //true
```

#### CodiceFiscaleUtils.pattern.cfFirstName

```javascript
codiceFiscaleUtils.pattern.cfFirstName().test("NIX"); //true
codiceFiscaleUtils.pattern.cfFirstName().test("UIK"); //false
codiceFiscaleUtils.pattern.cfFirstName("Dominique").test("DMN"); //false
codiceFiscaleUtils.pattern.cfFirstName("Dominique").test("DNQ"); //true
```

#### CodiceFiscaleUtils.pattern.cfYear

```javascript
codiceFiscaleUtils.pattern.cfYear().test("07"); //true
codiceFiscaleUtils.pattern.cfYear().test("3"); //false
codiceFiscaleUtils.pattern.cfYear(1907).test("07"); //true
codiceFiscaleUtils.pattern.cfYear(1986).test("U6"); //true - omocode
codiceFiscaleUtils.pattern.cfYear(1986).test("87"); //false
```

#### CodiceFiscaleUtils.pattern.cfMonth

```javascript
codiceFiscaleUtils.pattern.cfMonth().test("C"); //true
codiceFiscaleUtils.pattern.cfMonth().test("Z"); //false
codiceFiscaleUtils.pattern.cfMonth(3).test("D"); //true
codiceFiscaleUtils.pattern.cfMonth(3).test("A"); //false
```

#### CodiceFiscaleUtils.pattern.cfDay

```javascript
codiceFiscaleUtils.pattern.cfDay().test("0M"); //true - omocode
codiceFiscaleUtils.pattern.cfDay().test("33"); //false
codiceFiscaleUtils.pattern.cfDay(12).test("12"); //true - male
codiceFiscaleUtils.pattern.cfDay(12).test("52"); //true - female
codiceFiscaleUtils.pattern.cfDay(12).test("MN"); //true - omocode
codiceFiscaleUtils.pattern.cfDay(12).test("22"); //false
```

#### CodiceFiscaleUtils.pattern.cfDayGender

```javascript
codiceFiscaleUtils.pattern.cfDayGender().test("0M"); //true
codiceFiscaleUtils.pattern.cfDayGender().test("73"); //false
codiceFiscaleUtils.pattern.cfDayGender(9, "F").test("RM"); //true
codiceFiscaleUtils.pattern.cfDayGender(1, "F").test("41"); //true
codiceFiscaleUtils.pattern.cfDayGender(1, "M").test("41"); //false
```

#### CodiceFiscaleUtils.pattern.cfDateGender

```javascript
codiceFiscaleUtils.pattern.cfDateGender().test("83D22"); //true
codiceFiscaleUtils.pattern.cfDateGender().test("83Z32"); //false
codiceFiscaleUtils.pattern.cfDateGender([1983, 3, 22], "M").test("U3D2N"); //true
codiceFiscaleUtils.pattern.cfDateGender("1995-05-01", "F").test("V5EQ1"); //true
codiceFiscaleUtils.pattern.cfDateGender([1983, 3, 22], "M").test("83D62"); //false
```

#### CodiceFiscaleUtils.pattern.cfPlace (async)

```javascript
const genericCfPlaceMatcher = await codiceFiscaleUtils.pattern.cfPlace();
genericCfPlaceMatcher.test("A662"); //true
genericCfPlaceMatcher.test("Z974"); //false

const cityCfPlaceMatcher = await codiceFiscaleUtils.pattern.cfPlace("Bari");
cityCfPlaceMatcher.test("H501"); //true

const year33CityCfPlaceMatcher = await codiceFiscaleUtils.pattern.cfPlace(
	[1933],
	"Fiume"
);
year33CityCfPlaceMatcher.test("D620"); //true
const year00CityCfPlaceMatcher = await codiceFiscaleUtils.pattern.cfPlace(
	[2000],
	"Fiume"
);
year00CityCfPlaceMatcher.test("D620"); //false - due to expiration date
```

#### CodiceFiscaleUtils.pattern.codiceFiscale (async)

```javascript
const cFMatcher = await codiceFiscaleUtils.pattern.codiceFiscale();
cFMatcher.test("VRNGNY07D68C351V"); //true
cFMatcher.codiceFiscale().test("MRNMIA02E45L2193"); //false

//Partial info
const cfPartialInfo = await codiceFiscaleUtils.pattern.codiceFiscale({
	lastName: "Veronesi",
	firstName: "Genny",
	gender: "F",
	place: "Catania",
});
cfPartialInfo.test("VRNGNY97A65C351V"); //true

//Full info
const cfFullInfo = await codiceFiscaleUtils.pattern.codiceFiscale({
	lastName: "Veronesi",
	firstName: "Genny",
	year: 1907,
	month: 3,
	day: 28,
	gender: "F",
	place: "Catania",
});
cfFullInfo.test("VRNGNY07D68C351V"); //true
```

#### CodiceFiscaleUtils.pattern.lastName

```javascript
codiceFiscaleUtils.pattern.lastName().test("Kristersen"); //true
codiceFiscaleUtils.pattern.lastName("VLD").test("Vàlidàtòr"); //true
codiceFiscaleUtils.pattern.lastName("AIX").test("Air"); //false
```

#### CodiceFiscaleUtils.pattern.firstName

```javascript
codiceFiscaleUtils.pattern.firstName().test("Rossi"); //true
codiceFiscaleUtils.pattern.firstName("XYZAIE").test("Aieie"); //true
codiceFiscaleUtils.pattern.firstName("XYZAIX").test("Air"); //false
```

#### CodiceFiscaleUtils.pattern.date

```javascript
codiceFiscaleUtils.pattern.date().test("1995"); //true
codiceFiscaleUtils.pattern.date().test("1985-01"); //true
codiceFiscaleUtils.pattern.date().test("1970-03-03"); //true
codiceFiscaleUtils.pattern.date().test("1970-03-"); //false
codiceFiscaleUtils.pattern.date("XYZXYZ88H61").test("1988-06-21"); //true
codiceFiscaleUtils.pattern.date("XYZXYZ92C16").test("1992-03-26"); //false
```

#### CodiceFiscaleUtils.pattern.gender

```javascript
codiceFiscaleUtils.pattern.gender().test("F"); //true
codiceFiscaleUtils.pattern.gender().test("X"); //false
codiceFiscaleUtils.pattern.gender("XYZXYZ88H61").test("F"); //true
codiceFiscaleUtils.pattern.gender("XYZXYZ88H61").test("M"); //false
```

#### CodiceFiscaleUtils.pattern.place (async)

```javascript
const genericPlaceMatcher = await codiceFiscaleUtils.pattern.place();
genericPlaceMatcher.test("Roma"); //true

const cityPlaceMatcher = await codiceFiscaleUtils.pattern.place(
	"XYZXYZ92C16A662"
);
cityPlaceMatcher.test("Bari"); //true
cityPlaceMatcher.test("Bologna"); //false
```

</details>

### CodiceFiscaleUtils.validator

<details>
    <summary>Show code examples</summary>

#### CodiceFiscaleUtils.validator.isLastNameValid

```javascript
codiceFiscaleUtils.validator.isLastNameValid("Test"); //true
codiceFiscaleUtils.validator.isLastNameValid("Tést N'àme"); //true
codiceFiscaleUtils.validator.isLastNameValid(""); //false
codiceFiscaleUtils.validator.isLastNameValid("@!#"); //false
```

#### CodiceFiscaleUtils.validator.isLastNameInvalid

```javascript
codiceFiscaleUtils.validator.isLastNameInvalid("Test"); //false
codiceFiscaleUtils.validator.isLastNameInvalid("Tést N'àme"); //false
codiceFiscaleUtils.validator.isLastNameInvalid(""); //false
codiceFiscaleUtils.validator.isLastNameInvalid("@!#"); //true
```

#### CodiceFiscaleUtils.validator.isFirstNameValid

```javascript
codiceFiscaleUtils.validator.isFirstNameValid("Test"); //true
codiceFiscaleUtils.validator.isFirstNameValid("Tést N'àme"); //true
codiceFiscaleUtils.validator.isFirstNameValid(""); //false
codiceFiscaleUtils.validator.isFirstNameValid("@!#"); //false
```

#### CodiceFiscaleUtils.validator.isFirstNameInvalid

```javascript
codiceFiscaleUtils.validator.isFirstNameInvalid("Test"); //false
codiceFiscaleUtils.validator.isFirstNameInvalid("Tést N'àme"); //false
codiceFiscaleUtils.validator.isFirstNameInvalid(""); //false
codiceFiscaleUtils.validator.isFirstNameInvalid("@!#"); //true
```

#### CodiceFiscaleUtils.validator.isBirthDateValid

```javascript
codiceFiscaleUtils.validator.isBirthDateValid("1999-01-01"); //true
codiceFiscaleUtils.validator.isBirthDateValid([1999, 0, 1]); //true
codiceFiscaleUtils.validator.isBirthDateValid(""); //false
codiceFiscaleUtils.validator.isBirthDateValid("2000-02-30"); //false
codiceFiscaleUtils.validator.isBirthDateValid("No date"); //false
codiceFiscaleUtils.validator.isBirthDateValid("@!#"); //false
```

#### CodiceFiscaleUtils.validator.isBirthDateInvalid

```javascript
codiceFiscaleUtils.validator.isBirthDateInvalid("1999-01-01"); //false
codiceFiscaleUtils.validator.isBirthDateInvalid([1999, 0, 1]); //false
codiceFiscaleUtils.validator.isBirthDateInvalid(""); //false
codiceFiscaleUtils.validator.isBirthDateInvalid("2000-02-30"); //true
codiceFiscaleUtils.validator.isBirthDateInvalid("No date"); //true
codiceFiscaleUtils.validator.isBirthDateInvalid("@!#"); //true
```

#### CodiceFiscaleUtils.validator.isBirthPlaceValid (async)

```javascript
await codiceFiscaleUtils.validator.isBirthPlaceValid("Roma"); //true
await codiceFiscaleUtils.validator.isBirthPlaceValid("H501"); //true
await codiceFiscaleUtils.validator.isBirthPlaceValid(""); //false
await codiceFiscaleUtils.validator.isBirthPlaceValid("Moon"); //false
```

#### CodiceFiscaleUtils.validator.isBirthPlaceInvalid (async)

```javascript
await codiceFiscaleUtils.validator.isBirthPlaceInvalid("Roma"); //false
await codiceFiscaleUtils.validator.isBirthPlaceInvalid("H501"); //false
await codiceFiscaleUtils.validator.isBirthPlaceInvalid(""); //false
await codiceFiscaleUtils.validator.isBirthPlaceInvalid("Moon"); //true
```

#### CodiceFiscaleUtils.validator.birthDatePlaceMatch

```javascript
await codiceFiscaleUtils.validator.birthDatePlaceMatch(
	"1990-05-21",
	"Repubblica Socialista Federale di Jugoslavia"
); //true
await codiceFiscaleUtils.validator.birthDatePlaceMatch(
	new Date(),
	"Repubblica Socialista Federale di Jugoslavia"
); //false
await codiceFiscaleUtils.validator.birthDatePlaceMatch("1988-03-11", "Roma"); //true
await codiceFiscaleUtils.validator.birthDatePlaceMatch(new Date(), "Roma"); //true
await codiceFiscaleUtils.validator.birthDatePlaceMatch(new Date(), ""); //false
await codiceFiscaleUtils.validator.birthDatePlaceMatch("", "Palermo"); //false
await codiceFiscaleUtils.validator.birthDatePlaceMatch("", ""); //false
```

#### CodiceFiscaleUtils.validator.birthDatePlaceMismatch

```javascript
await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
	"1990-05-21",
	"Repubblica Socialista Federale di Jugoslavia"
); //false
await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
	new Date(),
	"Repubblica Socialista Federale di Jugoslavia"
); //true
await codiceFiscaleUtils.validator.birthDatePlaceMismatch("1988-03-11", "Roma"); //false
await codiceFiscaleUtils.validator.birthDatePlaceMismatch(new Date(), "Roma"); //false
await codiceFiscaleUtils.validator.birthDatePlaceMismatch(new Date(), ""); //false
await codiceFiscaleUtils.validator.birthDatePlaceMismatch("", "Palermo"); //false
await codiceFiscaleUtils.validator.birthDatePlaceMismatch("", ""); //false
```

</details>

### CFMismatchValidator

_Class_ instance

```javascript
//CFMismatchValidator
const cfValidator = await codiceFiscaleUtils.validator.codiceFiscale(
	"VRNGNY07D68C351V"
);
```

<details>
    <summary>Show code examples</summary>

#### CFMismatchValidator.errors

```javascript
(await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")).errors;
/*
{
	place: "PLACE_EXPIRED_ON_NOT_YET_CREATED_ON_BIRTDATE",
	date: "BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE",
}
*/
```

#### CFMismatchValidator.matchPersonalInfo

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchPersonalInfo({
	day: 28,
	firstName: "Génny",
	gender: "F",
	lastName: "Verònesi",
	month: 3,
	place: "Catania",
	year: 1907,
}); //true

(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchPersonalInfo({
	day: 28,
	firstName: "Génny",
	gender: "F",
	lastName: "Verònesi",
	month: 3,
	place: "Firenze",
	year: 1907,
}); //false
```

#### CFMismatchValidator.mismatchPersonalInfo

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchPersonalInfo({
	day: 28,
	firstName: "Génny",
	gender: "F",
	lastName: "Verònesi",
	month: 3,
	place: "Catania",
	year: 1907,
}); //false

(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchPersonalInfo({
	day: 28,
	firstName: "Génny",
}); //false
```

#### CFMismatchValidator.valid

```javascript
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")).valid; //true
(await codiceFiscaleUtils.validator.codiceFiscale("MRNMIA02E45L219X")).valid; //true
(await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP31C06D620Z")).valid; //true
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351K")).valid; //false - invalid check digit
(await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")).valid; //false - invalid birth date/place
(await codiceFiscaleUtils.validator.codiceFiscale("")).valid; //false - empty cf
```

#### CFMismatchValidator.invalid

```javascript
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")).invalid; //false - OK
(await codiceFiscaleUtils.validator.codiceFiscale("MRNMIA02E45L219X")).invalid; //false - OK
(await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP31C06D620Z")).invalid; //false - OK
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351K")).invalid; //true - invalid check digit
(await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")).invalid; //true - invalid birth date/place
(await codiceFiscaleUtils.validator.codiceFiscale("")).invalid; //false - empty cf is not invalid!
```

#### CFMismatchValidator.matchLastName

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchLastName("Vareni"); //true
(await codiceFiscaleUtils.validator.codiceFiscale("VRN")).matchLastName(
	"Vareni"
); //true
(await codiceFiscaleUtils.validator.codiceFiscale("")).matchLastName("Vareni"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchLastName("John"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchLastName("V"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchLastName(""); //false
```

#### CFMismatchValidator.mismatchLastName

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchLastName("Vareni"); //false
(await codiceFiscaleUtils.validator.codiceFiscale("VRN")).mismatchLastName(
	"Vareni"
); //false
(await codiceFiscaleUtils.validator.codiceFiscale("")).mismatchLastName(
	"Vareni"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchLastName("John"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchLastName("V"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchLastName(""); //false
```

#### CFMismatchValidator.matchFirstName

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchFirstName("Genny"); //true
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY")).matchFirstName(
	"Genny"
); //true
(await codiceFiscaleUtils.validator.codiceFiscale("")).matchFirstName("Genny"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchFirstName("John"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchFirstName("G"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchFirstName(""); //false
```

#### CFMismatchValidator.mismatchFirstName

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchFirstName("Genny"); //false
(await codiceFiscaleUtils.validator.codiceFiscale("VRN")).mismatchFirstName(
	"Genny"
); //false
(await codiceFiscaleUtils.validator.codiceFiscale("")).mismatchFirstName(
	"Genny"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchFirstName("John"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchFirstName("G"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchFirstName(""); //false
```

#### CFMismatchValidator.matchBirthDate

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthDate("2007-04-28"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68")
).matchBirthDate("2007-04-28"); //true
(await codiceFiscaleUtils.validator.codiceFiscale("")).matchBirthDate(
	"2007-04-28"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthDate("2008-02-16"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthDate(""); //false
```

#### CFMismatchValidator.mismatchBirthDate

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthDate("2007-04-28"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68")
).mismatchBirthDate("2007-04-28"); //false
(await codiceFiscaleUtils.validator.codiceFiscale("")).mismatchBirthDate(
	"2007-04-28"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthDate("2008-02-16"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthDate(""); //false
```

#### CFMismatchValidator.matchGender

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchGender("F"); //true
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68")).matchGender(
	"F"
); //true
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D6")).matchGender(
	"F"
); //true
(await codiceFiscaleUtils.validator.codiceFiscale("")).matchGender("F"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchGender("M"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchGender(""); //false
```

#### CFMismatchValidator.mismatchGender

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchGender("F"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68")
).mismatchGender("F"); //false
(await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D6")).mismatchGender(
	"F"
); //false
(await codiceFiscaleUtils.validator.codiceFiscale("")).mismatchGender("F"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchGender("M"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchGender(""); //false
```

#### CFMismatchValidator.matchBirthPlace

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthPlace("CATANIA"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351")
).matchBirthPlace("CATANIA"); //true
(await codiceFiscaleUtils.validator.codiceFiscale("")).matchBirthPlace(
	"CATANIA"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthPlace("ROMA"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).matchBirthPlace(""); //false
```

#### CFMismatchValidator.mismatchBirthPlace

```javascript
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthPlace("CATANIA"); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351")
).mismatchBirthPlace("CATANIA"); //false
(await codiceFiscaleUtils.validator.codiceFiscale("")).mismatchBirthPlace(
	"CATANIA"
); //false
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthPlace("ROMA"); //true
(
	await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
).mismatchBirthPlace(""); //false
```

</details>

## 🔃 Compatibility

- [x] NodeJs
- [x] Chrome
- [x] Firefox
- [x] Edge

## ✋ DISCLAMER

All names, informations, and fiscal codes used in this README and all unit tests are fictitious.
No identification with actual persons (living or deceased) is intended or should be inferred

## 📜 [LICENSE: MIT](LICENSE)

## 📚 ASSETS LICENSES AND AUTHORS

- Cities List of Values: [CC BY 4.0](asset/MINISTERO_DELL_INTERNO.LICENSE) Ministero dell'interno
- Cities List of Values: [CC BY 4.0](asset/AGENZIA_DELLE_ENTRATE.LICENSE) Agenzia delle Entrate
- Countries List of Values: [CC BY 3.0](asset/ISTITUTO_NAZIONALE_DI_STATISTICA.LICENSE) Istituto nazionale di statistica

## 📝 AUTHOR

[Marco Ricupero](mailto:marco.ricupero@gmail.com)

## 📬 CONTRIBUTORS

- [Giacomo Gregoletto](https://github.com/greguz)
- [Julian Scheid](https://github.com/jscheid)
