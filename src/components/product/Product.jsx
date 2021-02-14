import React from 'react'
import { Link } from 'react-router-dom'
// import productsObj from "./productsObj.js"
import "./product.css"
//ICONS
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNew';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import WhatshotIcon from '@material-ui/icons/Whatshot';
//ZOOM API FROM MATERIAL UI
import Zoom from '@material-ui/core/Zoom';
//Material UI components -QUICK VIEW
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//react.js example components
import {Animated} from "react-animated-css";
//! IN THE Popover DOCUMANTION (MATERIAL-UI) THERE IS A FUNCTION AND NOT CLASS SO I CONVERTED IT FROM CLASS TO FUNCTION

const useStyles = makeStyles((theme) => ({      // useStyles for the padding inside the popup
    typography: {
      padding: theme.spacing(2),
        
    },
  }));


export default function Product(props)  {
  
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    function alert(){
      //?MAYBE DIABLE BUTTON ANS SHOW MESSAGE THAT ITEM WAS ALREADY BEEN ADDED
      // document.getElementById("addToCart").disabled = true
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
     
        return (
          
            <div className="singleProduct col-lg-4 col-md-6 ">
              {/* <Animated animationIn="pulse" animationOut="rollOut" animationInDuration={1000} animationOutDuration= {800} isVisible={true}> */}
                <figure className="">
                  <div className="image">
                   <Zoom in={true}>
                     <div className="special display-4 float-right">
                        { (props.special ==='New' && <FiberNewOutlinedIcon fontSize="large" 
                           style={{ fill: '#8e24aa' }}/>) ||
                          (props.special ==='Sale' && <TrendingDownIcon fontSize="large" color="error"/>)  ||
                          (props.special ==='Featured' && <WhatshotIcon fontSize="large" 
                           style={{ fill: '#ffeb3b' }}/>)
                        }
                     </div>
                   </Zoom>
                      <Link to={"/product/" + props.title}>
                        <img className="img-fluid change-product" src={props.src} alt={props.title} />
                      </Link>
                  </div>
                    
                    <figcaption>
                        <h3 className="font-weight-bolder">{props.title}</h3>
                        <span>{props.rating}</span><br/>
                        <span><b>${props.price}</b></span><br/>
                        <span>{props.description}</span>
                    </figcaption>
                   
         {/* QUICK VIEW & ADD TO CART BUTTUNS */}
                <div className='d-flex justify-content-center mt-3'>
                {/* ADD TO CART BUTTON */}
                  <button id="addToCart" onClick={() => {props.addToCart(props.obj);alert()}} className="addToCart btn btn-primary mr-5">
                    add to cart
                  </button>
                  <Button  aria-describedby={id} variant="contained" color="primary" onClick={handleClick}
                  style={{ backgroundColor: '#4285f4' ,
                          fontSize: '16px',
                          fontFamily: 'Chakra Petch',
                          padding: '0px 13px',
                          boxShadow: '0px 17px 10px -10px rgba(0, 0, 0, 0.4)'}}>
                    QUICK VIEW
                  </Button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}>
                    <Typography component={'div'}  className={classes.typography} style={{ backgroundColor: '#f4f9f9',
                          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                          fontSize: '16px',
                          fontFamily: 'Chakra Petch',
                          padding: '0px 13px',
                          boxShadow: '0px 17px 10px -10px rgba(0, 0, 0, 0.4)'}}>
                       <div className="p-2">
                          <span className='font-weight-bold'>{props.obj.title}</span>
                          <hr className="w-10"/>
                          <span className='line-through mr-4'>was: ${props.obj.previousPrice}</span>
                          <span className='font-weight-bold '>now: ${props.obj.price}</span>
                          <div className="font-weight-bold">
                              <p>{props.obj.productDescription}</p>
                              <p>
                                Product Sku: {props.obj.sku} <br/> {props.obj.stock} in stock
                              </p>
                              <ul>
                                <li>Material: {props.obj.filter[0]}</li>
                                <li>Color: {props.obj.filter[1]} </li>
                                <li>Printing Time: {props.obj.printingTime} Hours </li>
                                <li>Category: {props.obj.filter[2]}</li>
                                <li>Size: {props.obj.size}</li>
                                <li>Note: {props.obj.note}</li>
                              </ul>
                          </div>
                       </div>
                    </Typography>
                  </Popover>
                </div>

                </figure>
                {/* </Animated> */}
            </div>
            
        );
    
}
