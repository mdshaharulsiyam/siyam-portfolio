import Link from 'next/link'

const skills = [
  'React js',
  'Node js',
  'Express js',
  'Next js',
  'MongoDB',
  'Mongoose',
  'Javascript',
  'Type Script',
  'React Native',
  'Prisma',
  'Redux',
  'Socket io',
  'PHP',
  'POSTGRESQL',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Antd',
  'GitHub',
]

const experience = [
  {
    date: 'May 2024 to Present',
    title: 'MERN Stack Developer',
    company: 'SparkTech Agency',
    description: `From May 2024, I have been serving as a MERN Stack Developer at SparkTech Agency.`,
  },
]

const completedCourses = [
  {
    year: 2022,
    provider: 'European IT',
    title: 'Web design and development with WordPress',
    description:
      'In 2022 I completed web design and development with WordPress course from European IT. Learned custom websites using Elementor, Flatsome themes, WooCommerce, PHP CRUD, basic MySQL, HTML, CSS, jQuery, etc.',
    certificate: '/certificate_wordpress.pdf',
  },
  {
    year: 2023,
    provider: 'Programming Hero',
    title: 'Complete Web Development',
    description:
      'In 2023 I completed the complete web development course from Programming Hero, working with React.js, Next.js, Node.js, MongoDB, Express.js, JavaScript ES6, GitHub, payment methods, HTML, CSS.',
    certificate: '/certificate_mern.pdf',
  },
]

const education = [
  {
    period: '2022 to Present',
    title: 'Self-Taught (Programming)',
    description:
      'Since 2022, I embarked on my programming journey, mastering HTML, CSS,JavaScript, and delving into the world of web design. I expanded my skills further by learning web design and development with WordPress and basic PHP CRUD operations, as well as gaining a solid understanding of MySQL basics through European IT. Additionally, I enriched my expertise in MERN stack web development through the comprehensive courses offered by Programming Hero. Today, I proudly identify as a Professional Web Designer, equipped with a diverse skill set to create dynamic and engaging web experiences.',
  },
  {
    period: '2025 to Present',
    title: 'B.Sc. in Computer Science & Engineering (CSE)',
    description:
      'Since 2025, I have been studying B.Sc. in CSE at Uttara University.',
  },
  {
    period: '2018 to 2022',
    title: 'Diploma in Computer Engineering',
    description:
      'In 2022, I completed my Diploma in Computer Engineering at Pabna Polytechnic Institute with GPA 3.59. out of 4',
  },
  {
    period: '2013 to 2018',
    title: 'Secondary School Certificate',
    description:
      'In 2018, I passed SSC from Pirgachha High School with GPA 4.17.',
  },
]

const Page = async () => {
  const response = await fetch('https://siyam-portfolio.vercel.app/api/woner', {
    cache: 'no-store',
  })
  const userData = await response.json()

  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          {/* Title */}
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="row">
            <div className="about-content padd-15">
              {/* Bio */}
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Shaharul Siyam, a <span>{userData?.data[0].title}</span>
                  </h2>
                  <p>{userData?.data[0].about}</p>
                </div>
              </div>

              {/* Personal Info */}
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {[
                      { label: 'Website', value: 'https://siyam-portfolio.vercel.app' },
                      { label: 'Email', value: userData?.data[0].email },
                      { label: 'Degree', value: 'Diploma in Computer Engineering' },
                      { label: 'Phone', value: userData?.data[0].phone },
                      { label: 'City', value: userData?.data[0].address },
                      { label: 'Freelance', value: 'Available' },
                    ].map((info, i) => (
                      <div className="info-item padd-15" key={i}>
                        <p>
                          {info.label} : <span>{info.value}</span>
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="https://drive.google.com/file/d/1ANOGrlCnBMx_aD_swltnuK29d7W3r1aq/view?usp=sharing"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <Link href="/contact" data-section-index={0} className="btn hire-me">
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="skills padd-15">
                  {[
                    { skill: 'Mobile app', percent: 70 },
                    { skill: 'Front end', percent: 90 },
                    { skill: 'Backend with Node.js', percent: 85 },
                    { skill: 'Backend with PHP', percent: 55 },
                    { skill: 'WordPress Website', percent: 60 },
                  ].map((s, i) => (
                    <div className="skill-item padd-15" key={i}>
                      <h5>{s.skill}</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: `${s.percent}%` }} />
                        <div className="skill-percent">{s.percent}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="row">
                <div className="skils_set padd-15">
                  <h3 className="title">Skills</h3>
                  {skills.map((skill, i) => (
                    <button key={i}>{skill}</button>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="row">
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {experience.map((exp, i) => (
                          <div className="timeline-item" key={i}>
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {exp.date}
                            </h6>
                            <h4 className="timeline-title">{exp.title}</h4>
                            <p className="timeline-text">
                              {exp.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Completed Courses */}
                  <h3 className="title">Completed Courses</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {completedCourses.map((course, i) => (
                          <div className="timeline-item" key={i}>
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {course.year}{' '}
                              <span style={{ fontWeight: 'bold' }}>({course.provider})</span>
                            </h6>
                            <h4 className="timeline-title">{course.title}</h4>
                            <p className="timeline-text">{course.description}</p>
                            <p className="timeline-text" style={{ marginTop: '5px' }}>
                              <a
                                target="_blank"
                                href={course.certificate}
                                style={{ fontWeight: 'bold', color: 'blue', textDecoration: 'underline' }}
                              >
                                certificate
                              </a>
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {education.map((edu, i) => (
                          <div className="timeline-item" key={i}>
                            <div className="circle-dot" />
                            <h6 className="timeline-date">
                              <i className="fa fa-calendar" /> {edu.period}
                            </h6>
                            <h4 className="timeline-title">{edu.title}</h4>
                            <p className="timeline-text">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
