import * as express from 'express';
import path = require('path');
import router from './app/routes';

const app = express();

//middlewares
app.use((res, req, next) => {
  next();
});

//routes
app.use(router);

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
