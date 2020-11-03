import React, { Component } from 'react'
import Util from "../apis/Util";
// "user" === localStorage.getItem(
//   "role"
// )
export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {
              id: 1,
              topic: "hello world"
            },
            data: [
                {
                  id: 1,
                  comment: "www.hello.ewwr.com",
                  editable: 0
                },
                {
                  id: 2,
                 comment: "www.hello.erer.com",
                 editable: 1
                },
                {
                  id: 3,
                  comment: "www.hello.dfss.com",
                  editable: 0
                },
                {
                  id: 4,
                 comment: "www.hello.oio.com",
                 editable: 0
                },
                {
                  id: 5,
                 comment: "www.hello.dfdf.com",
                 editable: 0
                },
                {
                  id: 6,
                 comment: "www.hello.iopo.com",
                 editable: 1
                }
              ]
        }
        this.handleEdit = this.handleEdit.bind(this);
          this.handleDelete = this.handleDelete.bind(this);
    }
    async handleEdit(event) {
      var detail = prompt("New comment", "");
      if (detail == null || detail == "") {
        return
      }
      event.preventDefault();
      console.log(this.state.comments);
      // let data = await Util.editComment(
      //   this.props.detail._id, //comment_id??
      //   this.state.post.id,
      //   detail,
      // );
      // if (data.err) {
      //   alert(data.err);
      // } else {
      //   alert("Post is edited.");
      // }
      window.location.reload();
    }
    async handleDelete(event) {
      event.preventDefault();
      console.log("delete");
      // let data = await Util.deleteComment(
      //   this.props.detail._id, //comment_id??
      //   this.state.post_id,
      // );
      // if (data.err) {
      //   alert(data.err);
      // } else {
      //   alert("Post is delete.");
      // }
      window.location.reload();
    } 

    render() {
        return (
            <div align="center">
            <h3 className="justify-content-center">Topic: {this.state.post.topic}</h3>
                <div className="Card">
                        <div className="row">
                            <div className="col-md-12">
                                <table class="table">
                                <thead>
                                <tr>
                                <th scope="col" style={{ fontFamily: "Courier New" }}>comment</th>
                                </tr>
                                </thead>
                                <tbody>
                    {this.state.data.map(item => (
                      <tr>
                        <td style={{ fontFamily: "Courier New" }}>
                        <div className="row">
                          <div className="col-md-10">comment : {item.comment}</div>
                          {(item.editable)?(
                            <div >
                              <div className="col-sm-1"> <button onClick={(event) => {
                                this.handleEdit(event);
                              }}>edit</button></div>
                                <div className="col-sm-1"> <button onClick={(event) => {
                                  this.handleDelete(event);
                              }}>delete</button></div>
                            </div>
                            ):(
                              <div>
                              
                              </div>
                              )
                            
                          }
                          
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
        )
    }
    /*async componentDidMount() {
    let comments = await Util.getMyComment(this.props.post.id);
    this.setState({ comments });
    console.log(this.state.comments);
  }*/
}


