import React from 'react';
import "./filters.css";

const Filters = ({showFilters}) =>{

    return(
        <div div className={`filters-container ${showFilters ? 'shown-filters': 'hidden-filters'}`}>
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