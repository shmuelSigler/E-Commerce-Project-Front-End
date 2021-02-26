import React, { Component } from 'react'
// import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';
import {auth} from "../../firebase"

import './login.css'

export default class Login extends Component {

	constructor(props){
        super(props)
        this.state={
            allOk: false,
			// cameFromCart:false,
        }
    }

	// static getDerivedStateFromProps(props, state) {
	// 	if(props.location.state)			
	// 		return {cameFromCart: props.location.state.cameFromCart };
	// 	else
	// 		return null
		
	// }

	signIn(e){
		e.preventDefault()
		let email=document.signIn.email.value;
		let password=document.signIn.password.value;
   
		auth.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
		  // Signed in
		  var user = userCredential.user;
		  this.props.history.push("/welcome");
		})
		.catch((error) => {
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  alert(errorMessage);
		});
  
		// const user ={
		// 	email: document.signIn.email.value,
		// 	password: document.signIn.password.value
		// }
		
		// localStorage.setItem("user",JSON.stringify(user));
		// this.setState({allOk:true})
		// return false;
	}
	// componentWillUnmount(){
    //     if(this.state.allOk ){
    //         window.location.reload(); //refresh to update cart badge
    //     } 
    // }

render() {
	
        return (
            <div className="body-login">
			{/* {this.state.cameFromCart&&this.state.allOk? <Redirect to="/cart"/> : 
														(this.state.allOk&& <Redirect to="/" />)} */}
              
<div className="container container-login " id="container">
	{/* signup */}
	{/* <div className="form-container sign-up-container">
		<form name="signUp" className="form-login"  onSubmit={this.signUp.bind(this)} action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a className="a-login social " href="#" ><i className="fab fa-facebook-f"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-github"></i></a>
			</div>
			<span className="span-login">or use your email for registration</span>
			<input name="name" required className="input-login" type="text" placeholder="Name" maxLength="20"
                pattern="^\w{3,20}" title="at list 3 characters long up to 20 characters: a-z 0-9 and _ are allowed"/>
			<input name="email" required className="input-login" type="email" placeholder="Email" 
			pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"/>
			<input name="password" required className="input-login" type="password" placeholder="Password" maxLength="30" 
			pattern="^.{6,30}" title="must have at list 6 characters" />
			<input type="submit" value="Sign Up" className="button-login"/>
		</form>
	</div> */}
	{/* signin */}
	<div className="form-container sign-in-container">
		<form method="POST" name="signIn" className="form-login"  onSubmit={e => {this.signIn.call(this,e)}}>
			<h1 className="font-weight-bold m-0">Sign in</h1>
			<div className="social-container">
				<a className="a-login social" href="#" ><i className="fab fa-facebook-f"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-github"></i></a>
			</div>
			<span className="span-login">or use your account</span>
			<input name="email" required className="input-login" type="email" placeholder="Email"
			pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com" />
			<input name="password" required className="input-login" type="password" placeholder="Password" maxLength="30" pattern="^.{6,30}" title="must have at list 6 characters"/>
			<Link className="a-login" to="/passwordReset">Forgot your password?</Link>
			<input type="submit" value="Sign In" className="button-login"/>
			{/* <button className="button-login" onClick={()=> {
				auth.login(()=>{
					this.props.history.push("/welcome")
				})
			}} >Sign In</button> */}
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-right">
				<h1>Welcome Back!</h1>
				<p className="p-login">To keep connected with us please login with your personal info</p>
				{/* <button className="button-login ghost" id="signIn">Sign In</button> */}
			</div>
			{/* <div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p className="p-login">Enter your personal details and start journey with us</p>
				<button className="button-login ghost" id="signUp">Sign Up</button>
			</div> */}
		</div>
	</div>
</div>
            </div>
        )
    }
}
