import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import axios from 'axios';

//react.js examples
import {Animated} from "react-animated-css";
import Carousel from 'react-elastic-carousel'
//ICONS
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNew';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import WhatshotIcon from '@material-ui/icons/Whatshot';
//ZOOM API FROM MATERIAL UI
import Zoom from '@material-ui/core/Zoom';

import "./home.css"

export default class Home extends Component {

    constructor(){
        super();
        this.state={
            loading:false,
            productsObj: [],
        }
    }

    componentDidMount(){
        this.fetch()
      }
    
      fetch(){
        axios.get('http://localhost:3000/products')
            .then((response)=> {
              this.setState({productsObj:response.data, loading:true})
            })
            .catch((error)=> {
              console.log(error);
            })
      }

    render(){
        return(
           <div>
            <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
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
                              <div className="carousel-caption ">
                                  <h3 className="display-4 ">Featured Product</h3>
                                  <p className="font-">finest engineering</p>
                                  <Link to={"/catalogPage/Featured"} >
                                      <button type='button' className="btn mb-3 p-2 bg-primary text-white ">Shop Now</button>
                                  </Link>
                              </div>
                          </div>
                          <div className="carousel-item active"> <img className="d-block img-fluid w-100" src="/images/product-imgs/Jet Fighter4.jpg" data-holder-rendered="true" alt=''/>
                              <div className="carousel-caption">
                                  <h3 className="display-4">New Products</h3>
                                  <p className="display-5">edge technology</p>
                                  <Link to={"/catalogPage/New"} >
                                      <button type='button' className="btn mb-3 p-2 bg-primary text-white ">Shop Now</button>
                                  </Link>
                              </div>
                          </div>
                          <div className="carousel-item"> <img className="d-block img-fluid w-100" src="/images/product-imgs/Batmobile1.jpg" data-holder-rendered="true" alt=''/>
                              <div className="carousel-caption">
                                  <h3 className="display-4">On Sale</h3>
                                  <p>hurry up</p>
                                  <Link to={"/catalogPage/Sale"} >
                                      <button type='button' className="btn mb-3 p-2 bg-primary text-white ">Shop Now</button>
                                  </Link>
                              </div>
                          </div>
                      </div> <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a> <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </Animated>
  
  {/* CAROUSEL SECTION */}
  {/* Featured */}
      <div className="container my-5 ">
          <p className="font-weight-bold">Featured Product</p>
          <hr className="my-2"/>
          { this.state.loading? <Carousel itemsToShow={3} focusOnSelect={true}>
          { this.state.productsObj.map((el)=>{
                return el.special==='Featured' && 
                  <div key={el.title} className="singleProduct mr-5">
                  <div className="image">
                  <Zoom in={true}>
                       <div className="special display-4 float-right">
                          { (el.special ==='New' && <FiberNewOutlinedIcon fontSize="large" 
                             style={{ fill: '#8e24aa' }}/>) ||
                            (el.special ==='Sale' && <TrendingDownIcon fontSize="large" color="error"/>)  ||
                            (el.special ==='Featured' && <WhatshotIcon fontSize="large" 
                             style={{ fill: '#ffeb3b' }}/>)
                          }
                       </div>
                     </Zoom>
                    <Link to={"/product/"+el.title}>
                        <img  className="img-fluid " src={el.thumbnail} alt="img1"></img>
                    </Link>
                    </div>
                    <h5><b>{el.title}</b></h5>
                    <p>{el.rating}</p>
                    <span className="d-block"><b>${el.price}</b></span>
                    <small>{el.filter[2]}</small>
                  </div>                 
          })
          }
          </Carousel> :(<div>Loading...</div>)}
      </div>
  {/* New */}
  <div className="container my-5 ">
          <p className="font-weight-bold">New Product</p>
          <hr className="my-2"/>
          {this.state.loading? <Carousel itemsToShow={3}>
          { this.state.productsObj.map((el)=>{
                return el.special==='New' && 
                  <div key={el.title} className="singleProduct mr-5">
                  <div className="image">
                  <Zoom in={true}>
                       <div className="special display-4 float-right">
                          { (el.special ==='New' && <FiberNewOutlinedIcon fontSize="large" 
                             style={{ fill: '#8e24aa' }}/>) ||
                            (el.special ==='Sale' && <TrendingDownIcon fontSize="large" color="error"/>)  ||
                            (el.special ==='Featured' && <WhatshotIcon fontSize="large" 
                             style={{ fill: '#ffeb3b' }}/>)
                          }
                       </div>
                     </Zoom>
                    <Link to={"/product/"+el.title}>
                        <img  className="img-fluid" src={el.thumbnail} alt="img1"></img>
                    </Link>
                    </div>
                    <h5><b>{el.title}</b></h5>
                    <p>{el.rating}</p>
                    <span className="d-block"><b>${el.price}</b></span>
                    <small>{el.filter[2]}</small>
                  </div>                 
          })
          }
          </Carousel> : (<div>Loading...</div>)}
      </div>
  {/* Sale */}
  <div className="container my-5 ">
          <p className="font-weight-bold">On Sale</p>
          <hr className="my-2"/>
          {this.state.loading? <Carousel itemsToShow={3}>
          { this.state.productsObj.map((el)=>{
                return el.special==='Sale' && 
                  <div key={el.title} className="singleProduct mr-5">
                  <div className="image">
                  <Zoom in={true}>
                       <div className="special display-4 float-right">
                          { (el.special ==='New' && <FiberNewOutlinedIcon fontSize="large" 
                             style={{ fill: '#8e24aa' }}/>) ||
                            (el.special ==='Sale' && <TrendingDownIcon fontSize="large" color="error"/>)  ||
                            (el.special ==='Featured' && <WhatshotIcon fontSize="large" 
                             style={{ fill: '#ffeb3b' }}/>)
                          }
                       </div>
                     </Zoom>
                    <Link to={"/product/"+el.title}>
                    <img  className="img-fluid" src={el.thumbnail} alt="img1"></img>
                    </Link>
                    </div>
                    <h5><b>{el.title}</b></h5>
                    <p>{el.rating}</p>
                    <span className="d-block"><b>${el.price}</b></span>
                    <small>{el.filter[2]}</small>
                  </div>                 
          })
          }
          </Carousel> : (<div>Loading...</div>)}
      </div>
  
           </div>
        );
     }
}
