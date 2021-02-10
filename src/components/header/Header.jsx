import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//MATERIAL UI
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

import './header.css';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

export default class Header extends Component{

  constructor(props){
    super(props)
    this.callRef=React.createRef(); //refrenece to dom element
    this.state={
      query: '',
    }
    
  }
    
  changeQuery(e){
    this.setState( {query:this.callRef.current.value} )
  }

  

  render(){
    return(
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <ThreeDRotationIcon fontSize="large"/>
      {/* <img src="/images/logo.jpg" width="80" height="80" alt="" loading="lazy"/> */}
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link exact="true" to='/' className="nav-link">Home</Link>
                {/* <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> */}
              </li>
              <li className="nav-item">
                <Link to='/catalogPage' className="nav-link">Catalog Page</Link>
                {/* <a className="nav-link" href="#">Link</a> */}
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0 mr-4" action='/shop'>
              <input ref={this.callRef} className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.changeQuery.bind(this)} name='q' pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers" required="required"/>
              <button className="serach btn btn-outline-success my-2 my-sm-0" type="submit"><span>Search</span></button>
              
          </form>
      </div>
      <div className="details">
          <p>
            <Link  className="mr-4" to='/login' >Log In</Link>
            <Link  to='/signUp' >Sign Up</Link>
           </p>
           <Link to={"/cart"}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
          </Link>
      </div>
      </nav> 
    </div>
    );
  }
 }


{/* <i className="fas fa-cart-plus fa-2x  "></i> */}


// function Header() {
//     return (
//       <header>
//         <h1>My WEbsite</h1>
//       </header>
//     );
//   }

//     <nav class="navbar navbar-expand-md bg-dark navbar-dark ">
        
    //     <a class="navbar-brand" href="#">Logo</a>
    //     <i  class="fas fa-cart-plus fa-2x text-white mg-2"></i>
        
        
        // <div class="text-left">
        //     <form class="form-inline text-left" action="/action_page.php">
        //         <input class="form-control mr-sm-2 " type="text" placeholder="Search"/>
        //         <button class="btn btn-success" type="submit">Search</button>
        //     </form>
        // </div>
        
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    //       <ul class="navbar-nav ">
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">Link</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>