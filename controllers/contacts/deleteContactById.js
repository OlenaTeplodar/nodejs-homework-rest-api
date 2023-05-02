const { Contact } = require("../../models/contacts");

const { HttpError } = require("../../helpers");

const deleteContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with ${id} not found`);
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteContactById;
