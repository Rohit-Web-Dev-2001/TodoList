const TodoAuthModel = require("../Models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.SingUp = async (req, res) => {
  try {
    const UserExist = await TodoAuthModel.findOne({ email: req.body.email });
    if (UserExist) {
      res.send("User Already exists");
    } else {
      const { password } = req.body;
      const salt = await bcrypt.genSalt(11);
      const hashedPassword = await bcrypt.hash(password, salt);
      const usertobeadded = new TodoAuthModel({
        ...req.body,
        password: hashedPassword,
      });
      const saveuser = usertobeadded.save(usertobeadded);
      res.send({ saveuser, msg: "Your account has been created" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.SignIn = async (req, res) => {
  try {
    const ValidateUser = await TodoAuthModel.findOne({ email: req.body.email });
    if (ValidateUser) {
      const verify = await bcrypt.compare(
        req.body.password,
        ValidateUser.password
      );
      if (verify) {
        const jwtToken = jwt.sign( {userId: ValidateUser._id,email: ValidateUser.email}, process.env.JWT_SECRET,  { expiresIn: '24h'});
        res.send({
          status: "Login Successfully",
          email: ValidateUser.email,
          Username: ValidateUser.username,
          jwtToken,
        });
      }
      res.status(401).send("Wrong Password");
    }
    res.send({ msg: "User not exists" });
  } catch (error) {
    console.log(error);
  }
};
