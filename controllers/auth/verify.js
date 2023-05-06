const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const verify = async (req, res) => {
  const { verifycationToken } = req.params;
  const user = await User.findOne({ verifycationToken });

  if (!user) {
    throw HttpError(404, "User not found");
  }

  await User.findByIdAndUpdate(user._id, {
    verify: true,
    verifycationToken: null,
  });

  res.json({
    message: "Verification successful",
  });
};

module.exports = verify;
