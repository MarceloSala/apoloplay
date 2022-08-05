import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes';
import * as cors from 'cors';

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$cluster1.esmluzr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.port || 3001;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/songs`);
});
server.on('error', console.error);
