import * as express from 'express';

const app = express();

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
