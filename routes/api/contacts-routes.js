const express = require("express");

const ctrl = require("../../controllers/contacts-controllers");

const { validateBody } = require('../../utils');

const schemas = require('../../helpers');

const router = express.Router();

router.get("/", ctrl.getAllContacts);

router.get("/:id", ctrl.getOneContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.delete("/:id", ctrl.deleteContacts);

router.put("/:id", validateBody(schemas.addSchema), ctrl.putContact);

module.exports = router;
