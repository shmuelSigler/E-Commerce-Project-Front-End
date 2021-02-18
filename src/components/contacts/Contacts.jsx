import React, { Component } from 'react'
import MapContainer from './map/MapContainer'

import './contacts.css'

export default class Contacts extends Component {
    render() {
        return (
            <div>
                
<section id="contact">
  <div className="container">
    <div className="well well-sm">
      <h3><strong>Contact Us</strong></h3>
    </div>
	
	<div className="row">
	  <div className="col-sm-7 ">
        <MapContainer/>
      </div>

      <div className="col-sm-5 pl-5">
          <h4><strong>Help Form</strong></h4>
        <form>
          <div className="form-group">
            <input id="fname" required type="text" className="form-control" name="fname" placeholder="Name"
                pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
            />
          </div>
          <div className="form-group">
            <input required type="email" id="email" name="email" className="form-control"  placeholder="E-mail"
                pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"
            />
          </div>
          <div className="form-group">
            <input required id="tel" name="tel"  type="tel" className="form-control" placeholder="Phone"
                maxLength="10" pattern="^\d{1,10}" title="only numbers"
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="form_need">Please specify your need </label> 
            <select id="form_need" name="need" className="form-control" required="required" data-error="Please specify your need.">
                                <option  defaultValue disabled>--Select Your Issue--</option>
                                <option>Request Invoice for order</option>
                                <option>Request order status</option>
                                <option>Haven't received order yet</option>
                                <option>Other</option>
                </select> 
           </div>
          <div className="form-group">
            <textarea className="form-control" name="" rows="3" placeholder="Message"></textarea>
          </div>
          <button className="btn btn-default btn-contacts" type="submit" name="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}
