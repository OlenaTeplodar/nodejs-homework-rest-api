const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongooseError } = require("../utils");

const addSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Za-z ]+$/)
    .min(2)
    .max(30)
    .required()
    .messages({
      "any.required": `"name" is required`,
      "string.empty": `"name" cannot be empty`,
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "any.required": `"email" is required`,
      "string.empty": `"email" cannot be empty`,
    }),
  phone: Joi.string()
    .pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
    .required()
    .messages({
      "any.required": `"phone" is required`,
      "string.empty": `"phone" cannot be empty`,
    }),
  favorite: Joi.boolean(),
});

const statusSchema = Joi.object({
  favorite: Joi.bool()
    .valid(true, false)
    .required("missing field favorite")
    .messages({ "any.required": "missing field favorite" }),
});

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(v);
        },
        message: "Please enter a valid phone",
      },
      required: [true, "Set phone for contact"],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongooseError);

const schemas = {
  addSchema,
  statusSchema,
};

const Contact = model("contact", contactSchema);

module.exports = { Contact, schemas };
