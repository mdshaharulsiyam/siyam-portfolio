import { Category } from '@/Components/Portfolio/Category/Category'
import { auth } from '@/auth/auth'
import Image from 'next/image'
import React, { Suspense } from 'react'

const page = async () => {
  const sesion = await auth()
  const response = await fetch('https://siyam-portfolio.vercel.app/api/projects', {
    cache: 'no-store'
  })
  const Data = await response.json()
  // console.log(Data)
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <Suspense fallback={'loading...'}>
              <Category />
            </Suspense>

          </div>
          <div className="row">
            {/* Portfolio Item */}
            {
              Data?.data.map(item => <div key={item?._id} className="portfolio-item padd-15" data-category="web-design">
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <Image height={400} width={400} src={item?.image} alt="portfolio" />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item?.title}</h4>
                    <p>{item?.description}</p>
                    <div className='icon_parent'>
                      {
                        sesion?.user && <div className="icon">
                          <i class="fa fa-trash"></i>
                        </div>  
                      }

                      <div className="icon">
                        <i class="fa fa-globe"></i>
                      </div>
                      <div className="icon">
                        <i class="fa fa-github"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default page