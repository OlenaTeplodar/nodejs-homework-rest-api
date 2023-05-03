const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { userJoiSchema } = require("../../models");
const { validateBody } = require("../../utils");

const authRouter = express.Router();

const { authenticate } = require("../../middlewares");

authRouter.post("/register", validateBody(userJoiSchema), ctrl.register);

authRouter.post("/login", validateBody(userJoiSchema), ctrl.login);

authRouter.get("/current", authenticate, ctrl.getCurrentUser);

authRouter.post("/logout", authenticate, ctrl.logout);

module.exports = authRouter;
