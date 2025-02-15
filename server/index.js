const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const todoRouter = require("./Routes/todo");
const authRouter = require("./Routes/auth");
const { connectDB } = require("./Config/db");
require('dotenv').config()
connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json({ 
  origin: 'https://todo-list-mu-mauve-77.vercel.app/',  
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));
app.use("/todo", todoRouter);
app.use("/auth", authRouter);
app.get("/", (req,res)=>{
  res.send({mgs:"Server is ready to use"})
});

app.listen(8000, () => {
  console.log("Server is connected");

});
