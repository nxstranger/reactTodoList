// import React from 'react';
import {setFilterValue, currentFilter} from '../redux/todoReducer'
import {useDispatch, useSelector} from "react-redux";



const FilterButton = ({filter}) => {

    const dispatcher = useDispatch()
    const activeFilter = useSelector(currentFilter)
    console.log(activeFilter)
    return (
        <button className={"control-panel__filter-button " + (activeFilter === filter ? "active_filter": "")} onClick={ ()=> dispatcher(setFilterValue(filter)) }>
            {filter}
        </button>
    )
}

export default FilterButton