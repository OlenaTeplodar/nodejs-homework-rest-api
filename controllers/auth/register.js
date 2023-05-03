const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const register = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const candidate = await User.findOne({ email });
  if (candidate) {
    throw HttpError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });
  if (!result) {
    res.status(400);
    throw new Error("Unable to save in db");
  }
  res.status(201).json({
    user: {
      email: result.email,
      subscription: result.subscription,
    },
  });
};

module.exports = register;
