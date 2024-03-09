import React from 'react'

export const Category = async () => {
    const response = await fetch('https://siyam-portfolio.vercel.app/api/projects/category', {
        cache: 'no-store'
    })
    const Data = await response.json()
    // console.log(Data)
    return (
                <div className="portfolio-filter padd-15">
                    <button type="button" className="active" data-filter="all">
                        All
                    </button>
                    {
                        Data?.data.map(item => <button key={item?.technology} type="button" data-filter="graphics-design">
                            {item?.technology}({item?.count})
                        </button>)
                    }
                </div>
    )
}
