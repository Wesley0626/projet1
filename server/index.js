const express = require('express')
const ctrl = require('./controllers/post_controllers')

const app= express()

app.use(express.json())


app.post('/api/add', ctrl.add)
app.get('/api/read', ctrl.read)
app.put('/api/update/:id', ctrl.update)
app.delete('/api/delete/:id', ctrl.delete)




const PORT = 4321
app.listen(PORT, () => console.log(`Happy mistakes on ${PORT}`))