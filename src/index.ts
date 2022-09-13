import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { json } from 'express';
import router from './routers/authRouter';
import "express-async-errors";
import errorHandler from './middlewares/errorHandler'

dotenv.config()

const app = express()
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler)


app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  });