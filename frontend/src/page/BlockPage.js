import React, { Component } from "react";
import BlockForm from "../component/BlockForm";
import Util from "../apis/Util";
import history from "../history";

export default class BlockPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          creator: "user",
          title: "www.hello.ewwr.com",
        },
        {
          id: 2,
          creator: "user",
          title: "www.hello.erer.com",
        },
        {
          id: 3,
          creator: "user",
          title: "www.hello.dfss.com",
        },
      ],
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
    if (data.status) {
      alert("error");
    } else {
      alert("Post is edited.");
    }
    window.location.reload();
  }
  async handleDelete(event, id) {
    event.preventDefault();
    console.log("delete");
    let data = await Util.deletePost(id);
    if (!data.success) {
      alert("error");
    } else {
      alert("Post is delete.");
    }
    window.location.reload();
  }
  async handleViewComment(event, id) {
    localStorage.setItem("post_id", id);
    history.push("/comment");
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
                                this.handleViewComment(event, item.id);
                              }}
                            >
                              view comment
                            </button>
                            {item.creator === localStorage.getItem("user") ? (
                              <button
                                onClick={(event) => {
                                  this.handleEdit(event, item.id);
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
                              this.handleViewComment(event, item.id);
                            }}
                          >
                            view comment
                          </button>
                          <button
                            onClick={(event) => {
                              this.handleEdit(event, item.id);
                            }}
                          >
                            edit
                          </button>
                          <button
                            onClick={(event) => {
                              this.handleDelete(event, item.id);
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
    this.setState({ comments });
    localStorage.setItem("post_id", "");
    console.log(this.state.data);
  }
}
