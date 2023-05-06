const { User, userJoiSchema, emailJoiSchema } = require("./user");
const { Contact, addSchema, statusSchema } = require("./contacts");

module.exports = {
  User,
  userJoiSchema,
  emailJoiSchema,
  Contact,
  addSchema,
  statusSchema,
};
