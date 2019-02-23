import { NavLink } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return (
    <React.Fragment>
      <div className="navbar-item is-hidden-mobile is-guest">
        <div className="buttons">
          <p className="button is-primary is-uppercase is-small" onClick={props.signOut}>Log Out</p>
        </div>
      </div>
      <NavLink className="navbar-item is-hidden-mobile is-guest ava" to='/user'>
        {props.profile.initials}
      </NavLink>
    </React.Fragment>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

// <nav className="level">
//   <!-- Left side -->
//   <div className="level-left">
//     <div className="level-item">
//       <p className="subtitle is-5">
//         <strong>123</strong> posts
//       </p>
//     </div>
//     <div className="level-item">
//       <div className="field has-addons">
//         <p className="control">
//           <input className="input" type="text" placeholder="Find a post">
//         </p>
//         <p className="control">
//           <button className="button">
//             Search
//           </button>
//         </p>
//       </div>
//     </div>
//   </div>

//   <!-- Right side -->
//   <div className="level-right">
//     <p className="level-item"><strong>All</strong></p>
//     <p className="level-item"><a>Published</a></p>
//     <p className="level-item"><a>Drafts</a></p>
//     <p className="level-item"><a>Deleted</a></p>
//     <p className="level-item"><a className="button is-success">New</a></p>
//   </div>
// </nav>