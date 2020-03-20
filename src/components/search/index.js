import React, {useState} from "react";
import {connect} from 'react-redux';

import {searchPhone} from '../../actions';

const Search = props => {

  const [searchValue, setSearchValue] = useState('');

  const handleChange = event => {
    props.searchPhone(event.target.value);
    setSearchValue(event.target.value);
  };

  const resetInputField = () => setSearchValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchPhone(searchValue);
    resetInputField();
  };

  return (
      <div className='well blosd'>
        <h3 className='lead'>Quick shop</h3>
        <div className='input-group'>
          <form id="form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={searchValue}
                onChange={handleChange}
                className="form-control"
            />
          </form>
          <span className="input-group-btn">
            <button type="submit" form="form" className="btn btn-default">
              <span className="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
      </div>
  )
};

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);