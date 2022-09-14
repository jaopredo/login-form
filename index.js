// Iniciando projeto
require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();

// Database
const User = require('./src/database/schema/UserSchema');

// Usos do servidor
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Rodando na porta ${process.env.PORT}`);
});
