import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';

function App() {
  // Renders the entire app on the DOM

  // TO SWAP BETWEEN GIPHY & POKEMON
  // -- axios.get 'setGif'
  // -- return <img>
  // -- random.router API Key

  // const dispatch = useDispatch();
  // const random = useSelector(store => store.random);

  // useEffect(() => {
  //   handleGetCards()
  // }, []);

  const cardList = useSelector(store => store.cardsReducer);
  const setList = useSelector(store => store.setsReducer);

  const dispatch = useDispatch();

  const getSets = () => {
    axios.get('/pokemon/api/sets')
      .then(response => {
        console.log('in getSets');
        dispatch({ type: 'SET_SETS', payload: response.data.data})
      }).catch( err => {
        console.log('getSets ERROR:', err);
      })
  }
  
  useEffect(() => {
    getSets()
  }, [])

  console.log('cardList', cardList);
  console.log('sets', setList);

  return (
    <div>
      <header className="App-header">
        <h1>POKEMON TCG API</h1>
      </header>

      <SearchForm />

      <div className='card-list'>
        {cardList.map(card => (
          <img key={card.id} src={card.images.small} className="card"/>
        ))}
      </div>
    </div>
  );
}

export default App;
