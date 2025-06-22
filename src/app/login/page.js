'use client'
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
export default function LoginPage() {
  const router = useRouter()
  const loginAdmin = async (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const response = await signIn('credentials', {
      email: email,
      password: password,
      redirect: false,
      callbackUrl: '/admin/projects'
    })
    //console.log(response)
    if (response?.ok) {
      // router.push(response?.url)
      router.push("admin/projects")
    }
  }
  return (<>
    <section className="contact section" id="contact">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>sign in  as admin</h2>
          </div>
        </div>
        {/* Contact Form */}
        <div className="row">
          <form onSubmit={loginAdmin} className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email*"
                    name="email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password*"
                    name="password"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 padd-15">
                <button type="submit" className="btn">
                  sign in
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Contact Form Ended */}
      </div>
    </section>
  </>)
}
