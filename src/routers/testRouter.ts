import { Router } from "express";
import { createTest, getTestsFromDiscipline, getTestsFromTeacher } from "../controllers/testController";
import validateSchemaMiddleware from "../middlewares/validateSchemaMiddleware";
import testSchema from "../schemas/testSchema";

const router = Router();

router.post('/tests', validateSchemaMiddleware(testSchema), createTest);
router.get('/tests/disciplines', getTestsFromDiscipline);
router.get('/tests/teachers', getTestsFromTeacher);

export default router;