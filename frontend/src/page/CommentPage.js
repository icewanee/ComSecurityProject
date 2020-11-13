import React, { Component } from "react";
import CommentForm from "../component/CommentForm";
import Comment from "../component/Comment";
import history from "../history";

export default class CommentPage extends Component {
  constructor(props) {
    super(props);
    this.topic_id = "";
  }
  back(event){
    event.preventDefault();
    history.push("/post");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={(event) => {this.back(event)}}>
          back
        </button>
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
      </div>

    );
  }
}
