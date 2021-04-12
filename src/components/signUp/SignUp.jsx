// import React, { Component } from 'react'
// import { Redirect } from 'react-router'
// import {auth} from "../../firebase"
import './signUp.css'


import React, { useRef, useState } from "react"
// import { auth } from "../../firebase"
import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function SignUp() {
	const nameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()
	// const { signup, updateProfile, sendEmailVerifaction } = useAuth()
	const { signup } = useAuth()
	const [error, setError] = useState("")			//used for  Password Confirmation input
	const [message, setMessage] = useState("")
	const [loading, setLoading] = useState(false)
	const history = useHistory()
	
	//!below, for sending email verification and the link leads to straight to account/profile
	// React.useEffect(() => {
	// 	// Get the saved email
	// 	const saved_email = window.localStorage.getItem("emailForSignIn");
	
	// 	// Verify the user went through an email link and the saved email is not null
	// 	if (auth.isSignInWithEmailLink(window.location.href) && !!saved_email) {
	// 	  // Sign the user in
	// 	  auth.signInWithEmailLink(saved_email, window.location.href)
	// 	  .then((result) => {
	// 		window.localStorage.removeItem('emailForSignIn');
	// 		// history.push("/login")
	// 	  })
	// 	  .catch((error) => {
	// 	  });;
	// 	}
	//   }, []);

	async function handleSubmit(e) {
		e.preventDefault()
	
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
		  return setError("Passwords do not match")
		}
		
		try {
		  setError("")
		  setMessage("")
		  setLoading(true)		//prevent user from multiple click that creates multiple accounts
		  await signup(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
		  setMessage('You are redirecting to login page')
		  setTimeout(() => {
			history.push("/login")
		  }, 2000);
		  //!below, for sending email verification and the link leads to straight to account/profile
  		//   await sendEmailVerifaction(emailRef.current.value, {
		// 	url: 'http://localhost:3001/login',
		// 	handleCodeInApp: true,
		// 	}) 
		// 	setMessage('Verification email was sent to your mailbox')
		//   setTimeout(() => {
		// 	history.push("/login")
		//   }, 1000);

		}catch {
		  setError("Failed to create an account")
		}
		setLoading(false)
	  }

	return (
		<>
			 <div className="body-login">
			{/* {this.state.allOk&& <Redirect to="/login"/>} */}
              
<div className="container container-login right-panel-active" id="container">
	{/* signup */}
	<div className="form-container sign-up-container">
		<form method="POST" name="signUp" className="form-login" onSubmit={handleSubmit}>
			<h1>Create Account</h1>
			{/* <div className="social-container">
				<a className="a-login social " href="#" ><i className="fab fa-facebook-f"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-github"></i></a>
			</div> */}
			{error && <div className="text-danger">{error}</div>}
			{message && <div className="text-success">{message}</div>}
			<span className="span-login">or use your email for registration</span>
			<input ref={nameRef}  name="name" required className="input-login" type="text" placeholder="Full Name" maxLength="20"
                pattern="[a-z A-Z]{3,}" title="at list 3 characters long : a-z 0-9 and _ are allowed"/>
			<input ref={emailRef} name="email" required className="input-login" type="email" placeholder="Email" 
			pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"/>
			<input ref={passwordRef} name="password" required className="input-login" type="password" placeholder="Password" maxLength="30" 
			pattern="^.{6,30}" title="must have at list 6 characters" />
			<input ref={passwordConfirmRef} name="password" required className="input-login" type="password" placeholder="Password Confirmation" maxLength="30" 
			pattern="^.{6,30}" title="must have at list 6 characters" />
			<button disabled={loading} className="button-login" type="submit">
              Sign Up
            </button>
			{/* <input  type="submit" value="Sign Up" className="button-login"/> */}
		</form>
	</div>
	
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel ">
				<h1>Hello, Friend!</h1>
				<p className="p-login">Enter your personal details and start journey with us</p>
				<div className="w-100 text-center mt-2">
        			Already have an account? <Link to="/login" >Log In</Link>
      			</div>
				{/* <button className="button-login ghost" id="signUp">Sign Up</button> */}
			</div>
		</div>
	</div>
</div>
            </div>
		</>
	)
}

















// export default class SignUp extends Component {

//     constructor(props){
//         super(props)
//         this.state={
//             // allOk: false,	
//         }
//     }

//     signUp(e){
//         e.preventDefault()
//         console.log(e.target);
//         let email=document.signUp.email.value;
//         let password=document.signUp.password.value;
//         auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           this.props.history.push("/login");
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           alert(errorMessage);
//         });
       
// 	}

//     render() {
//         return (
//             <div className="body-login">
// 			{/* {this.state.allOk&& <Redirect to="/login"/>} */}
              
// <div className="container container-login right-panel-active" id="container">
// 	{/* signup */}
// 	<div className="form-container sign-up-container">
// 		<form method="POST" name="signUp" className="form-login" onSubmit={e =>{this.signUp.call(this,e)}}>
// 			<h1>Create Account</h1>
// 			<div className="social-container">
// 				<a className="a-login social " href="#" ><i className="fab fa-facebook-f"></i></a>
// 				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
// 				<a className="a-login social" href="#" ><i className="fab fa-github"></i></a>
// 			</div>
// 			<span className="span-login">or use your email for registration</span>
// 			<input name="name" required className="input-login" type="text" placeholder="Name" maxLength="20"
//                 pattern="^\w{3,20}" title="at list 3 characters long up to 20 characters: a-z 0-9 and _ are allowed"/>
// 			<input name="email" required className="input-login" type="email" placeholder="Email" 
// 			pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"/>
// 			<input name="password" required className="input-login" type="password" placeholder="Password" maxLength="30" 
// 			pattern="^.{6,30}" title="must have at list 6 characters" />
// 			<input type="submit" value="Sign Up" className="button-login"/>
// 		</form>
// 	</div>
// 	{/* signin */}
// 	{/* <div className="form-container sign-in-container">
// 		<form className="form-login" action="#">
// 			<h1 className="font-weight-bold m-0">Sign in</h1>
// 			<div className="social-container">
// 				<a className="a-login social" href="#" ><i className="fab fa-facebook-f"></i></a>
// 				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
// 				<a className="a-login social" href="#" ><i className="fab fa-github"></i></a>
// 			</div>
// 			<span className="span-login">or use your account</span>
// 			<input required className="input-login" type="email" placeholder="Email" />
// 			<input required className="input-login" type="password" placeholder="Password" />
// 			<a className="a-login" href="#">Forgot your password?</a>
// 			<input type="submit" value="Sign In" className="button-login"/>
// 		</form>
// 	</div> */}
// 	<div className="overlay-container">
// 		<div className="overlay">
// 			{/* <div className="overlay-panel overlay-left">
// 				<h1>Welcome Back!</h1>
// 				<p className="p-login">To keep connected with us please login with your personal info</p>
// 				<button className="button-login ghost" id="signIn">Sign In</button>
// 			</div> */}
// 			<div className="overlay-panel ">
// 				<h1>Hello, Friend!</h1>
// 				<p className="p-login">Enter your personal details and start journey with us</p>
// 				{/* <button className="button-login ghost" id="signUp">Sign Up</button> */}
// 			</div>
// 		</div>
// 	</div>
// </div>

//             </div>
//         )
//     }
// }
