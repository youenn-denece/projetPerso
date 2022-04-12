const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const package = require('./package.json');

const port = process.env.PORT || 5000;
const apiRoot = '/api';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
    origin: /http:\/\/localhost/
}));
app.options('*', cors());

// before Database
const db = {
    Damien: {
        user: 'damien',
        age: 25,
        sex: 'masculin',
        hobbie: [],
        address: '81 rue Ange Blaize',
        city: 'Rennes'
    },
    Josiane: {
        user: 'josiane',
        age: 12,
        sex: 'féminin',
        hobbie: [],
        address: '28 rue de Rennes',
        city: 'Paris'
    }
};

// configure route
const router = express.Router();
router.get('/', (req, res) => {
    res.send(`${package.name} - v${package.version}`);
});

router.get('/accounts/:user', (req, res) => {
    const user = req.params.user;
    const account = db[user];

    if (!account) {
        return res
            .statusCode(404)
            .json({ error: 'User does not exist' });
    }

    return res.json(account);
});

router.post('/accounts', (req, res) => {
    const body = req.body;

    if (!body.user || !body.address) {
        return res
            .status(400)
            .json({ error: 'name and address are required' });
    }
    if (db[body.user]) {
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
        user: body.user,
        age: body.age || 0,
        sex: body.sex,
        hobbie: body.hobbie,
        address: body.address,
        city: body.city
    }
    db[account.user] = account;

    return res
        .status(201)
        .json(account);

});

router.put('/accounts/:user', (req, res) => {
    const body = req.body;
    const user = req.params.user;
    const account = db[user];

    if (!account) {
        return res
            .status(404)
            .json({ error: 'User not found' });
    }
    if (body.user) {
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

router.delete('/accounts/:user', (req, res) => {
    const user = req.params.user;
    const account = db[user];

    if (!account) {
        return res
            .status(404)
            .json({ error: 'User not found' });
    }

    delete db[user];

    return res.sendStatus(204);

});

// register route
app.use(apiRoot, router);

app.listen(port, () => {
    console.log('Server is UP !')
});