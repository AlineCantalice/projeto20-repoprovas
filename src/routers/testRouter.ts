import { Router } from "express";
import { createTest, getTestsFromDiscipline, getTestsFromTeacher } from "../controllers/testController";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import { validateToken } from "../middlewares/validateTokenMiddleware";
import testSchema from "../schemas/testSchema";

const router = Router();

router.post('/tests', validateToken, validateSchemaMiddleware(testSchema), createTest);
router.get('/tests/disciplines', validateToken, getTestsFromDiscipline);
router.get('/tests/teachers', validateToken, getTestsFromTeacher);

export default router;