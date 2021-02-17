import React, { Component } from 'react'
import './login.css'






export default class Login extends Component {

componentDidMount(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

}


    render() {
        return (
            <div className="body-login">
               
<div className="container container-login" id="container">
	<div className="form-container sign-up-container">
		<form className="form-login" action="#">
			<h1>Create Account</h1>
			<div className="social-container">
				<a className="a-login social " href="#" ><i className="fab fa-facebook-f"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="span-login">or use your email for registration</span>
			<input className="input-login" type="text" placeholder="Name" />
			<input className="input-login" type="email" placeholder="Email" />
			<input className="input-login" type="password" placeholder="Password" />
			<button className="button-login">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form className="form-login" action="#">
			<h1 className="font-weight-bold m-0">Sign in</h1>
			<div className="social-container">
				<a className="a-login social" href="#" ><i className="fab fa-facebook-f"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-google-plus-g"></i></a>
				<a className="a-login social" href="#" ><i className="fab fa-linkedin-in"></i></a>
			</div>
			<span className="span-login">or use your account</span>
			<input className="input-login" type="email" placeholder="Email" />
			<input className="input-login" type="password" placeholder="Password" />
			<a className="a-login" href="#">Forgot your password?</a>
			<button className="button-login">Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p className="p-login">To keep connected with us please login with your personal info</p>
				<button className="button-login ghost" id="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p className="p-login">Enter your personal details and start journey with us</p>
				<button className="button-login ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
{/* 
<footer className="footer-login">
	<p className="p-login">
		Created with <i className="fa fa-heart"></i> by
		<a className="a-login" target="_blank" href="https://florin-pop.com">Florin Pop</a>
		- Read how I created this and how you can join the challenge
		<a className="a-login" target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
	</p>
</footer> */}
            </div>
        )
    }
}
