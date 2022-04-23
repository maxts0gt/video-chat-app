const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

// validating for register
const registerSchema = Joi.object({
  mail: Joi.string().email().required(),
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
});

// validating for login
const loginSchema = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().min(6).max(12).required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.controllers.postRegister
);
router.post(
  "/login",
  validator.body(loginSchema),
  authControllers.controllers.postLogin
);

// test route
router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

module.exports = router;
