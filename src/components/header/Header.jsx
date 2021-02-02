import React, { Component } from 'react';


export default class Header extends Component{
  render(){
    return(
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <img src="images/logo.jpg" width="80" height="80" alt="" loading="lazy"></img>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"data-toggle="dropdown"         aria-haspopup="true" aria-expanded="false">
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
          <form className="form-inline my-2 my-lg-0 mr-4">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
      </div>
      <div className="details">
          <p>
            <a className="mr-4" href="disconnect.html">Log In</a>
            <a href="disconnect.html">Sign Up</a>
           </p>
          <i className="fas fa-cart-plus fa-2x  "></i>
      </div>
      </nav> 
    </div>
    );
  }
 }





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