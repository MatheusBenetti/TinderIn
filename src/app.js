/* eslint-disable import/extensions */
import express from 'express';
import dotenv from 'dotenv';
import { database } from './utils/database.js';
import router from './routers/userRouter.js';

dotenv.config();

const app = express();

database();

app.use(router);

const port = process.env.PORT;

app.listen(process.env.PORT, (req, res) => {
  console.log(`App running on port ${port}.`);
});
