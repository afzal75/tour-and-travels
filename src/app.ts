/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import { UserRoutes } from './routes/user.routes';
// import globalErrorHandler from './app/middlewares/globalErrorHandlers';
// import notFound from './app/middlewares/notFound';
// import router from './app/routes';
// import cookieParser from 'cookie-parser';

const app: Application = express();

//parsers
app.use(express.json());
// app.use(cookieParser())
app.use(cors({ origin: ['http://localhost:5173'] }));

// application routes

app.use('/api/v1', UserRoutes);

const getAController = (req: Request, res: Response) => {
    const a = 10;
    res.send(a);
};

app.get('/', getAController);

// global error handler routes

// app.use(globalErrorHandler);

// not found routes

// app.use(notFound);

export default app;
