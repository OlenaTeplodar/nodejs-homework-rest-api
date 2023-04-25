const contacts = require("../models/contacts");

const { ctrlWrapper } = require("../utils");

const { HttpError } = require("../helpers");

const getAllContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getOneContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw HttpError(404, `Contact with ${id} not found`);
  }
  res.json(result);
};

const postContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const deleteContacts = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404, `Contact with ${id} not found`);
  }
  res.json({ message: "Contact deleted" });
};

const putContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404, `Contact with ${id} not found`);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContactById: ctrlWrapper(getOneContactById),
  postContact: ctrlWrapper(postContact),
  deleteContacts: ctrlWrapper(deleteContacts),
  putContact: ctrlWrapper(putContact),
};
