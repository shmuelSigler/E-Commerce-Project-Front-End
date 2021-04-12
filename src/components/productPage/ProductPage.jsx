import React, { Component } from 'react';
import ShopContext from '../context/shopContext'
// import {productsObj} from "../product/productsObj.js"
// import axios from 'axios'
import Product from '../product/Product'
//react.js example components
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

import './productPage.css';
// import queryString from 'query-string'
//3 ways to fix context this - issue
        //1. (event) => this.setOrder(event)
        //2. constructor : this.setOrder = this.setOrder.bind(this)
        //3. inline: this.setOrder.bind(this)


export default class ProductPage extends Component{
  static contextType = ShopContext    //for using this.context
   constructor(props,context){
      super(props,context)
      // const [product] = productsObj.filter((product) => (product.title ===  props.match.params.id))
      const [product] = this.context.products.filter((product) => (product.title ===  this.props.match.params.id))
      this.callRef=React.createRef();
      this.state={
        loading: true,
        product: product,
        numOfItems: 1,
      }
      
   }

  //  componentDidMount(){
    //! version 1
  //   const [product] = this.context.products.filter((product) => (product.title ===  this.props.match.params.id))
  //   this.setState(()=> { 
  //     return{
  //       product:product, 
  //       myObj:this.context.products,
  //       title: product.title,
  //       productDescription: product.productDescription,
  //       src:product.src,
  //       image1:product.image1,
  //       image2:product.image2,
  //       image3:product.image3,
  //       image4:product.image4,
  //       filter:product.filter,
  //       price: product.price,
  //       previousPrice: product.previousPrice,
  //       rating: product.rating,
  //       stock: product.stock,
  //       printingTime: product.printingTime,
  //       sku:product.sku,
  //       related:product.related,
  //       size: product.size,
  //       note: product.note,
  //       loading:true,
  //   }})
  //!version 1 end & version 2 starts - with fetch()
    // this.fetch()
  // }

//   async fetch(){
  //!version 2 - continue, with async-await
//     try {
//       const response = await axios.get('http://localhost:3000/products')
//       const [product] = response.data.filter((product) => (product.title ===  this.props.match.params.id))
//       this.setState(()=> { 
//         return{
//           product:product, 
//           myObj:response.data,
//           title: product.title,
//           productDescription: product.productDescription,
//           src:product.src,
//           image1:product.image1,
//           image2:product.image2,
//           image3:product.image3,
//           image4:product.image4,
//           filter:product.filter,
//           price: product.price,
//           previousPrice: product.previousPrice,
//           rating: product.rating,
//           stock: product.stock,
//           printingTime: product.printingTime,
//           sku:product.sku,
//           related:product.related,
//           size: product.size,
//           note: product.note,
//           loading:true,
//       }})
//   } catch(err) {
//       console.log(err)
//   }
//! version 2 end & version 3 starts - no async before fetch() signature
    // axios.get('http://localhost:3000/products')
    //     .then((response)=> {
    //       const [product] = response.data.filter((product) => (product.title ===  this.props.match.params.id))
    //       this.setState(()=> { return{
    //           product:product, 
    //           myObj:response.data,
    //           title: product.title,
    //           productDescription: product.productDescription,
    //           src:product.src,
    //           image1:product.image1,
    //           image2:product.image2,
    //           image3:product.image3,
    //           image4:product.image4,
    //           filter:product.filter,
    //           price: product.price,
    //           previousPrice: product.previousPrice,
    //           rating: product.rating,
    //           stock: product.stock,
    //           printingTime: product.printingTime,
    //           sku:product.sku,
    //           related:product.related,
    //           size: product.size,
    //           note: product.note,
    //           loading:true,
          
    //     }})})
    //     .catch((error)=> {
    //       console.log(error);
    //     })
    //!version 3 end
// }

   rating(){
    console.log(document.starRating.star1);
   }

   changeSrc(e){
      this.setState({src:e.target.src})
   }

   updateNumOfItems(e){
     this.setState({numOfItems:parseInt(this.callRef.current.value)})
   }

    render(){
  
       return(
        <div  className="container-fluid p-5">
          <div className="row ">
           {/* images */}
          <div className="col-md-12 col-lg-6">
            <div id="custCarousel" className="carousel slide carousel-fade m-2" data-ride="carousel" align="center">
                {/* <!-- slides --> */}
                <div className="carousel-inner shadow-lg ">
                    <div className="carousel-item active"> 
                    <InnerImageZoom fadeDuration={0}  src={this.state.product.image1} zoomScale={0.3} alt="img1"/>
                    {/* <img className="img-fluid" src={this.state.image1} alt="img1"/>  */}
                    </div>
                    <div className="carousel-item">
                    <InnerImageZoom fadeDuration={0} src={this.state.product.image2} zoomScale={0.3} alt="img2"/>
                     {/* <img className="img-fluid" src={this.state.image2} alt="img2"/>  */}
                     </div>
                    <div className="carousel-item">
                    <InnerImageZoom fadeDuration={0} src={this.state.product.image3} zoomScale={0.3}  alt="img3"/> 
                    {/* <img className="img-fluid" src={this.state.image3} alt="img3"/>  */}
                    </div>
                    <div className="carousel-item"> 
                    <InnerImageZoom fadeDuration={0} src={this.state.product.image4} zoomScale={0.3}  alt="img4"/>
                    {/* <img className="img-fluid" src={this.state.image4} alt="img4"/>  */}
                    </div>
                </div> 
                {/* <!-- Left right --> */}
                 <a className="carousel-control-prev w-10" href="#custCarousel" data-slide="prev"> 
                  <span className="carousel-control-prev-icon mr-5"></span> 
                 </a> 
                 <a className="carousel-control-next" href="#custCarousel" data-slide="next"> 
                  <span className="carousel-control-next-icon ml-5"></span> 
                 </a>
                 
                  {/* <!-- Thumbnails --> */}
                <ol className="carousel-indicators list-inline ">
                    <li className="list-inline-item active"> <a id="carousel-selector-0" className="selected" data-slide-to="0" data-target="#custCarousel" href='/#'> <img src={this.state.product.image1} className="img-fluid " alt='img1'/> </a> </li>
                    <li className="list-inline-item"> <a id="carousel-selector-1" data-slide-to="1" data-target="#custCarousel" href='/#'> <img src={this.state.product.image2} className="img-fluid " alt='img2'/> </a> </li>
                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="2" data-target="#custCarousel" href='/#'> <img src={this.state.product.image3} className="img-fluid " alt='img3'/> </a> </li>
                    <li className="list-inline-item"> <a id="carousel-selector-2" data-slide-to="3" data-target="#custCarousel" href='/#'> <img src={this.state.product.image4} className="img-fluid " alt='img4'/> </a> </li>
                </ol>
            </div>
        
		      </div>
           {/* product datails */}
          <div className="col-md-12 col-lg-6">
		 	      <h2 className='font-weight-bold' >{this.state.product.title}</h2>
             <span>{this.state.product.rating}</span><br/>
                  was: <span className='line-through mr-4'>${this.state.product.previousPrice}</span>now: <span className='font-weight-bold '>
                  ${this.state.product.price}</span>
               {/* star rating */}
               <div className="row">
                  <div className="col-md-12">
                      <div className="stars">
                          <form name="starRating" onSubmit={this.rating.bind(this)}> 
                          <input className="star star-5" id="star-5" type="radio" name="star1" /> 
                          <label className="star star-5" htmlFor="star-5"></label> 
                          <input className="star star-4" id="star-4" type="radio" name="star2" /> 
                          <label className="star star-4" htmlFor="star-4"></label> 
                          <input className="star star-3" id="star-3" type="radio" name="star3" /> 
                          <label className="star star-3" htmlFor="star-3"></label> 
                          <input className="star star-2" id="star-2" type="radio" name="star4" /> 
                          <label className="star star-2" htmlFor="star-2"></label> 
                          <input className="star star-1" id="star-1" type="radio" name="star5" /> 
                          <label className="star star-1" htmlFor="star-1"></label> 
                          </form>
                      </div>
                  </div>
              </div>
            {/* product description */}
		 	        <p>{this.state.product.productDescription}</p>
		 	        <br/>
              {/* product sku */}
              <p id='sku'>Product Sku: {this.state.product.sku}</p>
              {/* add to cart  */}
              <input ref={this.callRef} onChange={this.updateNumOfItems.bind(this)} className='mr-5' type='number' min="1" max={this.state.product.stock} placeholder='1'></input>
              <ShopContext.Consumer>
		 	          {context =>(
                  <button onClick={() => context.addToCart(this.state.product,this.state.numOfItems)}  className="addToCart btn btn-primary">Add To Cart</button>
                 )}
              </ShopContext.Consumer>
              {/* items in stock */}
              <p id='stock'>{this.state.product.stock} in stock</p>
              {/* add to favorite */}
              {/* <div className="main-div">
               <div className="button-div"> 
               <button className="fav-button"> 
                 <i className="fa fa-star"></i> 
                 <span>Favorites</span> 
               </button> 
               </div>
              </div> */}
              {/* accordion */}
              <div id="accordion" className='mt-5 mb-3'>
                {/* <div className="card">
                  <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseOne">
                    Description
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body">
                    {/* {this.state.productDescription} */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div> */}
                 
                <div className="card">
                 <div className="card-header">
                   <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                     Additional Information
                   </a>
                 </div>
                 <div id="collapseTwo" className="collapse" data-parent="#accordion">
                   <div className="card-body">
                     Material: {this.state.product.filter[0]} <br/>
                     Color: {this.state.product.filter[1]} <br/>
                     Printing Time: {this.state.product.printingTime} Hours <br/>
                     Category: {this.state.product.filter[2]}<br/>
                     Size: {this.state.product.size}<br/>
                     Note: {this.state.product.note}
                   </div>
                 </div>
               </div>
               <div className="card">
               <div className="card-header">
                 <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                   Reviews
                 </a>
               </div>
               <div id="collapseThree" className="collapse" data-parent="#accordion">
                 <div className="card-body">
                   Lorem ipsum..
                 </div>
               </div>
             </div>
              </div>
		     </div>
          </div>
          <hr/>
          {/* you may also like */}
          <div className=" mx-auto mt-5 related-product">
           <h2 className='font-weight-bold'>You may also like</h2>
           <div className="row p-5">
                        { this.context.products.map((el) => {
                           return this.state.product.related.includes(el.title) &&
                            <Product
                             key={el.title} 
                            //  title={el.title}
                            //  description={el.description} src={el.src} price={el.price} rating={el.rating} 
                             obj={el} 
                             /> 
                          }
                         )
                        }
          
            </div>
          </div>
     
        </div>    
         
       )
    }
}
