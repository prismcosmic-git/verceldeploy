import React from 'react';
import './mail.css';
import gif from '../images/hero.gif';

function Main() {
  return (
    <div id="main">
      <div className=' video-background'>
        <video autoPlay muted loop>
          <source
            src={`${process.env.PUBLIC_URL}/video.mp4`}
            type="video/mp4" ></source>
        </video>
      </div>
      <div className='home '>
        <div className='row'>
          <div className='col-md-6 my-auto'>
            <h1><b>Illuminating Your Digital Universe</b> </h1>
            <h3 className='my-4'>Leading the Way Delivering Next-Generation IT Solutions</h3>
            <a href="/"><button className='text-white px-4 py-2 rounded border border-2'>Get Started</button></a>
          </div>
          <div className='d-none d-md-inline-block col-md-6'>
            <img
              src={gif}
              alt="description of gif"
              onError={(e) => { e.target.src = { gif }; }}
              className='my-auto'
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Main;
