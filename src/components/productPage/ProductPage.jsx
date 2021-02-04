import React, { Component } from 'react';
import {productsObj} from "../product/productsObj.js"
import './productPage.css';

//3 ways to fix context this - issue
        //1. (event) => this.setOrder(event)
        //2. constructor : this.setOrder = this.setOrder.bind(this)
        //3. inline: this.setOrder.bind(this)

//use img.src to change images
export default class ProductPage extends Component{
   
   constructor(props){
      super(props);
      const [product] = productsObj.filter((product) => (product.title ===  props.match.params.id))
       //console.log(product)
      //console.log(props);
      this.state={
         title: product.title,
         src:product.src,
         image1:product.image1,
         image2:product.image2,
         image3:product.image3,
         image4:product.image4,
         
         price: product.price,
         previousPrice: product.previousPrice,
         rating: product.rating,
         stock: product.stock,
         sku:product.sku,

      }
   }

   changeSrc(e){
      this.setState({src:e.target.src})
   }

    render(){
       return(
        <div  className="container-fluid p-5">
         
          <div className="row">
           {/* images */}
             <div className="col-md-12 col-lg-6">
		 	        <img src={this.state.src} id="big-img" className="img-fluid  shadow-lg " alt=''/>
              <div className="row m-2 ">
                 <img onClick={this.changeSrc.bind(this)} id='img1' src={this.state.image1} className="gallary col-md-3 col-sm-6 p-2 img-fluid" alt=''/>
                 <img onClick={this.changeSrc.bind(this)} id='img2' src={this.state.image2} className="gallary col-md-3 col-sm-6 p-2 img-fluid" alt=''/>
                 <img onClick={this.changeSrc.bind(this)} id='img3' src={this.state.image3} className="gallary col-md-3 col-sm-6 p-2 img-fluid" alt=''/>
                 <img onClick={this.changeSrc.bind(this)} id='img4' src={this.state.image4} className="gallary col-md-3 col-sm-6 p-2 img-fluid" alt=''/>
              </div>
		         </div>
           {/* product datails */}
          <div className="col-md-12 col-lg-6">
		 	      <h2 className='font-weight-bold' >{this.state.title}</h2>
             <span>{this.state.rating}</span><br/>
                  was: <span className='line-through mr-4'>${this.state.previousPrice}</span>now: <span className='font-weight-bold '>
                  ${this.state.price}</span>
               {/* star rating */}
               <div className="row">
                  <div className="col-md-12">
                      <div className="stars">
                          <form action=""> <input className="star star-5" id="star-5" type="radio" name="star" /> <label        className="star star-5" htmlFor="star-5"></label> <input className="star star-4" id="star-4" type="radio"           name="star" /> <label className="star star-4" htmlFor="star-4"></label> <input className="star star-3"          id="star-3" type="radio" name="star" /> <label className="star star-3" htmlFor="star-3"></label> <input        className="star star-2" id="star-2" type="radio" name="star" /> <label className="star star-2"        htmlFor="star-2"></label> <input className="star star-1" id="star-1" type="radio" name="star" /> <label          className="star star-1" htmlFor="star-1"></label> </form>
                      </div>
                  </div>
              </div>
            {/* product description */}
		 	      <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laboriosam laborum.       Harum     repellat quidem, sapiente necessitatibus voluptatibus quibusdam alias quam tempore esse     iure     asperiores aperiam. Nam voluptate facere ducimus amet!</p>
		 	        <br/>
              {/* product sku */}
              <p id='sku'>Product Sku: {this.state.sku}</p>
              {/* add to cart  */}
              <input className='mr-5' type='number' min="1" max={this.state.stock} placeholder='1'></input>
		 	        <button  className="btn btn-primary">Add To Cart</button>
              {/* items in stock */}
              <p id='stock'>{this.state.stock} in stock</p>
              {/* add to favorite */}
              <div className="main-div">
               <div className="button-div"> 
               <button className="fav-button"> 
                 <i className="fa fa-star"></i> 
                 <span>Favorites</span> 
               </button> 
               </div>
              </div>
              {/* accordion */}
              <div id="accordion" className='mt-5 mb-3'>
                <div className="card">
                  <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#collapseOne">
                    Decription
                    </a>
                  </div>
                  <div id="collapseOne" className="collapse show" data-parent="#accordion">
                    <div className="card-body">
                      Lorem ipsum..
                    </div>
                  </div>
                </div>
                <div className="card">
                 <div className="card-header">
                   <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                     Additional Information
                   </a>
                 </div>
                 <div id="collapseTwo" className="collapse" data-parent="#accordion">
                   <div className="card-body">
                     Material: PLA <br/>
                     Color: Blue, Black <br/>
                     Printing Time: 35 Hours <br/>
                     Size: <br/>
                     Note: does not come with marbles
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
          <div className="row mx-auto mt-5 related-product">
           <h2 className='font-weight-bold'>You may also like</h2>
           <div>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid" alt=''></img>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid" alt=''></img>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid" alt=''></img>
           </div>
          </div>
          
          

        </div>    
         
       );
    }
}

