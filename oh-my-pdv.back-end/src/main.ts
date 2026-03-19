import cors from 'cors';
import express from 'express';
import body_parser from 'body-parser';

const app = express();

app.use(body_parser.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: 'http://localhost:5173' }));

export { app };
