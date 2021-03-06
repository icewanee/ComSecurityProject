import React, { Component } from "react";
import { Route, Switch, Router} from "react-router-dom";
import history from "./history";
import LoginPage from "./page/LoginPage";

import PageNotFound from "./page/PageNotFound";
import BlockPage from "./page/BlockPage";
import CommentPage from "./page/CommentPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {} };
  }
  loggedIn() {
    return localStorage.getItem("token");
  }
  render() {
  return (
    <Router history={history}>
      <Switch>
      <Route exact path="/" component={LoginPage} />
        {(this.loggedIn())?<Route path="/post" component={BlockPage} />:<Route path="/post" component={LoginPage} />}
        {(this.loggedIn()) ?<Route path="/comment" component={CommentPage} />: <Route path="/comment" component={LoginPage} /> }
         <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
  }
}

export default App;
