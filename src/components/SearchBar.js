import React from 'react';

const SearchBar = ({ query }) => {
    
    return (
        <div className="search-bar ui segment">
            <form className="ui form">
                <div className="field">
                    <label>Query</label>
                    <input 
                        type="text"     
                        value={query}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;