import React, { Component } from 'react'
import MapContainer from './map/MapContainer'
import axios from 'axios'
import './contacts.css'

export default class Contacts extends Component {
  
  state={
    message:'',
    color:''
  }


  async submitForm(e){
    e.preventDefault()
    try {
      const response = await axios.post('/mail/sendMailToClient',{
        name: document.contact.name.value,
        phone: document.contact.phone.value,
        from:   document.contact.from.value,
        subject: document.contact.subject.value,
        text:   document.contact.text.value,
      })
      console.log(response.data.status);
      this.setState( { 
            // message:response.data,
            message: 'email was send',
            color: 'success'  
      })
      }catch(err) {
      console.log(err)
      this.setState(()=> { 
        return{
           
           message: 'failes to send mail', 
           color: 'danger' 
     }})
      } 
      try {
        const response = await axios.post('/mail/sendMailFromClient',{
          name: document.contact.name.value,
          phone: document.contact.phone.value,
          from:   document.contact.from.value,
          subject: document.contact.subject.value,
          text:   document.contact.text.value,
        })
        console.log(response.data.status);
        }catch(err) {
        console.log(err)
        } 
  }

  
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
          {this.state.message && <div className={`text-${this.state.color}`} >{this.state.message}</div>}
        <form name='contact' onSubmit={this.submitForm.bind(this)}>
          <div className="form-group">
            <input id="name" required type="text" className="form-control" name="name" placeholder="Name"
                pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
            />
          </div>
          <div className="form-group">
            <input required type="email" id="from" name="from" className="form-control"  placeholder="E-mail"
                pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"
            />
          </div>
          <div className="form-group">
            <input required id="phone" name="phone"  type="tel" className="form-control" placeholder="Phone"
                maxLength="10" pattern="^\d{1,10}" title="only numbers"
            />
          </div>
          <div className="form-group"> 
            <label htmlFor="form_need">Please specify your need </label> 
            <select id="subject" name="subject" className="form-control" required="required" data-error="Please specify your need.">
                                <option  defaultValue disabled>--Select Your Issue--</option>
                                <option>Request Invoice for order</option>
                                <option>Request order status</option>
                                <option>Haven't received order yet</option>
                                <option>Other</option>
                </select> 
           </div>
          <div className="form-group">
            <textarea id='text' className="form-control" name="text" rows="3" placeholder="Message"></textarea>
          </div>
          {/* <input type='submit'/> */}
          <button className="btn btn-default btn-contacts" type="submit" name="button">
              <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Submit
          </button>
        </form>
        
        {/* {this.message? this.message : ''} */}
      </div>
    </div>
  </div>
</section>
            </div>
        )
    }
}
