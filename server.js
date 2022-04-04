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
const userCollection = {
    Benoit: {
        name: 'benoit',
        age: 38,
        sex: 'masculin',
        hobbie: [],
        adress: '81 rue Ange Blaize',
        city: 'Rennes'
    },
    Josiane: {
        name: 'josiane',
        age: 12,
        sex: 'féminin',
        hibbie: [],
        adress: '28 rue de Rennes',
        city: 'Paris'
    }
}

// configure route
const router = express.Router();
router.get('/', (req, res) => {
    res.send(`${package.name} - v${package.version}`);
});

router.get('/account/:name', (req, res) => {
    const name = req.params.name;
    const account = userCollection[name];

    if (!account) {
        return res
            .statusCode(404)
            .json({ error: 'User does not exist' });
    }

    return res.json(account);
});

// register route
app.use(apiRoot, router);


app.listen(port, () => {
    console.log('Server is UP !')
});