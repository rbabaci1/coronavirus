import React from 'react';
import { Media, Player, controls } from 'react-media-player';

import './video.scss';

export default function Video() {
  const { PlayPause, MuteUnmute } = controls;

  return (
    <div>
      <Media>
        <div className='media'>
          <div className='media-player'>
            <Player src='https://www.youtube.com/watch?v=4J0d59dd-qM&t=1754s' />
          </div>

          <div className='media-controls'>
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
    </div>
  );
}
