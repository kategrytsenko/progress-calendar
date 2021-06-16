const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Task = require('./models/task');

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

app.post('/api/tasks', (req, res, next) => {
  const { name, startDate, endDate, iterance } = req.body;
  const task = new Task({ name, startDate, endDate, iterance });
  task.save().then(createdTask => {
    res.status(201).json({
      message: 'Task added successfully',
      taskId: createdTask._id
    });
  });
});

app.get('/api/tasks', (req, res, next) => {
  Task.find()
    .then(documents => {
      res.status(200).json({
        message: 'Tasks fetched successfully',
        tasks: documents
      });
    });
});

app.put('/api/tasks/:id', (req, res, next) => {
  const { id, name, startDate, endDate, iterance } = req.body;
  const task = new Task({ _id: id, name, startDate, endDate, iterance });

  Task.updateOne({ _id: req.params.id }, task)
    .then(result => {
      res.status(200).json({ message: 'Task edited successfully' });
    });
});

app.delete('/api/tasks/:id', (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Task deleted successfully' });
    });
});

module.exports = app;
