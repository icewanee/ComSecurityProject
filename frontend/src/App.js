import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import LoginPage from "./page/LoginPage";

import PageNotFound from "./page/PageNotFound";
import BlockPage from "./page/BlockPage";
import CommentPage from "./page/CommentPage";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/post" component={BlockPage} />
        <Route path="/comment" component={CommentPage} />
        <Route exact path="/" component={LoginPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
