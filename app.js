import express from 'express';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

config({
  path: './config/config.env',
});
const app = express();

// Using Middleware
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());
// importing and using Routes
import course from './routes/courseRoutes.js';
import user from './routes/userRoutes.js';
import payment from './routes/paymentRoutes.js';
import other from './routes/otherRoutes.js';
import ErrorMiddleware from './middlewares/Error.js';
import cors from 'cors';

app.use('/api/v1', course);
app.use('/api/v1', user);
app.use('/api/v1', payment);
app.use('/api/v1', other);
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

export default app;

app.get('/', (req, res) =>
  res.send(
    `<h1>Site is working. click <a href=${process.env.FRONTEND_URL}>Here</a> to visit Frontend</h1>`
  )
);

app.use(ErrorMiddleware);
