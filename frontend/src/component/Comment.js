import React, { Component } from 'react'
import "./Comment.css"
export default class Comment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "hello",
             comment: "I'm so sleepy I'm so sleepy I'm so sleepy I'm so sleepy I'm so sleepy",
             date:"12/13/1989",
        }
    }
    
    render() {
        return (
            <div class="card mb-3 w-12 innerbox">
            <div class="row no-gutters ">
              <div class="col-md-12 ">
                <div class="card-body">
                  <center>
                <a class="card-title title">{this.state.title}</a></center>
                <p class="card-text">{this.state.comment}</p>
                <p class="card-text"><small class="text-muted">Last updated {this.state.date}</small></p>
                </div>
              </div>
            </div>
          </div>
        )
    }
}


