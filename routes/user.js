const express = require("express");
const router = express();
const bodyParser = require("body-parser");

const User = require("../models/user");


const userCreate = require("../validation/user-create");

router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


// CREATE USER [CREATE]
router.post("/add", (req, res) => {
    const { errors, isValid } = userCreate(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    User.findOne({ phone: req.body.phone }).then((user) => {
      if (user) {
        errors.phone = "User with same number already exists";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          f_name: req.body.f_name,
          l_name: req.body.l_name,
          company: req.body.company,
          job_title: req.body.job_title,
          email: req.body.email,
          phone: req.body.phone,
          notes: req.body.notes
        });
        newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
      }
    });
  });


// LIST USER [READ]
router.get("/list", (req, res) => {
  
    User.find({}).then((user) => {
      if (user) {
        return res.json(user);
      } else {
        return res.json({error:"No Entries Found"})
      }
    });
  });


// UPDATE USER [UPDATE]
router.put("/update/:num", (req, res) => {
    const { errors, isValid } = userCreate(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOneAndReplace({ phone: req.params.num }, req.body ,{ new: true, upsert: true, returnOriginal: false }, function(err, result) {
          if (err) {
            return res.json(err);
          } else {
            return res.json(result);
          }
        }
      );
  });


module.exports = router;
