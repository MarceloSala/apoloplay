import { UserMock } from '@apoloplay/mocks';
import { RequestHandler } from 'express-serve-static-core';

export const getUsers: RequestHandler = (req, res) => {
  res.send(UserMock);
};
