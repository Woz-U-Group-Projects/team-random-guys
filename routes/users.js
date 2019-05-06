var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

let User = require("../models/user");

/* GET users listing. */
router.post('/', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    email: req.body.email,
    password: req.body.password
  });
  user
  .save()
  .then(result => {
    console.log(result);
    res.status(201).json({
      message: "Handlings POST requests to /products",
      createUser: result
    });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });  
});

router.get('/:userId', (req, res, next) => {
  const id = req.params.userId;
  User.findById(id)
  .exec()
  .then(doc => {
    console.log("From Database", doc);
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({message: "No valid entry found for provided ID"});
    }
    
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
})
module.exports = router;
