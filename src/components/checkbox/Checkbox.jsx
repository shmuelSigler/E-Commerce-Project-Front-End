import React, { Component } from 'react';
// import obj from "./checkboxObject.js";

export default class Checkbox extends Component {
    
    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.idFor} onClick={(e) => this.props.ffilter(this.props.id,e.target.checked)}/> 
                <label className="ml-1" htmlFor={this.props.idFor}> {this.props.print}</label>
            </div>
        )
    }
}
// onclick={this.filter.bind(this)}