const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const InviteSchema = new Schema({
  userName: { type: String }
})

const EventSchema = new Schema({
  title: { type: String },
  description: { type: String },
  time: { type: String },
  invites: { type: [InviteSchema] }
});

const UserSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  userName: { type: String, unique: true },
  email: { type: String },
  password: { type: String },
  events: { type: [EventSchema] }
});

const User = module.exports = mongoose.model("User", UserSchema);

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback)
}

module.exports.getUserByUsername = (username, callback) => {
  const query = { username: username}
  User.findOne(query, callback)
}

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback)
    });
  });
}

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  })
}