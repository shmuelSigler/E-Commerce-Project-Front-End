import React, { Component } from 'react'
import ShopContext from '../context/shopContext'
import { Link } from 'react-router-dom'
import ItemInCart from "./itemInCart/ItemInCart"

import './cart.css'


export default class Cart extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         myCart: this.props.myCart,
    //         numOfItems: this.props.numOfItems,
    //         arrayOfOccurrences: this.props.arrayOfOccurrences,
    //         arrayOfUniqueObjects: this.props.arrayOfUniqueObjects,
    //         shipmentPrice: 0,
    //         shipmentMethod:"Self-Pickup- $0.00",
    //         totalPrice: 0,
    //     }
    // }
    // componentDidMount(){
    //     //call some functions
    //     let totalPrice= this.state.arrayOfUniqueObjects.reduce(
    //         (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
    //         ,0)
    //     this.setState({totalPrice: totalPrice})
    // }

    // computeTotalPrice(option){
    //     let matches = option.match(/(\d+)/);
    //     let totalPrice=this.state.totalPrice
    //     // console.log(Number(matches[0]));
    //     matches = Number(matches[0]);
    //     totalPrice = matches+this.state.arrayOfUniqueObjects.reduce(
    //         (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
    //         ,0)
    //     this.setState({shipmentPrice: matches,
    //                   totalPrice: totalPrice,
    //                   shipmentMethod:option})
    // }

    componentWillUnmount(){
        document.body.removeAttribute('style'); //to remove style that add padding-right(to <body>) from nowhere WTF
        document.body.classList.remove('modal-open');   //this class prevent scrolling
    }
    

    render() {
        return (
        <ShopContext.Consumer>{value =>(
            <div className="body p-5">
                <div className="card cardd">
                    <div className="row m-0">
                    
                            <div className="col-md-8 cart">
                            <div className="title">
                             <div className="row m-0">
                                 <div className="col coll">
                                     <h4><b>Shopping Cart</b></h4>
                                 </div>
                                 <div className="col coll align-self-center text-right text-muted">
                                    {value.numOfItems} items
                                 </div>
                             </div>
                            </div>
                            {/* CART ROWS */}
                            { value.arrayOfUniqueObjects.map((el,i)=> {return <ItemInCart key={el.title} product={el} index={i}  />})
                            }
                            <div className="back-to-shop">
                            <Link to="/catalogPage">
                                <span className="a" >&larr;</span><span className="text-muted">Back to shop</span>
                            </Link>   
                            </div>
                        </div>
                        <div className="col-md-4 summary">
                            <div>
                                <h5 className="h5"><b>Summary</b></h5>
                            </div>
                            <hr className="hr"/>
                            <div className="row m-0">
                            {/* PRICE BEFORE SHIPPING & DISCOUNT */}
                                <div className="col coll pl-0">
                                    ITEMS {value.numOfItems}
                                </div>
                                <div className="col coll text-right">${value.initialPrice}
                                </div>
                            </div>
                            <form className="form">
                                <p>SHIPPING</p> 
                                <select onChange={ (e)=> value.computeTotalPrice(e.target.value) } className="select">
                                    <option className="text-muted">Self-Pickup- $0.00</option>
                                    <option className="text-muted">Standard-Delivery- $5.00</option>
                                    <option className="text-muted">Registered Mail- $10.00</option>
                                    <option className="text-muted">Carrier-Delivery- $20.00</option>
                                    <optgroup label="Free-Delivery- for order over $100"/>
                                    {value.initialPrice > 99 && 
                                    <option className="text-muted"> $0.00</option>}
                                </select>
                                <p>GIVE CODE</p> 
                                <input id="code" placeholder="Enter your code" />
                            </form>
                            <div className="row m-0" style={{borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0"}}>
                            {/* TOTAL PRICE */}
                            <div className="col coll">TOTAL PRICE</div>
                            <div className="col coll text-right">${value.shipmentPrice+value.initialPrice}
                            </div>
                            </div> 
                            <button type="button" className="butn" data-toggle="modal" data-target="#exampleModal">CHECKOUT</button>
                            {/* MODAL */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"  data-backdrop="false" aria-labelledby="exampleModalLabel" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Before Checkout</h5>
                                    <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                                      <span style={{fontSize:"30px"}} aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div className="modal-body" style={{fontSize:"20px"}}>
                                  Choose to make an account or proceed as anonymous user
                                  </div>
                                  <div className="modal-footer">
                                    <Link to={{
                                        pathname:"/login",
                                        state:{ cameFromCart: true,
                                    }}}>
                                        <button type="button" className="btn btn-secondary" >Login</button>
                                    </Link>
                                    <Link to="/signUp">
                                        <button type="button" className="btn btn-secondary" >SignUp</button>
                                    </Link>
                                    <Link to="/checkout">
                                        <button type="button" className="btn btn-dark" >Proceed to checkout</button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </ShopContext.Consumer>
        )
    }
}

//! this is to allow scrolling because of MODAL (add to Proceed to checkout button)- onClick={()=>setTimeout(()=>window.location.reload(),0)} 