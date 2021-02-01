import React, { Component } from 'react';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Product from "./components/product/Product.jsx";

class App extends Component{
   render(){
      return(
         <div>
            <Header/>
            <Product/>
            <Footer/>
         </div>
      );
   }
}

export default App;
// {/* <React.Fragment>
//             <Header />
//          </React.Fragment> */} //במקום div
