let posts = [{
  text: '',
  id: 0}]


module.exports = {
add: (req,res) => {
  const {text} = req.body
  posts.length
  ? id = posts[posts.length - 1].id +1
  : id = 0
  const newPost = {
    text: text,
    id: id
  }
  posts.push(newPost)

  res.status(200).send(posts)
},
read: (req, res) => {
  res.status(200).send(posts)
}, 
update: (req, res) => {
  const {id} = req.params
  const updatePost = req.body
  var myPost = posts.find(element => {
    return element.id === +id
  })
  myPost.text = updatePost.post
  res.status(200).send(posts)

},
delete: (req, res) => {
const {id} = req.params
posts = posts.filter((posts) => posts.id !== +id)
res.status(200).send(posts)
}
}