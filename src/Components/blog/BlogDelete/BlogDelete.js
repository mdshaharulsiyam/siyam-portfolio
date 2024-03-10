'use client'

import { useRouter } from "next/navigation"
export const BlogDelete = ({id}) => {
    const router = useRouter()
    const DeleteProject = async (id) => {
        const response = await fetch(`https://siyam-portfolio.vercel.app/api/blog?id=${id}`, {
           method:'DELETE',
        })
        const data =await response.json()
        if (data?.success) {
            router.refresh()
        }
        console.log(data)
    }
    return <div onClick={() => DeleteProject(id)} className="icon">
        <i className="fa fa-trash"></i>
    </div>
}
