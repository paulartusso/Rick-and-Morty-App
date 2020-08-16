import React from 'react';
import "./filters.css";

const Filters = ({showFilters}) =>{

    if(!showFilters) return null;

    return(
        <div className="filters-container">
            <label>
                <input type="checkbox" />
                Characters
            </label>
            <label>
                <input type="checkbox" />
                Locations
            </label>
            <label>
                <input type="checkbox" />
                Episodes
            </label>
        </div>
    )
}

export default Filters;