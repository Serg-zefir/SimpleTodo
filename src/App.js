import './App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';

import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import NotFound from './components/NotFound';
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import UserInfo from './components/users/UserInfo';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <div className="container">
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/user' component={UserInfo} />
            <Route path='*' exact={true} component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
