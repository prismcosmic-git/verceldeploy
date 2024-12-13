import React from 'react';
import about from '../images/about.svg';

export default function About() {
  return (
    <div className='container' id='about'>
      <div className='about row '>
        <div className='my-4'>
          <hr />
          <h2 className='text-center fw-bold'>ABOUT US</h2>
          <hr />
        </div>
        <div className='col-md-6 my-auto'>
          <h3 className='mb-2'>Crafting IT Solutions That Propel Your Business Forward</h3>
        <p><strong>PrismCosmic Pvt. Ltd.</strong> is an innovative technology company specializing in cutting-edge solutions across mobile and web app development, server and database management, business automation, AI-driven insights, and digital marketing. With a focus on creating scalable, secure, and high-performance applications, PrismCosmic empowers businesses to optimize their operations, enhance user engagement, and drive growth.</p>

<p>The company also offers a suite of products, including smart trading platforms, data analytics tools, and cloud infrastructure solutions, designed to help businesses stay ahead in the digital era.</p>

          <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
        </div>
        <div className='col-md-6 '>
          <div className=' '>
            <img src={about} alt="" className='mx-auto d-block img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
}
