import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/fully-customizable.png'
import img2 from '../assets/responsive-design.png'
import img3 from '../assets/ready-code.png'
import img4 from '../assets/work.jpg'
import img5 from '../assets/check-mark-blue.png'
import img7 from '../assets/pencil.png'
import img8 from '../assets/umbrella.png'
import img9 from '../assets/crown.png'
import img10 from '../assets/cocktail.png'
import img11 from '../assets/talk.png'
import WOW from 'wowjs';

class Amazing extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <section className="features" id="Features">
                <div>
                    <div className='amazing-feature pd-6' id='Amazing'>
                        <div className='page'>

                            <h2 className='page-header' >Amazing Features</h2>
                            <div className='page-underline '>
                                <AiFillStar className='color' />
                            </div>
                            <p className='page-head' >There are many variations of passages of Lorem Ipsum available, but the majority
                                have suffered alteration, by injected humour, or new randomised words.</p>
                        </div>

                        <div className='container'>


                            <div className='feature-card'>
                            <div className="card" >
                                    <img src={img1} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title weight-700">Fully Customizable</h5>
                                        <p className="card-text">Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
                                    </div>
                                </div>
                                <div className="card" >
                                    <img src={img2} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title weight-700">Responsive Design</h5>
                                        <p className="card-text">Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
                                    </div>
                                </div>
                                <div className="card" >
                                    <img src={img3} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">SEO Ready Code</h5>
                                        <p className="card-text">Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum nisle varius sed feugiat ligula aliquam ets vitae dictis netsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='design-style'>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <img className='amazing-image' src={img4} />
                                    </div>
                                    <div className='col-lg-6 text-start'>
                                        <h3 style={{ fontSize: "2rem" }} >Design & style should always work toward  making you feel good.</h3>
                                        <p style={{ lineHeight: "25px", fontSize: "1.03rem", fontFamily: "'Open Sans', sans-serif" }} >Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.
                                        </p>
                                        <ul className='amazing-feature-list' style={{letterSpacing:".5px"}} >
                                            <li><img className='width-3' src={img5} /> Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                                            <li><img className='width-3' src={img5} /> Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                                            <li><img className='width-3' src={img5} /> Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                                            <li><img className='width-3' src={img5} /> Etiam tempor ante acum ipsum et finibus.</li>
                                        </ul>
                                        <button className='discover-more' >Discover more</button>
                                    </div>
                                </div>
                            </div>
                        </div>





                        {/* OVERLAP FUNCTION */}

                        <div className='overlap-fixed-img'>
                            <div className='achived padding-125-132'>

                                <div className='mt-4 cards-feature'>
                                    <div className='wow fadeIn achived-display ' data-wow-delay="0.15s">
                                        <img className='hero-icon' src={img7} />
                                        <h4 className='fact-number'  >1050+</h4>
                                        <h6 className='fact-name' >Project Completed</h6>
                                    </div>
                                    <div className='wow fadeIn achived-display' data-wow-delay="0.30s">
                                        <img className='hero-icon' src={img8} />
                                        <h4 className='fact-number'  >217k</h4>
                                        <h6 className='fact-name' >Happy Client</h6>
                                    </div>
                                    <div className='wow fadeIn achived-display' data-wow-delay="0.45s">
                                        <img className='hero-icon' src={img9} />
                                        <h4 className='fact-number'  >1210+</h4>
                                        <h6 className='fact-name' >Design Award</h6>
                                    </div>
                                    <div className='wow fadeIn achived-display  ' data-wow-delay="0.60s">
                                        <img className='hero-icon' src={img10} />
                                        <h4 className='fact-number'  >2137</h4>
                                        <h6 className='fact-name' >Cups of Coffee</h6>
                                    </div>
                                    <div className='wow fadeIn achived-display ' data-wow-delay="0.75s">
                                        <img className='hero-icon' src={img11} />
                                        <h4 className='fact-number'  >24/7</h4>
                                        <h6 className='fact-name' >Fast support</h6>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Amazing
