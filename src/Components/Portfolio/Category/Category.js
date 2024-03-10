import Link from 'next/link'
import React from 'react'

export const Category = async ({searchParams}) => {
    if (!searchParams?.category) {
        searchParams.category ='all'
      }
    const response = await fetch('https://siyam-portfolio.vercel.app/api/projects/category', {
        cache: 'no-store'
    })
    const Data = await response.json()
    // console.log(Data)
    return (
        <div className="portfolio-filter padd-15">
            <Link href={`/portfolio?category=all`}>
                <button type="button" className={`${searchParams.category==='all'?'active':''}`} data-filter="all">
                    All
                </button>
            </Link>
            {
                Data?.success && Data?.data.map(item => <Link key={item?.technology} href={`/portfolio?category=${item?.technology}`}>
                <button type="button" className={`${searchParams.category===item?.technology?'active':''}`} data-filter="graphics-design">
                    {item?.technology}({item?.count})
                </button>
                </Link>)
            }
        </div>
    )
}
