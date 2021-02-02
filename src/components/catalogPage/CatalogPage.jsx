import React, { Component } from 'react'
import Checkbox from '../checkbox/Checkbox'
import Product from '../product/Product'

import {productsObj} from "../product/productsObj.js"
import './catalogPage.css';

export default class CatalogPage extends Component {
    
    render() {
        const checkbox={
            material: ['PLA','PLA+','ABS'],
            color:['Blue','Red','White'],
            theme:['Theme1','Theme2','Theme3'],
            rating:['🌟','🌟🌟','🌟🌟🌟','🌟🌟🌟🌟','🌟🌟🌟🌟🌟']
        }
      
        return (

            <div className="container-fluid p-5">
              <div><h1>products</h1></div>
              {/* select div- use class=d-flex with justify */}
              <div className="d-flex justify-content-end"> 
                <select>
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
                       <div class="card ">
                         <div class="card-header">
                           <a class="collapsed card-link" data-toggle="collapse" href="#collapseOne">
                           Material
                           </a>
                         </div>
                         <div id="collapseOne" class="collapse show bg-light" data-parent="#accordion">
                           <div class="card-body">
                           { checkbox.material.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                           </div>
                         </div>
                       </div>
                       <div class="card">
                        <div class="card-header">
                          <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo">
                            Color
                          </a>
                        </div>
                        <div id="collapseTwo" class="collapse bg-light" data-parent="#accordion">
                          <div class="card-body">
                          { checkbox.color.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                          </div>
                        </div>
                      </div>
                      <div class="card">
                      <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree">
                          Theme
                        </a>
                      </div>
                      <div id="collapseThree" class="collapse bg-light" data-parent="#accordion">
                        <div class="card-body">
                        { checkbox.theme.map((el)=>{
                               return <Checkbox key={el} title={el}/>
                           })
                           }
                        </div>
                      </div>
                    </div>
                    
                    <div class="card">
                      <div class="card-header">
                        <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour">
                          Rating
                        </a>
                      </div>
                      <div id="collapseFour" class="collapse bg-light" data-parent="#accordion">
                        <div class="card-body">
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
                      {/* <div style={{display:'flex',flexWrap:'wrap'}}> */}
                      { productsObj.map((el)=>{
                          return <Product 
                            key={el.title} 
                             title={el.title}
                             description={el.description} src={el.src} price={el.price} rating={el.rating} />
                        })
                      }
                      
                      {/* <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/>
                      <img id='img1' src="images/product-imgs/product1.jpg" className="col-lg-4 col-md-6 col-sm p-3 img-fluid"/> */}
                      </div>
                </div>
              </div>
            </div>
            
        )
    }
}
