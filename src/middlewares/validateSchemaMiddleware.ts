import joi from 'joi'
import { Request, Response, NextFunction } from "express";

const validateSchemaMiddleware = (schema: joi.ObjectSchema) => {
	return (req: Request, res: Response, next: NextFunction) => {
		const validation = schema.validate(req.body);
		if (validation.error) {
			return res.status(422).send(validation.error.details.map(detail => detail.message));
		}
		next();
	};
};

export default validateSchemaMiddleware;