import React from 'react';
import {Register} from "./Register"
import "../styles/Main.css"
import {Login} from "./Login"
import {Switch, Route, Redirect} from "react-router-dom"
import {Home} from "./Home"

export function Main(props) {


  const getHome = () => {
    return props.isLoggedIn ? <Home /> : <Redirect to='/login'/>
  }

  const getLogin = () => {
    return props.isLoggedIn ? <Redirect to='/home'/> : <Login handleLogin={props.handleLogin}/>
  }

  const getRoot = () => {
    return props.isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/login'/>
  }
  return(
    <div className="main">
      <Switch>
        <Route path="/login" render={getLogin}/>
        <Route path="/register" component={Register}/>
        <Route path='/home'render={getHome} />
        <Route render={getRoot} />
      </Switch>
    </div>
  );
}