const express = require("express");

const { contacts: ctrl } = require("../../controllers");

const { validateBody } = require("../../utils");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getOneContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.delete("/:id", ctrl.deleteContactById);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateContact);

router.patch(
  "/:id/favorite",
  validateBody(schemas.statusSchema),
  ctrl.updateStatusContact
);

module.exports = router;
