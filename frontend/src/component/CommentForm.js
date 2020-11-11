import React, { Component } from "react";
import Util from "../apis/Util";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      comments: {
        comment: "",
      },
    };
    this.handleSubmitCreate = this.handleSubmitCreate.bind(this);
  }

 async handleSubmitCreate(event) {
    event.preventDefault();
    console.log(this.state.comments);
    if (!this.state.comments.topic || !this.state.comments.text) {
      alert("Please fill every field");
      return;
    } else if (!this.state.comments.rating) {
      alert("Please input rating");
      return;
    }
    let data = await Util.createComment(
      this.props.id,
      this.state.comments.comment,
    );
    if (data.err) {
      alert(data.err);
    }
    window.location.reload();
  }
 
  render() {
    return (
      <div className="bigCard" style={{ minHeight: "100px", height: "auto" }}>
        <form
          style={{ marginLeft: 30}}
        >
          <div className="row">
            <div className="col-md-9">
              <div
                className="textheader"
                style={{
                  textAlign: "left",
                  textIndent: "5px",
                }}
              >
                Create new comment
              </div>
              <textarea
                type="text"
                className="inbox"
                required="required"
                value={this.state.comments.text}
                onChange={(event) => {
                  const text = event.target.value;
                  this.setState((prevState) => {
                    let comments = Object.assign({}, prevState.comments);
                    comments.comment = text;
                    return { comments };
                  });
                }}
                placeholder="Comment"
                style={{ width: "100%", height: "75px", resize: "none" }}
                maxLength="150"
              ></textarea>
            </div>
            <div
              className="col-md-3"
              align="center"
              style={{ paddingTop: "15px" }}
            >
              <br />
                <button
                  className="button-white"
                  style={{ width: 100 }}
                  onClick={(event) => {
                    this.handleSubmitCreate(event);
                  }}
                >
                  Comment
                </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  /*async componentDidMount() {
    
  }*/

}