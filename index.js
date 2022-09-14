// Iniciando projeto
require('dotenv').config()
const express = require('express')
const path = require('path')
const { urlencoded } = require('body-parser')

const app = express()

// Database
const User = require('./src/database/schema/UserSchema')

// Usos do servidor
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(urlencoded({ extended: false }))

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.post('/logged', function (req, res) {
    const { body: data } = req
    User.create(data)

    return res.send(data)
})

app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`)
})
