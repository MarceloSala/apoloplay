import { Song } from '@apoloplay/definitions';
import { FC, useEffect } from 'react';
import './reproducer.css';
import useScript from '../../hooks/useScript';

interface ReproducerProps {
  song?: Song;
}

export const Reproducer: FC = () => {
  const tracks = [
    {
      id: '1',
      title: 'Little idea',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-summer.mp3',
      cover: 'https://www.bensound.com/bensound-img/littleidea.jpg',
    },

    {
      id: '2',
      title: 'Happy Rock',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-happyrock.mp3',
      cover: 'https://www.bensound.com/bensound-img/happyrock.jpg',
    },
    {
      id: '3',
      title: 'Jazzy Frenchy',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3',
      cover: 'https://www.bensound.com/bensound-img/jazzyfrenchy.jpg',
    },
    {
      id: '4',
      title: 'Acoustic Breeze',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3',
      cover: 'https://www.bensound.com/bensound-img/acousticbreeze.jpg',
    },
    {
      id: '5',
      title: 'Punky',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-punky.mp3',
      cover: 'https://www.bensound.com/bensound-img/punky.jpg',
    },
    {
      id: '6',
      title: 'Badass',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-badass.mp3',
      cover: 'https://www.bensound.com/bensound-img/badass.jpg',
    },
    {
      id: '7',
      title: 'Brazil Samba',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-brazilsamba.mp3',
      cover: 'https://www.bensound.com/bensound-img/brazilsamba.jpg',
    },
    {
      id: '8',
      title: 'Creepy',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-creepy.mp3',
      cover: 'https://www.bensound.com/bensound-img/creepy.jpg',
    },
    {
      id: '9',
      title: 'High Octane',
      artist: 'Bensound',
      src: 'https://www.bensound.com/bensound-music/bensound-highoctane.mp3',
      cover: 'https://www.bensound.com/bensound-img/highoctane.jpg',
    },
  ];
  // const player: any = document.querySelector('player');
  // const audio = player?.querySelector('player__audio');
  // const audioSource = audio?.querySelector('source');
  // const songPanel = player?.querySelector('song-panel');
  // const songTitle = player?.querySelector('song-info__title');
  // const songArtist = player?.querySelector('song-info__artist');
  // const backButton: any = player?.querySelector('backward');
  // const playButton = player?.querySelector('play');
  // const forwardButton = player?.querySelector('forward');
  // const spinner = player?.querySelector('spinner');
  // const spinnerDisc = player?.querySelector('spinner__disc');
  // const progress = player?.querySelector('progress');
  // const progressBar = player?.querySelector('progress__filled');

  let playing = false;
  //   let trackSwitch = false;

  const togglePlay = (audio: HTMLAudioElement) => {
    // Play / pause the audio?
    const method = audio.paused ? 'play' : 'pause';
    playing = audio.paused ? true : false;
    audio[method]();
  };

  //   const toggleSongPanel = (
  //     spinnerDisc: HTMLElement,
  //     songPanel: HTMLElement,
  //     playButton: HTMLElement
  //   ) => {
  //     if (!trackSwitch) {
  //       // Scale the disc
  //       spinnerDisc.classList.toggle('scale');
  //       console.log(spinnerDisc);
  //       // Show / hide song panel
  //       songPanel.classList.toggle('playing');

  //       // Change button icon
  //       playButton.classList.toggle('playing');
  //     }
  //   };

  // const startSpin = (spinner: HTMLElement) => {
  //   // Start spinning the disc
  //   spinner.classList.add('spin');
  //   console.log('play');
  // };

  // const stopSpin = () => {
  //   // Stop spinning the disc
  //   const spin: any = document.querySelector('.spin');
  //   spin.addEventListener(
  //     'animationiteration',
  //     () => {
  //       if (!playing) {
  //         spin.style.animation = 'none';
  //         spinner.classList.remove('spin');
  //         spin.style.animation = '';
  //       }
  //     },
  //     {
  //       once: true,
  //     }
  //   );
  // };

  // const handleProgress = () => {
  //   // Update the progress bar.
  //   const percent = (audio.currentTime / audio.duration) * 100;
  //   progressBar.style.flexBasis = `${percent}%`;

  //   // Skip to next track if at the end of the song.
  //   if (percent === 100) {
  //     trackSwitch = true;
  //     handleForwardButton();
  //   }
  // };

  // const handleBackButton = () => {
  //   if (audio.currentTime <= 3) {
  //     const currentTrackId = parseInt(audioSource.dataset.trackid);
  //     const previousTrackId =
  //       currentTrackId === 1 ? '10' : (currentTrackId - 1).toString();
  //     const previousTrack: any = tracks.find((o) => o.id === previousTrackId);
  //     changeTrack(previousTrack);
  //   } else {
  //     audio.currentTime = 0;
  //   }
  // };

  // const handleForwardButton = () => {
  //   const currentTrackId = parseInt(audioSource.dataset.trackid);
  //   const nextTrackId =
  //     currentTrackId === 10 ? '1' : (currentTrackId + 1).toString();
  //   const nextTrack: any = tracks.find((o) => o.id === nextTrackId);
  //   changeTrack(nextTrack);
  // };

  // const changeTrack = (track: {
  //   id: string;
  //   title: string;
  //   artist: string;
  //   src: string;
  //   cover: string;
  // }) => {
  //   if (playing) trackSwitch = true;
  //   audioSource.setAttribute('src', track.src);
  //   audioSource.dataset.trackid = track.id;
  //   songTitle.innerHTML = track.title;
  //   songArtist.innerHTML = track.artist;
  //   spinnerDisc.style.backgroundImage = `url(${track.cover})`;
  //   audio.load();
  //   if (playing) {
  //     audio.addEventListener(
  //       'canplay',
  //       () => {
  //         audio.play();
  //       },
  //       {
  //         once: true,
  //       }
  //     );
  //     audio.addEventListener(
  //       'play',
  //       () => {
  //         trackSwitch = false;
  //       },
  //       {
  //         once: true,
  //       }
  //     );
  //   }
  // };

  // function scrub(e: any) {
  //   const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
  //   audio.currentTime = scrubTime;
  // }

  // audio?.addEventListener('play', startSpin);
  // audio?.addEventListener('play', toggleSongPanel);
  // audio?.addEventListener('pause', stopSpin);
  // audio?.addEventListener('pause', toggleSongPanel);
  // audio?.addEventListener('timeupdate', handleProgress);

  // backButton?.addEventListener('click', handleBackButton);
  // playButton?.addEventListener('click', togglePlay);
  // forwardButton?.addEventListener('click', handleForwardButton);

  // let mousedown = false;
  // progress?.addEventListener('click', scrub);
  // progress?.addEventListener('mousemove', (e: any) => mousedown && scrub(e));
  // progress?.addEventListener('mousedown', () => (mousedown = true));
  // progress?.addEventListener('mouseup', () => (mousedown = false));

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="player">
        <audio className="player__audio viewer">
          <source
            src="https://www.bensound.com/bensound-music/bensound-summer.mp3"
            type="audio/mpeg"
            data-trackid="1"
          />
        </audio>
        <div className="song-panel">
          <div className="song-info">
            <div className="song-info__title">Little Idea</div>
            <div className="song-info__artist">Bensound</div>
            <div className="progress">
              <div className="progress__filled"></div>
            </div>
          </div>
        </div>
        <div className="player-controls">
          <div className="spinner">
            <div
              className="spinner__disc"
              style={{
                backgroundImage:
                  'url(https://www.bensound.com/bensound-img/littleidea.jpg)',
              }}
            >
              <div className="center__disc"></div>
            </div>
          </div>
          <button className="backward">
            <i className="fa fa-backward fa-2x"></i>
          </button>
          <button
            className="play"
            onClick={() =>
              togglePlay(
                document.querySelector('.player__audio') as HTMLAudioElement
              )
            }
          >
            <i className="fa fa-play fa-3x"></i>
            <span className="pause left"></span>
            <span className="pause right"></span>
          </button>
          <button className="forward">
            <i className="fa fa-forward fa-2x"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Reproducer;
