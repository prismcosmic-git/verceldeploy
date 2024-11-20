// import React from 'react';
// import './mail.css';
// import gif from '../images/hero.gif';

// function Main() {
//   return (
//     <div id="main">
//       <div className=' video-background'>
//         <video autoPlay muted loop>
//           <source
//             src={`${process.env.PUBLIC_URL}/video.mp4`}
//             type="video/mp4" ></source>
//         </video>
//       </div>
//       <div className='home '>
//         <div className='row'>
//           <div className='col-md-6 my-auto'>
//             <h1><b>Illuminating Your Digital Universe</b> </h1>
//             <h3 className='my-4'>Leading the Way Delivering Next-Generation IT Solutions</h3>
//             <a href="/"><button className='text-white px-4 py-2 rounded border border-2'>Get Started</button></a>
//           </div>
//           <div className='d-none d-md-inline-block col-md-6'>
//             <img
//               src={gif}
//               alt="description of gif"
//               onError={(e) => { e.target.src = { gif }; }}
//               className='my-auto'
//             />
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Main;

import React from 'react';
import './main.css';
import gif from '../images/hero.gif';
import { ArrowRight } from 'lucide-react';

function Main() {
  return (
    <div id="main">
      <div className='video-background'>
        <div className="gradient-overlay"></div>
        <video autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4"></source>
        </video>
        {/* Animated waves */}
        <div className="waves-container">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave-parallax1">
              <use href="#wave" x="50" y="3" fill="rgba(255,255,255,0.1)" />
            </g>
            <g className="wave-parallax2">
              <use href="#wave" x="50" y="0" fill="rgba(255,255,255,0.2)" />
            </g>
            <g className="wave-parallax3">
              <use href="#wave" x="50" y="9" fill="rgba(255,255,255,0.3)" />
            </g>
            <g className="wave-parallax4">
              <use href="#wave" x="50" y="6" fill="white" />
            </g>
          </svg>
        </div>
        {/* Floating shapes */}
        <div className="animated-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
          <div className="shape shape4"></div>
        </div>
      </div>
      <div className='home'>
        <div className='row'>
          <div className='col-md-6 my-auto content-wrapper text-center'>
            <div className="badge">
              <span className="badge-text fs-3">PrismCosmic</span>
            </div>
            <h1 className="sliding-text fs-1"><b>Illuminating Your Digital Universe</b></h1>
            <h3 className='my-4 fade-in-up'>Leading the Way Delivering Next-Generation IT Solutions</h3>
            <div className="d-flex justify-content-center">
              <a 
                href="https://forms.gle/6q4gjRoAJgrHbdR56" 
                className="btn-wrapper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className='cta-button'>
                  Get Started
                  <ArrowRight className="btn-icon" />
                  <div className="btn-background"></div>
                </button>
              </a>
            </div>
          </div>
          <div className='d-none d-md-inline-block col-md-6'>
            <div className="image-wrapper">
              <div className="image-glow"></div>
              <img
                src={gif}
                alt="description of gif"
                onError={(e) => { e.target.src = gif; }}
                className='floating-image'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;