
const services = [
  {
    icon: 'fa fa-code',
    title: 'Web Development',
    description: `Turn your digital ideas into reality with our web development solutions. We specialize in crafting robust and dynamic websites that are tailored to meet your specific business needs and objectives.`
  },
  {
    icon: 'fa fa-paint-brush',
    title: 'Responsive Design',
    description: `Offer custom responsive website development services to ensure optimal user experience across various devices, including desktops, tablets, and mobile phones.`
  },
  {
    icon: 'fa fa-laptop',
    title: 'Custom Web Design',
    description: `Create a stunning online presence with our custom web design services. We'll tailor a website that not only looks impressive but also delivers a seamless user experience, helping you achieve your online goals.`
  },
  {
    icon: 'fa fa-wordpress',
    title: 'WordPress Website',
    description: `Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable website that empowers you to manage content effortlessly and stay ahead in the digital landscape.`
  },
  {
    icon: 'fa fa-server',
    title: 'Backend with Node.js',
    description: `Build robust and scalable server-side solutions using Node.js to power your web and mobile apps. We’ll help you design, optimize, and deploy your backend for efficiency and speed.`
  },
  {
    icon: 'fa fa-cloud',
    title: 'Deployment to AWS or DigitalOcean',
    description: `Seamlessly deploy your apps and websites to AWS or DigitalOcean for maximum reliability and scalability. We'll handle setup, deployment, and ongoing optimization for you.`
  },
  {
    icon: 'fa-brands fa-react',
    title: 'Single Page Application with React.js',
    description: `Create dynamic single-page applications (SPAs) with React.js to give your users a smooth, app-like experience that’s fast, engaging, and highly interactive.`
  },
  {
    icon: 'fa-brands fa-nextjs',
    title: 'SEO-Friendly Website using Next.js',
    description: `Develop SEO-optimized websites with Next.js to boost search engine visibility, improve performance, and enhance the user experience across all devices.`
  },
  {
    icon: 'fa fa-mobile',
    title: 'Mobile Application with React Native',
    description: `Reach your customers on their phones with a powerful React Native app. We'll craft a high-performance mobile application that looks and feels native on both iOS and Android.`
  }
]

const Page = () => {
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>My Services</h2>
          </div>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="service-item padd-15" key={index}>
              <div className="service-item-inner">
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Page

// const services = [
//   {
//     icon: 'fa fa-code',
//     title: 'Web Development',
//     description: `Turn your digital ideas into reality with our web development solutions. We specialize in crafting robust and dynamic websites that are tailored to meet your specific business needs and objectives.`
//   },
//   {
//     icon: 'fa fa-paint-brush',
//     title: 'Responsive Design',
//     description: `Offer custom responsive website development services to ensure optimal user experience across various devices, including desktops, tablets, and mobile phones.`
//   },
//   {
//     icon: 'fa fa-laptop',
//     title: 'Custom Web Design',
//     description: `Create a stunning online presence with our custom web design services. We'll tailor a website that not only looks impressive but also delivers a seamless user experience, helping you achieve your online goals.`
//   },
//   {
//     icon: 'fa fa-wordpress',
//     title: 'WordPress Website',
//     description: `Harness the power of WordPress for your website. Our experts will build a feature-rich and scalable website that empowers you to manage content effortlessly and stay ahead in the digital landscape.`
//   }
// ]