# codice-fiscale-utils
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_shield)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=alert_status)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=coverage)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=sqale_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Reliability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=reliability_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
![Build Status](http://ci.marketto.it/buildStatus/icon?job=codice-fiscale-utils)

JS utilities to handle Italian Codice Fiscale

## INSTALLATION
```{r, engine='bash', global_install}
npm i -s @marketto/codice-fiscale-utils
```

## DOCUMENTATION
[JsDocs @ GitHub Pages](https://marketto.github.io/codice-fiscale-utils/)

## EXAMPLES
```javascript
const codiceFiscaleUtils = require('@marketto/codice-fiscale-utils');
```

### Parser
Class with static methods
```javascript
const {Parser} = codiceFiscaleUtils;
```

#### Parser.deomocode
```javascript
Parser.cfDeomocode('KKALMNVMAPLB331Z'); //KKALMN91A30B331Z
```

#### Parser.cfToSurname
```javascript
Parser.cfToSurname('WYZ'); //W*Y*Z*
```

#### Parser.cfToName
```javascript
Parser.cfToName('ZZZWAE'); //WAE*
```

#### Parser.cfToGender
```javascript
Parser.cfToGender('XXXYYY90B20'); //M
```
```javascript
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
Parser will consider both 19xx and 20xx, dates which can be in the last 100 years range are parsed as 20xx
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
    name: "ROMA",
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
    surname: 'V*R*N*',
    name: 'G*N*Y*',
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

#### Parser.surnameToCf
```javascript
Parser.surnameToCf('Rossi'); //RSS
Parser.surnameToCf('Réno'); //RNE
Parser.surnameToCf('Aieie'); //AIE
```

#### Parser.nameToCf
```javascript
Parser.nameToCf('Dòminique'); //DNQ
Parser.nameToCf('Mark'); //MRK
Parser.nameToCf('Tom'); //TMO
Parser.nameToCf('Ania'); //NAI
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
    name: 'BOLOGNA',
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
    name: 'Unione Sovietica',
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
    surname: 'Veronesi',
    name: 'Genny',
    year: 1907,
    month: 3,
    day: 28,
    gender: 'F',
    place: 'Catania'
}); //VRNGNY07D68C351V
```


### Validator
Class with static methods
```javascript
const {Validator} = codiceFiscaleUtils;
```

#### Validator.cfSurname
```javascript
Validator.cfSurname().test('KST'); //true
Validator.cfSurname().test('AST'); //false
Validator.cfSurname('Alex').test('KST'); //false
Validator.cfSurname('Alex').test('LXA'); //true
```

#### Validator.cfName
```javascript
Validator.cfName().test('NIX'); //true
Validator.cfName().test('UIK'); //false
Validator.cfName('Dominique').test('DMN'); //false
Validator.cfName('Dominique').test('DNQ'); //true
```

#### Validator.cfYear
```javascript
Validator.cfYear().test('07'); //true
Validator.cfYear().test('3'); //false
Validator.cfYear(1907).test('07'); //true
Validator.cfYear(1986).test('U6'); //true - omocode
Validator.cfYear(1986).test('87'); //false
```

#### Validator.cfMonth
```javascript
Validator.cfMonth().test('C'); //true
Validator.cfMonth().test('Z'); //false
Validator.cfMonth(3).test('D'); //true
Validator.cfMonth(3).test('A'); //false
```

#### Validator.cfDay
```javascript
Validator.cfDay().test('0M'); //true - omocode
Validator.cfDay().test('33'); //false
Validator.cfDay(12).test('12'); //true - male
Validator.cfDay(12).test('52'); //true - female
Validator.cfDay(12).test('MN'); //true - omocode
Validator.cfDay(12).test('22'); //false
```

#### Validator.cfDayGender
```javascript
Validator.cfDayGender().test('0M'); //true
Validator.cfDayGender().test('73'); //false
Validator.cfDayGender(9, 'F').test('RM'); //true
Validator.cfDayGender(1, 'F').test('41'); //true
Validator.cfDayGender(1, 'M').test('41'); //false
```

#### Validator.cfDateGender
```javascript
Validator.cfDateGender().test('83D22'); //true
Validator.cfDateGender().test('83Z32'); //false
Validator.cfDateGender([1983, 3, 22], 'M').test('U3D2N'); //true
Validator.cfDateGender("1995-05-01", 'F').test('V5EQ1'); //true
Validator.cfDateGender([1983, 3, 22], 'M').test('83D62'); //false
```

#### Validator.cfPlace
```javascript
Validator.cfPlace().test('A662'); //true
Validator.cfPlace().test('Z974'); //false
Validator.cfPlace('Bari').test('H501'); //true
Validator.cfPlace([1933], 'Fiume').test('D620'); //true
Validator.cfPlace([2000], 'Fiume').test('D620'); //false - Always invalid
```

#### Validator.codiceFiscale
```javascript
Validator.codiceFiscale().test('VRNGNY07D68C351V'); //true
Validator.codiceFiscale().test('MRNMIA02E45L2193'); //false
//Partial info
Validator.codiceFiscale({
    surname: 'Veronesi',
    name: 'Genny',
    gender: 'F',
    place: 'Catania'
}).test('VRNGNY97A65C351V'); //true
//Full info
Validator.codiceFiscale({
    surname: 'Veronesi',
    name: 'Genny',
    year: 1907,
    month: 3,
    day: 28,
    gender: 'F',
    place: 'Catania'
}).test('VRNGNY07D68C351V'); //true
```

#### Validator.surname
```javascript
Validator.surname().test('Kristersen'); //true
Validator.surname('VLD').test('Vàlidàtòr'); //true
Validator.surname('AIX').test('Air'); //false
```

#### Validator.name
```javascript
Validator.name().test('Rossi'); //true
Validator.name('XYZAIE').test('Aieie'); //true
Validator.name('XYZAIX').test('Air'); //false
```

#### Validator.date
```javascript
Validator.date().test('1995'); //true
Validator.date().test('1985-01'); //true
Validator.date().test('1970-03-03'); //true
Validator.date().test('1970-03-'); //false
Validator.date('XYZXYZ88H61').test('1988-06-21'); //true
Validator.date('XYZXYZ92C16').test('1992-03-26'); //false
```

#### Validator.gender
```javascript
Validator.gender().test('F'); //true
Validator.gender().test('X'); //false
Validator.gender('XYZXYZ88H61').test('F'); //true
Validator.gender('XYZXYZ88H61').test('M'); //false
```

#### Validator.place
```javascript
Validator.place().test('Roma'); //true
Validator.place('XYZXYZ92C16A662').test('Bari'); //true
Validator.place('XYZXYZ12S30A662').test('Bologna'); //false
```

#### Validator.isValid
```javascript
Validator.isValid('VRNGNY07D68C351V'); //true
Validator.isValid('VRNGNY07D68C351K'); //false - invalid check digit
Validator.isValid('GSTPPP99C06D620V'); //false - invalid birth date/place
```


## LICENSE
MIT License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_large)

### ASSETS LICENSES
* Cities List of Values: CC BY 4.0 Ministero dell'interno
* Countries List of Values: CC BY 3.0 Istituto nazionale di statistica


## AUTHORS
Marco Ricupero
