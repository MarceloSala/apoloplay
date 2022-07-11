import { LOCAL_STORAGE_KEYS, Song } from '@apoloplay/definitions';

export const saveSongProp = (song: Song) => {
  window.sessionStorage.setItem(LOCAL_STORAGE_KEYS.SONG, JSON.stringify(song));
};

export const getSongProp = () => {
  try {
    const song = JSON.parse(
      window.sessionStorage.getItem(LOCAL_STORAGE_KEYS.SONG) || ''
    );
    return song;
  } catch (error) {}
};
