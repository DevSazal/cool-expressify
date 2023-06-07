import express, { Express } from 'express';
import { json } from 'body-parser';
import { exceptionHandler } from './lib/HttpException';

import { authAPI } from './routes/auth';

// initialize express
const app: Express = express();

app.use(json());

// initialize routes
app.use(authAPI);

// handle exception
app.use(exceptionHandler);

export { app };
