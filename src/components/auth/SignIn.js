import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.type]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container is-cenform">
        <form className="box is-3" onSubmit={this.handleSubmit}><i class="fas fa-key"></i>
        <h2 className="has-text-centered">Sign In</h2>
          <div className="field">
            <label className="label">Email</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" onChange={this.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Login</button>
            </p>
          </div>
          { authError ? <p className="help is-danger">{authError}</p> : null }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

// <h5 className="grey-text text-darken-3">Sign In</h5>
//           <div className="input-field">
//             <label htmlFor="email">Email</label>
//             <input type="email" id='email' onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <label htmlFor="password">Password</label>
//             <input type="password" id='password' onChange={this.handleChange} />
//           </div>
//           <div className="input-field">
//             <button className="btn pink lighten-1 z-depth-0">Login</button>
//             <div className="center red-text">
//               { authError ? <p>{authError}</p> : null }
//             </div>
//           </div>


// <div className="field">
//   <label className="label">Username</label>
//   <div className="control has-icons-left has-icons-right">
//     <input className="input is-success" type="text" placeholder="Text input" value="bulma">
//     <span className="icon is-small is-left">
//       <i className="fas fa-user"></i>
//     </span>
//     <span className="icon is-small is-right">
//       <i className="fas fa-check"></i>
//     </span>
//   </div>
//   <p className="help is-success">This username is available</p>
// </div>

// <div className="field">
//   <label className="label">Email</label>
//   <div className="control has-icons-left has-icons-right">
//     <input className="input is-danger" type="email" placeholder="Email input" value="hello@">
//     <span className="icon is-small is-left">
//       <i className="fas fa-envelope"></i>
//     </span>
//     <span className="icon is-small is-right">
//       <i className="fas fa-exclamation-triangle"></i>
//     </span>
//   </div>
//   <p className="help is-danger">This email is invalid</p>
// </div>