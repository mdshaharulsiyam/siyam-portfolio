import Image from "next/image";

export default async function Home() {
  const response = await fetch('https://siyam-portfolio.vercel.app/api/woner', {
    cache: 'no-store'
  })
  const userData = await response.json()
  return (<>
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image height={300} width={300}
              src={userData?.data[0].image}
              alt="shaharul siyam"
              className="shadow-dark"
            />
            <h1>shaharul siyam</h1>
            <p>{userData?.data[0].title}</p>
            <div className="social-links">
              <a href={userData?.data[0].twiter} target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href={userData?.data[0].facebook} target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href={userData?.data[0].github} target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href={userData?.data[0].insta} target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href={userData?.data[0].linkdin} target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>)
}
