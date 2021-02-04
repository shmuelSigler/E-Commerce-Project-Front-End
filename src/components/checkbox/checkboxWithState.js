import React, { Component } from 'react';
// import obj from "./checkboxObject.js";

export default class Checkbox extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            check: false,
            fun: props.ffilter

        }
        
      }

      updateState(e){
        // console.log(e.target.checked);
        
        this.state.fun(e.target.id,e.target.checked)
        this.setState({check: e.target.checked})
        // console.log(this.state.check);
      }
    //   (e) => this.props.ffilter(this.props.id,e.target.checked)
    render() {
        return (
            <div>
                <input type="checkbox" id={this.props.idFor} onClick={this.updateState.bind(this)}/> 
                <label className="ml-1" htmlFor={this.props.idFor}> {this.props.print}</label>
            </div>
        )
    }
}


