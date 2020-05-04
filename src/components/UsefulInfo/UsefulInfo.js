import React from 'react';
import Video from '../Video/Video';
import './usefulInfo.scss';

export default function UsefulInfo() {
  const videos = [
    'https://www.youtube.com/watch?v=4J0d59dd-qM&t=1754s',
    'https://www.youtube.com/watch?v=9Ay4u7OYOhA',
    'https://www.youtube.com/watch?v=udprEtDVmIY',
    'https://www.youtube.com/watch?v=gAk7aX5hksU',
  ];

  return (
    <div className='useful-info'>
      <h1>MUST WATCH VIDEOS !!!</h1>

      {videos.map((video, i) => (
        <Video url={video} key={i} />
      ))}

      <h1>RESOURCES !!!</h1>

      <ul>
        <li>
          <a
            href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/checklist-household-ready.html'
            target='blank'
          >
            Checklist To Get Ready
          </a>
        </li>

        <li>
          <a
            href='https://www.nami.org/getattachment/About-NAMI/NAMI-News/2020/NAMI-Updates-on-the-Coronavirus/COVID-19-Updated-Guide-1.pdf'
            target='blank'
          >
            Nami-Covid-Guide
          </a>
        </li>

        <li>
          <a
            href='https://childmind.org/coping-during-covid-19-resources-for-parents/'
            target='blank'
          >
            Supporting Families During COVID-19
          </a>
        </li>

        <li>
          <a
            href='https://www.nasponline.org/resources-and-publications/resources-and-podcasts/school-climate-safety-and-crisis/health-crisis-resources/helping-children-cope-with-changes-resulting-from-covid-19'
            target='blank'
          >
            Helping Children Cope With Changes Resulting from COVID-19
          </a>
        </li>

        <li>
          <a
            href='https://www.nih.gov/health-information/coronavirus'
            target='blank'
          >
            National Institutes of Health
          </a>
        </li>
      </ul>
    </div>
  );
}
