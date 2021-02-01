import React, { Component } from 'react';
import './product.css';

//use img.src to change images
class Product extends Component{
   
   constructor(props){
      super(props);
      this.state={
         src:"images/product-imgs/product5.jpg",
         stock: "5",
         sku:"PB35"
      }
   }

   changeSrc(e){
      this.setState({src:e.target.src})
   }

    render(){
       return(
        <div  className="container-fluid p-5 ">
          <div className="row">
           {/* images */}
             <div className="col-md-12 col-lg-6">
		 	           <img src={this.state.src} width="50%" height="50%" id="big-img"     className="img-fluid"/>
                 <div className="row m-2">
                 <img onClick={this.changeSrc.bind(this)} id='img1' src="images/product-imgs/product5.jpg" className="galary col-3 w-25 h-25 p-2 img-fluid"/>
                 <img onClick={this.changeSrc.bind(this)} id='img2' src="images/product-imgs/product2.jpg" className="col-3 w-25 h-25 p-2 img-fluid"/>
                 <img onClick={this.changeSrc.bind(this)} id='img3' src="images/product-imgs/product3.jpg" className="col-3 w-25 h-25 p-2 img-fluid"/>
                 <img onClick={this.changeSrc.bind(this)} id='img4' src="images/product-imgs/product4.jpg" className="col-3 w-25 h-25 p-2 img-fluid"/>
                 </div>
		         </div>
           {/* product datails */}
          <div className="col-md-12 col-lg-6">
		 	      <h2 className='font-weight-bold' >The 3D Printed Marble Machine</h2>
                  was: <span class='line-through mr-4'>$40</span>now: <span class='font-weight-bold '>$30</span>
               {/* star rating */}
               <div class="row">
                  <div class="col-md-12">
                      <div class="stars">
                          <form action=""> <input class="star star-5" id="star-5" type="radio" name="star" /> <label        class="star star-5" for="star-5"></label> <input class="star star-4" id="star-4" type="radio"           name="star" /> <label class="star star-4" for="star-4"></label> <input class="star star-3"          id="star-3" type="radio" name="star" /> <label class="star star-3" for="star-3"></label> <input        class="star star-2" id="star-2" type="radio" name="star" /> <label class="star star-2"        for="star-2"></label> <input class="star star-1" id="star-1" type="radio" name="star" /> <label          class="star star-1" for="star-1"></label> </form>
                      </div>
                  </div>
              </div>
            {/* product description */}
		 	      <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laboriosam laborum.       Harum     repellat quidem, sapiente necessitatibus voluptatibus quibusdam alias quam tempore esse     iure     asperiores aperiam. Nam voluptate facere ducimus amet!</p>
		 	    <br/>
              {/* product sku */}
              <p id='sku'>Product Sku: {this.state.sku}</p>
              {/* add to cart  */}
              <input class='mr-5' type='number' min="1" max={this.state.stock} placeholder='1'></input>
		 	    <a href="#" className="btn btn-primary">Add To Cart</a>
              {/* items in stock */}
              <p id='stock'>{this.state.stock} in stock</p>
              {/* add to favorite */}
              <div class="main-div">
               <div class="button-div"> 
               <button class="fav-button"> 
                 <i class="fa fa-star"></i> 
                 <span>Favorites</span> 
               </button> 
               </div>
              </div>
              {/* accordion */}
              <div id="accordion" class='mt-5'>
                <div class="card">
                  <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseOne">
                    Decription
                    </a>
                  </div>
                  <div id="collapseOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                      Lorem ipsum..
                    </div>
                  </div>
                </div>
                <div class="card">
                 <div class="card-header">
                   <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                     Additional Information
                   </a>
                 </div>
                 <div id="collapseTwo" class="collapse" data-parent="#accordion">
                   <div class="card-body">
                     Material: PLA <br/>
                     Color: Blue, Black <br/>
                     Printing Time: 35 Hours <br/>
                     Size: <br/>
                     Note: does not come with marbles
                   </div>
                 </div>
               </div>
               <div class="card">
               <div class="card-header">
                 <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                   Reviews
                 </a>
               </div>
               <div id="collapseThree" class="collapse" data-parent="#accordion">
                 <div class="card-body">
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
           <h2 class='font-weight-bold'>You may also like</h2>
           <div>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid"></img>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid"></img>
             <img src='images/product-imgs/product2.jpg' className="col-4 p-5 img-fluid"></img>
           </div>
          </div>
        </div>    
         
       );
    }
}

export default Product;