import Link from 'next/link'
import React from 'react'

export const Category = async () => {
    const response = await fetch('https://siyam-portfolio.vercel.app/api/projects/category', {
        cache: 'no-store'
    })
    const Data = await response.json()
    // console.log(Data)
    return (
        <div className="portfolio-filter padd-15">
            <Link href={`/portfolio?category=all`}>
                <button type="button" className="active" data-filter="all">
                    All
                </button>
            </Link>
            {
                Data?.success && Data?.data.map(item => <Link key={item?.technology} href={`/portfolio?category=${item?.technology}`}>
                <button type="button" data-filter="graphics-design">
                    {item?.technology}({item?.count})
                </button>
                </Link>)
            }
        </div>
    )
}
