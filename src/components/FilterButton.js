import React from 'react';
import {setFilterValue, currentFilter} from '../redux/todoReducer'
import {useDispatch, useSelector} from "react-redux";



const FilterButton = (filterObject) => {

    const filter = filterObject.filter
    const dispatcher = useDispatch()
    const activeFilter = useSelector(currentFilter)

    return ( <button className={"control-panel__filter-button " + (activeFilter === filter ? "active_filter": "")}
                    onClick={ ()=> dispatcher(setFilterValue(filter)) }>
            {filter}
            </button>
    )
};

export default FilterButton