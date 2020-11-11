import React, { Component } from "react";
import Util from "../apis/Util";

export default class BlockForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: {
        topic: "",
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
    } 
    let data = await Util.createPost(
      this.state.comments.topic,
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
         onSubmit={(event) => this.handleSubmit(event)}
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
                value={this.state.comments.topic}
                onChange={(event) => {
                  const topic = event.target.value;
                  this.setState((prevState) => {
                    let comments = Object.assign({}, prevState.comments);
                    comments.topic = topic;
                    return { comments };
                  });
                }}
                placeholder="Title"
                style={{ width: "100%", height: "30px", resize: "none" }}
                maxLength="50"
              ></textarea>
            </div>
            <div className="col-md-3">
              
            </div>
          </div>
  
            <div
              className="col-md-3"
              align="center"
              style={{ paddingTop: "15px" }}
            >
                <button
                  className="button-white"
                  style={{ width: 100 }}
                  onClick={(event) => {
                    this.handleSubmitCreate(event);
                  }}
                >
                  submit
                </button>
            </div>
        </form>
      </div>
    );
  }

}