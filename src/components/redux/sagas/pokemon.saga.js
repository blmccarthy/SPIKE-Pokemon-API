import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPokemon(){
    try {
        console.log('in fetchPokemon');
        const pokemon = yield axios.get('/pokemon',);
        console.log('get all pokes:', pokemon.data);
        //dispatch to shelf reducer
        yield put({ type: 'SET_CARD_LIST', payload: pokemon.data})
    } 
    catch (error) {
        console.log('fetchPokemon ERROR:', error);
    }
}

function* pokemonSaga() {
    yield takeLatest('FETCH_POKEMON', fetchPokemon);
}

export default pokemonSaga;