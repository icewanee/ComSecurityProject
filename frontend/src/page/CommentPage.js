import React, { Component } from 'react'
import CommentForm from '../component/CommentForm'
import Comment from '../component/Comment'

export default class CommentPage extends Component {
    constructor(props) {
        super(props)
        this.topic_id = 1
    }
    
    render() {
        return (
            <div className="decorate" align="center">
                <div className="Card">
                    <div className="row">
                        <div className="col-md-12"><Comment id={this.topic_id}/></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 "><CommentForm id={this.topic_id}/></div>
                    </div>
                </div>
          </div>
        )
    }
    /*async componentDidMount() {
    
  }*/

}


