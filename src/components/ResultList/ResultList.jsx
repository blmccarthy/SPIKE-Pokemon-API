import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

export default function ResultList() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POKEMON' })
      }, []);

    return (
        <>
            <h3>Result List Component</h3>
        </>
    )
}