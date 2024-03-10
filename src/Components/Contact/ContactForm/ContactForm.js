'use client'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast.success('your message has been sent');
export const ContactForm = () => {
    const [loading,setloading]=useState(false)
    const ContactMsg = async (e) => {
        e.preventDefault()
        setloading(true)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const msg = e.target.msg.value;
        const data = {
            name ,email,subject,msg
        }
        //// console.log(data)
        const response = await fetch('https://siyam-portfolio.vercel.app/api/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        setloading(false)
        const projectpost = await response.json()
       // console.log(projectpost)
        if (projectpost?.success) {
            notify()
            e.target.reset()
        }
    }
    return <>
     <Toaster />
     <form onSubmit={ContactMsg} className="contact-form padd-15">
        <div className="row">
            <div className="form-item col-6 padd-15">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name*"
                        name="name"
                    />
                </div>
            </div>
            <div className="form-item col-6 padd-15">
                <div className="form-group">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email*"
                        name="email"
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="form-item col-12 padd-15">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Subject*"
                        name="subject"
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="form-item col-12 padd-15">
                <div className="form-group">
                    <textarea
                        className="form-control"
                        placeholder="Your Message*"
                        defaultValue={""}
                        name="msg"
                    />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 padd-15">
                <button type="submit" className="btn">
                    {loading ? 'please wait...':'Send Message'}
                </button>
            </div>
        </div>
    </form>
    </>
}
