import { Link } from 'react-router-dom'
import React from 'react'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import logo from './sanchez.svg';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="navbar inverttooltips navbartooltips is-dark">
      <div className="navbar-brand">
        <div className="navbar-item navbar-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Link to='/' className="navbar-item">Todo's app on React</Link>
        <div className="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          {links}
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
