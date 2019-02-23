import React, { Component } from 'react'

import ProductList from '../products/ProductList'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {
  render() {
    const { products, auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
        <div className="columns">
          <div className="column">
            <ProductList products={products} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    products: state.firestore.ordered.products,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'products', orderBy: ['createdAt', 'desc']}
  ])
)(Dashboard)
