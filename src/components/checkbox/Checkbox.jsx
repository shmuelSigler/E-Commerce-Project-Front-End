import React, { Component } from 'react';
// import obj from "./checkboxObject.js";

export default class Checkbox extends Component {

    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.title} /> <label for={this.props.title}> {this.props.title}</label>
            </div>
        )
    }
}
