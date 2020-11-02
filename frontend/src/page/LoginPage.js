import React, { Component } from "react";
import LoginCard from "../component/LoginCard";

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div align="center" style={{ paddingTop: 130 }}>
        <LoginCard />
      </div>
    );
  }
}

export default LoginPage;