const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')


app.use('/api/cars/' , require('./routes/carsRoute'))

app.get('/', (req, res) => res.send('Hellow World'))
app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))

