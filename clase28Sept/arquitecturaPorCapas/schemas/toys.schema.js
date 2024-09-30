import Joi from "joi";

const toySchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  picture: Joi.string().required(),
});

export { toySchema };
