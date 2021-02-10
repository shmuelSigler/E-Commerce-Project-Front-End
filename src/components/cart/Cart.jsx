import React, { Component } from 'react'


import './cart.css'

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            
        }
    }


    render() {
        return (
            <div className="body">
                <div className="card cardd">
                    <div className="row m-0">
                        <div className="col-md-8 cart">
                            <div className="title">
                             <div className="row m-0">
                                 <div className="col coll">
                                     <h4><b>Shopping Cart</b></h4>
                                 </div>
                                 <div className="col coll align-self-center text-right text-muted">0 items</div>
                             </div>
                            </div>
                            <div className="row m-0 border-top border-bottom">
                                <div className="row m-0 main align-items-center">
                                <div className="col-2 col2">
                                    <img className="img-fluid img" src="/images/thumbnail/Batmobile.jpg" alt=""/></div>
                                </div>
                                <div className="col coll">
                                    <div className="row m-0 text-muted">Batmobile</div>
                                    <div className="row m-0">other info</div>
                                </div>
                                <div className="col coll"> 
                                    <a className="a" href="#">-</a><a href="#" className="border a">1</a>
                                    <a className="a" href="#">+</a> 
                                </div>
                                <div className="col coll">
                                    $00.00 <span className="close">&#10005;</span>
                                </div>
                            </div>
                            <div className="back-to-shop">
                                <a className="a" >&larr;</a><span className="text-muted">Back to shop</span>
                            </div>
                        </div>

                        {/* other section */}
                        <div className="col-md-4 summary">
                            <div>
                                <h5 className="h5"><b>Summary</b></h5>
                            </div>
                            <hr className="hr"/>
                            <div className="row m-0">
                                <div className="col coll pl-0">ITEMS 0</div>
                                <div className="col coll text-right">$00.00</div>
                            </div>
                            <form className="form">
                                <p>SHIPPING</p> 
                                <select className="select">
                                    <option className="text-muted">Standard-Delivery- $5.00</option>
                                </select>
                                <p>GIVE CODE</p> 
                                <input id="code" placeholder="Enter your code"/>
                            </form>
                            <div className="row m-0" style={{borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0"}}>
                            <div className="col coll">TOTAL PRICE</div>
                            <div className="col coll text-right">$00.00</div>
                            </div> 
                            <button className="butn">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
