const { default: axios } = require('axios');
const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/', (req, res) => {
    // Swap links for giphy/pokemon
    // axios.get(`http://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_API_KEY}&rating=pg`)
    axios.get(`https://api.pokemontcg.io/v2/cards?X-Api-Key=${process.env.POKEMON_API_KEY}&q=name:charizard&page=1&pageSize=50&orderBy=set.releaseDate`)
    
        .then(response => {
            console.log('in /random .get');
            res.send(response.data)
        }).catch(err => {
            console.log('error!', err);
            res.sendStatus(500);
        })
})

module.exports = router;