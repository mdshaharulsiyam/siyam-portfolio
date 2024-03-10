'use client'

import { useRouter } from "next/navigation"

export const ProjectDeleteButton = ({ id }) => {
    const router = useRouter()
    const DeleteProject = async (id) => {
        const response = await fetch(`https://siyam-portfolio.vercel.app/api/projects?id=${id}`, {
           method:'DELETE',
        })
        const data =await response.json()
        if (data?.success) {
            router.refresh()
        }
        console.log(data)
    }
    return <div onClick={() => DeleteProject(id)} className="icon">
        <i class="fa fa-trash"></i>
    </div>
}
