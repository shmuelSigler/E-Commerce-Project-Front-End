import React, { Component } from 'react';
import ShopContext from '../context/shopContext'
import {Link} from 'react-router-dom';
//MATERIAL UI
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';
// import { Popover } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
static contextType = ShopContext
  constructor(props){
    super(props)
    this.callRef=React.createRef(); //refrenece to dom element
    this.state={
      query: '',
      // numOfItems:this.props.numOfItems,
      name: '',
      // anchorEl: null,
    }
    // this.classes = makeStyles((theme) => ({
    //   popover: {
    //     pointerEvents: 'none',
    //   },
    //   paper: {
    //     padding: theme.spacing(1),
    //   },
    //   typography: {
    //     padding: theme.spacing(2),
        
    //   },
    // }));
    // this.open = Boolean(this.state.anchorEl);
  }
    
  // static getDerivedStateFromProps(props, state) {
  //   return {cartBadge: props.numOfItems };
  // }
//   componentDidMount(){
//     let {name} = JSON.parse(localStorage.getItem("user"))? JSON.parse(localStorage.getItem("user")): "" ;
//     if (name){
//         this.setState({name:name})
//     }
// }

  changeQuery(e){
    this.setState( {query:this.callRef.current.value} )
  }

  // logOut(){
  //   localStorage.removeItem("user")
  // //   logOutBtn=()=>{
  // //     auth.signOut().then(() => {
  // //         this.props.history.push("/");
  // //       }).catch((error) => {
  // //             alert(error," try again");
  // //       });
  // // }
  // }

  // handlePopoverOpen  = (event) => {
    
  //   this.setState({anchorEl: event.currentTarget});
  // };

  // handlePopoverClose  = () => {
  //   this.setState({anchorEl: null});
  // };
  //  handleClick = (event) => {
  //   this.setState({anchorEl: event.currentTarget});
  // };

  // handleClose = () => {
  //   this.setState({anchorEl: null});
  // };


  render(){
    
    // const open = Boolean(this.state.anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    // console.log(open);
    return(
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <Link to='/'>
        <ThreeDRotationIcon fontSize="large"/>
      </Link>
      
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
                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/#">Action</a>
                  <a className="dropdown-item" href="/#">Another action</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/#">Something else here</a>
                </div>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
          </ul>
          <form className="form-inline  my-lg-0 mr-4" action='/shop'>
              <input ref={this.callRef} className="form-control mr-sm-2" type="search" placeholder="Search" onChange={this.changeQuery.bind(this)} name='q' pattern="[a-z A-Z]{1,}" title="one or more characters in the search phrase a-z, A-Z and no numbers" required="required"/>
              <button className="serach btn btn-outline-success my-2 my-sm-0" type="submit"><span>Search</span></button>
          </form>
      </div>
      <div className="details ">
          <div>
            {this.state.name?<span>Hello,{this.state.name} <small><a href="/" onClick={this.logOut.bind(this)}>Log Out</a></small></span>
             :<div>
                <Link to='/login' >Log In</Link>
                <Link className="ml-4" to='/signUp'>Sign Up</Link>
             </div>}
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-4 d-inline ">
              <Link to={"/cart"}>
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={this.context.numOfItems} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
              </Link>
            </div>
          <div className=" col-8 ">  
            <ul className="nav ">
              <li className="dropdown">
                <a href="/#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> 
                Items in Cart
                </a>
                <ul className="dropdown-menu dropdown-menu-right dropdown-cart" role="menu">
                    { this.context.arrayOfUniqueObjects.length !==0?
                      this.context.arrayOfUniqueObjects.map((el,i)=>{ 
                         return i<5? 
                         <div key={el.title}>
                        <b><li>
                          <span className="item ">
                            <span className="item-left ">
                              <Link to={"/product/" + el.title} key={el.title}>
                                  <img className="shadow" src={el.thumbnail} alt={el.title} width="40"/>
                                  <span className="item-info">
                                      <span>{el.title}</span>
                                      <span>price: {el.price}$ <small>X{this.context.arrayOfOccurrences[i]}</small></span>
                                  </span>
                                  
                              </Link>
                              <button id='remove-btn' className="btn btn-danger p-1" onClick={()=> this.context.eraseProductFromCart(el)}>remove from cart</button>
                            </span>
                            
                          </span>
                        </li></b></div>
                     : null 
                    })
                    : <span>There are no items in cart</span>
                    }
                    <hr/>
                    <li>Subtotal: ${this.context.arrayOfUniqueObjects.reduce(
                                    (acc,el,i)=> {return acc+el.price*this.context.arrayOfOccurrences[i]}
                                    ,0)}
                    </li>
                   
                    <li className="btn d-flex justify-content-center mt-1">
                      <Link className="text-center" to={"/cart"}>View Cart For More Details</Link>
                    </li>
                            
                </ul>
              </li>
      </ul>
    </div>
</div>

      </div>
      </nav> 
    </>
    );
  }
 }
