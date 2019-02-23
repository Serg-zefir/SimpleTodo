import { NavLink } from 'react-router-dom'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const UserInfo = (props) => {
  const { auth, profile } = props;
  if (!auth.uid) return <Redirect to='/signin' />
  if (profile) {
    return (
      <div className="container section product-details">
        <div className="card box">
          <div className="card-content">
            <span className="card-title">Initials: {profile.initials}</span>
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
            <NavLink to='/admin' className="btn btn-floating pink lighten-1">
              Link to unexist Page
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(UserInfo)
