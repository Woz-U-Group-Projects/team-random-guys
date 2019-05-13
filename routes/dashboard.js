var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let User = require("../models/user")

router.post('/events/username', (req, res, next) => {
  User.findOne({
    userName: req.params.userName
  })
  .then(user => {
    user.title = req.body.title
    user.description = req.body.description,
    user.time = req.body.time,
    user.invites.userName = req.body.invites.userName
  
  user.push()
  .then(story => {
    res.redirect('/dashboard')
    })
  })

});

router.get('/', (req, res) => {
  res.status(200).json("Redirect Successful")
})

router.post('/login', (req, res, next) => {
  
});

module.exports = router;

