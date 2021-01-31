import React, { Component } from 'react';

const year = new Date().getFullYear();

const footerStyle = {
    fontFamily: "'Chakra Petch', sans-serif",
    color: "white",
    fontWeight: "bold",
    margin: "0 auto",
    backgroundColor: "rgb(39, 38, 38)",
}

const footer={
    padding: "70px 100px",
}

const row ={
    color: "white",
    border: "1px solid #3c3c3c",
    borderRadius: "100px",
    padding: "10px",
}

class Footer extends Component{
    render(){
        return(
            <footer style={footerStyle}>
                <div  style={footer} class=" container-fluid text-center mx-auto bg-dark">
                    <div style={row} class="row text-left mx-auto mb-5">
                        <div  class="col-sm">
                            About Us<br /><br />
                            <span class="text-muted font-weight-light">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque laborum aliquam, quisquam sunt          tenetur hic est repudiandae nostrum modi soluta,
                                magni officia aliquid voluptate velit reprehenderit. </span><br /><br /><br />
                                
                                <a href="https://www.facebook.com/"><i class="border border-primary rounded-circle p-2 m-2 fab fa-facebook-f"></i></a>&thinsp;
                                <a href="https://www.linkedin.com/"><i class="border border-primary  rounded-circle p-2 m-2 fab fa-linkedin-in"></i></a>&thinsp;
                                <a href="https://www.instagram.com/"><i class="border border-primary  rounded-circle p-2 m-2 fab fa-instagram"></i></a>
   
                        </div>
                        <div class="col-sm">
                          Opening Hours<br /><br />
                          <span class="text-muted">Sunday-Thursday</span><br />
                          <span class="text-muted font-weight-light">5AM - 10PM</span><br />
                          <br /><br />Contact Info<br /><br />
                          <span class="text-muted font-weight-light">Address:</span><br />
                          <span class="font-weight-light">34 Street Name, City Name Here, United States</span><br /><br />
                          <span class="text-muted font-weight-light">Telephone:</span><br />
                          <span class="font-weight-light" e="font-weight: normal">+1 242 4942 290</span><br /><br />
                          <span class="text-muted font-weight-light">Email:</span><br />
                          <span class="font-weight-light">info@yourdomain.com</span><br /><br />
                        </div>

                        <div class="col-sm">
                          Quick Links<br /><br />
                          <a href="#">About</a><br /><br />
                          <a href="#">Terms of Use</a><br /><br />
                          <a href="#">Disclaimers</a><br /><br />
                          <a href="#">Contact</a>
                        </div>
                    </div>

                    <span class="text-muted font-weight-light">
                    Copyright ©{`${year}`} All rights reserved | This website is made with <i class="fas    fa-heart"></i> by <a href="#">Shmuel Sigler</a>
                    </span>
                </div>
            </footer>
        );
    }
}


export default Footer;