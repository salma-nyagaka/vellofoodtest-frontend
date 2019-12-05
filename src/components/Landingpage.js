import React from 'react';
import '../assets/styles/landingpage.css'
import Navbar from '../components/Navbar'
import searchbutton from '../assets/images/search.png'
import Cards from '../components/Cards'
import Restaurant from '../components/Restaurants'
import WorkCards from '../components/WorkCards'
import Footer from '../components/Footer'
import CountUp from 'react-countup';
import homepagevideo from '../assets/videos/homepage.mp4'

const LandingPage = () => {
    return (
        <div>
            {/* <video width="320" height="200" controls>
                <source src={homepagevideo} type="video/mp4"/>
                    <source src="movie.ogg" type="video/ogg"/>
                        Your browser does not support the video tag.
</video> */}
                    <div className="image">
                        <div className="navbar">
                            <Navbar />
                        </div>
                        <div class="centered">
                            <h1 className="title">Order Takeaway or Delivery Food</h1>
                            <p className="paragraph">
                                Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                            </p>
                            <div id="custom-search-input">
                                <div className="input-group">
                                    <input type="text" class="search-query" placeholder="Your Address or postal code" />
                                    <span className="input-group-btn">
                                        <img src={searchbutton} className='searchbutton' alt='logo' />

                                    </span>
                                </div>
                            </div>
                        </div>

                        <div id="count" className="hidden-xs">
                            <ul>

                                <li className="number-list"><span className="number"><CountUp start={0} end={2650} /></span>Restaurant</li>
                                <li className="number-list"><span className="number"><CountUp start={0} end={5350} /></span>People Served</li>
                                <li className="number-list"><span className="number"><CountUp start={0} end={12350} /></span>Registered users</li>
                            </ul>
                        </div>
                    </div>

                    <div className="container about">
                        <div className="main-title">
                            <h2 className="nomargin_top" >How it works</h2>
                            <p>
                                Cum doctus civibus efficiantur in imperdiet deterruisset.
                    </p>
                        </div>
                        <Cards />
                        <div id="delivery-time" class="hidden-xs">
                            <strong><span>2</span><span>5</span></strong>
                            <h4>The minutes that usually takes to deliver!</h4>
                        </div>
                    </div>

                    <div className="restaurant-cards">
                        <Restaurant />
                    </div>

                    <div className="high_light">
                        <div className="container">
                            <h3>Choose from over 2,000 Restaurants</h3>
                            <p>Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.</p>
                            <a href="#" className="viewall">View all Restaurants</a>
                        </div>
                    </div>

                    <section className="parallax-window" data-parallax="scroll" data-natural-width="1200" data-natural-height="600">
                        <div className="parallax-content">
                            <div className="sub_content">
                                <i className="fa fa-coffee"></i>
                                <h3>We also deliver to your office</h3>
                                <p>
                                    Ridiculus sociosqu cursus neque cursus curae ante scelerisque vehicula.
                        </p>
                            </div>
                        </div>
                    </section>

                    <div className="container margin_60">
                        <div className="main_title margin_mobile">
                            <h2 className="nomargin_top">Work with Us</h2>
                            <p>
                                Cum doctus civibus efficiantur in imperdiet deterruisset.
                  </p>
                        </div>
                        <WorkCards />
                    </div>

                    <div className="footer">
                        <Footer />
                        <hr className="border-line" />

                        <div id="social_footer">
                            <ul>
                                <li><a href="#" className="fa fa-facebook"></a></li>
                                <li><a href="#" className="fa fa-twitter"></a></li>
                                <li><a href="#" className="fa fa-google"></a></li>
                                <li><a href="#" className="fa fa-instagram"></a></li>
                                <li><a href="#" className="fa fa-pinterest"></a></li>
                                <li><a href="#" className="fa fa-vimeo"></a></li>
                                <li><a href="#" className="fa fa-youtube"></a></li>
                            </ul>
                            <p>
                                © Quick Food 2019
                    </p>
                        </div>
                    </div>

        </div>
                )
            
            }
            
export default LandingPage