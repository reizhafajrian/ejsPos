import Button from "./component/button";
import React, { useState } from "react";
import "./style/scss/style.scss";
import Header from "./component/header";
import LandingPage from "./pages/LandingPage";
import { Route,  BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={ props=> <LandingPage {...props}/>} />
        <Route path="/login" render={ props=> <Login {...props}/>} />
      </Switch>
    </Router>
  );
}

export default App;
