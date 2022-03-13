const pokemonReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_CARD_LIST':
        return action.payload;
      default:
        return state;
    }
  
  }

  export default pokemonReducer