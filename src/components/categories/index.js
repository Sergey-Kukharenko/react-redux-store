import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {compose} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

import * as R from 'ramda';

import {getActiveCategoryId, getCategories} from '../../selectors';

const Categories = ({categories, activeCategoryId}) => {

  const renderCategory = (category, index) => {
    const getActiveState = R.propEq('id', activeCategoryId)
    const linkClass = classNames({
      'list-group-item': true,
      'active': getActiveState(category)
    })
    return (
      <Link
        to={`/categories/${category.id}`}
        className={linkClass}
        key={index}
      >
        {category.name}
      </Link>
    )
  }

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'active': R.isNil(activeCategoryId) // activeCategoryId === undefined или null
    })
    return (
      <Link
        to='/'
        className={linkClass}
      >
        All
      </Link>
    )
  }

  return (
    <div className="well">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  )

}

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
})

// Используем withRouter, т.к -> Categories не является rout - компонентом
// ownProps - имеет инфу из route

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(Categories);