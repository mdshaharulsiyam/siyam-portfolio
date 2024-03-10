import React from 'react'

const page = () => {
    return (
        <>
            <section className="service section" id="services">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Our Services</h2>
                        </div>
                    </div>
                    <div className="row">
                         {/* Service Item 4: Web Development */}
                         <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-code" /></div>
                                <h4>Web Development</h4>
                                <p>Turn your digital ideas into reality with our web development solutions. We specialize in crafting
                                    robust
                                    and dynamic websites that are tailored to meet your specific business needs and objectives.</p>
                            </div>
                        </div>
                        {/* Service Item 4 End */}
                        {/* Service Item 1: Logo Design */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-paint-brush" /></div>
                                <h4>Responsive Design</h4>
                                <p>Offer custom responsive website development services to ensure optimal user experience across various devices, including desktops, tablets, and mobile phones.</p>
                            </div>
                        </div>
                        {/* Service Item 1 End */}
                        {/* Service Item 2: Web Design */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-laptop" /></div>
                                <h4>Custom Web Design</h4>
                                <p>Create a stunning online presence with our custom web design services. Wel will tailor a website that
                                    not only
                                    looks impressive but also delivers a seamless user experience, helping you achieve your online goals.
                                </p>
                            </div>
                        </div>
                        {/* Service Item 2 End */}
                        {/* Service Item 3: WordPress */}
                        <div className="service-item padd-15">
                            <div className="service-item-inner">
                                <div className="icon"><i className="fa fa-wordpress" /></div>
                                <h4>WordPress Development</h4>
                                <p>Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable
                                    WordPress site that empowers you to manage content effortlessly and stay ahead in the digital
                                    landscape.</p>
                            </div>
                        </div>
                        {/* Service Item 3 End */}
                       
                    </div>
                </div>
            </section>


        </>
    )
}

export default page