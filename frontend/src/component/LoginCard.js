import React, { Component } from "react";
import "../component/LoginCard.css";
import history from "../history";

export class LoginCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="Card " style={{ width: 750 }}>
        <div className="Card " style={{ width: 750 }}>
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="card-title" style={{ fontFamily: "Courier New" }}>
                - W E L C O M E -
              </h1>
            </div>
          </div>
          <br />
        </div>
        <div
          className="Card box"
          style={{ width: 750, border: "thick solid black" }}
        >
          <br />
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-12 ">
                <h2
                  className="card-title"
                  style={{ fontFamily: "Courier New" }}
                >
                  Login
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4">
                <br />
                <label className="text-dark">
                  Username
                  <br />
                  <input
                    type="text"
                    id="userName"
                    className="field"
                    style={{ width: 250 }}
                    onChange={(e) => {
                      this.setState({ userName: e.target.value });
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-md-4">
                <br />
                <label className="text-dark">
                  password
                  <br />
                  <input
                    type="password"
                    id="password"
                    className="field"
                    style={{ width: 250 }}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  />
                </label>
              </div>
              <div className="col-md-2"></div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <button
                  type="submit"
                  id="submit"
                  className="btn btn-outline-dark"
                  onClick={() => this.onClick("/")}
                >
                  Sign in
                </button>
              </div>
              <div className="col-md-5"></div>
            </div>
            <br />
          </form>
        </div>
      </div>
    );
  }
  /*onClick = async (page) => {
    console.log(this.state);
    history.push(page);
  };*/
}

export default LoginCard;