import { BlogDelete } from '@/Components/blog/BlogDelete/BlogDelete'
import { auth } from '@/auth/auth'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const page = async () => {
  const sesion = await auth()
  const response = await fetch(`https://siyam-portfolio.vercel.app/api/blog`, {
    cache: 'no-store'
  })
  const blogData = await response.json()
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {/* Blog Item 1 */}
            {
              blogData?.success && blogData?.data.map(item => <div key={item?._id} className="blog-item padd-15">
                <div className="blog-item-inner shadow-dark">
                  <div className="blog-img">
                    <Image height={250} width={400} src={item?.image} alt="Responsive Web Design" />
                    <div className="blog-date">{moment(item?.date).format('LL')}</div>
                  </div>
                  <div className="blog-info">
                    <h4 className="blog-title">
                      {item?.title}
                    </h4>
                    <p className="blog-description">
                      {item?.description.slice(0, 150)}...
                    </p>
                    <p className="blog-tags">
                      <Link href={`/blog/${item?._id}`}>more</Link>
                    </p>
                    {
                      sesion?.user && <BlogDelete id={item?._id} />
                    }
                  </div>
                </div>
              </div>)
            }
            {/* Blog Item 1 End */}
          </div>
        </div>
      </section>
    </>
  )
}

export default page