import { Router } from "express";
import { createTest, getTests } from "../controllers/testController";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";

const router = Router();

router.post('/tests', validateSchemaMiddleware(testSchema), createTest);
router.get('/tests', getTests);

export default router;