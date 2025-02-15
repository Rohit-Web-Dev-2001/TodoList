const express = require("express");
const { SingUp, SignIn } = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/SignUp", SingUp);

authRouter.post("/SignIn", SignIn);

module.exports=authRouter