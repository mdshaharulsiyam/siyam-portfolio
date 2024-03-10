import Link from 'next/link'
import React from 'react'

const page = async() => {
  const response = await fetch('https://siyam-portfolio.vercel.app/api/woner', {
    cache: 'no-store'
  })
  const userData = await response.json()
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am shaharul siyam a <span>{userData?.data[0].title}</span>
                  </h2>
                  <p>
                    {userData?.data[0].about}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>https://siyam-portfolio.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>{userData?.data[0].email}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>diploma in computer engineering</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>{userData?.data[0].phone}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>{userData?.data[0].address}</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="shaharul_siyam_resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <Link
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Front end</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>backend with node js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>backend with php</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "55%" }} />
                        <div className="skill-percent">55%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5> wordpress website</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="skils_set padd-15">
                  <h3 className='title'>Skils</h3>
                  <button>React js</button>
                  <button>Node js</button>
                  <button>Express js</button>
                  <button>Next js</button>
                  <button>MongoDB</button>
                  <button>Mongooes</button>
                  <button>Javascript</button>
                  <button>PHP</button>
                  <button>MYSQL</button>
                  <button>HTML</button>
                  <button>CSS</button>
                  <button>Tailwind CSS</button>
                  <button>GitHub</button>

                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 to Present
                          </h6>
                          <h4 className="timeline-title">
                            Self Taught (Programming)
                          </h4>
                          <p className="timeline-text">
                            Since 2022, I embarked on my programming journey, mastering HTML, CSS,JavaScript, and delving into the world of web design. I expanded my skills further by learning web design and development with WordPress and basic PHP CRUD operations, as well as gaining a solid understanding of MySQL basics through European IT. Additionally, I enriched my expertise in MERN stack web development through the comprehensive courses offered by Programming Hero. Today, I proudly identify as a Professional Web Designer, equipped with a diverse skill set to create dynamic and engaging web experiences.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2018 to 2022
                          </h6>
                          <h4 className="timeline-title">
                            Diploma in Computer Engineering
                          </h4>
                          <p className="timeline-text">
                            In 2022 I completed  Diploma in Computer Engineering from pabna Polytechnic Institute  with GPA- 3.59 out of 4.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2013 to 2018
                          </h6>
                          <h4 className="timeline-title">
                            Secondary School Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2018 I passed SSC Exam from Science Group with
                            GPA- 4.17. My school name was pirgachha High School.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">completed Course</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2022 <span style={{
                              fontWeight: 'bold'
                            }}>(European It)</span>
                          </h6>
                          <h4 className="timeline-title">web design and development with wordpress</h4>
                          <p className="timeline-text">
                            in 2022 I completed web design and development with wordpress course from european it, i learn custom website development with elementor ,infold and flatsome theme , and woocommerce plagin also i learn PHP curd oparetions , basics MYSQL,HTML,CSS,jquey plagins etc.
                          </p>
                          <p style={{
                            marginTop: '5px'
                          }} className="timeline-text">
                            <a target='_blank' style={{
                              fontWeight: 'bold',
                              color: 'blue',
                              textDecoration: 'underline',
                              textTransform: 'uppercase'
                            }} href='/certificate_wordpress.pdf'>certificate</a>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 <span style={{
                              fontWeight: 'bold'
                            }}>(Programming Hero)</span>
                          </h6>
                          <h4 className="timeline-title">complete web development </h4>
                          <p className="timeline-text">
                            in 2023 I completed web complete development course from programming hero, i React js , Next js , Node js , MongoDB , Mongooes , Express js , JavaScript es6 , GitHub , payment methode, HTML CSS,
                          </p>
                          <p style={{
                            marginTop: '5px'
                          }} className="timeline-text">
                            <a target='_blank' style={{
                              fontWeight: 'bold',
                              color: 'blue',
                              textDecoration: 'underline',
                              textTransform: 'uppercase'
                            }} href='/certificate_mern.pdf'>certificate</a>
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2023 to Present
                          </h6>
                          <h4 className="timeline-title">web development</h4>
                          <p className="timeline-text">
                            Since 2023 I started to learn Coding. I have learn
                            Html, Css, Sass, JavaScript, Bootstrap. Now I am a
                            Professional Web Designer..
                          </p>
                        </div> */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page