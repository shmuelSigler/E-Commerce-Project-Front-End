import React, { Component } from 'react'
import {auth} from "../../firebase"
export default class Welcome extends Component {

    // constructor(props){
    //     super(props)
    //     this.state={
    //         name: '',
			
    //     }
    // }

    // static getDerivedStateFromProps(props, state) {
    //     let {name} =  JSON.parse(localStorage.getItem("user"));		
	// 	return {name: name };
	// }

    render() {
// console.log('welcome');
        return (
            <div>
                <h1>welcome</h1>
                <button
                    onClick={() => {
                    auth.signOut().then(() => {
                        this.props.history.push("/");
                    }).catch(error=>{
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        alert(errorMessage);
                    })
                    }}>
                    Logout
                </button>
            </div>
        )
    }
}
