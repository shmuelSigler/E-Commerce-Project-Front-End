import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ItemInCart extends Component {
    constructor(props){
        super(props)
        this.callRef=React.createRef();
        this.state={
            product:this.props.product,
            title: this.props.title,
            i: this.props.index,            //the index of the product in arrayOfUniqueObjects
            thumbnail: this.props.thumbnail,
            sku:this.props.sku,
            price:this.props.price,
            stock:this.props.stock,
            arrayOfOccurrences:this.props.arrayOfOccurrences,
        }
    }

    increment(){
        this.callRef.current.stepUp()
        this.props.addToCart(this.state.product);
        
    }

    decrement(){
        if( this.callRef.current.dataset.prevValue > 1) {
            this.callRef.current.stepDown();
            this.props.removeFromCart(this.state.product);
        } 
    }

    //!function below deprecated
    // removeOrAddToCart(){
    //     // console.log(this.callRef.current.dataset.prevValue);
    //     // console.log(this.callRef.current.value)
    //     const curValue = this.callRef.current.value
    //     const Prevalue = this.callRef.current.dataset.prevValue;
    //     if(curValue > Prevalue) this.props.addToCart(this.state.product);
    //     else this.props.removeFromCart(this.state.product);
    // }
 

    render() {
        return (
            <div>
                <div className="row m-0 border-top border-bottom">
                            {/* id={el.title} */}
                                <div className="col-2 col2">
                                    <Link to={"/product/"+ this.state.title}>
                                         <img className="img-fluid img shadow" src={this.state.thumbnail} alt="el.title"/>
                                    </Link>
                                </div>
                               
                                <div className="col-4 coll">
                                    <div className=" m-0 text-muted">{this.state.title}</div>
                                    <div className=" m-0">
                                        <ul className="pl-4">
                                            <li>sku: {this.state.sku}</li>
                                            <li>price: ${this.state.price}</li>
                                            <li>
                                                quantity: {this.state.arrayOfOccurrences[this.state.i] <= this.state.stock ? this.state.arrayOfOccurrences[this.state.i] : <span><del>{this.state.arrayOfOccurrences[this.state.i]}</del>, &nbsp;{this.state.stock }</span>}
                                            </li>
                                            <li>
                                                stock: {this.state.stock}
                                            </li>
                                            { this.state.arrayOfOccurrences[this.state.i] > this.state.stock &&
                                             <li className="text-danger">We are sorry, the quantity exceed beyond the current stock.<br/>
                                             The quantity is adjusted.</li>
                                             }
                                        </ul>
                                        
                                    </div>
                                </div>
                                <div className="col-3 coll align-self-center"> 
                                    <div className="row ">
                                        <div className="col-sm-4 ">    
                                            <input ref={this.callRef} type="number" readOnly
                                            id={this.state.title} 
                                            value={this.state.arrayOfOccurrences[this.state.i] <= this.state.stock ? this.state.arrayOfOccurrences[this.state.i] : this.state.stock} 
                                            data-prev-value={this.state.arrayOfOccurrences[this.state.i] <= this.state.stock ? this.state.arrayOfOccurrences[this.state.i] : this.state.stock}
                                            min="1" max={this.state.stock} inputMode="numeric" className="number"
                                            //   placeholder={this.state.arrayOfOccurrences[this.state.i] <= this.state.stock ? this.state.arrayOfOccurrences[this.state.i] : this.state.stock} 
                                            //   onChange={ this.removeOrAddToCart.bind(this)} 
                                            />
                                        </div>
                                        <div className="col-sm-8 mb-2 align-self-center">
                                            <button className="mr-2 border-0 rounded shadow-sm" onClick={this.increment.bind(this)}>+</button>
                                            <button className="border-0 rounded shadow-sm" onClick={this.decrement.bind (this)}>-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 coll priceAndX align-self-center ">
                                    ${this.state.price*this.state.arrayOfOccurrences[this.state.i]} <span className="close" onClick={()=> this.props.eraseProductFromCart(this.state.product)}>&#10005;</span>
                                </div>
                            </div>
            </div>
        )
    }
}
