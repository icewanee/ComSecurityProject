import React, { Component } from "react";
import Util from "../apis/Util";
import history from "../history";

export default class BlockForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        topic: "",
        detail: ""
    };
    }

  render() {
    return (
      <div className="bigCard" style={{ minHeight: "100px", height: "auto" }}>
        <form
        /*onSubmit={event => this.onClick(event)}*/
          style={{ marginLeft: 30}}
        >
          <div
            className="row textheader justify-content-center"
          >
            Create new topic
          </div>
          <div className="row" style={{ marginBottom: 5 }}>
            <div className="col-md-9">
              <div
                className="textheader"
                style={{
                  textAlign: "left",
                  textIndent: "5px"
                }}
              >
                Topic
              </div>
              <textarea
                type="text"
                className="inbox"
                required="required"
                value={this.state.topic}
                onChange={(e) => {
                    this.setState({ topic: e.target.value });
                  }}
                placeholder="Title"
                style={{ width: "100%", height: "30px", resize: "none" }}
                maxLength="50"
              ></textarea>
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-md-9">
              <div
                className="textheader"
                style={{
                  textAlign: "left",
                  textIndent: "5px",
                }}
              >
                Detail
              </div>
              <textarea
                type="text"
                className="inbox"
                required="required"
                value={this.state.detail}
                placeholder="Comment"
                style={{ width: "100%", height: "75px", resize: "none" }}
                maxLength="150"
                onChange={(e) => {
                    this.setState({ detail: e.target.value });
                  }}
              ></textarea>
            </div>
            <div
              className="col-md-3"
              align="center"
              style={{ paddingTop: "15px" }}
            >
                <button
                  className="button-white"
                  style={{ width: 100 }}
                >
                  submit
                </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  
  /*onClick = async event => {
    event.preventDefault();
    let topic = this.state.topic;
    let detail = this.state.detail;
    let data = await Util.block(topic, detail);
    // await console.log(data);
    if (data.errmsg) {
      window.alert(data.errmsg);
    } else {
      console.log(data);
      history.push("/home");
      window.location.reload();
    }
  };*/



}