const { default: mongoose } = require("mongoose");
const todoSchema = mongoose.Schema({
  creator_id: {
    type: String,
    require: true,
  },
  todo_task: {
    type: String,
    require: true,
  },
  DATE: {
    type: String,
  },
  MONTH: {
    type: String,
  },
  YEAR: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("todoTasks", todoSchema);
module.exports = todoModel;
