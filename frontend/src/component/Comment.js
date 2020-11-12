import React, { Component } from "react";
import Util from "../apis/Util";

export default class text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          text: "www.hello.ewwr.com",
          creator: 0,
        },
        {
          id: 2,
          text: "www.hello.erer.com",
          creator: 1,
        },
        {
          id: 3,
          text: "www.hello.dfss.com",
          creator: 0,
        },
        {
          id: 4,
          text: "www.hello.oio.com",
          creator: 0,
        },
        {
          id: 5,
          text: "www.hello.dfdf.com",
          creator: 0,
        },
        {
          id: 6,
          text: "www.hello.iopo.com",
          creator: 1,
        },
      ],
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  async handleEdit(event, text_id) {
    var detail = prompt("New text", "");
    if (detail == null || detail == "") {
      alert("Edit have error. Please! try again.");
      return;
    }
    event.preventDefault();
    console.log(this.state.texts);
    let data = await Util.edittext(text_id, detail);
    if (!data.success) {
      alert("error");
    } else {
      alert("Post is edited.");
    }
    window.location.reload();
  }

  render() {
    return (
      <div align="center">
        <h3 className="justify-content-center">
          Topic: {this.state.post.topic}
        </h3>
        <div className="Card">
          <div className="row">
            <div className="col-md-12">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style={{ fontFamily: "Courier New" }}>
                      text
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((item) => (
                    <tr>
                      <td style={{ fontFamily: "Courier New" }}>
                        <div className="row">
                          <div className="col-md-10">text : {item.text}</div>
                          {item.creator ? (
                            <div>
                              <div className="col-sm-1">
                                {" "}
                                <button
                                  onClick={(event) => {
                                    this.handleEdit(event, item.id);
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
    let texts = await Util.gettext(this.props.id);
    this.setState({ texts });
    console.log(this.state.texts);
  }
}
