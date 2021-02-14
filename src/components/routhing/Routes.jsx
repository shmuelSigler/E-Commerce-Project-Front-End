import React, { Component } from 'react'
import {Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
//components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import ProductPage from '../productPage/ProductPage';
import CatalogPage from '../catalogPage/CatalogPage';
import NotFound from '../notFound/NotFound';
import Contacts from '../contacts/Contacts';
import About from '../about/About';
import Blog from '../blog/Blog';
import Disclaimers from '../disclaimers/Disclaimers';
import Login from '../login/Login';
import SignUp from '../signUp/SignUp';
import Cart from  '../cart/Cart';
import ScrollToTop from '../scrollToTop/ScrollToTop';
import { productsObj } from '../product/productsObj';

// import countBy from '../../../node_modules/lodash/countBy.js'
// import keys from '../../../node_modules/lodash/keys.js'
// import values from '../../../node_modules/lodash/values.js'

// import {productsObj} from "../product/productsObj.js"

let myCart = JSON.parse(localStorage.getItem("myCart"));
if (! myCart){
    myCart=[]
}

let numOfItems = Number(localStorage.getItem("numOfItems"));
if (!numOfItems) {
    numOfItems= 0;
}


export default class Routes extends Component {
    constructor(props){
        super(props)
        this.state={
            myCart: myCart,         //array of objects
            numOfItems: numOfItems,  //number of products in the cart
            currentProduct: {},
            numOfCurrentProduct: 1,
        }
    }


    addToCart=(product,num=1) =>{
      let copyArr=[...this.state.myCart]
    //   let totalNum= this.state.numOfItems;
    //   totalNum+=Number(num)

    //   if( !copyArr.includes(product) ){     //if the product not in the cart
    //     copyArr.push(product)
    //     this.setState({myCart: copyArr})
    //     localStorage.setItem('myCart',JSON.stringify(copyArr))
    //   }
      for (let i = 0; i < num; i++) {
        copyArr.push(product)  
      }
      let totalNum= copyArr.length;
      
      localStorage.setItem('myCart',JSON.stringify(copyArr))
      localStorage.setItem('numOfItems',totalNum)
      this.setState({myCart: copyArr})
      this.setState({numOfItems:totalNum})
      this.setState({ currentProduct: product })
      this.setState({ numOfCurrentProduct: num })
    
   }

   removeFromCart=(product) =>{
    let copyArr=[...this.state.myCart]
    // let totalNum= this.state.numOfItems;
    // totalNum-=Number(num)

    let index = copyArr.indexOf(product);
    copyArr.splice(index,1);
    let totalNum= copyArr.length;
    localStorage.setItem('myCart',JSON.stringify(copyArr))
    localStorage.setItem('numOfItems',totalNum)
    this.setState({myCart: copyArr})
    this.setState({numOfItems:totalNum})
    
   }

   eraseProductFromCart = (product) =>{
    let copyArr=[...this.state.myCart]
    copyArr= copyArr.filter(el =>  el.title !== product.title)
    let totalNum= copyArr.length;

    localStorage.setItem('myCart',JSON.stringify(copyArr))
    localStorage.setItem('numOfItems',totalNum)
    this.setState({myCart: copyArr})
    this.setState({numOfItems:totalNum})
    
   }

    render() {
        return (
            <Router>
            <ScrollToTop/>
               <Header numOfItems={this.state.numOfItems} />    
               <div>
                  <Switch>
                    <Route exact path='/' component={Home}/>

                    <Route path="/cart"  component={(props)=>  
                        <Cart {...props} myCart={this.state.myCart} numOfItems={this.state.numOfItems}      currentProduct={this.state.currentProduct} numOfCurrentProduct={this.state.numOfCurrentProduct} addToCart={this.addToCart} removeFromCart={this.removeFromCart}
                        eraseProductFromCart={this.eraseProductFromCart}
                        />} />
                    
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    {/* <Route path="/productPage" component={ProductPage}/>     */}
                    {/* key meant for re-render Product when choosing from You may also like */}
                    <Route path="/product/:id" component={(props) => <ProductPage {...props} 
                        key={window.location.pathname} addToCart={this.addToCart}/>} />
                    
                    {/* /shop is from search in header */}
                    <Route path="/shop" component={(props) => <CatalogPage {...props} 
                        addToCart={this.addToCart}/>}/>
                      
                    {/* catalogPage/:id is from Home page carousel */}
                    <Route path="/catalogPage/:id" component={(props) => <CatalogPage {...props} 
                        addToCart={this.addToCart}/>}/> 

                    <Route key={window.location.pathname} path="/catalogPage" component={(props) => <CatalogPage {...props} addToCart={this.addToCart}/>} />
                    <Route path="/about" component={About}/>
                    <Route path="/blog" component={Blog} />
                    <Route path="/disclaimers" component={Disclaimers}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route  component={NotFound}/>
                  </Switch>
               </div>
               <Footer/>
            </Router>
        )
    }
}

/* render={(props) => <PropsPage {...props} title={`Props through render`} />} */
//   render={(matchProps) => (<ProductPage {...matchProps} {...this.props} addToCart={this.addToCart} />)}
//   addToCart=() =>{
//     console.log('working');
//  }