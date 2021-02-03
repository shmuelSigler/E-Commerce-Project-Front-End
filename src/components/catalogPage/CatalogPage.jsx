import React, { Component } from 'react'
// import {Route, Link} from 'react-router-dom';
import Checkbox from '../checkbox/Checkbox'
import Product from '../product/Product'

import {productsObj} from "../product/productsObj.js"
// import ProductPage from '../productPage/ProductPage';
import './catalogPage.css';

export default class CatalogPage extends Component {
    
  constructor(props){
    super(props)
    this.state = {
        sort: 'High to Low',
        myObj: productsObj,
    }
    
  }

  updateState(e){
    
    let copyArr = [...this.state.myObj]
    if(e.target.value === 'High to Low'){
      copyArr.sort((a,b)=>b.price-a.price)
    }else{
      copyArr.sort((a,b)=>a.price -b.price)
    }
    
    this.setState({ myObj: copyArr })
  }
  
    render() {
        const checkbox={
            material: ['PLA','PLA+','ABS'],
            color:['Blue','Red','White'],
            theme:['Theme1','Theme2','Theme3'],
            rating:['🌟','🌟🌟','🌟🌟🌟','🌟🌟🌟🌟','🌟🌟🌟🌟🌟']
        }
      
        return (

            <div className="container-fluid p-5">
              <div><h1> 3D Catalog</h1></div>
              {/* select div- use class=d-flex with justify */}
              <div className="d-flex justify-content-end"> 
                <select onChange={this.updateState.bind(this)}>
                    <option>High to Low</option>
                    <option>Low to High</option>
                </select> 
              </div>
              {/* left bar and column layout */}
              {/* left bar */}
              <div className="row">
                <div id="filter" className="col-sm-4 col-lg-2">
                    <h3>Categories</h3>
                    <hr/>
                    {/* accordion */}
                    <div id="accordion" >
                       <div className="card ">
                         <div className="card-header">
                           <a className="collapsed card-link" data-toggle="collapse" href="#collapseOne">
                           Material
                           </a>
                         </div>
                         <div id="collapseOne" className="collapse show bg-light" data-parent="#accordion">
                           <div className="card-body">
                           { checkbox.material.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                           </div>
                         </div>
                       </div>
                       <div className="card">
                        <div className="card-header">
                          <a className="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            Color
                          </a>
                        </div>
                        <div id="collapseTwo" className="collapse bg-light" data-parent="#accordion">
                          <div className="card-body">
                          { checkbox.color.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                          </div>
                        </div>
                      </div>
                      <div className="card">
                      <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                          Theme
                        </a>
                      </div>
                      <div id="collapseThree" className="collapse bg-light" data-parent="#accordion">
                        <div className="card-body">
                        { checkbox.theme.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                        </div>
                      </div>
                    </div>
                    
                    <div className="card">
                      <div className="card-header">
                        <a className="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                          Rating
                        </a>
                      </div>
                      <div id="collapseFour" className="collapse bg-light" data-parent="#accordion">
                        <div className="card-body">
                        { checkbox.rating.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                        </div>
                      </div>
                    </div>
              </div>
                </div>
                {/* product layout */}
                <div className="col-sm-8 col-lg-10">
                      <div className="row p-5">
                        { this.state.myObj.map((el)=>{
                            return (
                              <Product 
                              key={el.title} 
                               title={el.title}
                               description={el.description} src={el.src} price={el.price} rating={el.rating} />
                            )
                          })
                        }
                    
                      </div>
                </div>
              </div>
            </div>
            
        )
    }
}

  
                      {/* <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/> */}