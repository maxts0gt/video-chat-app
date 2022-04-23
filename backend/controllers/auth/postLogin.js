const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const postLogin = async (req, res) => {
  try {
    //
    const { mail, password } = req.body;

    const user = await User.findOne({ mail: mail.toLowercase() });

    if (user && (await bcrypt.compare(password, user.password))) {
      // send new token
      const token = "JWT_TOKEN";

      return res.status(200).json({
        userDetails: {
          mail: user.mail,
          token: token,
          username: user.username,
        },
      });
    }

    return res.status(400).send("Invalid credentials. Please try again");
  } catch (error) {
    return res.status(500).send(`Following error occurred: ${error}`);
  }
};

module.exports = postLogin;
