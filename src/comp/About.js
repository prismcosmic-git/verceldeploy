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
          <p>At PrismCosmic Pvt Ltd, we specialize in developing personalized software that transforms the digital aspirations of our clients into reality. Our mission is to empower the youth, especially students, by fostering self-awareness and exploring cutting-edge technology and high-growth fields.</p>
          <p> We bridge the gap between students and industry knowledge, guiding them towards their dreams. As an MSME registered startup, we welcome new connections on this journey of endless learning and joy!</p>
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