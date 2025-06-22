import { auth } from '@/auth/auth'
import ProjectCard from '@/Components/Shered/ProjectCard'

export const Projects = async ({ searchParams }) => {
  if (!searchParams?.category) {
    searchParams.category = 'all'
  }
  const sesion = await auth()
  const response = await fetch(`https://siyam-portfolio.vercel.app/api/projects?category=${searchParams?.category}`, {
    cache: 'no-store'
  })
  const Data = await response.json()
  return (
    <>
      {
        Data?.success && Data?.data.map(item => <ProjectCard item={item} sesion={sesion} key={item?._id} />)
      }
    </>
  )
}
