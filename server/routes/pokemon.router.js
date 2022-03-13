const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log('in /pokemon get');
    
    axios.get(`https://api.pokemontcg.io/v2/cards?X-Api-Key=${process.env.POKEMON_API_KEY}&q=name:charizard&page=1&pageSize=50&orderBy=set.releaseDate`)
    
        .then(response => {
            console.log('in /pokemon get .then');
            res.send(response.data)
        }).catch(err => {
            console.log('in /pokemon get .catch', err);
            res.sendStatus(500);
        })
})

module.exports = router;