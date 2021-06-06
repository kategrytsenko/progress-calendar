const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/tasks', (req, res, next) => {
  const task = req.body;
  console.log(task);
  res.status(201).json({
    message: 'Task added successfully'
  });
});

app.get('/api/tasks', (req, res, next) => {
  const tasks = [
    {
      id: 'sjdlj8789',
      name: 'Test',
      startDate: 'Tue Jun 01 2021 00:00:00 GMT+0300',
      endDate: 'Thu Jun 03 2021 00:00:00 GMT+030',
      iterance: 'On weekdays'
    },
    {
      id: 'sjflj88ihk',
      name: 'Test 2',
      startDate: 'Tue Jun 01 2021 00:00:00 GMT+0300',
      endDate: 'Thu Jun 03 2021 00:00:00 GMT+030',
      iterance: 'On weekdays'
    }
  ];
  res.status(200).json({
    message: 'Tasks fetched successfully',
    tasks
  });
});

module.exports = app;