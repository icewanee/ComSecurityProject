import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import LoginPage from "./page/LoginPage";
import Comment from './component/Comment';
import PageNotFound from './page/PageNotFound'


function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Comment} />
          <Route  path="/login" component={LoginPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
