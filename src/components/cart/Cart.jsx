import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ItemInCart from "./itemInCart/ItemInCart"
import './cart.css'



export default class Cart extends Component {
    constructor(props){
        super(props)
        // this.callRef=React.createRef()
        this.state={
            myCart: this.props.myCart,
            numOfItems: this.props.numOfItems,
            currentProduct: this.props.currentProduct,
            numOfCurrentProduct: this.props.numOfCurrentProduct,
            arrayOfOccurrences: [],
            arrayOfUniqueObjects: [],
        }
    }
    componentDidMount(){
        //call some functions
        // console.log(this.state.currentProduct);
        this.countTheOccurrenceOfEachObject()
    }

    countTheOccurrenceOfEachObject(){
        let arrayOfObjs=[...this.state.myCart]
        let result = {};
        let fixMyCart = []
        arrayOfObjs.forEach(function(item) {            
            var objStr = JSON.stringify(item);
            result[objStr] = result[objStr] ? ++result[objStr] : 1;
        });

        let keys= Object.keys(result)           
        let values=Object.values(result)    //array of Occurrences
        keys=keys.map(el=>JSON.parse(el))   //array of unique objects
        //fix duplicates in cart - update myCart & numOfItems
        let sum=0
        for( let i=0; i<values.length ;i++ ){
            if( values[i] > keys[i].stock) values[i]=keys[i].stock  //fix to stock number
            sum+=values[i]
            for( let j=0; j<values[i]; j++ ){
                fixMyCart.push(keys[i])
            }
        }
        
        localStorage.setItem('myCart',JSON.stringify(fixMyCart))
        localStorage.setItem('numOfItems',sum)
        this.setState({ arrayOfOccurrences:values})
        this.setState({ arrayOfUniqueObjects:keys})
    }

    //!function below deprecated
    inputChangedHandler(e){
      console.log(this.state.arrayOfOccurrences); 
      const copyArr= [...this.state.arrayOfOccurrences]             //copy the array
      const findIndex = (element) => element.title === e.target.id;     //function to use in next line
      let index= this.state.arrayOfUniqueObjects.findIndex(findIndex)   //find the index
    //   const increment=this.state.arrayOfOccurrences[index] + 1          //increment the index
      copyArr[index]= Number(e.target.value)

      this.setState({arrayOfOccurrences: copyArr})
       console.log(copyArr); 
      // let [product] = this.state.arrayOfUniqueObjects.filter( (product,i) => 
      //   (product.title ===  this.callRef.current.id))
      
    //   console.log( this.state.arrayOfUniqueObjects[index]);
      // // this.setState({numOfItems:parseInt(this.callRef.current.value)})
      
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
                                <div className="col coll pl-0">ITEMS {this.state.arrayOfOccurrences.reduce( (acc,el) => {return acc+el;}, 0)}</div>
                                <div className="col coll text-right">${this.state.arrayOfUniqueObjects.reduce(
                                    (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
                                    ,0)}</div>
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
                            {/* TOTAL PRICE */}
                            <div className="col coll">TOTAL PRICE</div>
                            <div className="col coll text-right">${5+this.state.arrayOfUniqueObjects.reduce(
                                    (acc,el,i)=> {return acc+el.price*this.state.arrayOfOccurrences[i]}
                                    ,0)}
                            </div>
                            </div> 
                            <button className="butn">CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

