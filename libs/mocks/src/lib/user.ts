import { User } from '@apoloplay/definitions';
import { Types } from 'mongoose';

export const UserMock: User = {
  _id: new Types.ObjectId(),
  name: 'Paco',
  email: 'paco@mail.com',
  password: 'password123',
};

export const UserArray: User [] = [{
  _id: new Types.ObjectId(),
  name: 'Marcelo',
  email: 'marcelo@mail.com',
  password: 'salas123',
}, {
  _id: new Types.ObjectId(),
  name: 'Juan',
  email: 'juan@mail.com',
  password: 'juan125',
}, {
  _id: new Types.ObjectId(),
  name: 'Carlos',
  email: 'carlos@mail.com',
  password: 'carlos901',
}]