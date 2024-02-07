const mongoose = require("mongoose");

//Creating a constant (UserSchema) object and assign it the mongoose schema...
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
      },
    
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
    
  })

  module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);