import React, { Component } from "react";
import CommentForm from "../component/CommentForm";
import Comment from "../component/Comment";

export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.topic_id = "";
  }

  render() {
    return (
      <div className="decorate" align="center">
        <div className="Card">
          <div className="row">
            <div className="col-md-12">
              <Comment/>
            </div>
          </div>
          {localStorage.getItem("role") === "user" ? (
            <div className="row">
              <div className="col-md-12 ">
                <CommentForm />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    );
  }
}
