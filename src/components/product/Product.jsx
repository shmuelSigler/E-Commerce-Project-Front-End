import React, { Component } from 'react';

const font={
    fontFamily: "'Chakra Petch', sans-serif"
}

class Product extends Component{
    render(){
       return(
        <div style={font} class="container-fluid p-5 ml-5">
           <div class="row ">
             <div class="col-md-12 col-lg-6">
		 	    <img src="images/product-imgs/product1.jpg" width="50%" height="50%" class="img-fluid"/>
                 <div class="row m-2">
                 <img src="images/product-imgs/product5.jpg" class="col-3 w-25 h-25 p-2 img-fluid"/>
                 <img src="images/product-imgs/product2.jpg" class="col-3 w-25 h-25 p-2 img-fluid"/>
                 <img src="images/product-imgs/product3.jpg" class="col-3 w-25 h-25 p-2 img-fluid"/>
                 <img src="images/product-imgs/product4.jpg" class="col-3 w-25 h-25 p-2 img-fluid"/>
                 </div>
		     </div>
             <div class="col-md-12 col-lg-6">
		 	    <h2 class='font-weight-bold' >The 3D Printed Marble Machine</h2>
                <span>$30</span>
		 	    <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, laboriosam laborum.    Harum     repellat quidem, sapiente necessitatibus voluptatibus quibusdam alias quam tempore esse  iure     asperiores aperiam. Nam voluptate facere ducimus amet!</p>
		 	    
		 	    <br/>
		 	    <a href="#" class="btn btn-primary"> Learn More</a>
		     </div>
          </div>
        </div>    
         
       );
    }
}

export default Product;