import React, { Component } from "react";
import "../component/LoginCard.css";
import Util from "../apis/Util";
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
          <form className="needs-validation" onSubmit={event => this.onClickLogin(event)}>
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

  onClickLogin = async (event) => {
    event.preventDefault();
    let userName = this.state.userName;
    let password = this.state.password;
    let data = await Util.login(userName, password);
    // await console.log(data);
    if (data.errmsg) {
      window.alert(data.errmsg);
      this.setState({ password: "" });
    } else {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem(
        "role",
        data.user.role
      );
      
      console.log(data);
      history.push("/post");
      window.location.reload();
    }
  };
  // onClick = async event => {
  //   event.preventDefault();
  //   let username = this.state.userName;
  //   let password = this.state.password;
  //   let data = await Util.login(username, password);
  //   // await console.log(data);
  //   if (data.errmsg) {
  //     window.alert(data.errmsg);
  //     this.setState({ password: "" });
  //   } else {
  //     localStorage.setItem("token", data.token);
  //     localStorage.setItem("user", JSON.stringify(data.user));
  //     console.log(data);
  //     history.push("/post");
  //     window.location.reload();
  //   }
  // };
}

export default LoginCard;