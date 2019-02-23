import { NavLink } from 'react-router-dom'
import React from 'react'

const SignedOutLinks = () => {
  return (
    <React.Fragment>
      <p className="navbar-item is-guest"><NavLink className="button is-uppercase is-small" to='/signup'>Signup</NavLink></p>
      <p className="navbar-item is-guest"><NavLink className="button is-uppercase is-small" to='/signin'>Login</NavLink></p>
    </React.Fragment>
  )
}

export default SignedOutLinks

// <div class="navbar-item">
//         <div class="buttons">
//           <a class="button is-primary">
//             <strong>Sign up</strong>
//           </a>
//           <a class="button is-light">
//             Log in
//           </a>
//         </div>
//       </div>