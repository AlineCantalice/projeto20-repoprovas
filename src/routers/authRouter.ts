import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware';
import { signInSchema } from '../schemas/signInSchema';
import { signUpSchema } from '../schemas/signUpSchema';

const router = Router();

router.post('/signup', validateSchemaMiddleware(signUpSchema), signUp);
router.post('/signin', validateSchemaMiddleware(signInSchema), signIn);

export default router;