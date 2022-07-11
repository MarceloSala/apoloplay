import * as express from 'express';
import mongoose from 'mongoose';

const app = express();

async function mongoConnect() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@apoloplay-cluster.avlym.mongodb.net/?retryWrites=true&w=majority`
  );
}

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to authentication-service!' });
});

const port = process.env.port || 3000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
  mongoConnect();
});
server.on('error', console.error);
