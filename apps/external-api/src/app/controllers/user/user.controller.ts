import { RequestHandler } from 'express-serve-static-core';
import * as UserMocks from '@apoloplay/mocks';

export const getUsers: RequestHandler = (req, res) => {
  res.send(UserMocks.userMock);
};
