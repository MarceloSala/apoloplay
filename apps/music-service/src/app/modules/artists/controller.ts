import { Handler, Request, Response } from 'express';
import { Types } from 'mongoose';
import { ArtistMongo } from '../../models/artist';

export const getUsers: Handler = async (req: Request, res: Response) => {
  const users = await ArtistMongo.find();
  return res.status(200).send(users);
};

export const getUserById: Handler = async (req: Request, res: Response) => {
  const user = await ArtistMongo.findById(new Types.ObjectId(req.body._id));
  if (!user) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  return res.status(200).send(user);
};

export const createUser: Handler = async (req: Request, res: Response) => {
  const user = new ArtistMongo(req.body);
  await user.save();

  // return res.status(400).send({ error: 'Missing attributes' });
  return res.status(201).send(user);
};

export const updateUserById: Handler = async (req: Request, res: Response) => {
  if (!(await ArtistMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  await ArtistMongo.findByIdAndUpdate(req.body._id, req.body);
  const user = await ArtistMongo.findById(req.body._id);
  return res.status(200).send(user);
};

export const deleteUserById: Handler = async (req: Request, res: Response) => {
  if (!(await ArtistMongo.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  const user = await ArtistMongo.findByIdAndDelete(req.body._id);
  return res.status(200).send(user);
};
