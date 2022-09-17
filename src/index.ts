import express from 'express';
import cors from 'cors';
import { json } from 'express';
import router from './routers/authRouter';
import "express-async-errors";
import errorHandler from './middlewares/errorHandler'

const app = express()
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler)

export default app;