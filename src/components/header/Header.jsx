import React, { Component } from 'react';

const font={
  fontFamily: "'Chakra Petch', sans-serif"
}

class Header extends Component{
  render(){
    return(
    <div style={font}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src="images/logo.jpg" width="80" height="80" alt="" loading="lazy"></img>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"data-toggle="dropdown"         aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
          </ul>
          <form class="form-inline my-2 my-lg-0 mr-4">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
      <div class="details">
          <p>
            <a class="mr-4" href="disconnect.html">Log In</a>
            <a href="disconnect.html">Sign Up</a>
           </p>
          <i class="fas fa-cart-plus fa-2x  "></i>
      </div>
      </nav> 
    </div>
    );
  }
 }





export default Header;



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