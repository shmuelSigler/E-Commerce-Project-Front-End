import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import StoreIcon from '@material-ui/icons/Store';
import './receipt.css'

export default class Receipt extends Component {
   
    // componentDidMount(){
    //     console.log(this.props.location.state)
    // }

    render() {
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);
        
        return (
            <div>
                <div className="container p-5 mt-3 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-8">
            <div className="card card-receipt">
                <div className=" text-left logo-receipt p-2 px-5"> 
                    <ThreeDRotationIcon fontSize="large"/> 
                    <div className="float-right">
                        <Link exact="true"  to='/'><StoreIcon fontSize="large"/></Link>
                    </div>
                    
                </div>
                <div className="invoice p-5">
                    <h5>Your order Confirmed!</h5> 
                    <span className="font-weight-bold d-block mt-4">Hello, {this.props.location.state.name}</span> <span>You order has been confirmed and will be shipped in next two days!<br/><br/></span>
                    {this.props.location.state.subscribe? <span>You choose to subscribe to our newsletter.<br/>
                    Your mail is: {this.props.location.state.email}</span> : ""}
                    <div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>
                                        {today.toDateString()}
                                        </span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Order No</span> <span>{Math.round(Math.random()*100000000)}</span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Payment</span> <span><img src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" alt="cc"/></span> </div>
                                    </td>
                                    <td>
                                        <div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span>
                                        {this.props.location.state.street+' '+this.props.location.state.strNum+"/"+this.props.location.state.apt+', '+this.props.location.state.city}
                                        </span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="product border-bottom table-responsive">
                        <table className="table table-borderless">
                            <tbody>
                                
                               {this.props.location.state.arrayOfUniqueObjects.map((el,i) =>{
                                   return <tr key={el.title}>
                                    <td width="20%"> <img src={el.thumbnail} width="90" alt={el.title}/> </td>
                                    <td width="60%"> 
                                        <span className="font-weight-bold">{el.title}</span>
                                        <div className="product-qty">
                                            <span className="d-block">Quantity:&nbsp;
                                                {this.props.location.state.arrayOfOccurrences[i]}
                                            </span> 
                                            <span>Price: ${el.price}</span>
                                        </div>
                                    </td>
                                    <td width="20%">
                                        <div className="text-right"> 
                                            <span className="font-weight-bold">$
                                                {el.price*this.props.location.state.arrayOfOccurrences[i]}
                                            </span> 
                                        </div>
                                    </td>
                                </tr>
                               })}

                            </tbody>
                        </table>
                    </div>
                    <div className="row d-flex justify-content-end">
                        <div className="col-md-5">
                            <table className="table table-borderless">
                                <tbody className="totals">
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>${this.props.location.state.totalPrice-this.props.location.state.shipmentPrice}</span> </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Shipping Fee</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>${this.props.location.state.shipmentPrice}</span> </div>
                                        </td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Tax Fee</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span>$7.65</span> </div>
                                        </td>
                                    </tr> */}
                                    <tr>
                                        <td>
                                            <div className="text-left"> <span className="text-muted">Discount</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="text-success">
                                                {this.props.location.state.discount? '$'+this.props.location.state.discount : ''}
                                            </span> </div>
                                        </td>
                                    </tr>
                                    <tr className="border-top border-bottom">
                                        <td>
                                            <div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
                                        </td>
                                        <td>
                                            <div className="text-right"> <span className="font-weight-bold">${this.props.location.state.totalPrice}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>We will be sending shipping confirmation email when the item shipped successfully!</p>
                    <p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>3D Team</span>
                </div>
                <div className="d-flex justify-content-between footer-receipt p-3"> 
                    <span>Need Help? visit our 
                        <a href="#"> help center</a>
                    </span>
                    {/* <span>12 June, 2020</span> */}
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}
