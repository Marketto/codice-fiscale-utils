## CHANGELOG

### 2.2.0 - (2024-06-01)

- Replaced jsdoc with typedoc
- Added **Validator**.**codiceFiscale(** _string_ **)**.**errors** to get verbose errors for the given CF
- Added default export
- Removed Express demo
- Updated all rollup libs & plugins
- All interface and type imports are properly defined as `import type`
- Added dist/typings.d.ts to build script, no need to rely on source code anymore
- Changed CF place/date validation logics: CF might be generated after owner's birth date except for birtdates prior CF introduction (29/09/1973)
- Assets generator script refactored
- Assets and source links update
- Cities & Countries update

### 2.1.2 - (2023-10-29)

- Minor fixes (cfDecode) month January returns 0 instead of undefined
- Cities & Countries update

### 2.1.1 - (2023-01-06)

- Minor fixes (Pattern.lastName) FirstName with 2 consonants and vowels
- Cities Countries update

### 2.1.0 - (2022-01-26)

- Added Belfiore.from
- Changed CF place/date validation logics: CF might be generated after owner's birth date

### 2.0.5 - (2022-01-15)

- Fixed isolated modules
- CF rules for voewls reviewed
- Dev dependencies update

### 2.0.4 - (2021-08-08)

- Readme - review & Doc fixes

### 2.0.3 - (2021-03-26)

- Minor fixes (Pattern.firstName)

### 2.0.2 - (2020-09-14)

- New ETL script for data assets in typescript, using streams (2x faster)
- Assets and source links update

### 2.0.1 - (2020-04-28)

- README review
- Dependencies update
- Assets and source links update
- Rollup config update

### 2.0.0 - (2020-02-10)

- Semantic Versioning release (thx to Giacomo Gregoletto)
- Moved packaging dependency to devDependencies (thx to Giacomo Gregoletto)
- Removed install alert message

### ~~1.2.3~~ - Omocode encoder (2020-01-12)

- CITIES_COUNTRIES generated as TS
- Restored sourcemaps
- Moved FE demos in dedicated repos

### ~~1.2.2~~ - Omocode encoder (2020-01-11)

- Implemented cfOmocode in Parser class
- Implemented cfOmocodeId in Parser class
- Implemented omocodeId field in IPersonalInfo
  - Parser.cfDecode output
  - Parser.encodeCf input
- Implemented constants for CF parts (offsets & lengths)
- Improved date parse

### ~~1.2.1~~ - Deomocode proper implementation (2020-01-09)

- Implemented CF deomocode in Parser class
- Optimized gender methods

### ~~1.2.0~~ - Typescript migration (2020-01-08)

- Typescript refactoring
- RegExp validators moved into **_Pattern_** class
- Naming convention for _name_ and _surname_ changed to **_firstName_** and **_lastName_**
- Implemented boolean validators in **_Validators_** class
- Match and Mismatch compound validators (cf/lastName, cf/firsName, ... birthDate/birthPlace)
- Angular demo
- Updated resource uris to generate Cities/Country Belfiore dataset
- Implemented xlsx reading in locationUpdater script

### ~~1.1.3~~ - External Diacritic remover [Broken build] (2019-12-01)

- Implemented Rollup for packaging
- Implemented external Diacritic remover
- Code review
- Minor fixes

### 1.1.2 - Lowercase support (2019-10-24)

- Increased Unit tests
- Lowercase support
  - Belfiore code
  - Birth month code
  - Omocodes

### 1.1.1 - Code review (2019-10-17)

- Code review
- Build config optimization

### 1.1.0 - Cross-browser support (2019-10-13)

- Belfiore code validator
- Chrome compatibility
- Firefox compatibility
- Edge compatibility
- node module compatibility

### 1.0.4 - Demo (2019-07-30)

- Minor fixes
- Vue demo

### 1.0.3 Readme update (2019-07-29)

### ~~1.0.2~~ Readme update [duplicate] (2019-07-29)

- README update

### 1.0.1 - First release (2019-07-28)

- Minor fixes
- Validator.isValid()
- ExpressJs demo

### ~~1.0.0~~ - Prerelase [unstable] (2019-07-28)
