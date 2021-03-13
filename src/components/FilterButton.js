// import React from 'react';
import {setFilterValue} from '../redux/todoReducer'
import {useDispatch} from "react-redux";

const FilterButton = ({filter}) => {

    const dispatcher = useDispatch()

    return (
        <button onClick={ ()=> dispatcher(setFilterValue(filter)) }>
            {filter}
        </button>
    )
}

export default FilterButton