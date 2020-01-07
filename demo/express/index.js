const express = require('express');
const CodiceFiscaleUtils = require('@marketto/codice-fiscale-utils');
const server = express();

server.param('cf', (req, res, next, codiceFiscale) => {
    if (CodiceFiscaleUtils.Validator.codiceFiscale(codiceFiscale).invalid) {
        res.status(400).send({error: `Provided ${codiceFiscale} is not a valid CodiceFiscale`});
    } else {
        next();
    }
});

server.param('lastName', (req, res, next, lastName) => {
    if (!CodiceFiscaleUtils.Validator.isLastNameValid(lastName)) {
        res.status(400).send({error: `Provided ${lastName} is not a valid lastName`});
    } else {
        next();
    }
});
server.param('firstName', (req, res, next, firstName) => {
    if (!CodiceFiscaleUtils.Validator.isFirstNameValid(firstName)) {
        res.status(400).send({error: `Provided ${firstName} is not a valid firstName`});
    } else {
        next();
    }
});
server.param('birthDate', (req, res, next, birthDate) => {
    if (!CodiceFiscaleUtils.Validator.isBirthDateValid(birthDate)) {
        res.status(400).send({error: `Provided ${birthDate} is not a valid iso8601 date`});
    } else if (CodiceFiscaleUtils.Validator.birthDatePlaceMismatch(birthDate, req.params.place)) {
        res.status(400).send({error: `Provided birth place ${req.params.place} is not valid for the given birthDate: ${birthDate}`});
    } else {
        next();
    }
});
server.param('gender', (req, res, next, gender) => {
    if (!CodiceFiscaleUtils.Validator.isGenderValid(gender)) {
        res.status(400).send({error: `Provided ${gender} is not a valid Gender`});
    } else {
        next();
    }
});
server.param('place', (req, res, next, place) => {
    if (!CodiceFiscaleUtils.Validator.isBirthPlaceValid(place)) {
        res.status(400).send({error: `Provided ${place} is not a valid place`});
    } else {
        next();
    }
});

server.get('/validate/:cf', (req, res) => {
    res.sendStatus(204);
});

server.get('/decode/:cf', (req, res) => {
    res.send(CodiceFiscaleUtils.Parser.cfDecode(req.params.cf));
});

server.get('/encode/:lastName/:firstName/:birthDate/:gender/:place', (req, res) => {
    const {lastName, firstName, birthDate, gender, place} = req.params;
    const personalInfos = {
        date: birthDate,
        firstName,
        gender,
        lastName,
        place
    };
    const cf = CodiceFiscaleUtils.Parser.encodeCf(personalInfos);
    if (!cf) {
        res.status(400).send({error: 'Couldn\'t parse a CodiceFiscale using the provided informations'});
    } else {
        res.send({
            ...CodiceFiscaleUtils.Parser.cfDecode(cf),
            firstName,
            lastName
        });
    }
});

server.listen(3000, () => console.log('Running on port 3000'));