const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postRegister = async (req, res) => {
  try {
    const { username, mail, password } = req.body;

    // check if user exists
    const userExists = await User.exists({ mail: mail.toLowercase() });

    if (userExists) {
      return res.status(409).send("E-mail is already in use!");
    }

    // then, encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user doc and save in mongodb
    const user = await User.create({
      username,
      mail: mail.toLowercase(),
      password: encryptedPassword,
    });

    // create token
    const token = "JWT_TOKEN";

    // send the response
    res.status(201).json({
      userDetails: {
        mail: user.mail,
        token: token,
        username: user.username,
      },
    });
  } catch (error) {
    return res.status(500).send(`Following error occurred: ${error}`);
  }
};

module.exports = postRegister;
