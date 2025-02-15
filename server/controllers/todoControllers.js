const todoModel = require("../Models/todoModel");
const todoFormattor = (todoS) => {
  try {
    let todoList = {
      Previous: [],
      Today: [],
      Tomorrow: [],
    };
    // Todo formatter
    let date = new Date();
    todoS.forEach((element) => {
      if (parseInt(element.YEAR) > date.getFullYear()) {
        // 2024 > 2025 false 2025 2025
        todoList.Tomorrow.push(element);
      } else if (parseInt(element.YEAR) < date.getFullYear()) {
        // 2024 <2025 true
        todoList.Previous.push(element);
      } else {
        if (parseInt(element.MONTH) > date.getMonth()) {
          todoList.Tomorrow.push(element);
        } else if (parseInt(element.MONTH) < date.getMonth()) {
          // 0<1 true previous
          todoList.Previous.push(element);
        } else {
          if (parseInt(element.DATE) > date.getDate()) {
            // 1>2 flase
            todoList.Tomorrow.push(element);
          } else if (parseInt(element.DATE) < date.getDate()) {
            // 1<2 trua push ele prevoious
            todoList.Previous.push(element);
          } else {
            todoList.Today.push(element);
          }
        }
      }
    });

    return todoList;
  } catch (error) {
    console.log(error);
  }
};
exports.getTodos = async (req, res) => {
  try {
    // const Userid = req.params.id;
    const FetchTodos = await todoModel.find({creator_id:req.userId});
    if (FetchTodos) {
      const formattedTodos = todoFormattor(FetchTodos);
      allTodos = formattedTodos;
      res.send(allTodos);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.addTodos = async (req, res) => {
  try {
    // creator_id req.userId
    const todotobeadded = new todoModel({
      ...req.body,
      creator_id: req.userId,
    });
    const savetodo = await todotobeadded.save();

    res.send(savetodo);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await todoModel.findByIdAndDelete(id);
    res.send({ deleteTodo });
  } catch (error) {
    console.log(error);
  }
};

exports.markasCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const updateTodo = await todoModel.findByIdAndUpdate(id, {
      completed: true,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.moveToTomorrow = async (req, res) => {
  try {
    const { id } = req.params;
    let date = new Date();
    const deleteTodo = await todoModel.findByIdAndUpdate(id, {
      DATE: date.getDate() + 1,
    });
  } catch (error) {
    console.log(error);
  }
};
