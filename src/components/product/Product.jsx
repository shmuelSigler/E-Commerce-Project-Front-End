import React from 'react'
// import { Link } from 'react-router-dom'
// import productsObj from "./productsObj.js"
import "./product.css"
//ICONS
import FiberNewOutlinedIcon from '@material-ui/icons/FiberNew';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import WhatshotIcon from '@material-ui/icons/Whatshot';
//ZOOM API FROM MATERIAL UI
import Zoom from '@material-ui/core/Zoom';
//QUICK vIEW
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
     
        return (
        
            <div className="singleProduct col-lg-4 col-md-6 ">
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
                      <a href={"/product/" + props.title}>
                        <img className="img-fluid change-product" src={props.src} alt={props.title} />
                      </a>
                  </div>
                    
                    <figcaption>
                        <h3 className="font-weight-bolder">{props.title}</h3>
                        <span>{props.rating}</span><br/>
                        <span><b>${props.price}</b></span><br/>
                        <span>{props.description}</span>
                    </figcaption>
                   
         {/* QUICK VIEW & ADD TO CART BUTTUNS */}
                <div className='d-flex justify-content-center mt-3'>
                <button  className="addToCart btn btn-primary mr-5">add to cart</button>
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
                      <Typography className={classes.typography} style={{ backgroundColor: '#f4f9f9',
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")',
                            fontSize: '16px',
                            fontFamily: 'Chakra Petch',
                            padding: '0px 13px',
                            boxShadow: '0px 17px 10px -10px rgba(0, 0, 0, 0.4)'}}>
                         <div>
                            <h5 className='font-weight-bold'>{props.obj.title}</h5>
                            <hr className="w-10"/>
                            was: <span className='line-through mr-4'>${props.obj.previousPrice}</span>now: <span className='font-weight-bold '>
                            ${props.obj.price}</span>
                            <p>
                                <b>{props.obj.productDescription}<br/><br/>
                                Product Sku: {props.obj.sku}<br/>
                                {props.obj.stock} in stock<br/><br/>
                                Material: {props.obj.filter[0]}<br/>
                                Color: {props.obj.filter[1]} <br/>
                                Printing Time: {props.obj.printingTime} Hours <br/>
                                Category: {props.obj.filter[2]}<br/>
                                Size: {props.obj.size}<br/>
                                Note: {props.obj.note}</b>
                            </p>
                            
                         </div>
                                    
                      </Typography>
                    </Popover>
                </div>

                </figure>
            </div>
        );
    
}
