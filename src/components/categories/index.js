import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';

import {getActiveCategoryId, getCategories} from '../../selectors';
import {findValInKeyOfObj, isNull} from "../utils";

const Categories = ({categories, activeCategoryId}) => {

  const renderCategory = (category, index) => {
    return (
        <Link
            to={`/categories/${category.id}`}
            className={findValInKeyOfObj(category, 'id', activeCategoryId) ? 'list-group-item active' : 'list-group-item'}
            key={index}
        >
          {category.name}
        </Link>
    )
  };

  const renderAllCategory = () => {
    return (
        <Link
            to='/'
            className={isNull(activeCategoryId) ? 'list-group-item active' : 'list-group-item'}
        >
          All
        </Link>
    )
  };

  return (
      <div className="well">
        <h4>Brand</h4>
        <div className="list-group">
          {renderAllCategory()}
          {categories.map((category, index) => renderCategory(category, index))}
        </div>
      </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories);