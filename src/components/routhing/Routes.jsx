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
import Checkout from "../checkout/Checkout"
import Receipt from '../receipt/Receipt'
import ScrollToTop from '../scrollToTop/ScrollToTop';
import Welcome from "../welcome/Welcome"
import ProtectedRoute from '../protectedRoute/ProtectedRoute'
import PasswordReset from "../passwordReset/PasswordReset";
import {auth} from '../../firebase'


export default class Routes extends Component {

    render() {
        
        return (
            <React.Fragment> 
            <Router>
            <ScrollToTop/>
                <Header/>
               {/* <Header numOfItems={this.state.numOfItems} 
               arrayOfOccurrences={this.state.arrayOfOccurrences}
               arrayOfUniqueObjects={this.state.arrayOfUniqueObjects}
               />     */}
               <>
                  <Switch>
                  {/* Route only load the component when specific path is in the url */}
                    <Route exact path='/' component={Home}/>
                    <ProtectedRoute exact path="/account/profile" component={Welcome} />

                    <Route path="/cart"  component={Cart}/>

                    {/* <Route path="/cart"  component={(props)=>  
                        <Cart {...props} myCart={this.state.myCart} 
                        numOfItems={this.state.numOfItems} 
                        arrayOfOccurrences={this.state.arrayOfOccurrences}
                        arrayOfUniqueObjects={this.state.arrayOfUniqueObjects}
                        addToCart={this.addToCart} 
                        removeFromCart={this.removeFromCart}
                        eraseProductFromCart={this.eraseProductFromCart}
                        />} /> */}

                    <Route path="/checkout" component={Checkout}/>
                    <Route path="/receipt" component={Receipt} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    <Route path="/passwordReset" component={PasswordReset}/>

                    {/* key meant for re-render Product when choosing from You may also like */}
                    {/* <Route key={window.location.pathname} path="/product/:id" component={ProductPage} /> */}
                    <Route path="/product/:id"  render={(matchProps) => (<ProductPage {...matchProps} {...this.props}key={window.location.pathname}/>)} />
                    
                    {/* /shop is from search in header */}
                    <Route  path="/shop" component={CatalogPage} />

                    {/* catalogPage/:id is from Home page carousel */}
                    <Route path="/catalogPage/:id" component={CatalogPage} />

                    <Route path="/catalogPage" key={window.location.pathname} component={CatalogPage} />
                    {/* <Route key={window.location.pathname} 
                    path="/catalogPage" 
                    component={(props) => <CatalogPage {...props} addToCart={this.addToCart}/>} /> */}

                    <Route path="/about" component={About}/>
                    <Route path="/blog" component={Blog} />
                    <Route path="/disclaimers" component={Disclaimers}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route component={NotFound}/>
                  </Switch>
               </>
               <Footer/>
            </Router>
            </React.Fragment>
        )
    }
}

/* render={(props) => <PropsPage {...props} title={`Props through render`} />} */
//   render={(matchProps) => (<ProductPage {...matchProps} {...this.props} addToCart={this.addToCart} />)}
//   addToCart=() =>{
//     console.log('working');
//  }