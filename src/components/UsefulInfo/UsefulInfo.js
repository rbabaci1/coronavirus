import React from 'react';
import Video from '../Video/Video';

import './usefulInfo.scss';

export default function UsefulInfo() {
  const videos = [
    'https://www.youtube.com/watch?v=4J0d59dd-qM&t=1754s',
    'https://www.youtube.com/watch?v=9Ay4u7OYOhA',
    'https://www.youtube.com/watch?v=udprEtDVmIY',
    'https://www.youtube.com/watch?v=gAk7aX5hksU'
  ];

  return (
    <div className='useful-info'>
      <h1>MUST WATCH VIDEOS !!!</h1>

      {videos.map((video, i) => (
        <Video url={video} key={i} />
      ))}

      <h1>USEFUL LINKS !!!</h1>
    </div>
  );
}
