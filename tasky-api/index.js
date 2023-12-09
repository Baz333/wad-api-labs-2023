import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import tasksRouter from './api/tasks';
import usersRouter from './api/users';
import './db';

dotenv.config();

const errHandler = (err, req, res, next) => {
    if(process.env.NODE_ENV === 'production') {
        return res.status(500).send(`Something went wrong!`);
    }
    res.status(500).send(`Error caught: ${err.stack}`);
}

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/api/tasks', tasksRouter);
app.use('/api/users', usersRouter);

app.use(errHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});