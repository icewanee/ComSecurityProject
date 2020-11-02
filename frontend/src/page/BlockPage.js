import React, { Component } from 'react'

export default class BlockPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data: [
                {
                  title: "www.hello.ewwr.com",
                  detail: "4"
                },
                {
                 title: "www.hello.erer.com",
                  detail: "45"
                },
                {
                  title: "www.hello.dfss.com",
                  detail: "16"
                },
                {
                 title: "www.hello.oio.com",
                 detail: "420"
                },
                {
                 title: "www.hello.dfdf.com",
                 detail: "50"
                },
                {
                 title: "www.hello.iopo.com",
                 detail: "80"
                }
              ]
        }
    }
    
    render() {
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
                          <div>topic : {item.title}<br />detail : {item.detail}<br /><button>view comment</button></div>
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
        )
    }
}


