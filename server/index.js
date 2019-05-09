const express = require('express')
const ctrl = require('./controllers/post_controllers')

const app= express()

app.use(express.json())


app.post('/api/ctrl', ctrl.add)
app.get('/api/ctrl', ctrl.read)
app.put('/api/ctrl/:id', ctrl.update)
app.delete('/api/ctrl/:id', ctrl.delete)




const PORT = 4321
app.listen(PORT, () => console.log(`Happy mistakes on ${PORT}`))