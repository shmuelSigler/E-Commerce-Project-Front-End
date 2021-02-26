import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PayPalButton } from "react-paypal-button-v2";
import { Redirect } from 'react-router'

import './checkout.css'
const APIKey = process.env.REACT_APP_PAYPAL_APIKEY;    //paypal key

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            allOk: false,
            totalPrice: 0,
            arrayOfOccurrences: [],
            arrayOfUniqueObjects: [],
            shipmentMethod: '',
            shipmentPrice: 0,
        }
    }
   
    componentDidMount(){
        //the below this.props.location.state came from cart <Link/>
        const { totalPrice } = this.props.location.state;
        const arrayOfUniqueObjects = [...this.props.location.state.arrayOfUniqueObjects];
        const arrayOfOccurrences = [...this.props.location.state.arrayOfOccurrences];
        const {shipmentMethod} = this.props.location.state;
        const {shipmentPrice} = this.props.location.state;
        this.setState({
            totalPrice: totalPrice, 
            arrayOfOccurrences:arrayOfOccurrences, 
            arrayOfUniqueObjects:arrayOfUniqueObjects,
            shipmentMethod: shipmentMethod,
            shipmentPrice: shipmentPrice,
            orderNo: 0,
        })  
        // console.log(this.props.location.state);   
    }

    validation(){
        // console.log(document.feedback);
        const orderNo = Math.round(Math.random()*100000000)
        
        this.setState({orderNo: orderNo, allOk:true})
        
        return false; // return false to fail submit, for redirecting to Receipt component
    }

    componentWillUnmount(){
        if(this.state.allOk){
            localStorage.removeItem("myCart");
            localStorage.removeItem("numOfItems");
            window.location.reload(); //refresh to update cart badge
        } 
    }

    render() {
        return ( 
      <div>
      {this.state.allOk? <Redirect to={{
                                        pathname:"/receipt",
                                        state:{ totalPrice: this.state.totalPrice,
                                            arrayOfOccurrences: this.state.arrayOfOccurrences,
                                            arrayOfUniqueObjects: this.state.arrayOfUniqueObjects,
                                            shipmentMethod: this.state.shipmentMethod,
                                            shipmentPrice: this.state.shipmentPrice,
                                            orderNo: this.state.orderNo,
                                            name: document.feedback.fname.value,
                                            city: document.feedback.city.value,
                                            street: document.feedback.str.value,
                                            strNum: document.feedback.strNum.value,
                                            apt: document.feedback.apt.value,
                                            subscribe: document.feedback.subscribe.checked,
                                            email:  document.feedback.email.value,
                                             
                                    }}} /> : ""}
    <div className="container-fluid p-5 checkout-container">
        <Link to="/cart">
            <span className="a" >&larr;</span><span className="text-muted">Back to cart</span>
        </Link>
        <div className="row row-checkout">
            <div className="col-75">
                <div className="container container-checkout">
                <form name="feedback"  onSubmit={ this.validation.bind(this)}>

                    <div className="row row-checkout">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="fname"><i className="fa fa-user"></i> Full Name*</label>
                        <input required className="input-checkout" type="text" id="fname" name="firstname" placeholder="John M. Doe"
                        pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
                        />
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="email"><i className="fa fa-envelope"></i> Email*</label>
                        <input required className="input-checkout" type="email" id="email" name="email" placeholder="john@example.com"
                        pattern="^\w+@\w+?(\.[a-zA-Z]{2,20})?(\.[a-zA-Z]{2,20})$" title="For example, in the address example@mail.com"
                        />
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="str"><i className="fa fa-address-card-o"></i> Street*</label>
                        <input required className="input-checkout" type="text" id="str" name="str" placeholder="Hagaaton Boulevard"
                        pattern="^[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
                        />
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="strNum"><i className="fa fa-address-card-o"></i> Street Number*</label>
                        <input required className="input-checkout" type="tel" id="strNum" name="str num" placeholder=" 29" maxLength="6"
                        pattern="^\d{1,8}" title="only numbers"
                        />
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="apt"><i className="fa fa-address-card-o"></i> Apartment* </label>
                        <input required className="input-checkout" type="tel" id="apt" name="apt" placeholder="14"
                        pattern="^\d{1,8}" title="only numbers" maxLength="6"
                        />
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="city"><i className="fa fa-institution"></i> City*</label>
                        <input required className="input-checkout" type="text" id="city" name="city" placeholder="Nahariya"
                        pattern="^[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
                        />
                        {/* label-input */}
                        <div className="row row-checkout">
                        <div className="col-50">
                            {/* label-input */}
                            <label  className="label-checkout" htmlFor="tel"><i className="fas fa-phone-alt"></i>Telephone*</label>
                            <input required className="input-checkout" type="tel" id="tel" name="tel" placeholder="05x-xxxxxxx" maxLength="10"
                            pattern="^\d{1,10}" title="only numbers"
                            />
                        </div>
                        <div className="col-50">
                            {/* label-input */}
                            <label className="label-checkout"  htmlFor="zip">Zip</label>
                            <input  className="input-checkout" type="tel" id="zip" name="zip" placeholder="2222505"
                            pattern="^\d{7}" title="only 7 digit numbers" maxLength="7"
                            />
                        </div>
                        </div>
                        {/* label-input */}
                        <label  className="label-checkout" htmlFor="note"><i className="fas fa-marker"></i> Note</label>
                        <textarea style={{resize:"none"}} className="input-checkout" type="text" id="note" maxLength="200" name="note" placeholder="note"/>
                    </div>

                    <div className="col-50">
                        <h3>Payment</h3>
                        {/* label-input */}
                        <label className="label-checkout"  htmlFor="cname">Name on Card*</label>
                        <input required className="input-checkout" type="text" id="cname" name="cardname" placeholder="John More Doe"
                        pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers"
                        />
                        {/* label-input */}
                        <label className="label-checkout" htmlFor="ccnum">Credit card number*</label>
                        <input required className="input-checkout" type="tel" id="ccnum" name="cardnumber" maxLength="16" placeholder="1111-2222-3333-4444" 
                        pattern="\d{16}" title="only 16 digit number"
                        />
                        {/* label-input */}
                        <label className="label-checkout" htmlFor="expmonth">Exp Month</label>
                        <select id="expmonth" name="expmonth" required className="input-checkout">
                                <option value="january" defaultValue>01</option>
                                <option value="february">02 </option>
                                <option value="march">03 </option>
                                <option value="april">04 </option>
                                <option value="may">05 </option>
                                <option value="june">06 </option>
                                <option value="july">07 </option>
                                <option value="august">08 </option>
                                <option value="september">09</option>
                                <option value="october">10</option>
                                <option value="november">11</option>
                                <option value="december">12</option>
                        </select>
                        <div className="row row-checkout">
                        <div className="col-50">
                            {/* label-input */}
                            <label className="label-checkout" htmlFor="expyear">Exp Year</label>
                            <select id="expyear" name="expyear" required className="input-checkout">
                                <option value="21" defaultValue>21</option>
                                <option value="22">22 </option>
                                <option value="23">23 </option>
                                <option value="24">24 </option>
                                <option value="25">25 </option>
                                <option value="26">26 </option>
                            </select>
                        </div>
                        <div className="col-50">
                            {/* label-input */}
                            <label className="label-checkout" htmlFor="cvv">CVV*</label>
                            <input required className="input-checkout" type="text" id="cvv" name="cvv" maxLength="3" placeholder="xxx" pattern="\d{3}" title="only 3 digit number" size="3"/>
                        </div>
                        </div>
                        <PayPalButton
                            amount={this.state.totalPrice}
                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                            onSuccess={(details, data) => {
                            alert("Transaction completed by " + details.payer.name.given_name);

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderId: data.orderID
                                })
                            });
                            }}
                            options={{
                            clientId: APIKey
                            }}
                        />
                    </div>

                    </div>
                    {/* label-input */}
                    <label className="label-checkout">
                    <input type="checkbox"  name="subscribe"/> I would like information about products and promotions from the site
                    </label>
                    {/* <Link to="/receipt" > */}
                        <input type="submit" value="Place order" className="butnn"/>
                        {/* <button className="butnn">Place order</button>  */}
                    {/* </Link> */}
                    {/* <input type="submit" value="Place order" className="butnn"/> */}
                </form>
                </div>
            </div>

            <div className="col-25">
                <div className="container container-checkout">
                <h4>Cart
                    <span className=" price-checkout" >
                    <i className="fa fa-shopping-cart mr-2"></i>
                    <b>{this.state.arrayOfOccurrences.length}</b>
                    </span>
                </h4>
                {this.state.arrayOfUniqueObjects.map((el,i) =>{ return<div key={el.title}>
                     <p>{el.title} <small>X{this.state.arrayOfOccurrences[i]}</small><span className="price-checkout">${this.state.arrayOfOccurrences[i]*el.price}</span></p></div>
                })
                }
                <hr/>
                <p>Shipment 
                    <span className="price-checkout">
                        ${this.state.shipmentPrice}
                    </span>
                    <br/><small>{this.state.shipmentMethod}</small>
                </p>
                <hr/>
                <p>Total <span className=" price-checkout" ><b>${this.state.totalPrice}</b></span></p>
                </div>
            </div>
        </div>
    </div>
    </div>


        )
    }
}
