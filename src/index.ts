import express from 'express';
import cors from 'cors';
import { json } from 'express';
import authRouter from './routers/authRouter';
import testRouter from './routers/testRouter';
import "express-async-errors";
import errorHandler from './middlewares/errorHandler'

const app = express()
app.use(json());
app.use(cors());
app.use(authRouter);
app.use(testRouter);
app.use(errorHandler)

export default app;