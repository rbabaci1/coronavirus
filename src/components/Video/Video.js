import React from 'react';
import { Media, Player, controls } from 'react-media-player';

import './video.scss';

export default function Video({ url }) {
  const { PlayPause, MuteUnmute } = controls;

  return (
    <div>
      <Media>
        <div className='media'>
          <div className='media-player'>
            <Player src={url} />
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
