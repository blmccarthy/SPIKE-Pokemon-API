const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.post('/', (req, res) => {
    console.log('req.body:', req.body.query);
    const searchQuery = req.body.query
    const setId = req.body.setId
    console.log('req.body.set', req.body.set);

    // TO GET IT TO WORK:
    // 1 - Register FREE api key at: https://dev.pokemontcg.io/
    // 2 - Add .env file to root folder with your specific API key
    
    axios.get(`https://api.pokemontcg.io/v2/cards?X-Api-Key=${process.env.POKEMON_API_KEY}&q=name:*${searchQuery}* set.id:${setId}&page=1&pageSize=20&orderBy=set.releaseDate`)
    
        .then(response => {
            console.log('in /pokemon/api .get');
            res.send(response.data)
        }).catch(err => {
            console.log('ERROR in GET', err);
            res.sendStatus(500);
        })
})

router.get('/sets', (req, res) => {
    console.log('in sets router');

    axios.get(`https://api.pokemontcg.io/v2/sets?X-Api-Key=${process.env.POKEMON_API_KEY}&pageSize=17`)

    .then(response => {
        console.log('in /pokemon/api/sets .get');
        res.send(response.data)
    }).catch(err => {
        console.log('ERROR in GET', err);
        res.sendStatus(500);
    })
    
})

module.exports = router;