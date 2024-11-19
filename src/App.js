import { useState } from 'react';
import './App.css';
import About from './comp/About';
import Contact from './comp/Contact';
import Header from './comp/Header';
import Internship from './comp/Internship';
import Main from './comp/Main';
import Services from './comp/Services';

function App() {

  const [mode, setMode] = useState('light');
  const [btntext, setBtntext] = useState('Enable dark mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#242424';
      document.body.style.color = 'white';
      setBtntext('Enable light mode');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setBtntext('Enable dark mode');
    }
  };

  return (
    <>
      <Header toggleMode={toggleMode} mode={mode} btntext={btntext} />
      <Main />
      <About />
      <Services />
      <Internship />
      <Contact mode={mode} />

      <hr />
      <div className='py-3 py-md-5 p-4'>
        <footer className='sticky-bottom'>
          <div className='row'>
            <div className='d-none d-md-block col-md-6 col-lg-3 px-4'>
              <h2>About Us</h2>
              <p>We bridge the gap between students and industry knowledge, guiding them towards their dreams. As an MSME registered startup, we welcome new connections on this journey of endless learning and joy!</p>
            </div>
            <div className='col-md-6 col-lg-3 px-4'>
              <h2>Quick Links</h2>
              <p><a href="#main" className='text-reset'>Home</a></p>
              <p><a href="#about" className='text-reset'>About</a></p>
              <p><a href="#services" className='text-reset'>Services</a></p>
              <p><a href="#internship" className='text-reset'>Internship</a></p>
            </div>
            <div className='col-md-6 col-lg-3 px-4'>
              <h2>Follow us</h2>

              <p><a href='https://www.instagram.com/weprismcosmic?igsh=MThqbGtqeW1jdjg3Ng==' target='blank' className='text-reset'><i className="bi bi-instagram px-2"></i>Instagram</a></p>
              <p><a href='https://www.linkedin.com/company/prismcosmic/about/' target='blank' className='text-reset'><i className="bi bi-linkedin px-2"></i>LinkedIn</a></p>
            </div>
            <div className='col-md-6 col-lg-3 px-4'>
              <h2>Contact Info</h2>
              <p><i className="bi bi-envelope px-2"></i><b>Mail:</b> hr@prismcosmic.com</p>
              <p><a href="https://maps.app.goo.gl/FbsxhCCM3CfaG8qk8" target='blank' className='text-reset'><i className="bi bi-geo px-2"></i><b>Address:</b> Bangalore, Karnataka 560001, IN</a></p>
            </div>
          </div>
          <hr />
          <div className=" text-center foot p-4 py-2">
            <p className='fw-bold fs-5'>&copy; <small>{new Date().getFullYear()}</small> | PrismCosmic Private Limited | All Rights Reserved</p>
            <div className="p-4 arrow ">
              <button id="scrollToTopBtn" class="border-2 p-2 text-reset"><a href="/main"><i
                className="bi bi-chevron-double-up text-reset"></i></a></button>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;