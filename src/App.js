import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import "./App.css"
// import ProductPage from "./components/productPage/ProductPage.jsx";
// import CatalogPage from "./components/catalogPage/CatalogPage.jsx";


export default class App extends Component{
   render(){
      return(
         <div>
            <div className="container-fluid mb-5" style={{backgroundColor:" rgb(242, 242, 247)"}} id="venue">
    <div className="">
        <div className="row  animate-in-down rounded-lg">
            <div className="p-4 col-md-6 align-self-center text-color">
                <p className="m-0">Feel comfortable, and purchase items</p>
                <h2>Discover the products</h2>
                <p className="my-4">Explore the catalog for your desired 3d model, we got many themes in all size and shape.</p> 
                <Link to="/catalogPage" >
                  <button type='button' className="btn mb-3 p-2 bg-primary text-white ">View the catalog</button>
                </Link>
                
            </div>
            <div className="p-0 col-md-6">
                <div className="carousel slide" data-ride="carousel" id="carousel1">
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item"> <img className="d-block img-fluid w-100" src="/images/product-imgs/Mini Crossbow3.jpg" alt="first slide"/>
                            <div className="carousel-caption">
                                <h3 >Mini Crossbow</h3>
                                <p>finest engineering</p>
                            </div>
                        </div>
                        <div className="carousel-item active"> <img className="d-block img-fluid w-100" src="/images/product-imgs/Jet Fighter4.jpg" data-holder-rendered="true" alt=''/>
                            <div className="carousel-caption">
                                <h3>Jet Fighter</h3>
                                <p>edge technology</p>
                            </div>
                        </div>
                        <div className="carousel-item"> <img className="d-block img-fluid w-100" src="/images/product-imgs/Batmobile1.jpg" data-holder-rendered="true" alt=''/>
                            <div className="carousel-caption">
                                <h3>Batmobile</h3>
                                <p>best cars</p>
                            </div>
                        </div>
                    </div> <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container my-5">

<p className="font-weight-bold">Featured Product</p>

<hr className="my-1"/>

{/* <!--Carousel Wrapper--> */}
<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">

  {/* <!--Controls--> */}
  <div className="controls-top">
    <a className="btn-floating" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
    <a className="btn-floating" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
  </div>
  {/* <!--/.Controls--> */}

  {/* <!--Indicators--> */}
  <ol className="carousel-indicators mt-5">
    <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
    <li data-target="#multi-item-example" data-slide-to="1"></li>
    <li data-target="#multi-item-example" data-slide-to="2"></li>
  </ol>
  {/* <!--/.Indicators--> */}

  {/* <!--Slides--> */}
  <div className="carousel-inner" role="listbox">

    {/* <!--First slide--> */}
    <div className="carousel-item active">

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* <!--/.First slide--> */}

    {/* <!--Second slide--> */}
    <div className="carousel-item">

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of thecard's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg" alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* <!--/.Second slide--> */}

    {/* <!--Third slide--> */}
    <div className="carousel-item">

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>

        <div className="col-md-4 clearfix d-none d-md-block">
          <div className="card mb-2">
            <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
              alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
              <a className="btn btn-primary">Button</a>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* <!--/.Third slide--> */}

  </div>
  {/* <!--/.Slides--> */}

</div>
{/* <!--/.Carousel Wrapper--> */}


</div>



         </div>
      );
   }
}


// <div className="row blog">
//                 <div className="col-md-12">
//                     <div id="blogCarousel" className="carousel slide" data-ride="carousel">

//                         <ol className="carousel-indicators">
//                             <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
//                             <li data-target="#blogCarousel" data-slide-to="1"></li>
//                         </ol>

//                         {/* <!-- Carousel items --> */}
//                         <div className="carousel-inner">

//                             <div className="carousel-item active">
//                                 <div className="row">
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style=
//                                             {{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style=
//                                             {{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style=
//                                             {{maxWidth:"100%"}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style=
//                                             {{maxWidth:"100%"}}/>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 {/* <!--.row--> */}
//                             </div>
//                             {/* <!--.item--> */}

//                             <div className="carousel-item">
//                                 <div className="row">
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style={{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style={{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style={{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                     <div className="col-md-3">
//                                         <a href="#">
//                                             <img src="http://placehold.it/250x250" alt="Image" style={{maxWidth:'100%'}}/>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 {/* <!--.row--> */}
//                             </div>
//                             {/* <!--.item--> */}

//                         </div>
//                         {/* <!--.carousel-inner--> */}
//                     </div>
//                     {/* <!--.Carousel--> */}

//                 </div>
//             </div>