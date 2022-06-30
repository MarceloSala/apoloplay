import * as express from 'express';
import { Message } from '@apoloplay/api-interfaces';

const app = express();

const greeting: Message = { message: 'juan estuvo aqui' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
