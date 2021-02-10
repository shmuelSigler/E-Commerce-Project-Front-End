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

export default class Routes extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    addToCart=() =>{
        console.log('working');
     }
  
    render() {
        return (
            <Router>
            <ScrollToTop/>
               <Header/>    
               <div>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path="/cart"  component={Cart} />
                    <Route path="/login" component={Login}/>
                    <Route path="/signUp" component={SignUp}/>
                    {/* <Route path="/productPage" component={ProductPage}/>     */}
                    <Route path="/product/:id" render={(matchProps) => (<ProductPage {...matchProps} {...this.props} addToCart={this.addToCart} />)} />
                    {/* render={(props) => <PropsPage {...props} title={`Props through render`} />} */}
                    <Route path="/shop" render={(matchProps) => (<CatalogPage {...matchProps} {...this.props} addToCart={this.addToCart}/>)}/>  
                    <Route path="/catalogPage/:id" render={(matchProps) => (<CatalogPage {...matchProps} {...this.props} addToCart={this.addToCart}/>)}/>       
                    <Route path="/catalogPage" render={(matchProps) => (<CatalogPage {...matchProps} {...this.props} addToCart={this.addToCart}/>)} />
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
