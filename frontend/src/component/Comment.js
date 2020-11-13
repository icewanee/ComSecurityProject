import React, { Component } from "react";
import queryString from "query-string";
import Util from "../apis/Util";

export default class text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: "",
      data: [ ],
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  async handleEdit(event, text_id) {
    var detail = prompt("New text", "");
    if (detail == null || detail === "") {
      alert("Edit have error. Please! try again.");
      return;
    }
    event.preventDefault();
    console.log(this.state.texts);
    let data = await Util.editComment(text_id, detail);
    if ("success" in data) {
      if (!data.success) {
        alert("error");
      } else {
        window.location.reload();
      }
    }
  }

  render() {
    return (
      <div align="center">
        <h3 className="justify-content-center">Topic: {this.state.topic}</h3>
        <div className="Card">
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ fontFamily: "Courier New" }}>
                      Comment
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item) => (
                    <tr>
                      <td style={{ fontFamily: "Courier New" }}>
                        <div className="row">
                          <div className="col-md-10">text : {item.text}</div>
                          {item.creator === localStorage.getItem("user") ? (
                            <div>
                              <div className="col-sm-1">
                                <button
                                  onClick={(event) => {
                                    this.handleEdit(event, item._id);
                                  }}
                                >
                                  edit
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let texts = await Util.getComment(localStorage.getItem("post_id"));
    let query = queryString.parse(document.location.search);
    this.setState({
      data: texts.data,
      topic: query.title,
    });
    console.log(this.state.data);
  }
}
