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
      <div>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {/* {() */}
          <Route path="/post" component={BlockPage} />
          <Route path="/comment" component={CommentPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
