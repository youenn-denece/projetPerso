const express = require('express');
const cors = require('cors');
require('./models/dbConfigs');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/usersController');
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


const app = express();
app.use('/users', usersRoutes);
app.use(bodyParser.json());
app.use(cors);


/* app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: /http:\/\/localhost/
}));
app.options('*', cors()); */

/* // before Database
const db = {
    Damien: {
        id: 'USR-0000',
        firstName: 'damien',
        lastName: 'Toto',
        age: 25,
        sex: 'masculin',
        hobbie: [],
        address: '81 rue Ange Blaize',
        city: 'Rennes'
    },
    Josiane: {
        id: 'USR-0001',
        firstName: 'josiane',
        lastName: 'Titi',
        age: 12,
        sex: 'féminin',
        hobbie: [],
        address: '28 rue de Rennes',
        city: 'Paris'
    }
}; */ 

// configure route
/* const router = express.Router();
router.get('/', (req, res) => {
    res.send(`${package.id} - v${package.version}`);
});

router.get('/accounts/:id', (req, res) => {
    const id = req.params.id;
    const account = db[id];

    if (!account) {
        return res
            .statusCode(404)
            .json({ error: 'this first name does not exist' });
    }

    return res.json(account);
});

router.post('/accounts', (req, res) => {
    const body = req.body;

    if (!body.firstName || !body.lastName || !body.address) {
        return res
            .status(400)
            .json({ error: 'Address, first & last names are required' });
    }
    if (db[body.lastName]) {
        return res
            .status(400)
            .json({ error: 'Account already exists' });
    }
    let age = body.age;
    if (age && typeof (age) !== 'number') {
        age = parseFloat(age);
        if (Number.isNaN(age)) {
            return res
                .status(400)
                .json({ error: 'age must be a number' });
        }
    }
    const account = {
        id: body.id,
        firstName: body.firstName,
        lastName: body.lastName,
        age: body.age || 0,
        sex: body.sex,
        hobbie: body.hobbie,
        address: body.address,
        city: body.city
    }
    db[account.id] = account;

    return res
        .status(201)
        .json(account);

});

router.put('/accounts/:id', (req, res) => {
    const body = req.body;
    const id = req.params.id;
    const account = db[id];

    if (!account) {
        return res
            .status(404)
            .json({ error: 'id not found' });
    }
    if (body.id) {
        return res
            .status(400)
            .json({ error: 'Only hobbies, address and city can be edited' });
    }
    // TODO request to BDD (CRUD)
    if (body.hobbie) {
        account.hobbie = body.hobbie; 
    }
    if (body.address) {
        account.address = body.address;
    }
    if (body.city) {
        account.city = body.city;
    }
    return res.json(account);
});

router.delete('/accounts/:id', (req, res) => {
    const id = req.params.id;
    const account = db[id];

    if (!account) {
        return res
            .status(404)
            .json({ error: 'id not found' });
    }

    delete db[id];

    return res.sendStatus(204);

}); */

app.listen(port, () => {
    console.log('Server is UP !')
});