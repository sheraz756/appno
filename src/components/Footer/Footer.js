import React from 'react'
import "../../App.css"
import "./footer.css"


const Footer = () => {

    return (
        <footer id="footer" className="footer">

            <div className="footer-content">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-5 col-md-6">
                            <div className="footer-info">
                                <h3>Appnotrics</h3>
                                <p>
                                    It is a long established fact that a by the readable content is that
                                    it has a more-or-less normal distribution
                                </p>

                            </div>
                            <form action="" method="post">
                                <input type="email" name="email" className='email' />
                                <input type="submit" value="Subscribe" className='subscribe' />
                            </form>
                        </div>


                        <div className="col-lg-2 col-md-6 footer-links">
                            <br />
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-6 footer-links">
                            <h4>Contact Us</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-legal text-center">
                <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

                    <div className="d-flex  align-items-center mx-auto text-center">
                        <div className="copyright text-center">
                            © All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>


        </footer>

    )
}

export default Footer