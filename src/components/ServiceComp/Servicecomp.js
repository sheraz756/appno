import React, { useRef } from 'react'
import "../../App.css"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Arr = [
    {
        id: 1,
        content: {
            title: 'Web Development',
            description: 'Web development is the use of coding to create websites and apps. It brings ideas online and combines design and usefulness.',
        },
        images: ['./rectangle-54@2x.png', './rectangle-54@2x.png'],
        skills: ["HTML", "CSS", "JavaScript", "React"]
    },
    {
        id: 2,
        content: {
            title: 'App Development',
            description: 'Web development is the use of coding to create websites and apps. It brings ideas online and combines design and usefulness.',
        },
        images: ['./rectangle-54@2x.png', './rectangle-54@2x.png'],
        skills: ["iOS", "Android", "React Native"]
    },
    {
        id: 3,
        content: {
            title: 'Cloud Hosting',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        images: ['./rectangle-54@2x.png', './rectangle-54@2x.png'],
        skills: ["AWS", "Azure", "Google Cloud"]
    },
    {
        id: 4,
        content: {
            title: 'UI/UX Designing',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        images: ['./rectangle-54@2x.png', './rectangle-54@2x.png'],
        skills: ["UI Design", "UX Design", "Adobe XD"]
    },
];

const Servicecomp = () => {
    const sliderRef = useRef(null);
    const handlePreviousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const handleNextSlide = () => {
        sliderRef.current.slickNext();
    };


    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
    return (
        <div className="container sec2">
            <button className='slider-button-left' onClick={handlePreviousSlide} >
                <img className='arrow-icon' src='./group-22.png' alt='Right Arrow' />
            </button>

            <Slider {...settings} ref={sliderRef}>
                {Arr.map((data) => (
                    <div key={data.id} className="slider-item">
                        <div className='row align-items-center'>
                            <div className='col-lg-5'>
                                <div className="left-section">
                                    <p className="lorem">SERVICE</p>
                                    <h3 className="h3">{data.content.title}</h3>
                                    <p className="lorem">{data.content.description}</p>
                                    <ul className='serviceul  list-unstyled'>
                                        <li className='serviceli text-light  my-2 '>{data.skills[0]} </li>
                                        <li className='serviceli text-light   my-2'>{data.skills[1]}</li>
                                        <li className='serviceli text-light  my-2'>{data.skills[2]}</li>
                                        <li className='serviceli text-light   my-2'>{data.skills[4]}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className="right-section">
                                    <div className="image-container">
                                        <div className="parentCard">
                                            <img className="img" src={data.images[0]} alt={data.content.title} />
                                            <img className="img1 mx-3" src={data.images[1]} alt={data.content.title} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <button className='slider-button-right' onClick={ handleNextSlide} >
                <img className='arrow-icon' src='./group-21.png' alt='Right Arrow' />
            </button>
        </div>
    )
}

export default Servicecomp