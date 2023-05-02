const { Contact } = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "missing field favorite");
  }
  res.json(result);
};

module.exports = updateStatusContact;
