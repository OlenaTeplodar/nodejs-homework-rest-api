const { Contact } = require('../../models/contacts');

const { HttpError } = require('../../helpers');

const getOneContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with ${id} not found`);
  }
  res.json(result);
};

module.exports = getOneContactById;