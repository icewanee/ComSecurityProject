import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import LoginPage from "./page/LoginPage";

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
