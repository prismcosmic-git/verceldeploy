import React from 'react';
import './internship.css';
import web from '../images/webdev.jpg';
import graphic from '../images/graphicdesign.jpg';
import java from '../images/javaprogram.jpg';
import android from '../images/androiddev.jpg';
import data from '../images/datascience.jpg';
import python from '../images/python.jpg';
import analytics from '../images/dataanalytics.jpg';
import cyber from '../images/cybersecurity.jpg';
import cloud from '../images/cloudcomputing.svg';

function Internship() {
  return (
    <div className='body ' id='internship'>
      <div className='container'>
        <div className='my-5'>
          <hr />
          <h2 className='text-center fw-bold'>INTERNSHIPS</h2>
          <hr />
        </div>
        <div className='row no-gutters '>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={web} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Web Development</h3>
              <p className='py-md-3'>Gain hands-on experience in web and app development with challenging opportunities and real-world projects.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={graphic} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Graphic Design</h3>
              <p className='py-md-3'>Get involved in projects focusing on various aspects of visual design strategies.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={java} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Java Programming</h3>
              <p className='py-md-3'>Master the fundamentals of Java programming from development to deployment of web applications.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={android} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Android Development</h3>
              <p className='py-md-3'>Start your first app development project with our Android internship.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={data} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Data Science</h3>
              <p className='py-md-3'>Gain experience in the virtual workforce with our remote data science internships.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={python} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Python Programming</h3>
              <p className='py-md-3'>Become proficient in Python programming through our intensive 4-week internship program.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={analytics} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Data Analytics</h3>
              <p className='py-md-3'>Gain practical insights into data analytics with hands-on experience and real-world projects.</p>
              <a href='https://forms.gle/6q4gjRoAJgrHbdR56' type='button' target='blank' className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Apply Now<i className="bi bi-arrow-right mx-2 mt-2"></i></a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4 '>
              <img src={cyber} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Cyber Security</h3>
              <p className='py-md-3'>Step into the world of cybersecurity with real-world projects and exposure to cutting-edge security practices.</p>
              <a href='/' type='button'  className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Comming Soon</a>
            </div>
          </div>
          <div className='col-md-6 col-lg-4'>
            <div className='m-4 p-3 p-lg-4'>
              <img src={cloud} alt="" className='img1 mb-md-3 ' />
              <h3 className='py-3'>Cloud Computing</h3>
              <p className='py-md-3'>Explore the realm of cloud computing with real-world projects and the latest technologies.</p>
              <a href='/' type='button'  className='px-4 py-2 rounded border border-0 mb-2 text-reset'>Comming Soon</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Internship;