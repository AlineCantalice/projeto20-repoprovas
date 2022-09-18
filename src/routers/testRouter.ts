import { Router } from "express";
import { createTest } from "../controllers/testController";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";

const router = Router();

router.post('/tests', validateSchemaMiddleware(testSchema), createTest);

export default router;