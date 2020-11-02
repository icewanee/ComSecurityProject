import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Router } from "react-router-dom";
import history from "./history";
import LoginPage from "./page/LoginPage";

import Comment from './component/Comment';
import CommentFrom from './component/CommentForm';
import PageNotFound from './page/PageNotFound';
import BlockPage from './page/BlockPage';

function App() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={BlockPage} />
          <Route  path="/home" component={CommentFrom} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
