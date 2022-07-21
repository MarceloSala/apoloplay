import * as express from 'express';
import mongoose from 'mongoose';
import router from './app/routes';
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@$cluster1.esmluzr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
