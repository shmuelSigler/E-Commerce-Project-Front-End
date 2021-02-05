//react
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
//components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import App from './App';
import ProductPage from './components/productPage/ProductPage';
import CatalogPage from './components/catalogPage/CatalogPage';
import NotFound from './components/notFound/NotFound';
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Disclaimers from './components/disclaimers/Disclaimers';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
//css
import './index.css';

// import reportWebVitals from './reportWebVitals';

const routing = (
  <div>
  <Router>
  <ScrollToTop/>
     <Header/>    
     <div>
        <Switch>
          <Route exact path='/' component={App}/>
          
          <Route path="/login" component={Login}/>
          <Route path="/signUp" component={SignUp}/>
          
          {/* <Route path="/productPage" component={ProductPage}/>     */}
          <Route path="/product/:id" component={ProductPage}/>
          <Route path="/catalogPage" component={CatalogPage}/>

          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog} />
          <Route path="/disclaimers" component={Disclaimers}/>
          <Route path="/contacts" component={Contacts}/>
          
          <Route  component={NotFound}/>
        </Switch>
        
     </div>
     <Footer/>
  </Router>
  </div>
    
)

ReactDOM.render(
    routing,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
