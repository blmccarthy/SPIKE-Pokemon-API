import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function SearchForm() {

    const dispatch = useDispatch();

    const cardList = useSelector(store => store.cards)          // Cards Returned from Search
    const setList = useSelector(store => store.setsReducer)     // All Sets called from API

    const [search, setSearch] = useState('');                   // Search Input
    const [selectedSet, setSelectedSet] = useState('');         // Set Selection from Dropdown

    // This Function is necessary so that we can store the full set info in state,
    // instead of just the set name
    const setIdHandler = (setNameFromDropdown) => {

        // Sets id as wildcard (*) if no set is chosen
        if (!(setList.some(set => set.name == setNameFromDropdown))) {
            setSelectedSet({ id: '*', name: 'All Sets' })

        // Sets id for Set
        } else {
            setSelectedSet((setList.filter(set => set.name == setNameFromDropdown))[0]);
        }
    }

    // ========================================================================================== //
    // GET 
    // ========================================================================================== //

    const handleSearch = () => {
        console.log('search', search, 'selectedSet', selectedSet);
        axios.post('/pokemon/api', { query: search, setId: selectedSet.id })
            .then(response => {
                console.log('response', response.data);
                dispatch({ type: 'SET_CARDS', payload: response.data.data })
            }).catch(err => {
                console.log('handleSearch Error!', err);
            })
        setSearch('')
    }

    useEffect(() => {
        setIdHandler()
    }, [])

    console.log('selectedSet', selectedSet);
    console.log('selectedSet.id', selectedSet?.id);

    // ========================================================================================== //
    // RETURN
    // ========================================================================================== //

    return (
        <div className="search-form">
            <input
                type="text"
                placeholder="Pokemon Name"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <select
                value={selectedSet?.name}
                onChange={e => setIdHandler(e.target.value)}
            >
                <option>All Sets</option>
                {setList.map(set => (
                    <option
                        key={set.id}
                        id={set.id}
                    >{set.name}</option>
                ))}
            </select>

            <button onClick={handleSearch}>Search</button>

        </div>
    )
}