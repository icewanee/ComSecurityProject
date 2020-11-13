import React, { Component } from "react";
import BlockForm from "../component/BlockForm";
import Util from "../apis/Util";
import history from "../history";

export default class BlockPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [ ],
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  async handleEdit(event, id) {
    var detail = prompt("New title", "");
    if (detail === null || detail.trim === "") {
      alert("No text. Please! try again.");
      return;
    }
    event.preventDefault();
    console.log(detail);
    let data = await Util.editPost(id, detail);
    if ("success" in data) {
      if (!data.success) {
        alert("error");
      } else {
        window.location.reload();
      }
    }
  }
  async handleDelete(event, id) {
    event.preventDefault();
    var con = window.confirm("Do you sure to delete this message");
    if(!con) {
      return 
    }
    console.log("delete");
    let data = await Util.deletePost(id);
    if ("success" in data) {
      if (!data.success) {
        alert("error");
      } else {
        window.location.reload();
      }
    }
  }
  async handleViewComment(event, id, title) {
    localStorage.setItem("post_id", id);
    history.push(`/comment?title=${title}`);
  }

  render() {
    if (localStorage.getItem("role") === "user") {
      return (
        <div align="center" style={{ paddingTop: 10 }}>
          <div className="Card">
            <br />
            <div className="row">
              <div className="col-md-12 ">
                <h2
                  className="card-title"
                  style={{ fontFamily: "Courier New" }}
                >
                  title Here
                </h2>
              </div>
              <br />
            </div>
            <div className="row">
              <div className="col-md-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ fontFamily: "Courier New" }}>
                        title
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item) => (
                      <tr>
                        <td style={{ fontFamily: "Courier New" }}>
                          <div>
                            title : {item.title}
                            <br />
                            <button
                              onClick={(event) => {
                                this.handleViewComment(
                                  event,
                                  item._id,
                                  item.title
                                );
                              }}
                            >
                              view comment
                            </button>
                            {item.creator === localStorage.getItem("user") ? (
                              <button
                                onClick={(event) => {
                                  this.handleEdit(event, item._id);
                                }}
                              >
                                edit
                              </button>
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
            <div className="row">
              <div className="col-md-12">
                <BlockForm />
              </div>
            </div>
            <br />
          </div>
        </div>
      );
    }
    return (
      <div align="center" style={{ paddingTop: 10 }}>
        <div className="Card">
          <br />
          <div className="row">
            <div className="col-md-12 ">
              <h2 className="card-title" style={{ fontFamily: "Courier New" }}>
                title Here
              </h2>
            </div>
            <br />
          </div>
          <div className="row">
            <div className="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ fontFamily: "Courier New" }}>
                      title
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item) => (
                    <tr>
                      <td style={{ fontFamily: "Courier New" }}>
                        <div>
                          title : {item.title}
                          <br />
                          <button
                            onClick={(event) => {
                              this.handleViewComment(
                                event,
                                item._id,
                                item.title
                              );
                            }}
                          >
                            view comment
                          </button>
                          <button
                            onClick={(event) => {
                              this.handleEdit(event, item._id);
                            }}
                          >
                            edit
                          </button>
                          <button
                            onClick={(event) => {
                              this.handleDelete(event, item._id);
                            }}
                          >
                            delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
  async componentDidMount() {
    console.log("CDM");
    let comments = await Util.getPost();
    this.setState({ data: comments.data });
    localStorage.setItem("post_id", "");
  }
}
