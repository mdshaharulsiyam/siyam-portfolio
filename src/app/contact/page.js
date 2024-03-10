import { ContactForm } from '@/Components/Contact/ContactForm/ContactForm'
import React from 'react'

const page = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>thonthonia, Bogra, Bangladesh</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p><a href='tel:+8801566026301'>+8801566026301</a></p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p><a href='mailto:shaharulsiyam56@gmail.com'>shaharulsiyam56@gmail.com</a></p>
            </div>
            {/* contact-info-item Ended */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <ContactForm />
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  )
}
export default page