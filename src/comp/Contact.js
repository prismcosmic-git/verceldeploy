import React from 'react';
import hero from '../images/contact.gif';

export default function Contact(props) {
  return (
    <section className="contact_section" id="contact">
      <div className='py-md-5'>
        <div className='my-5 container'>
          <hr />
          <h2 className='text-center fw-bold'>CONTACT </h2>
          <hr />
        </div>
        <h4 className="text-center fw-bold mb-5   ">Get In Touch</h4>
        <div className="container">
          <div className="contact text-left row">
            <div className="col-md-6 ">
              <img src={hero} alt="" className='img-fluid' />
            </div>
            <div className="col-md-6">
              <div className="form">
                <form action="#" className="mb-5">
                  <div className="form-group">
                    <input type="text" className='form-control mt-3 ' id="exampleInputtext" 
                      placeholder="Enter Name" required="" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control mt-3" id="exampleInputEmail1"  
                      aria-describedby="emailHelp" placeholder="Enter email" required="" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control mt-3" id="exampleInputNumber"  
                      aria-describedby="Number" placeholder="Enter Number" required="" />
                  </div>
                  <div className="form-group">
                    <textarea name="contact-message" cols="30" rows="5" className="form-control mt-3"  
                      placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className='my-3 px-4 py-2 rounded border border-2'>Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
