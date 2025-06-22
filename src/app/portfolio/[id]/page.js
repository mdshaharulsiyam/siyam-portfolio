import moment from 'moment'
import Image from 'next/image'

const page = async ({ params }) => {
  // console.log(params.id)
  const response = await fetch(`https://siyam-portfolio.vercel.app/api/projects/${params?.id}`, {
    cache: 'no-store'
  })
  const projectData = await response.json()
  console.log(projectData)
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>{projectData?.data?.title}</h2>
            </div>
          </div>

          <div className="row">
            {/* Blog projectData 1 */}
            {
              <div className="blog-projectData padd-15">
                <div className="blog-projectData-inner shadow-dark">
                  <div className="blog-img" style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '10px' }}>
                    {
                      projectData?.data?.otherImage?.length > 0 ? projectData?.data?.otherImage?.map((item, index) => (
                        <Image key={index} height={500} width={1000} src={item} alt="Responsive Web Design" />
                      )) : <Image height={500} width={1000} src={projectData?.data?.image} alt="Responsive Web Design" />
                    }
                    <p style={{
                      marginTop: 10,
                    }} className="blog-date">{moment(projectData?.data?.date).format('LL')}</p>
                    <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '10px' }}>
                      {/* <p style={{}} className="blog-tags">
                        <GoBackButton />
                      </p> */}

                      <a target='_blank' href={projectData?.data?.live}>
                        <div className="icon">
                          <i class="fa fa-globe"></i>
                        </div>
                      </a>
                      <a target='_blank' href={projectData?.data?.github}>
                        <div className="icon">
                          <i class="fa fa-github"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="portfolio-info">
                    <h4 className="blog-title" style={{
                      marginBottom: '10px'
                    }}>
                      <strong style={{ textTransform: "uppercase" }}>technology : </strong> {projectData?.data?.technology}
                    </h4>

                    <p className="blog-description">
                      {projectData?.data?.description}
                    </p>

                  </div>
                </div>
              </div>
            }
            {/* Blog projectData 1 End */}
          </div>
        </div>
      </section>
    </>
  )
}

export default page