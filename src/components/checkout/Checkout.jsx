import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './checkout.css'

export default class Checkout extends Component {
    constructor(props){
        super(props)
        this.state={
            totalPrice: 0,
            arrayOfOccurrences: [],
            arrayOfUniqueObjects: [],
        }
    }

    componentDidMount(){
        const { totalPrice } = this.props.location.state;
        const arrayOfUniqueObjects = [...this.props.location.state.arrayOfUniqueObjects];
        const arrayOfOccurrences = [...this.props.location.state.arrayOfOccurrences];
        this.setState({
            totalPrice: totalPrice, 
            arrayOfOccurrences:arrayOfOccurrences, 
            arrayOfUniqueObjects:arrayOfUniqueObjects})
        console.log(this.props.location.state);
        
    }

    // computeTotalPrice(){
    //     let matches = option.match(/(\d+)/);
    //     let totalPrice=this.state.totalPrice
    //     // console.log(Number(matches[0]));
    //     matches = Number(matches[0]);
    //     totalPrice = matches+this.state.arrayOfUniqueObjects.reduce(
    //         (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
    //         ,0)
    //     this.setState({shipmentPrice: matches,totalPrice: totalPrice})
        
    //     // this.setState({deliveryFlag : true})
    // }

    render() {
        
        return (
            
      
    <div className="container-fluid p-5">
        <Link to="/cart">
            <span className="a" >&larr;</span><span className="text-muted">Back to cart</span>
        </Link>
        <div className="row row-checkout">
            <div className="col-75">
                <div className="container container-checkout">
                <form action="/action_page.php">

                    <div className="row row-checkout">
                    <div className="col-50">
                        <h3>Billing Address</h3>
                        <label  className="label-checkout" htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                        <input className="input-checkout" type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
                        <label  className="label-checkout" htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                        <input className="input-checkout" type="text" id="email" name="email" placeholder="john@example.com"/>
                        <label  className="label-checkout" htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                        <input className="input-checkout" type="text" id="adr" name="address" placeholder="Hagaaton Boulevard St. 29"/>
                        <label  className="label-checkout" htmlFor="city"><i className="fa fa-institution"></i> City</label>
                        <input className="input-checkout" type="text" id="city" name="city" placeholder="Nahariya"/>

                        <div className="row row-checkout">
                        <div className="col-50">
                            <label  className="label-checkout" htmlFor="state"><i className="fas fa-phone-alt"></i>Telephone</label>
                            <input className="input-checkout" type="tel" id="state" name="state" placeholder="05x-xxxxxxx"/>
                        </div>
                        <div className="col-50">
                            <label className="label-checkout"  htmlFor="zip">Zip</label>
                            <input className="input-checkout" type="text" id="zip" name="zip" placeholder="10001"/>
                        </div>
                        </div>
                    </div>

                    <div className="col-50">
                        <h3>Payment</h3>
                        <label className="label-checkout"  htmlFor="cname">Name on Card</label>
                        <input className="input-checkout" type="text" id="cname" name="cardname" placeholder="John More Doe"/>
                        <label className="label-checkout" htmlFor="ccnum">Credit card number</label>
                        <input className="input-checkout" type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
                        <label className="label-checkout" htmlFor="expmonth">Exp Month</label>
                        <input className="input-checkout" type="text" id="expmonth" name="expmonth" placeholder="September"/>

                        <div className="row row-checkout">
                        <div className="col-50">
                            <label className="label-checkout" htmlFor="expyear">Exp Year</label>
                            <input className="input-checkout" type="text" id="expyear" name="expyear" placeholder="2021"/>
                        </div>
                        <div className="col-50">
                            <label className="label-checkout" htmlFor="cvv">CVV</label>
                            <input className="input-checkout" type="text" id="cvv" name="cvv" placeholder="xxx"/>
                        </div>
                        </div>
                    </div>

                    </div>
                    <label className="label-checkout">
                    <input type="checkbox"  name="sameadr"/> I would like information about products and promotions from the site
                    </label>
                    <input type="submit" value="Place order" className="butnn"/>
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
                {this.state.arrayOfUniqueObjects.map((el,i) =>{
                    return <p>{el.title} <small>X{this.state.arrayOfOccurrences[i]}</small><span className="price-checkout">${this.state.arrayOfOccurrences[i]*el.price}</span></p>
                })
                }
                
                <hr/>
                <p>Total <span className=" price-checkout" ><b>${this.state.totalPrice}</b></span></p>
                </div>
            </div>
        </div>
    </div>


        )
    }
}
