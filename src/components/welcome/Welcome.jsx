// import React, { Component } from 'react'
// import {auth} from "../../firebase"


import React, { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import './welcome.css'

export default function Dashboard() {

  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const { updateProfile, currentUser, logout ,updatePassword,updateEmail} = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  async function handleSubmit(e){
    e.preventDefault()
    const name = document.profile.fname.value +' '+document.profile.lname.value
    const email = document.profile.email.value
    const password = document.profile.password.value
    // const phone = document.profile.phone.value
    const photoURL = document.profile.photoURL.value

    if (document.profile.password.value !== document.profile.passwordConfirmation.value) {
      return setError("Passwords do not match")
    }

    if(document.profile.password.value === document.profile.passwordConfirmation.value){
      try {
        setError("")
        setLoading(true)		//prevent user from multiple click that creates multiple accounts
        await updatePassword(password)
        setMessage("Password updated")
      } catch (err) {
        setError("Failed to update password")
        console.log(err);
      }
    }
    if(email){
      try {
        setError("")
        setLoading(true)		//prevent user from multiple click that creates multiple accounts
        await updateEmail(email)
        setMessage("Email updated")
      } catch (err) {
        setError("Failed to update password")
        console.log(err);
      }
    }

    if(photoURL || name){
        try {
        setError("")
        setLoading(true)		//prevent user from multiple click that creates multiple accounts
        await updateProfile(name, photoURL)
        setMessage("Profile updated")
      } catch (err) {
        setError("Failed to update the account")
        console.log(err);
      }
    }
    
    
  }


  console.log(currentUser)
  return (
    <>
       <div>
          <h2 className="text-center mb-4">Profile</h2>
          {/* <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link> */}
        </div>
        <div className="container rounded bg-white ">
    <div className="row">
        <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img className="rounded-circle mt-5" src={currentUser.photoURL} width="90" alt="profilePic" />
              <span className="font-weight-bold">{currentUser.displayName}</span>
              <span className="text-black-50">{currentUser.email}</span>
              {/* <span>United States</span> */}
              
              <div className="w-100 text-center mt-2">
                <button variant="link" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </div>
        </div>
        <div className="col-md-8">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex flex-row align-items-center back">
                    <Link to="/">
                    <span className="a" >&larr;</span><span className="text-muted">Back to shop</span>
                    </Link>
                    </div>
                    <h6 className="text-right">Edit Profile</h6>
                </div>
                <form name="profile" onSubmit={handleSubmit}>
                  <div className="row mt-2">
                      <div className="col-md-6">
                        <input id="fname" name="fname"   type="text" className="form-control" placeholder="first name"/>
                      </div>
                      <div className="col-md-6">
                        <input id="lname" name="lname"  type="text" className="form-control" placeholder="last name"/>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-md-6">
                        <input id="email" name="email"  type="text" className="form-control" placeholder={currentUser.email} />
                      </div>
                      <div className="col-md-6">
                        <input id="phone" name="phone"  type="text" className="form-control" placeholder="Phone number"/>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-md-6">
                        <input id="address" name="address"  type="text" className="form-control" placeholder="address" />
                      </div>
                      <div className="col-md-6">
                        <input id="city" name="city"  type="text" className="form-control"  placeholder="city"/>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-md-6">
                        <input id="password" name="password"  type="text" className="form-control" placeholder="password"/>
                      </div>
                      <div className="col-md-6">
                        <input id="passwordConfirmation" name="passwordConfirmation"  type="text" className="form-control"  placeholder="password-confirm"/>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="col-md-6">
                        <input id="photoURL" name="photoURL"  type="text" className="form-control" placeholder="photo url"/>
                      </div>

                  </div>
                  <div className="mt-5 text-right">
                  {error && <div className="text-danger">{error}</div>}
                  {message && <div className="text-success">{message}</div>}
                    <button disabled={loading} className="btn btn-primary profile-button" type="submit">
                      Save Profile
                    </button>
                  </div>
                </form>
            </div>
        </div>
    </div>
</div>
    </>
  )
}




// export default class Welcome extends Component {

//     // constructor(props){
//     //     super(props)
//     //     this.state={
//     //         name: '',
			
//     //     }
//     // }

//     // static getDerivedStateFromProps(props, state) {
//     //     let {name} =  JSON.parse(localStorage.getItem("user"));		
// 	// 	return {name: name };
// 	// }

//     render() {
// // console.log('welcome');
//         return (
//             <div>
//                 <h1>welcome</h1>
//                 <button
//                     onClick={() => {
//                     auth.signOut().then(() => {
//                         this.props.history.push("/");
//                     }).catch(error=>{
//                         var errorCode = error.code;
//                         var errorMessage = error.message;
//                         alert(errorMessage);
//                     })
//                     }}>
//                     Logout
//                 </button>
//             </div>
//         )
//     }
// }
