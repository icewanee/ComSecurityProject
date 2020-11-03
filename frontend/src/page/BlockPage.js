import React, { Component } from 'react'
import BlockForm from '../component/BlockForm'
import Util from "../apis/Util";
import history from "../history";

export default class BlockPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [
                {
                  id: 1,
                  topic: "www.hello.ewwr.com",
                },
                {
                  id: 2,
                  topic: "www.hello.erer.com",
                },
                {
                  id: 3,
                  topic: "www.hello.dfss.com",
                },
                {
                  id: 4,
                  topic: "www.hello.oio.com",
                },
                {
                  id: 5,
                  topic: "www.hello.dfdf.com",
                },
                {
                  id: 6,
                  topic: "www.hello.iopo.com",
                }
              ]
        }
           this.handleEdit = this.handleEdit.bind(this);
          this.handleDelete = this.handleDelete.bind(this);
    }
    async handleEdit(event) {
      var detail = prompt("New Topic", "");
      if (detail === null || detail.trim === "") {
        return
      }
      event.preventDefault();
      console.log(detail);
      // let data = await Util.editPost(
      //   this.props.detail._id,
      //   this.state.comments.topic,
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
      // let data = await Util.deletePost(
      //   this.props.detail._id,
      // );
      // if (data.err) {
      //   alert(data.err);
      // } else {
      //   alert("Post is delete.");
      // }
      window.location.reload();
    } 
    async handleViewComment(event) {
      history.push('/comment'); //{this.props.detail._id}
    }
    
    render() {
      //  if(localStorage.getItem("role") === "user"){
    //     return (
    //       <div align="center" style={{ paddingTop: 10}}>
            //     <div className="Card">
            //     <br />
            //     <div className="row">
            //         <div className="col-md-12 ">
            //             <h2 className="card-title" style={{ fontFamily: "Courier New" }}>Topic Here</h2>
            //         </div>
            //         <br />
            //     </div>
            //     <div className="row">
            //         <div className="col-md-12">
            //             <table class="table">
            //             <thead>
            //             <tr>
            //             <th scope="col" style={{ fontFamily: "Courier New" }}>topic</th>
            //             </tr>
            //             </thead>
            //             <tbody>
            // {this.state.data.map(item => (
            //   <tr>
            //     <td style={{ fontFamily: "Courier New" }}>
            //       <div>topic : {item.topic}<br /><button onClick={(event) => {
                                //   this.handleViewComment(event);
                                // }}>view comment</button></div>
            //     </td>
            //   </tr>
            //   ))}
            // </tbody>
            // </table>
            // </div>    
            // </div>
              // <div className="row">
                // <div className="col-md-12">
                // <BlockForm />
                // </div>            
              // </div>
            // <br />
            // </div>
            // </div>
    //     )} 
        return (
            <div align="center" style={{ paddingTop: 10}}>
                <div className="Card">
                        <br />
                        <div className="row">
                            <div className="col-md-12 ">
                                <h2 className="card-title" style={{ fontFamily: "Courier New" }}>Topic Here</h2>
                            </div>
                            <br />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table class="table">
                                <thead>
                                <tr>
                                <th scope="col" style={{ fontFamily: "Courier New" }}>topic</th>
                                </tr>
                                </thead>
                                <tbody>
                    {this.state.data.map(item => (
                      <tr>
                        <td style={{ fontFamily: "Courier New" }}>
                          <div>topic : {item.topic}
                              <br />
                              <button onClick={(event) => {
                                  this.handleViewComment(event);
                              }}>view comment</button>
                              <button onClick={(event) => {
                                  this.handleEdit(event);
                              }}>edit</button>
                              <button 
                              onClick={(event) => {
                                  this.handleDelete(event);
                              }}>delete</button>
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
        )
    }
  /*async componentDidMount() {
    let comments = await Util.getPost();
    this.setState({ comments });
    console.log(this.state.comments);
  }*/
  // console.log(window.location.search.substring(10));
  // console.log(localStorage.getItem("token"));
  // let data = await Util.getPost(localStorage.getItem("token"),window.location.search.substring(10));
  // this.setState(data);
  // console.log(data)
  // console.log(this.state.comments)
  // }
}


