const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  iterance: { type: String, required: true },
  description: { type: String },
  taskHoursEstimation: { type: Number },
  hoursPerDayAvailability: { type: Number },
});

module.exports = mongoose.model('Task', taskSchema);
