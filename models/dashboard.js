var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  time: { type: String, required: true },
  invites: { type: String, required: true }
});

const User = module.exports = mongoose.model("User", UserSchema);

