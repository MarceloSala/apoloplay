import { Song } from '@apoloplay/definitions';

export const getAllSongs: () => Promise<Song | undefined> = async () => {
  const res: Response = await fetch('http://localhost:3333/songs', {
    method: 'GET',
  });

  const data: Promise<Song> = res.json();

  return data;
};
