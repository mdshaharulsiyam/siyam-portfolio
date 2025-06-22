import { GoBackButton } from '@/Components/blog/Details/GoBackButton/GoBackButton'
import moment from 'moment'
import Image from 'next/image'

const page = async ({ params }) => {
  // console.log(params.id)
  const response = await fetch(`https://siyam-portfolio.vercel.app/api/projects/${params?.id}`, {
    cache: 'no-store'
  })
  const projectData = await response.json()
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Project</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog projectData 1 */}
            {
              <div className="blog-projectData padd-15">
                <div className="blog-projectData-inner shadow-dark">
                  <div className="blog-img">
                    <Image height={500} width={1000} src={projectData?.data?.image} alt="Responsive Web Design" />
                    <div className="blog-date">{moment(projectData?.data?.date).format('LL')}</div>
                  </div>
                  <div className="blog-info">
                    <h4 className="blog-title">
                      {projectData?.data?.title}
                    </h4>
                    <p className="blog-description">
                      {projectData?.data?.description}
                    </p>
                    <p style={{ marginTop: '10px' }} className="blog-tags">
                      <GoBackButton />
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