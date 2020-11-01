import React, { Component } from "react";
import LoginCard from "../component/LoginCard";
import "../page/LoginPage.css";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="decorate" align="center" style={{ paddingTop: 130 }}>
        <LoginCard />
      </div>
    );
  }
}

export default LoginPage;