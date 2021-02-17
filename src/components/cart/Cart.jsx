import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ItemInCart from "./itemInCart/ItemInCart"
import './cart.css'



export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state={
            myCart: this.props.myCart,
            numOfItems: this.props.numOfItems,
            // currentProduct: this.props.currentProduct,
            // numOfCurrentProduct: this.props.numOfCurrentProduct,
            arrayOfOccurrences: this.props.arrayOfOccurrences,
            arrayOfUniqueObjects: this.props.arrayOfUniqueObjects,
            shipmentPrice: 0,
            shipmentMethod:"Self-Pickup- $0.00",
            totalPrice: 0,
        }
    }
    componentDidMount(){
        //call some functions
        let totalPrice= this.state.arrayOfUniqueObjects.reduce(
            (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
            ,0)
        this.setState({totalPrice: totalPrice})
    }
    //!function below deprecated
    // countTheOccurrenceOfEachObject(){
    //     let arrayOfObjs=[...this.state.myCart]
    //     let result = {};
    //     let fixMyCart = []
    //     arrayOfObjs.forEach(function(item) {            
    //         var objStr = JSON.stringify(item);
    //         result[objStr] = result[objStr] ? ++result[objStr] : 1;
    //     });

    //     let keys= Object.keys(result)           
    //     let values=Object.values(result)    //array of Occurrences
    //     keys=keys.map(el=>JSON.parse(el))   //array of unique objects
    //     //fix duplicates in cart - update myCart & numOfItems
    //     let sum=0
    //     for( let i=0; i<values.length ;i++ ){
    //         if( values[i] > keys[i].stock) values[i]=keys[i].stock  //fix to stock number
    //         sum+=values[i]
    //         for( let j=0; j<values[i]; j++ ){
    //             fixMyCart.push(keys[i])
    //         }
    //     }
        
    //     localStorage.setItem('myCart',JSON.stringify(fixMyCart))
    //     localStorage.setItem('numOfItems',sum)
    //     this.setState({ arrayOfOccurrences:values})
    //     this.setState({ arrayOfUniqueObjects:keys})
    //     this.setState({ deliveryFlag : true})
    // }

    //!function below deprecated
    // inputChangedHandler(e){
    //   console.log(this.state.arrayOfOccurrences); 
    //   const copyArr= [...this.state.arrayOfOccurrences]             //copy the array
    //   const findIndex = (element) => element.title === e.target.id;     //function to use in next line
    //   let index= this.state.arrayOfUniqueObjects.findIndex(findIndex)   //find the index
    // //   const increment=this.state.arrayOfOccurrences[index] + 1          //increment the index
    //   copyArr[index]= Number(e.target.value)

    //   this.setState({arrayOfOccurrences: copyArr})
    //    console.log(copyArr); 
    //   // let [product] = this.state.arrayOfUniqueObjects.filter( (product,i) => 
    //   //   (product.title ===  this.callRef.current.id))
      
    // //   console.log( this.state.arrayOfUniqueObjects[index]);
    //   // // this.setState({numOfItems:parseInt(this.callRef.current.value)})
      
    // }

    computeTotalPrice(option){
        let matches = option.match(/(\d+)/);
        let totalPrice=this.state.totalPrice
        // console.log(Number(matches[0]));
        matches = Number(matches[0]);
        totalPrice = matches+this.state.arrayOfUniqueObjects.reduce(
            (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
            ,0)
        this.setState({shipmentPrice: matches,
                      totalPrice: totalPrice,
                      shipmentMethod:option})

    }

    componentWillUnmount(){
        document.body.classList.remove('modal-open');   //this class prevent scrolling
    }
    

    render() {
        return (
            
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
                                    {this.state.arrayOfOccurrences.reduce( (acc,el) => {return acc+el;}, 0)} items
                                 </div>
                             </div>
                            </div>
                            {/* CART ROWS */}
                            { this.state.arrayOfUniqueObjects.map((el,i)=> {return <ItemInCart key={el.title} product={el} index={i} title={el.title} id={el.title} thumbnail={el.thumbnail} sku={el.sku} price={el.price} stock={el.stock} arrayOfOccurrences={this.state.arrayOfOccurrences} addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} eraseProductFromCart={this.props.eraseProductFromCart} />})
                            }


                            <div className="back-to-shop">
                            <Link to="/catalogPage">
                                <span className="a" >&larr;</span><span className="text-muted">Back to shop</span>
                            </Link>
                                
                            </div>
                        </div>

                        {/* summary section */}
                        <div className="col-md-4 summary">
                            <div>
                                <h5 className="h5"><b>Summary</b></h5>
                            </div>
                            <hr className="hr"/>
                            <div className="row m-0">
                            {/* PRICE BEFORE SHIPPING & DISCOUNT */}
                                <div className="col coll pl-0">
                                    ITEMS {this.state.arrayOfOccurrences.reduce( (acc,el) => {return acc+el;}, 0)}
                                </div>
                                <div className="col coll text-right">${this.state.arrayOfUniqueObjects.reduce(
                                    (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
                                    ,0)}
                                </div>
                            </div>
                            <form className="form">
                                <p>SHIPPING</p> 
                                <select onChange={ (e)=> this.computeTotalPrice.call( this, e.target.value) } className="select">
                                    <option className="text-muted">Self-Pickup- $0.00</option>
                                    <option className="text-muted">Standard-Delivery- $5.00</option>
                                    <option className="text-muted">Registered Mail- $10.00</option>
                                    <option className="text-muted">Carrier-Delivery- $20.00</option>
                                    <optgroup label="Free-Delivery- for order over $100"/>
                                    {this.state.totalPrice > 99 && 
                                    <option className="text-muted"> $0.00</option>}
                                </select>
                                <p>GIVE CODE</p> 
                                <input id="code" placeholder="Enter your code" />
                            </form>
                            <div className="row m-0" style={{borderTop: "1px solid rgba(0,0,0,.1); padding: 2vh 0"}}>
                            {/* TOTAL PRICE */}
                            <div className="col coll">TOTAL PRICE</div>
                            <div className="col coll text-right">${this.state.shipmentPrice+this.state.arrayOfUniqueObjects.reduce(
                                    (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
                                    ,0)}
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
                                    <Link to="/login">
                                        <button type="button" className="btn btn-secondary" >Login/SignUp</button>
                                    </Link>
                                    
                                    <Link to={{
                                        pathname:"/checkout",
                                        state:{ totalPrice: this.state.totalPrice,
                                            arrayOfOccurrences: this.state.arrayOfOccurrences,
                                            arrayOfUniqueObjects: this.state.arrayOfUniqueObjects,
                                            shipmentMethod: this.state.shipmentMethod,
                                            shipmentPrice: this.state.shipmentPrice
                                    }}}>
                                        <button type="button" className="btn btn-dark" >Proceed to checkout</button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//! this is to allow scrolling because of MODAL (add to Proceed to checkout button)- onClick={()=>setTimeout(()=>window.location.reload(),0)} 