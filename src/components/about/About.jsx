import React, { Component } from 'react'
import { Player } from 'video-react';


import './about.css'
import '../../../node_modules/video-react/dist/video-react.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <div className="title-about">
                        <h1>About The Company</h1>
                    </div>
                    <div className="desc">
                        <p>This project was made with passion and devotion. Enjoy this site and begin to explore the catalog he's offers. Choose from variety of homemade 3D printed models.</p>
                    </div>
                </div>
                <div className="row row-about">
                    <div className="card-about">
                        <div className="card_img"> <i className="icon-about fas fa-rocket"></i> </div>
                        <div className="card_title">FUN</div>
                        <div className="card_body">
                            <p>Printing toys and games for your amusement.</p>
                        </div>
                    </div>
                    <div className="card-about">
                        <div className="card_img"> <i className="icon-about fab fa-cloudversify"></i> </div>
                        <div className="card_title">IMAGINATION</div>
                        <div className="card_body">
                            <p>Printing custom 3d models like lithophane pictures, etc.</p>
                        </div>
                    </div>
                    <div className="card-about">
                        <div className="card_img"> <i className="icon-about fas fa-user-astronaut"></i> </div>
                        <div className="card_title">ENGINEERING</div>
                        <div className="card_body">
                            <p>Printing mechanical mechanisms with amazing behavior.</p>
                        </div>
                    </div>
                </div>
                <div className=" about-video p-5">
                    <h3> Example videos: printing lithophane picture and a 3d model</h3>
                    <div className="row ">
                        <div className="col-lg-6 col-md video m-4  ml-5 d-flex justify-content-center">
                                <Player >
                                    <source src="family.mp4" />
                                </Player>
                                
                        </div>
                        <div className="col-lg-6 col-md video m-4 ml-5 d-flex justify-content-center">
                                <Player>
                                    <source src="batmobile.mp4" />
                                </Player>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
