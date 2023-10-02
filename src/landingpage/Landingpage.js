import styles from "../index.module.css"
import { useState, useEffect, useRef } from "react";
import "../App.css"
import { useMediaQuery } from "react-responsive";
import Header from "../components/Header/Header";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/Footer/Footer";
import Servicecomp from "../components/ServiceComp/Servicecomp";
import "animate.css"

const Landingpage = () => {

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 992 })
        return isDesktop ? children : null
    }

    const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
    }
    const handlePreviousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const sliderRef = useRef(null);

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: false, // Remove default arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch('https://serverfile.appnotrics.com/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.ok) {
            // Handle success, e.g., show a success message
            console.log('Email sent successfully');
          } else {
            // Handle error, e.g., show an error message
            console.error('Error sending email');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    return (
        <>
            <div className='parent'>
                <Header />
                <div className='container main'>
                    <div className='row '>
                        <div className='col-lg-5 animate-fade-in '> <br /><br /><br /><br /><br /><br />
                            <h2 className="text-light"> Welcome to Appnotrics</h2>
                            <p>From concept to execution, we are dedicated to
                                visualizing  your ideas and transforming them
                                into reality.</p>
                        </div>

                        <div className='col-lg-7 '>
                            <br /> <br /> <br /> <br />
                            <img className=" " src="/main.png" />
                        </div>
                    </div>
                </div>
                <br /> <br /> <br /> <br /> <br />

                <Servicecomp />

                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <h2 className='text-light'><br /><br /><br /> What we do</h2>
                            <p className='text-light'>  Appnotrics Solutions is an expert in developing tailored software solutions that provide organizations more control. Our area of specialization is developing websites and mobile applications, and we provide cutting-edge, custom technology solutions.</p><br />
                            <button className='btn'>Learn More <img className={`animate__animated ${styles.arrowAnimation}`} src='/vector1.svg' /></button> <br /><br /><br />
                            <p>productDesign</p>
                            <p>Software Development</p>
                            <p>Innovation Consulting</p>
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img className="w-75" src='/product.png' />
                        </div>
                    </div>
                </div> <br />
                <div className='container'>
                    <div className='row d-flex align-items-center'>
                        <div className='col-lg-12 text-center'>
                            <h2 className='ourservice d-flex text-center justify-content-center'> Our <h2 className='ourservice2'>Services </h2> </h2>
                            <p>Lorem Ipsum is simply dummy text of and typesetting</p>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'>
                                <img src='/1.png' />
                                <h4 className='text-light mx-3'> Mobile App Development</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'>
                                <img src='/2.png' />
                                <h4 className='text-light mx-3'> Web Development</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'>
                                <img src='/4.png' />
                                <h4 className='text-light mx-3'> Cloud Hosting</h4>
                            </div>
                            <br />
                        </div>
                        <div className='col-lg-3'>
                            <div className='parentbox'>
                                <img src='/5.png' />
                                <h4 className='text-light mx-3'> UI / UX Design</h4>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                <br /> <br /> <br />

                <div className='container'>
                    <div className='row'>
                        <h2 className='ourservice d-flex text-center justify-content-center'> Our <h2 className='ourservice2'>Design </h2> <br />
                            <br /></h2>
                        <Desktop>
                            <div className='col-lg-5 mx-auto designone'>
                                <img className='designone' src='/one.png' />
                            </div>
                            <div className='col-lg-5 mx-auto parentdesign'>
                                <img className='design' src='/tgg.png' />
                            </div>
                            <div className='col-lg-5 mx-auto designtwo'>
                                <img className='design1' src='/3.png' />
                            </div>
                            <div className='col-lg-5 mx-auto design3'>
                                <img className='design1' src='/t.png' />
                            </div>
                        </Desktop>
                        <Mobile>
                            <Slider ref={sliderRef} {...settings}>

                                <div className='col-lg-5 mx-auto designone'>
                                    <img className='designone' src='/one.png' />
                                </div>
                                <div className='col-lg-5 mx-auto parentdesign'>
                                    <img className='design' src='/tgg.png' />
                                </div>

                                <div className='col-lg-5 mx-auto designtwo'>
                                    <img className='design1' src='/3.png' />
                                </div>
                                <div className='col-lg-5 mx-auto design3'>
                                    <img className='design1' src='/t.png' />
                                </div>
                            </Slider>
                            <button className="portleft" onClick={handleNextSlide}>
                                <img className="arrow-icon " src="./group-21.png" alt="Left Arrow" />
                            </button>
                            <button className="portright" onClick={handlePreviousSlide}>
                                <img className="arrow-icon " src="./group-22.png" alt="Right Arrow" />
                            </button>
                        </Mobile>
                    </div>
                </div >
                <br /> <br />
                <div>
                    <h2 className='ourservice d-flex text-center justify-content-center'> Our <h3 className='ourservice2'>Client Speaks </h3> <br /> </h2>
                    <p className='text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                    <div className='container'>
                        <div className='row '>
                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br /><br />
                                <img src='/ellipse-93@2x.png' className='mx-auto d-flex justify-content-center align-items-center' /> <br />
                                <p className='text-center'>It is a long established fact that a by the readable content is that it has a more-or-less normal distribution</p>
                                <br />
                            </div>
                            <div className='col-lg-3 mx-auto textmonial mx-2'> <br /><br />
                                <img src='/ellipse-94@2x.png' className='mx-auto d-flex justify-content-center ' /> <br />
                                <p className='text-center '>It is a long established fact that a by the readable content is that it has a more-or-less normal distribution</p>
                            </div>
                            <br />
                            <div className='col-lg-3 mx-auto textmonial  mx-2'> <br /><br />
                                <img src='/ellipse-95@2x.png' className='mx-auto d-flex justify-content-center w-0' /> <br />
                                <p className='text-center '>It is a long established fact that a by the readable content is that it has a more-or-less normal distribution</p>
                                <br />
                            </div>
                        </div>
                    </div>
                </div> <br /> <br /> <br />
                <div className='container'>
                    <h2 className='ourservice d-flex text-center justify-content-center'> Lets Talk    <br /></h2>
                    <div className='row align-items-center '>
                        <div className='col-lg-4 contact  mx-auto'>
                            <h3 className='h3'>Contact Us</h3>
                            <p className='mt-3 w-100'>It is a long established fact that a by the readable content is that it has a more-or-less normal distribution</p>
                            <p> <img className="animation" src="/phone.gif" /> +999-555-444-777</p>
                            <p><img className="animation" src="/message.gif" /> Powerpulse@gmail.com</p>
                        </div>

                        <div className='col-lg-6'>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className='col-lg-12'>
          <TextField
            name="name"
            id="standard-basic"
            label="First Name"
            variant="standard"
            className='box'
            style={{ color: "#fff", borderBottom: "2px solid #fff" }}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='col-lg-12'>
          <TextField
            name="email"
            id="standard-basic"
            label="Email Address"
            variant="standard"
            className='box'
            style={{ color: "#fff", borderBottom: "2px solid #fff" }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='col-lg-12'>
          <TextField
            name="phone"
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            className='box'
            style={{ color: "#fff", borderBottom: "2px solid #fff" }}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className='col-lg-12'>
          <TextField
            name="message"
            id="standard-basic"
            label="Tell us About Your Project"
            variant="standard"
            className='box'
            style={{ color: "#fff", borderBottom: "2px solid #fff" }}
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </Box>
    </div>
                    </div>
                </div>
                <br /> <br />
                <Footer />

              

                <a href="https://wa.me/+923043275451" target="_blank" class="btn-whatsapp-pulse btn-whatsapp-pulse-border">
                    <i class="fab fa-whatsapp"></i>
                </a>
                {/* <div className="whatsapp">
                    <a href="https://wa.me/+923043275451" target="_blank" className='whatsapp btn-success text-light ' data-aos="fade-down"  ><i className="fab fa-whatsapp"></i></a>
                </div> */}
            </div >

        </>
    );
};

export default Landingpage;
