import React, {Component} from 'react'
import axios from 'axios'
import DisplayPosts from './DisplayPosts'
import './addPost.css'


class AddPost extends Component {
constructor() {
  super()
  this.state = {
    post: [],
    input: ''
  }
 }


handleText(val){
  this.setState({
    input: val
  })
}
getPosts =() =>{
  axios.get('/api/read')
}
handleGetPosts = () => {
  axios.get('/api/post')
  .then(res => {
    this.setState({
      post: res.data
    })
  })
  .catch(err => alert(err))
}

handleEdit = (data) => {
  this.setState({
    post: data
  })
}

handleAddPost = () => {
  axios.post('/api/add', {text: this.state.input})
  .then(res => {
    console.log(res.data)
    this.setState({
      post: res.data
    })
  })
  .catch(err => alert(err))
}


handleDeletePost = (data) => {
  this.setState({
    post: data
  })
}

 render(){
   const mappedPosts = this.state.post.map((element, i) =>{
     return (
       <DisplayPosts key={i}
          post={element}
          edit={this.handleEdit}
          deletePost={this.handleDeletePost}/>
     )
   })

  return (
  <div className="control">  
   <div className="chatbox">
    <div className="inputBox">
       <input onChange={(e) => this.handleText(e.target.value)}
       value={this.state.input}
       placeholder='Type here!' />
       <button onClick={this.handleAddPost}>Add Post</button>
    </div>
    <div className="display">
    <div className='postbox'>
    {mappedPosts}
    </div>
    </div>
   </div>
 </div>
 )
}
}

export default AddPost