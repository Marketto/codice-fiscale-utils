const express = require('express');
const CodiceFiscaleUtils = require('@marketto/codice-fiscale-utils');
const server = express();

server.param('cf', (req, res, next, codiceFiscale) => {
    if (!CodiceFiscaleUtils.Validator.isValid(codiceFiscale)) {
        res.status(400).send({error: `The provided ${codiceFiscale} is not a valid CodiceFiscale`});
    } else {
        next();
    }
});

server.param(['surname', 'name'], (req, res, next, name) => {
    if (!CodiceFiscaleUtils.Pattern.firstname(name)) {
        res.status(400).send({error: `The provided ${name} is not a valid name or surname`});
    } else {
        next();
    }
});
server.param('birthDate', (req, res, next, birthDate) => {
    if (!CodiceFiscaleUtils.Pattern.date(birthDate)) {
        res.status(400).send({error: `The provided ${birthDate} is not a valid iso8601 date`});
    } else {
        next();
    }
});
server.param('gender', (req, res, next, gender) => {
    if (!CodiceFiscaleUtils.Pattern.gender(gender)) {
        res.status(400).send({error: `The provided ${gender} is not a valid Gender`});
    } else {
        next();
    }
});
server.param('place', (req, res, next, place) => {
    if (!CodiceFiscaleUtils.Pattern.place(place)) {
        res.status(400).send({error: `The provided ${place} is not a valid place`});
    } else if (req.param.birthDate && !CodiceFiscaleUtils.Pattern.place(req.param.birthDate, place)) {
        res.status(400).send({error: `The provided birth place ${place} is not valid for the given birthDate: ${req.params.birthDate}`});
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

server.get('/encode/:surname/:name/:birthDate/:gender/:place', (req, res) => {
    const {surname, name, birthDate, gender, place} = req.params;
    const personalInfos = {
        surname,
        name,
        date: birthDate,
        gender,
        place
    };
    const cf = CodiceFiscaleUtils.Parser.encodeCf(personalInfos);
    if (!cf) {
        res.status(400).send({error: 'Couldn\'t parse a CodiceFiscale using the provided informations'});
    } else {
        res.send({
            ...personalInfos,
            codiceFiscale: cf
        });
    }
});

server.listen(3000, () => console.log('Running on port 3000'));