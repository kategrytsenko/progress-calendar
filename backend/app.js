const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks');

const app = express();

mongoose.connect('mongodb+srv://aktinijal:L68tD8UYqYQMg53@cluster0.vcg4r.mongodb.net/node-angular?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((err) => {
    console.log(`Connection failed!: ${ err }`);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/tasks', tasksRoutes);

module.exports = app;
