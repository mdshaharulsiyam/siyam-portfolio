'use client'

import { useRouter } from "next/navigation"

const ProjectForm = () => {
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;
    const router = useRouter()
    const addProject = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const live = e.target.live.value
        const github = e.target.github.value
        const img = e.target.image.files[0]
        const description = e.target.description.value
        const technology = e.target.technology.value
        const formData = new FormData();
        formData.append("image", img);
        const res = await fetch(image_hosting_api, {
            method: "POST",
            body: formData,
        });
        const data = await res.json()
        const ProjectData = {
            title, live, github, image: data?.data?.display_url, description, technology,featured:'none'
        }
        const response = await fetch('https://siyam-portfolio.vercel.app/api/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProjectData),
        })
        const projectpost = await response.json()
        // console.log(projectpost)
        if (projectpost?.success) {
            e.target.reset()
            router.refresh()
        }
    }
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>sign in  as admin</h2>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="row">
                    <form onSubmit={addProject} className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="project title*"
                                                name="title"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="project live link*"
                                                name="live"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="project github link*"
                                                name="github"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                placeholder="project image *"
                                                name="image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="technology*"
                                        name="technology"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="project description *"
                                        name="description"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 padd-15">
                                <button type="submit" className="btn">
                                    add project
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* Contact Form Ended */}
            </div>
        </section>
    )
}

export default ProjectForm