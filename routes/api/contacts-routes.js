const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { validateBody } = require("../../utils");

const { addSchema, statusSchema } = require("../../models");

const contactsRouter = express.Router();

const { isValidId, authenticate } = require("../../middlewares");

contactsRouter.get("/", authenticate, ctrl.getAllContacts);

contactsRouter.get("/:id", authenticate, isValidId, ctrl.getOneContactById);

contactsRouter.post(
  "/",
  authenticate,
  validateBody(addSchema),
  ctrl.postContact
);

contactsRouter.delete("/:id", authenticate, isValidId, ctrl.deleteContactById);

contactsRouter.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(addSchema),
  ctrl.updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(statusSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
