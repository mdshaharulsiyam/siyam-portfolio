import { auth } from '@/auth/auth'
import Image from 'next/image'
import React from 'react'

export const Projects = async({searchParams}) => {
  if (!searchParams?.category) {
    searchParams.category ='all'
  }
  const sesion = await auth()
  const response = await fetch(`http://localhost:3000/api/projects?category=${searchParams?.category}`, {
    cache: 'no-store'
  })
  const Data = await response.json()
  return (
    <>
      {
              Data?.success && Data?.data.map(item => <div key={item?._id} className="portfolio-item padd-15" data-category="web-design">
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
    </>
  )
}
