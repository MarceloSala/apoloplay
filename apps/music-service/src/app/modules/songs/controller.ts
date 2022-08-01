import { Handler, Request, Response } from 'express';
import { Types } from 'mongoose';
import { Song } from '../../models/songs';

export const getsongs: Handler = async (req: Request, res: Response) => {
  const songs = await Song.find();
  return res.status(200).send(songs);
};

export const getsongById: Handler = async (req: Request, res: Response) => {
  const song = await Song.findById(new Types.ObjectId(req.body._id));
  if (!song) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  return res.status(200).send(song);
};

export const createsong: Handler = async (req: Request, res: Response) => {
  const song = new Song(req.body);
  await song.save();

  // return res.status(400).send({ error: 'Missing attributes' });
  return res.status(201).send(song);
};

export const updatesongById: Handler = async (req: Request, res: Response) => {
  if (!(await Song.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  await Song.findByIdAndUpdate(req.body._id, req.body);
  const song = await Song.findById(req.body._id);
  return res.status(200).send(song);
};

export const deletesongById: Handler = async (req: Request, res: Response) => {
  if (!(await Song.findById(new Types.ObjectId(req.body._id)))) {
    return res.status(404).send({ error: 'Id does not exists' });
  }
  const song = await Song.findByIdAndDelete(req.body._id);
  return res.status(200).send(song);
};
