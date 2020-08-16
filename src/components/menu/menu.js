import React, {useState} from "react";
import "../menu/menu.css";
import Filters from "../filters/filters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


const Menu = () =>{
    
    const [showFilters, setShowFilters] = useState(false);
    
    const toggleShowFilters = () => setShowFilters(!showFilters);

    return(
        <div>
            <div className="menu">
                <span className="container">
                    <p className="title">
                        Filters
                    </p>
                    <FontAwesomeIcon icon={faCaretRight} className="icon" onClick={e=>toggleShowFilters()}/>
                </span>
                <Filters
                    showFilters={showFilters}>
                </Filters>
            </div>
        </div>
    )
}

export default Menu;