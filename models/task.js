const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String,
    dead_line: Date,
    status: { type: String, default: 'incomplete' },
    assign_to: String,
    assign_at: Date,
    discription: String
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;