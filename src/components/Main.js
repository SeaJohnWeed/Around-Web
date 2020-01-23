import React from 'react';
import {Register} from "./Register"
import "../styles/Main.css"
import {Login} from "./Login"
import {Switch, Route} from "react-router-dom"

export function Main() {
  return(
    <div className="main">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route component={Login}/>
      </Switch>
    </div>
  );
}