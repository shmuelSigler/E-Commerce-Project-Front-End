import React, { Component } from 'react';
import Routes from "./components/routhing/Routes"
import ShopContext from './components/context/shopContext'
import { AuthProvider } from "./components/context/AuthContext"
import axios from 'axios'
import LoadingOverlay from 'react-loading-overlay';
import RingLoader from 'react-spinners/RingLoader'
// import {Link} from 'react-router-dom';
// import {productsObj} from "../src/components/product/productsObj"

// import Product from '../src/components/product/Product'

// import "./App.css"
// import ProductPage from "./components/productPage/ProductPage.jsx";
// import CatalogPage from "./components/catalogPage/CatalogPage.jsx";




export default class App extends Component{
   
   state={
      loading:true, //was false
      products:[],
      myCart: [],         //array of objects
      numOfItems: 0,  //number of products in the cart
      arrayOfOccurrences:[],
      arrayOfUniqueObjects: [],
      initialPrice: 0,
      shipmentPrice: 0,
      shipmentMethod:"Self-Pickup- $0.00",
      totalPrice: 0,
   }

   componentDidMount(){
      this.fetch()
      let myCart = JSON.parse(localStorage.getItem("myCart"));
      if (! myCart){
          myCart=[]
      }

      let numOfItems = Number(localStorage.getItem("numOfItems"));
      if (!numOfItems) {
          numOfItems= 0;
      }
      this.countTheOccurrenceOfEachObject(myCart,numOfItems)
  }

  async fetch(){
      try {
      const response = await axios.get('/products')
      this.setState(()=> { 
         return{
            products:response.data, 
            loading:false, 
      }})
      }catch(err) {
      console.log(err)
      }
   }
  
  countTheOccurrenceOfEachObject(copyArr,totalNum){
      // let arrayOfObjs=[...this.state.myCart]
      let result = {};
      let fixMyCart = []              //fix cart to remove duplicates
      copyArr.forEach(function(item) {            
         var objStr = JSON.stringify(item);
         result[objStr] = result[objStr] ? ++result[objStr] : 1;
      });

      let keys= Object.keys(result)           
      let values=Object.values(result)    //array of Occurrences
      keys=keys.map(el=>JSON.parse(el))   //array of unique objects
      //fix duplicates in cart - update myCart & numOfItems
      let sum=0
      for( let i=0; i<values.length ;i++ ){
         if( values[i] > keys[i].stock) values[i]=keys[i].stock  //fix to stock number
         sum+=values[i]
         for( let j=0; j<values[i]; j++ ){
            fixMyCart.push(keys[i])
         }
      }

      let initialPrice = keys.reduce(
         (acc,el,i)=> {return acc+el.price*values[i]}
         ,0)

      this.setState(()=>{
         return { arrayOfOccurrences:values, 
                  arrayOfUniqueObjects:keys, 
                  myCart: fixMyCart,
                  numOfItems:sum,
                  initialPrice: initialPrice,
                  totalPrice: initialPrice}
      })
      localStorage.setItem('myCart',JSON.stringify(fixMyCart))
      localStorage.setItem('numOfItems',sum)
  }

  
  addToCart=(product,num=1) =>{
      let copyArr=[...this.state.myCart]
      for (let i = 0; i < num; i++) {
      copyArr.push(product)  
      }
      let totalNum= copyArr.length;
      this.countTheOccurrenceOfEachObject(copyArr,totalNum)
  }

   removeFromCart=(product) =>{
      let copyArr=[...this.state.myCart]
      let index = copyArr.indexOf(product);
      copyArr.splice(index,1);
      let totalNum= copyArr.length;
      this.countTheOccurrenceOfEachObject(copyArr,totalNum)
   }

   eraseProductFromCart = (product) =>{
      let copyArr=[...this.state.myCart]
      copyArr= copyArr.filter(el =>  el.title !== product.title)
      let totalNum= copyArr.length;
      this.countTheOccurrenceOfEachObject(copyArr,totalNum)
   }

   computeTotalPrice= (option) =>{
      let matches = option.match(/(\d+)/);
      matches = Number(matches[0]);
      let totalPrice = matches+this.state.initialPrice;
      this.setState(() =>
         {return {shipmentPrice: matches,
                    totalPrice: totalPrice,
                    shipmentMethod:option}
      })
  }

  emptyCart =()=>{
      localStorage.removeItem("myCart");
      localStorage.removeItem("numOfItems");
      this.setState(()=>{
         return {
            myCart: [],         
            numOfItems: 0,  
            arrayOfOccurrences:[],
            arrayOfUniqueObjects: [],
            initialPrice: 0,
            shipmentPrice: 0,
            shipmentMethod:"Self-Pickup- $0.00",
            totalPrice: 0,
         }
      }
      )
  }

   render(){
      
      return(
         <LoadingOverlay
            active={this.state.loading}
            fadeSpeed={1000}
            spinner={<RingLoader color={'#20cee6'} size={250}/>}
            text='Loading your content...'
            >
            <AuthProvider>
               <ShopContext.Provider value={{
                  ...this.state,
                  addToCart: this.addToCart,
                  removeFromCart: this.removeFromCart,
                  eraseProductFromCart: this.eraseProductFromCart,
                  computeTotalPrice : this.computeTotalPrice,
                  emptyCart: this.emptyCart,
               }}>
                  <Routes/>
               </ShopContext.Provider>
            </AuthProvider>
         </LoadingOverlay>
         )
   }
}

