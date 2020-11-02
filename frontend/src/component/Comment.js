import React, { Component } from 'react'

export default class Comment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [
                {
                  comment: "www.hello.ewwr.com"
                },
                {
                 comment: "www.hello.erer.com"
                },
                {
                  comment: "www.hello.dfss.com"
                },
                {
                 comment: "www.hello.oio.com"
                },
                {
                 comment: "www.hello.dfdf.com"
                },
                {
                 comment: "www.hello.iopo.com"
                }
              ]
        }
    }
    
    render() {
        return (
            <div align="center">
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
                          <div className="col-md-1"> <button>edit</button></div>
                          <div className="col-md-1"> <button>delete</button></div>
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
}


