const express = require("express");

const router = express.Router();
const Task = require('../models/task');

router.post("", (req, res, next) => {
  const { name, startDate, endDate, iterance } = req.body;
  const task = new Task({ name, startDate, endDate, iterance });
  task.save().then(createdTask => {
    res.status(201).json({
      message: 'Task added successfully',
      taskId: createdTask._id
    });
  });
});

router.get("", (req, res, next) => {
  Task.find()
    .then(documents => {
      res.status(200).json({
        message: 'Tasks fetched successfully',
        tasks: documents
      });
    });
});

router.put("/:id", (req, res, next) => {
  const { id, name, startDate, endDate, iterance } = req.body;
  const task = new Task({ _id: id, name, startDate, endDate, iterance });

  Task.updateOne({ _id: req.params.id }, task)
    .then(result => {
      res.status(200).json({ message: 'Task edited successfully' });
    });
});

router.delete(":id", (req, res, next) => {
  Task.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json({ message: 'Task deleted successfully' });
    });
});

module.exports = router;
