const { ctrlWrapper } = require("../../utils");

const getAllContacts = require("./getAllContacts");
const getOneContactById = require("./getOneContactById");
const postContact = require("./postContact");
const deleteContactById = require("./deleteContactById");
const updateContact = require("./updateContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContactById: ctrlWrapper(getOneContactById),
  postContact: ctrlWrapper(postContact),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
