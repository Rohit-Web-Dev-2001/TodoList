const express = require("express");
const {
  getTodos,
  addTodos,
  deleteTodos,
  markasCompleted,
  moveToTomorrow,
} = require("../controllers/todoControllers");
const ensureAuthenticated = require("../Middlewares/Authenticator");

const todoRouter = express.Router();

todoRouter.get("/getTodo",ensureAuthenticated, getTodos);
todoRouter.post("/addTodo", ensureAuthenticated, addTodos);
todoRouter.delete("/deleteTodo/:id", deleteTodos);
todoRouter.put("/markasCompleted/:id", markasCompleted);
todoRouter.put("/moveToTomorrow/:id", moveToTomorrow);

module.exports = todoRouter;
