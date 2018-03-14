import React from 'react';

import Fontawesome from 'react-fontawesome';
import './search.css';

const SearchAutor = (props) => {
  return (
    <div>
      <form className="search">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={props.getSearch}
              value={props.value}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <Fontawesome name="search" />
              </span>
            </div>
        </div>
      </form>
    </div>
  );
}

export default SearchAutor;
