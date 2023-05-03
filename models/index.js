const { User, userJoiSchema } = require("./user");
const { Contact, addSchema, statusSchema } = require("./contacts");

module.exports = {
  User,
  userJoiSchema,
  Contact,
  addSchema,
  statusSchema,
};
