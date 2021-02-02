import React, { Component } from 'react';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
// import ProductPage from "./components/productPage/ProductPage.jsx";
import CatalogPage from "./components/catalogPage/CatalogPage.jsx";



export default class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            {/* <ProductPage/> */}
            <CatalogPage/>
            <Footer/>
         </div>
      );
   }
}


// {/* <React.Fragment>
//             <Header />
//          </React.Fragment> */} //במקום div
