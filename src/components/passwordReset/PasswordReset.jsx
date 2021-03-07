import React, { useRef, useState } from "react"

import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

import './passwordReset.css'
export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
        <div class="row py-2">
    <div class="col-md-6 mx-auto p-0">
        <div class="card card-reset">
            <div class="login-box">
                <div class="login-snip"> 
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <div className="text-danger">{error}</div>}
                {message && <div className="text-success">{message}</div>}
                    <div class="login-space">
                            <div class="group"> 
                            <form onSubmit={handleSubmit}>
                                <label for="pass" class="label">Email Address</label> 
                                <input 
                                  id="pass" 
                                  className="input" 
                                  type="email" 
                                  ref={emailRef} required 
                                  placeholder="Enter your email address"
                                  pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"
                                /> 
                                <button disabled={loading} className="mt-4 button-reset" type="submit">
                                  Reset Password
                                </button>
                            </form>
                           </div>
                            <div class="hr-reset"></div>
                            <div class="foot-reset"> 
                              <div className="w-100 text-center mt-3">
                                <Link to="/login">Already Member?</Link>
                              </div>
                              <div className="w-100 text-center mt-2">
                                Need an account? <Link to="/signup">Sign Up</Link>
                              </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
