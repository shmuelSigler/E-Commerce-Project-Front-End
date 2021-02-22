// import React, { Component } from 'react';
// // import obj from "./checkboxObject.js";

// export default class Checkbox extends Component {
    
//     render() {
//         return (
//             <div>
//                 <input type="checkbox" id={this.props.idFor} onClick={(e) => this.props.ffilter(this.props.id,e.target.checked)}/> 
//                 <label className="ml-1" htmlFor={this.props.idFor}> {this.props.print}</label>
//             </div>
//         )
//     }
// }
// onclick={this.filter.bind(this)}

import React from 'react'
import './checkbox.css'
export default function Checkbox(props) {
    
    return (
        <div className="my-2">
            <input type="checkbox" className="checkbox" id={props.idFor} 
                onClick={(e) => props.filter(props.id,e.target.checked)}/> 
            <label className="ml-1" htmlFor={props.idFor}> {props.print} 
                <small>
                &nbsp;({props.products.filter(function(el){
                    return el.filter.includes(props.id)
                }).length}) 
                </small>
            </label>
            
        </div>
    )
}

//class=checkbox for function uncheck in unCheck.js