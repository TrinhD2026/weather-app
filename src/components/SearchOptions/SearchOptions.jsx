import React from 'react';
import './SearchOptions.css';

function SearchOptions({searchOptions,selectSearchOption=null}) {

    return (
        <ul className="search-options">
            {
                searchOptions.map(data => {
                    let querySearch=data.name;
                    if(data.country) {
                        querySearch+=", "+data.country;
                    }
                    if(data.admin1) {
                        querySearch+=", "+data.admin1;
                    }

                    return (
                        <li key={`${data.id}`}>
                            <button className="transparent-btn" onClick={() => selectSearchOption(data,querySearch)}>{querySearch}</button>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default SearchOptions;