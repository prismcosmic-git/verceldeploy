import React from 'react';
import './services.css';
import cloud from '../images/cloud.svg';
import web from '../images/web.svg';
import animation from '../images/animation.svg';
import database from '../images/database.svg';
import graphics from '../images/graphic.svg';
import ml from '../images/machinelearning.svg';

export default function Services() {
  return (
    <>
      <div className='container services' id='services'>
        <div className='my-5'>
          <hr />
          <h2 className='text-center fw-bold'>OUR SERVICES</h2>
          <hr />
        </div>
        <div className='row'>
          <div className=' col-md-6'>
            <img src={web} alt="" className='mx-auto d-block img-fluid ' />
          </div>
          <div className=' col-md-6  my-auto'>
            <h3>Website Development</h3>
            <p>Our expert web developers provide comprehensive web application development and design services. PrismCosmic Pvt Ltd specializes in creating interactive, scalable, brand-oriented, and business-ready custom web solutions.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
        </div>
        <div className='row  '>
          <div className=' col-md-6 my-auto '>
            <h3>Cloud Computing</h3>
            <p>PrismCosmic Pvt Ltd can enhance your organization's cloud experience, helping you maximize the benefits of your cloud services investment.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
          <div className=' col-md-6 '>
            <img src={cloud} alt="" className='mx-auto d-block img-fluid ' />
          </div>
        </div>
        <div className='row'>
          <div className=' col-md-6'>
            <img src={graphics} alt="" className='mx-auto d-block  img-fluid' />
          </div>
          <div className=' col-md-6 my-auto'>
            <h3>Graphic Design</h3>
            <p>Our talented designers create visually stunning graphics for brochures, banners, flyers, logos, business cards, e-books, and more. Our designs leave a lasting impression on your prospects.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
        </div>
        <div className='row'>
          <div className=' col-md-6 my-auto'>
            <h3>Animation Design</h3>
            <p>Animations make your brand more engaging and interactive. Our team of motion graphics designers helps you tell captivating stories for your business.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
          <div className=' col-md-6'>
            <img src={animation} alt="" className='mx-auto d-block  img-fluid' />
          </div>
        </div>
        <div className='row'>
          <div className=' col-md-6'>
            <img src={database} alt="" className='mx-auto d-block  img-fluid' />
          </div>
          <div className=' col-md-6 my-auto'>
            <h3>Database Management</h3>
            <p>We offer comprehensive solutions to support your database needs, whether on-premises or in the cloud.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
        </div>
        <div className='row'>
          <div className='my-auto col-md-6'>
            <h3>Machine Learning Solutions</h3>
            <p>Our advanced machine learning services help organizations solve key business challenges, enabling data-driven decision-making.</p>
            <a type='button' href='#main' className=' px-4 py-2 rounded  border border-2 text-reset'>Read More</a>
          </div>
          <div className=' col-md-6'>
            <img src={ml} alt="" className='mx-auto d-block img-fluid ' />
          </div>
        </div>
      </div>
    </>
  );
}


