const { default: mongoose } = require("mongoose");
const TodoauthSchema = mongoose.Schema({
  
  firstName: {
    type: String,
    unique: true,
    required: true,
  },

  lastName: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,

  },
  password: {
    type: String,
    required: true,

  },
});

const TodoAuthModel = mongoose.model("TodoAuth", TodoauthSchema);
module.exports = TodoAuthModel;
