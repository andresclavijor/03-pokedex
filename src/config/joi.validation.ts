import * as joi from 'joi';

export const joiValidationSchema = joi.object({
  MONGODB: joi.required(),
  PORT: joi.number().default(3000),
  NODE_ENV: joi.required().default('dev'),
  DEFAULT_LIMIT: joi.number().default(5),
});
