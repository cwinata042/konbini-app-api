const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            enum: ['Timed', 'Single'],
            required: true
        },
        category: {
            type: String,
            enum: ['Exercise', 'Habit'],
            required: true
        },
        points: {
            type: Number,
            required: true
        },
        counter_name: {
            type: String,
            required: true
        }
    }
)

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task