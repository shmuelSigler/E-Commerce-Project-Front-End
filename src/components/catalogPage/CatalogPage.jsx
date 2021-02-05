import React, { Component } from 'react'
// import {Route, Link} from 'react-router-dom';
import Checkbox from '../checkbox/Checkbox'
import Product from '../product/Product'

import {productsObj} from "../product/productsObj.js"
// import ProductPage from '../productPage/ProductPage';
import './catalogPage.css';
import difference from '../../../node_modules/lodash/difference.js'

export default class CatalogPage extends Component {
    
  constructor(props){
    super(props)
    this.state = {
        sort: 'High to Low',
        filterArr: [],
        myObj: productsObj,
        checkbox:{
          material: ['PLA','PLA+'],
          color:['Black','Blue','White'],
          theme:['Engineering','Game','Lithophane','Toy'],
          rating:[{star:'🌟', number: 1},
                  {star:'🌟🌟', number: 2},
                  {star:'🌟🌟🌟', number: 3},
                  {star:'🌟🌟🌟🌟', number: 4},
                  {star:'🌟🌟🌟🌟🌟', number: 5}],
          showing: '',
      }
    }
    
  }

  sort(e){
    let copyArr = [...this.state.myObj]
    switch (e.target.value) {
      case 'High to Low':
        copyArr.sort((a,b)=>b.price-a.price)
        break;
      case 'Low to High':
        copyArr.sort((a,b)=>a.price -b.price)
        break;
      case 'Top Rated':
        copyArr.sort((a,b)=>b.rating.length -a.rating.length)
        break;
      case 'Alphabetical order':
        copyArr.sort((a,b)=>
        (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0)
        break;
      default:copyArr.sort((a,b)=>b.price-a.price)
        break;
    }
    this.setState({ myObj: copyArr })
  }
  
  filter(id,bool){
    let copyArr = [...productsObj]    //always get the original array
    let arr=[...this.state.filterArr];  //update filterArr on every function call
    // let str= this.state.showing;
    if(bool){
      arr.push(id);
      // str+=id
    } 
    else{                         //filter out catagories 
      arr=arr.filter((el)=>{
        return el !==id;
      })
    }
    copyArr=copyArr.filter((el)=>{         //filter out the products  
      return difference(arr,el.filter).length === 0
    })
    
    this.setState({ myObj: copyArr })
    this.setState({ filterArr: arr }) 
  }
    
  show(e){
    
  }


  render() {
        // const checkbox={
        //     material: ['PLA','PLA+'],
        //     color:['Black','Blue','White'],
        //     theme:['Engineering','Game','Lithophane','Toy'],
        //     rating:[{star:'🌟', number: 1},
        //             {star:'🌟🌟', number: 2},
        //             {star:'🌟🌟🌟', number: 3},
        //             {star:'🌟🌟🌟🌟', number: 4},
        //             {star:'🌟🌟🌟🌟🌟', number: 5}]
        // }
      
        return (

            <div className="container-fluid p-5">
              <div><h1> 3D Catalog </h1></div>
              {/* select div- use class=d-flex with justify */}
              <div className="d-flex justify-content-end pr-5">
              <lable className="mr-2">Show</lable> 
                <select onChange={this.show.bind(this)}>
                    <option>6</option>
                    <option>12</option>
                </select> 

                <lable className="ml-3 mr-2">Sort By</lable> 
                <select onChange={this.sort.bind(this)}>
                    <option>High to Low</option>
                    <option>Low to High</option>
                    <option>Top Rated</option>
                    <option>Alphabetical order</option>
                </select> 
              </div>
              {/* left bar and column layout */}
              {/* left bar */}
              <div className="row">
                <div id="filter" className="col-12 col-md-4 col-lg-2">
                    <h3>Categories</h3>
                    <hr/>
                    <div>
                      <p>Showing: <small>{this.state.filterArr.join()}</small></p>
                    </div>
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
                           { this.state.checkbox.material.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)}/>
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
                          { this.state.checkbox.color.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)}/>
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
                        { this.state.checkbox.theme.map((el)=>{
                               return <Checkbox key={el} idFor={el} print={el} id={el} filter={this.filter.bind(this)}/>
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
                        { this.state.checkbox.rating.map((el)=>{
                               return <Checkbox key={el.number} idFor={el.number} print={el.star} id={el.number}
                                 filter={this.filter.bind(this)}
                               />
                           })
                           }
                        </div>
                      </div>
                    </div>
              </div>
                </div>
                {/* product layout */}
                <div className=" col-md-8 col-lg-10">
                      <div className="row p-5">
                        { this.state.myObj.map((el)=>{
                            return (
                              <Product 
                              key={el.title} 
                               title={el.title}
                               description={el.description} src={el.src} price={el.price} rating={el.rating}/>
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

  
    