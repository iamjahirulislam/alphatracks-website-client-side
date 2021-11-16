import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';


// https://i.ibb.co/qMt1ff9/linkedin.png
// https://i.ibb.co/NjcQsT6/facebook.png
// https://i.ibb.co/rQhphcC/insta.png
// https://i.ibb.co/FHw3fg9/twitter.png

const Footer = () => {
    const { handleLogout } = useAuth();
    return (
        <div className="text-light bg-dark py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-3  px-3">
                        <h2 className="text-center text-uppercase mb-3"><u className="text-warning">About us</u></h2> <br />
                        <p>AlphaTracks is the first and largest web portal about bicycle in Bangladesh. We have started our journey on 23rd August, 2013. We publish bike specifications, price, news, tips, reviews, showroom address and brand details etc. Our basic goal is to provide bicycle related essential data to the visitors in easy way. We also share user experiences and their valuable opinion about their bicycle. So that our visitors can get some idea about the bicycle they are looking for.</p>
                    </div>

                    <div className="col-md-3 mt-3">
                        <h4 className="text-center text-uppercase mb-3"><u className="text-warning">Quick Links</u></h4>
                        <div className="quick-links text-center">
                            {/* <Link to="/home" className="navItems">Home</Link>
                            <Link to="/services" className="navItems">Services</Link>
                            <Link to="/packages" className="navItems">Packages</Link>
                            <Link to="/blogs" className="navItems">Blogs</Link>
                            <Link to="/about" className="navItems">About Us</Link> */}
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/home" className="navItems">Home</Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard" className="navItems">Dashboard</Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="/explore" className="navItems">Explore</Link>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to="" className="navItems" onClick={handleLogout}>Logout</Link>
                        </div>
                    </div>

                    <div className="text-center col-md-4 mt-3 px-3">

                        <h3 className="text-uppercase mb-3"><u className="text-warning">Official Address</u></h3> <br />
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="me-5 text-end">
                                <p>	Doha, Qatar <br />901106</p>
                            </div>
                            <div className="text-start">
                                <p>Phone: 	009744806382 <br />alphamark@gmail.com</p>
                            </div>
                        </div>
                        <br /><h4 className="text-uppercase mb-3"><u>Join with us</u></h4><br />
                        <div>
                            <a className="social-icon" href="https://www.facebook.com/iamjahirulislam" target="_blank"><i className="fab fa-facebook-square fa-3x m-2"></i></a>
                            <a className="social-icon" href="https://twitter.com/iamjohirul" target="_blank"><i className="fab fa-twitter-square fa-3x m-2"></i></a>
                            <a className="social-icon" href="https://www.instagram.com/iamjahirulislam/" target="_blank"><i className="fab fa-instagram-square fa-3x m-2"></i></a>
                            <a className="social-icon" href="https://www.linkedin.com/in/jahirul-islam-9789091b3/" target="_blank"><i className="fab fa-linkedin fa-3x m-2"></i></a>
                        </div>
                    </div>

                </div>
                <br />
                <div className="d-flex align-items-center justify-content-center">
                    <p> &#169; 2021 Copyright:Alpha company</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;