import React from 'react';
import PropTypes from "prop-types";

const SearchForm = ({filter, inputHandler}) => {
    return (
        <div>
               <input type='text' placeholder="Search" name="filter" value={filter} onChange={inputHandler} className="input__form"/>
            
        </div>
    );
};

export default SearchForm;

SearchForm.propTypes ={
    filter: PropTypes.string.isRequired,
    inputHandler: PropTypes.func.isRequired,
};