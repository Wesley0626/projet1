import React, {Component} from 'react'
import axios from 'axios'
import './displayPost.css'

class DisplayPosts extends Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: false,
      editPost: ''
    }
  }

  handleToggle = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleInput(val){
    this.setState({editPost: val})
  }



  handleEditPosts=() => {
    let editPosts = {
      post: this.state.editPost
    }
    axios.put(`/api/update/${this.props.post.id}`, editPosts)
      .then(res => { 
        this.props.edit(res.data)
        this.handleToggle()
      })
  }

  handleDelete = (id) => {
    axios.delete(`/api/delete/${this.props.post.id}`)
    .then(res => {
      this.props.deletePost(res.data)
    })
  }

  render() {
    return(
      <div className='info'>
        {!this.state.edit
        ?(<div className='display-posts'>
        <div className="postBox">{this.props.post.text}</div>
        <button onClick={this.handleToggle}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>

        </div>):(
          <div className='display-posts'>
            <input
                onChange ={(e) => this.handleInput(e.target.value)}
                value= {this.state.editPost}
                placeholder = "Edit your post"/>
            <button onClick = {() => this.handleEditPosts(this.props.post.id)}>Submit</button>    
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        )}
      </div>
    )
  }  
}


export default DisplayPosts