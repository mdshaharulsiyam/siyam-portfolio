import { auth } from '@/auth/auth'
import ProjectCard from '@/Components/Shered/ProjectCard'

export const Featured = async () => {
  const sesion = await auth()
  const response = await fetch(`https://siyam-portfolio.vercel.app/api/featured`, {
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
