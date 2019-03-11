const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");


// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User and UserInfo models
const User = require("../../models/User");
const UserInfo = require("../../models/UserInfo");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

//save in db info about user portfolio
router.post('/create-portfolio', (req, res) => {
  UserInfo.findOne({
    email: req.body.email
  })
      .then(user => {
        if(!user) {
          const {
            userId, firstName, lastName, middleName,
            email, employment, position, bidSize,
            subsection, department, academicStatus, degree
          } = req.body;

          const dataInfo = {
            id: userId,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            email: email,
            employment: employment,
            position: position,
            bidSize: bidSize,
            subsection: subsection,
            department: department,
            academicStatus: academicStatus,
            degree: degree
          };

          UserInfo.create(dataInfo, (err, res) => console.log(res));
          res.send()

        } else {
          let err = { error: 'Portfolio yet created' };
          res.json(err)
        }
      })
});

//show info about user
router.get('/review-portfolio', (req, res) => {
  UserInfo.findOne({
    id: req.query.userId
  })
      .then( user => {
        console.log(user);
        res.send(user)
      })
});

//show all users on display
router.get('/all-users', (req, res) => {
    const options = {
        page: 1,
        limit: 3
    };
    UserInfo.paginate({}, options, function(err, result) {
        // result.docs
        // result.total
        // result.limit - 10
        // result.page - 3
        // result.pages
        res.send(result)
    });
});


//delete all Users from schema User and UserInfo without frontend support
router.post('/delete', (req, res) => {
  User.remove({}, function(err, result){
    if(err) return console.log(err);

    console.log(result);
  });

  UserInfo.remove({}, function(err, result){
    if(err) return console.log(err);

    console.log(result);
  });
});



module.exports = router;
