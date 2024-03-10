'use client'

import { useRouter } from "next/navigation"

export const WonerInfoForm = () => {
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=5201d474546c521dc75dd9c96eea7a84`;
    const router = useRouter()
    const updateWonerInfo = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const about = e.target.about.value
        const email = e.target.email.value
        const img = e.target.image.files[0]
        const phone = e.target.phone.value
        const address = e.target.address.value
        const github = e.target.github.value
        const facebook = e.target.facebook.value
        const insta = e.target.insta.value
        const linkdin = e.target.linkdin.value
        const twiter = e.target.twiter.value
        const formData = new FormData();
        formData.append("image", img);
        const res = await fetch(image_hosting_api, {
            method: "POST",
            body: formData,
        });
        const data = await res.json()
        const profileData = {
            title, about, email, image: data?.data?.display_url, phone, address, github, facebook, insta, linkdin, twiter
        }
        const response = await fetch('https://siyam-portfolio.vercel.app/api/woner', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        })
        const profilepost = await response.json()
       // console.log(profilepost)
        if (profilepost?.success) {
            e.target.reset()
            router.refresh()
        }
    }
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Add new project</h2>
                    </div>
                </div>
                {/* Contact Form */}
                <div className="row">
                    <form onSubmit={updateWonerInfo} className="contact-form padd-15">
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="title*"
                                                name="title"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="test"
                                                className="form-control"
                                                placeholder="twiter link*"
                                                name="twiter"
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
                                                type="email"
                                                className="form-control"
                                                placeholder="email*"
                                                name="email"
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
                                <div className="row">
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder=" phone number*"
                                                name="phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="address*"
                                                name="address"
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
                                                type="test"
                                                className="form-control"
                                                placeholder="github link*"
                                                name="github"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="facefook link*"
                                                name="facebook"
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
                                                type="test"
                                                className="form-control"
                                                placeholder="instagram link*"
                                                name="insta"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-item col-6 padd-15">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="linkdin link*"
                                                name="linkdin"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-item col-12 padd-15">
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        placeholder="about sammary*"
                                        name="about"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 padd-15">
                                <button type="submit" className="btn">
                                    update portfolio
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
