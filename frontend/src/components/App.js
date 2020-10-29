import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink, Router } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import NewCourse from "./NewCourse";
import Home from "./Home.js";
import EditCourse from "./EditCourse";
import CourseInformation from "../page/CourseInformation";
import Login from "./Login";
import history from "../history";
import MyCourse from "../page/MyCourse";
import PageNotFound from "../page/PageNotFound";
import Util from "../apis/Util";
import { ThemeConsumer } from "styled-components";
// import LogInFirst from "./LogInFirst";
const About = () => <h1>About</h1>;
const LogInFirst = () => {
  // alert("Please Log in first");
  history.push("/login");
  return <div></div>;
};
const LogInAlready = () => {
  // alert("You are already logged in");
  history.push("/profile");
  return <div></div>;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: {} };
  }
  loggedIn() {
    return localStorage.getItem("token");
  }
  tutor() {
    return localStorage.getItem("role") == "tutor";
  }
  verifiedTutor() {
    return localStorage.getItem("role") == "verifiedTutor";
  }
  student() {
    return localStorage.getItem("role") == "student";
  }
  premiumTutor() {
    return localStorage.getItem("premium") == "yes";
  }
  render3() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path="/login">
            {this.loggedIn() ? <Redirect to="/profile" /> : <Login />}
          </Route>
          <Route path="/course/edit" component={EditCourse} />
          <Route path="/course/create" component={NewCourse} />
          <Route path="/course" component={CourseInformation} />
          <Route path="/mycourse" component={MyCourse} />
          <Route path="/home">
            {this.loggedIn() ? (
              <Redirect to="/search" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>{" "}
          <Route path exact="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          {!this.loggedIn() && <Route path="/login" component={Login} />}
          {!this.loggedIn() && <Route path="/home" component={Home} />}
          {/* {!this.loggedIn() && <Route path exact="/" component={Home} />} */}

          {this.verifiedTutor() && (
            <Route path="/course/create" component={NewCourse} />
          )}
          {this.verifiedTutor() && (
            <Route path="/course/edit" component={EditCourse} />
          )}

          {this.loggedIn() && (
            <Route path="/course" component={CourseInformation} />
          )}
          {this.verifiedTutor() && (
            <Route path="/mycourse" component={MyCourse} />
          )}
          {this.student() && <Route path="/mycourse" component={MyCourse} />}

          <Route path="/pagenotfound" component={PageNotFound} />
          {/* {this.tutor() && !this.verifiedTuror() && (
            <Route path="/mycourse" component={VerifyFirst} />
          )}
          {this.tutor() && !this.verifiedTuror() && (
            <Route path="/chat" component={VerifyFirst} />
          )} */}
          {!this.loggedIn() && <Route path="/signup" component={Home} />}
          {!this.loggedIn() && <Route exact="true" path="/" component={Home} />}
        </Switch>
      </Router>
    );
  }
  render2() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          {/* <Route
              path="/register"
              component={this.alreadylogin(RegisterPage)}
            /> */}
          {/* <Route path="/search" component={this.getPage(SearchResult)} /> */}

          <Route path="/login" component={Login} />

          <Route path="/course/edit" component={EditCourse} />
          <Route path="/course/create" component={NewCourse} />
          <Route path="/course" component={CourseInformation} />
          <Route path="/mycourse" component={MyCourse} />
          <Route path="/home" component={Home} />
          <Route path exact="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
