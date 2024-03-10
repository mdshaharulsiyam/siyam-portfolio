import { auth } from '@/auth/auth'
import Image from 'next/image'
import React from 'react'
import { ProjectDeleteButton } from '../ProjectDeleteButton/ProjectDeleteButton'

export const Featured = async() => {
      const sesion = await auth()
      const response = await fetch(`https://siyam-portfolio.vercel.app/api/projects/featured`, {
        cache: 'no-store'
      })
      const Data = await response.json()
      // console.log(Data)
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
                  <p>{item?.description.slice(0,150)}</p>
                  <div className='icon_parent'>
                    {
                      sesion?.user && <ProjectDeleteButton id={item?._id}/>
                    }
    
                    <a target='_blank' href={item?.live}>
                      <div className="icon">
                        <i class="fa fa-globe"></i>
                      </div>
                    </a>
                    <a target='_blank' href={item?.github}>
                      <div className="icon">
                        <i class="fa fa-github"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            )
          }
        </>
      )
    }
