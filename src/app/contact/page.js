import { ContactForm } from '@/Components/Contact/ContactForm/ContactForm'
import React from 'react'

const page = async() => {
  const response = await fetch('http://localhost:3000/api/woner', {
    cache: 'no-store'
  })
  const userData = await response.json()
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
              <p>{userData?.data[0].address}</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p><a href={`tel:${userData?.data[0].phone}`}>{userData?.data[0].phone}</a></p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p><a href={`mailto:${userData?.data.email}`}>{userData?.data.email}</a></p>
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