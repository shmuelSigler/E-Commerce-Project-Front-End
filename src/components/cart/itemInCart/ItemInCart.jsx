import React, { Component } from 'react'
import ShopContext from '../../context/shopContext'
import { Link } from 'react-router-dom'


export default class ItemInCart extends Component {
    constructor(props){
        super(props)
        this.callRef=React.createRef();
    }

    // increment(){
    //     this.callRef.current.stepUp()
    //     this.props.addToCart(this.state.product);
        
    // }

    // decrement(){
    //     if( this.callRef.current.dataset.prevValue > 1) {
    //         this.callRef.current.stepDown();
    //         this.props.removeFromCart(this.state.product);
    //     } 
    // }

 
    render() {
        return (
            <ShopContext.Consumer>
                {context =>(
                    <div>
                <div className="row m-0 border-top border-bottom">
                            {/* id={el.title} */}
                                <div className="col-2 col2">
                                    <Link to={"/product/"+ this.props.product.title}>
                                         <img className="img-fluid img shadow" src={this.props.product.thumbnail} alt="el.title"/>
                                    </Link>
                                </div>
                               
                                <div className="col-4 coll">
                                    <div className=" m-0 text-muted">{this.props.product.title}</div>
                                    <div className=" m-0">
                                        <ul className="pl-4">
                                            <li>sku: {this.props.product.sku}</li>
                                            <li>price: ${this.props.product.price}</li>
                                            <li>
                                                quantity: {context.arrayOfOccurrences[this.props.index] <= this.props.product.stock ? context.arrayOfOccurrences[this.props.index] : <span><del>{context.arrayOfOccurrences[this.props.index]}</del>, &nbsp;{this.state.stock }</span>}
                                            </li>
                                            <li>
                                                stock: {this.props.product.stock}
                                            </li>
                                            { context.arrayOfOccurrences[this.props.index] > this.props.product.stock &&
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
                                            id={this.props.product.title} 
                                            value={context.arrayOfOccurrences[this.props.index] <= this.props.product.stock ?context.arrayOfOccurrences[this.props.index] : this.props.product.stock} 
                                            data-prev-value={context.arrayOfOccurrences[this.props.index] <= this.props.product.stock ? context.arrayOfOccurrences[this.props.index] : this.props.product.stock}
                                            min="1" max={this.props.product.stock} inputMode="numeric" className="number"
                                            //   placeholder={this.state.arrayOfOccurrences[this.props.index] <= this.state.stock ? this.state.arrayOfOccurrences[this.props.index] : this.state.stock} 
                                            //   onChange={ this.removeOrAddToCart.bind(this)} 
                                            />
                                        </div>
                                        <div className="col-sm-8 mb-2 align-self-center">
                                            <button className="mr-2 border-0 rounded shadow-sm" 
                                            onClick={()=> {this.callRef.current.stepUp();context.addToCart(this.props.product)}}>+</button>
                                            <button className="border-0 rounded shadow-sm" onClick={()=>{this.callRef.current.dataset.prevValue > 1 && context.removeFromCart(this.props.product)}}>-</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3 coll priceAndX align-self-center ">
                                    ${this.props.product.price*context.arrayOfOccurrences[this.props.index]} <span className="close" onClick={()=> context.eraseProductFromCart(this.props.product)}>&#10005;</span>
                                </div>
                            </div>
            </div>
                )}
            
            </ShopContext.Consumer>
        )
    }
}
