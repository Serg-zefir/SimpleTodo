import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container is-cenform">
        <form className="box" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="field">
            <label className="label">Email</label>
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" id='email' placeholder="Email" onChange={this.handleChange} />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <p className="control has-icons-left">
              <input className="input" id='password' type="password" placeholder="Password" onChange={this.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <label className="label">First Name</label>
            <input className="input" id='firstName' type="text" placeholder="John" onChange={this.handleChange}/>
          </div>
          <div className="field">
            <label className="label">Last Name</label>
            <input className="input" id='lastName' type="text" placeholder="Snow" onChange={this.handleChange}/>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Sign Up</button>
            </p>
            { authError ? <p className="help is-danger">{authError}</p> : null }
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
