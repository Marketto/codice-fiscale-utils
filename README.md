# codice-fiscale-utils
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_shield)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=alert_status)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=coverage)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=sqale_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)
[![Reliability](https://sonarcloud.io/api/project_badges/measure?project=Marketto_codice-fiscale-utils&metric=reliability_rating)](https://sonarcloud.io/dashboard/index/Marketto_codice-fiscale-utils)

JS utilities to handle Italian Codice Fiscale

## INSTALLATION
```{r, engine='bash', global_install}
npm i -s @marketto/codice-fiscale-utils
```

## DOCUMENTATION
[JsDocs @ GitHub Pages](https://marketto.github.io/codice-fiscale-utils/)

## EXAMPLES
### Parser
#### deomocode
`Parser.cfDeomocode('KKALMNVMAPLB331Z'); //KKALMN91A30B331Z`
#### cfToSurname
`Parser.cfToSurname('WYZ'); //W*Y*Z*`
#### cfToName
`Parser.cfToName('ZZZWAE'); //WAE*`
#### cfToGender
`Parser.cfToGender('XXXYYY90B20'); //M`
`Parser.cfToGender('XXXYYY90B63'); //F`
#### cfToBirthDay
`Parser.cfToBirthDay('XXXYYY90B71'); //31`
#### cfToBirthMonth
`Parser.cfToBirthMonth('XXXYYY92C'); //2`
#### cfToBirthYear
Parser will consider both 19xx and 20xx, dates which can be in the last 100 years range are parsed as 20xx
`Parser.cfToBirthYear('XXXYYY92'); //1992`
`Parser.cfToBirthYear('XXXYYY12'); //2012`
#### cfToBirthDate
`const dt = Parser.cfToBirthDate('XXXYYY81A63'); //Date`
`dt.toJSON(); //1981-01-23T...`
#### cfToBirthPlace
`const birthPlace = Parser.cfToBirthPlace('XXXYYY92B20H501'); //Object`
`birthPlace.name; //ROMA`
`birthPlace.belfioreCode; //H501`
#### cfDecode
`Parser.cfDecode('VRNGNY07D68C351V'); //{surname: 'V*R*N*', name: 'G*N*Y*', day: 28,month: 3, year: 2017, gender: 'F', place: 'CATANIA'}`


## LICENSE
MIT License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FMarketto%2Fcodice-fiscale-utils?ref=badge_large)

### ASSETS LICENSES
* Cities List of Values: CC BY 4.0 Ministero dell'interno
* Countries List of Values: CC BY 3.0 Istituto nazionale di statistica


## AUTHORS
Marco Ricupero
