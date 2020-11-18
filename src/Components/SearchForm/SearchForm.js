import React, { useState } from 'react';
import PropTypes from "prop-types";
import { CSSTransition } from 'react-transition-group';
import './SearchForm.css';

const SearchForm = ({ filter, inputHandler }) => {    
    const [A,setA] = useState(false)
    return (
            <CSSTransition classNames='input-form' timeout={800} in={!A} mountOnEnter unmountOnExit>
                <input type='text' placeholder="Search" name="filter" value={filter} onChange={inputHandler} className="input__filter" />
            </CSSTransition>
    );
};

export default SearchForm;

SearchForm.propTypes = {
    filter: PropTypes.string.isRequired,
    inputHandler: PropTypes.func.isRequired,
};