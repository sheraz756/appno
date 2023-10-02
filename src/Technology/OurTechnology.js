import React, { useState } from 'react'
import "../App.css"
import Header from '../components/Header/Header'
import img1 from "./Images/WebImg/web2.png"
import img2 from "./Images/WebImg/web3.png"
import img3 from "./Images/WebImg/web4.png"
import img4 from "./Images/WebImg/web5.png"
import img5 from "./Images/WebImg/web6.png"
import img6 from "./Images/WebImg/web7.png"
import img7 from "./Images/WebImg/web8.png"
import img8 from "./Images/WebImg/web9.png"
import img9 from "./Images/WebImg/web10.png"
import img10 from "./Images/WebImg/web4.png"
import des1 from "./Images/DesignImg/des1.png"
import des2 from "./Images/DesignImg/des2.png"
import des3 from "./Images/DesignImg/des3.png"
import des4 from "./Images/DesignImg/des4.png"
import data1 from "./Images/DatabaseImg/data1.png"
import data2 from "./Images/DatabaseImg/data2.png"
import data3 from "./Images/DatabaseImg/data3.png"
import data4 from "./Images/DatabaseImg/data4.png"
import app1 from "./Images/Appimg/app1.png"
import app2 from "./Images/Appimg/app2.png"
import app3 from "./Images/Appimg/app3.png"
import Footer from '../components/Footer/Footer'

const OurTechnology = () => {

    const [activeTab, setActiveTab] = useState('Design'); // Initialize with 'Design'

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    const renderContent = () => {
        switch (activeTab) {
            case 'Design':
                return (
                    <div className='techmain'>
                        <br />
                        <h2 className='text-light text-center'>Design Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className=" technologies_card_inner_div" bis_skin_checked="1">
                                <img src={des1} alt="Image 1" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={des2} alt="Image 2" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={des3} alt="Image 2" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={des4} alt="Image 2" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            case 'Database':
                return (
                    <div>
                        <br />
                        <h2 className='text-light text-center'>Database Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={data1} alt="Image 3" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={data2} alt="Image 4" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={data3} alt="Image 4" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={data4} alt="Image 4" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            case 'Cloud':
                return (
                    <div>
                        <br />
                        <h2 className='text-light text-center'>Cloud Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={img2} alt="Image 5" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={img1} alt="Image 6" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            case 'App Technologies':
                return (
                    <div>
                        <br />
                        <h2 className='text-light text-center'>App Technologies Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={app1} alt="Image 7" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={app2} alt="Image 8" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={app3} alt="Image 8" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            case 'Web Technologies':
                return (
                    <div>
                        <br />
                        <h2 className='text-light text-center'>Web Technologies Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img1} alt="Image 9" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img2} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img3} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img4} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img5} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img6} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img7} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img8} alt="Image 10" />
                            </div>
                            <div className="technologies_card_inner_div1" bis_skin_checked="1">
                                <img src={img9} alt="Image 10" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            case 'Strategies & Communication':
                return (
                    <div>
                        <br />
                        <h2 className='text-light text-center'>Strategies & Communication Portfolio</h2>
                        <p className='text-light text-center'>Lorem Ipsum is simply dummy text of and typesetting</p>
                        <div className="technologies_card_main_div" bis_skin_checked="1">
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={img1} alt="Image 11" />
                            </div>
                            <div className="technologies_card_inner_div" bis_skin_checked="1">
                                <img src={img2} alt="Image 12" />
                            </div>
                            {/* Add more card elements as needed */}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className='parent'>
            <Header />
            <div class="tabs_main_div" bis_skin_checked="1">
                <div class="tabs_inner_div" bis_skin_checked="1">
                    <div class="dotted_line_div" bis_skin_checked="1">
                        <div class="tabs_circle" bis_skin_checked="1">
                        </div>
                        <div class="dotted_line" bis_skin_checked="1"></div>
                        <div class="tabs_circle" bis_skin_checked="1"></div>
                    </div>
                    <div class="tabs" bis_skin_checked="1">
                        <div
                            className={`tab_inner ${activeTab === 'Design' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Design')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                            </div>
                            <div className={`tab_text text-light text-center`} bis_skin_checked="1">Design</div>

                        </div>
                        <div
                            className={`tab_inner ${activeTab === 'Database' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Database')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.904 1.777C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4s-.875 1.755-1.904 2.223C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777C2.875 5.755 2 5.007 2 4s.875-1.755 1.904-2.223Z"></path><path d="M2 6.161V7c0 1.007.875 1.755 1.904 2.223C4.978 9.71 6.427 10 8 10s3.022-.289 4.096-.777C13.125 8.755 14 8.007 14 7v-.839c-.457.432-1.004.751-1.49.972C11.278 7.693 9.682 8 8 8s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z">
                                    </path><path d="M2 9.161V10c0 1.007.875 1.755 1.904 2.223C4.978 12.711 6.427 13 8 13s3.022-.289 4.096-.777C13.125 11.755 14 11.007 14 10v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"></path><path d="M2 12.161V13c0 1.007.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13v-.839c-.457.432-1.004.751-1.49.972-1.232.56-2.828.867-4.51.867s-3.278-.307-4.51-.867c-.486-.22-1.033-.54-1.49-.972Z"></path></svg>
                            </div>
                            <div class="tab_text text-light" bis_skin_checked="1">Database</div>
                        </div>
                        <div
                            className={`tab_inner ${activeTab === 'Cloud' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Cloud')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3z"></path></svg>
                            </div>
                            <div class="tab_text text-light" bis_skin_checked="1">Cloud</div></div>
                        <div
                            className={`tab_inner ${activeTab === 'App Technologies' ? 'active' : ''}`}
                            onClick={() => handleTabClick('App Technologies')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"></path></svg></div>
                            <div class="tab_text text-light text-center" bis_skin_checked="1">App Technologies</div>
                        </div>
                        <div
                            className={`tab_inner ${activeTab === 'Web Technologies' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Web Technologies')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2z"></path></svg></div>
                            <div class="tab_text text-light text-center" bis_skin_checked="1">Web Technologies</div>
                        </div>
                        <div
                            className={`tab_inner ${activeTab === 'Strategies & Communication' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Strategies & Communication')}
                        >
                            <div class="tab_icon_div" bis_skin_checked="1"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="tab_icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.37 103.822c138.532-138.532 362.936-138.326 501.262 0 6.078 6.078 7.074 15.496 2.583 22.681l-43.214 69.138a18.332 18.332 0 0 1-22.356 7.305l-86.422-34.569a18.335 18.335 0 0 1-11.434-18.846L351.741 90c-62.145-22.454-130.636-21.986-191.483 0l5.953 59.532a18.331 18.331 0 0 1-11.434 18.846l-86.423 34.568a18.334 18.334 0 0 1-22.356-7.305L2.787 126.502a18.333 18.333 0 0 1 2.583-22.68zM96 308v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H92c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zM96 500v-40c0-6.627-5.373-12-12-12H44c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"></path></svg></div>
                            <div class="tab_text text-light text-center" bis_skin_checked="1">Strategies &amp; Communication</div></div></div></div><div class="tabs2" bis_skin_checked="1">
                    <div className={`tab_inner2 active2 ${activeTab === 'Design' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Design')} bis_skin_checked="1">Design</div>
                    <div className={`tab_inner2 active2 ${activeTab === 'Database' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Database')} bis_skin_checked="1">Database</div><div className={`tab_inner2 active2 ${activeTab === 'Cloud' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Cloud')} bis_skin_checked="1">Cloud</div>
                    <div className={`tab_inner2 active2 ${activeTab === 'App Technologies' ? 'active' : ''}`}
                        onClick={() => handleTabClick('App Technologies')} bis_skin_checked="1">App Technologies</div>
                    <div className={`tab_inner2 active2 ${activeTab === 'Web Technologies' ? 'active' : ''}`}
                        onClick={() => handleTabClick('Web Technologies')} bis_skin_checked="1">Web Technologies</div><div className={`tab_inner2 active2 ${activeTab === 'Strategies & Communication' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Strategies & Communication')} bis_skin_checked="1">Strategies &amp; Communication</div>
                </div>
                <div className="tab-content">
                    {renderContent()}
                </div>
            </div>

            <br />    <br />    <br />
            <Footer />
        </div>
    )
}

export default OurTechnology