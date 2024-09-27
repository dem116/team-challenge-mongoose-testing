const express = require('express');
const app = express();
const PORT = 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes/posts');

dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', routes); 


module.exports = app; //exportar para el server aparte
