import React from 'react';
import Video from '../Video/Video';

import './usefulInfo.scss';

export default function UsefulInfo() {
  const videos = ['https://www.youtube.com/watch?v=4J0d59dd-qM&t=1754s'];

  return (
    <div className='useful-info'>
      <h1>MUST WATCH VIDEOS !!!</h1>

      <Video url={videos[0]} />
    </div>
  );
}
