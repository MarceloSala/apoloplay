import { User } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const UserMock: User = {
  _id: new Types.ObjectId(),
  name: 'Paco',
  email: 'paco@mail.com',
  password: 'password123',
};
