import { Category } from '@/Components/Portfolio/Category/Category'
import { Featured } from '@/Components/Portfolio/Featured/Featured'
import { Projects } from '@/Components/Portfolio/Projects/Projects'
import React, { Suspense } from 'react'

const page = async ({searchParams}) => {
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
            <div className="section-title padd-15">
              <h3 id='featured'>Featured</h3>
            </div>
          </div>
          <div className="row">
            <Suspense fallback={'loading...'}>
            <Featured/>
            </Suspense>
          </div>
          <div className="row">
            <Suspense fallback={'loading...'}>
              <Category searchParams={searchParams}/>
            </Suspense>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <Suspense fallback={'loading...'}>
            <Projects searchParams={searchParams}/>
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page