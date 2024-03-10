import { GoBackButton } from '@/Components/blog/Details/GoBackButton/GoBackButton'
import moment from 'moment'
import Image from 'next/image'

import React from 'react'
const page = async ({ params }) => {
    // console.log(params.id)
    const response = await fetch(`http://localhost:3000/api/blog/single?id=${params.id}`, {
        cache: 'no-store'
    })
    const blogData = await response.json()
    // console.log(blogData)
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
                        {/* Blog blogData 1 */}
                        {
                            <div key={blogData?.data?._id} className="blog-blogData padd-15">
                                <div className="blog-blogData-inner shadow-dark">
                                    <div className="blog-img">
                                        <Image height={500} width={1000} src={blogData?.data?.image} alt="Responsive Web Design" />
                                        <div className="blog-date">{moment(blogData?.data?.date).format('LL')}</div>
                                    </div>
                                    <div className="blog-info">
                                        <h4 className="blog-title">
                                            {blogData?.data?.title}
                                        </h4>
                                        <p className="blog-description">
                                            {blogData?.data?.description}
                                        </p>
                                        <p style={{marginTop:'10px'}} className="blog-tags">
                                       <GoBackButton />
                                        </p>

                                    </div>
                                </div>
                            </div>
                        }
                        {/* Blog blogData 1 End */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default page