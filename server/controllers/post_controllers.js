let post = []
let id = 0

module.exports = {
add: (req,res) => {
  const {text, time} = req.body
  post.push({id, text,})
  id++
  res.status(200).send(post)
},
read: (req, res) => {
  res.status(200).send(post)
}, 
update: (req, res) => {
const {text} = req.body
const updateId = req.params.id
const index = post.findIndex(post => post.id === updateId)
post[index] = {
  id: post.id,
  text: text || message.text,
  }
  res.status(200).send(post)
},
delete: (req, res) => {
  const deleteId = req.params.id
  index = post.findIndex(message => message.id === deleteId)
  post.splice(index, 1)
  res.status(200).send(post)
}
}
