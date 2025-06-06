import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/work2.webp'
import img2 from '../assets/work3.webp'
import img3 from '../assets/work6.webp'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaTags } from 'react-icons/fa'
import img4 from '../assets/authorimg.webp'
import img5 from '../assets/partner1.png'
import img6 from '../assets/partner2.png'
import img7 from '../assets/partner3.png'
import img8 from '../assets/partner4.png'
import img9 from '../assets/partner5.png'
import img10 from '../assets/imac.webp'
import img11 from '../assets/check-mark-white.png'
import img12 from '../assets/chain2.png'

const News = () => {
    return (
        <section id='News'>
            <div id='News' >
                <div className='work pd-6'>
                    <div className='page'>
                        <h2 className='page-header' >Our Latest News</h2>
                        <div className='page-underline '>
                            <AiFillStar className='color' />
                        </div>
                        <p className='page-head'>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration, by injected humour, or new randomised words.</p>
                    </div>
                </div>

                <div className='container'>
                    <div className='news-card-main justify-center '>
                        <div className='row width-100 justify-center'>
                            <div className='col-sm-9 col-md-4'> <div className='news-card ds-grid '>
                                <div className='news-card-img first '>
                                    <img className='card-img' src={img1} />
                                    <div class="middle">
                                        <div class="chain">
                                            <img src={img12} />
                                        </div>
                                    </div>
                                </div>
                                <div className='news-card-intro'>
                                    <h3 style={{ fontSize: "1.3125rem" }} >Affinity Designer Quick Start</h3>
                                    <h6 className='color-gray font-100'><BsFillPersonFill />By MJ VAGHASIYA |  <FaTags /> WordPress</h6>
                                    <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
                                    <button type='button' id='btn-info' className='btn-info' >Read More!</button>
                                </div>
                            </div>
                            </div>

                            {/* SECOND */}

                            <div className='col-sm-9 col-md-4'> <div className='news-card ds-grid '>
                                <div className='news-card-img first '>
                                    <img className='card-img' src={img2} />
                                    <div class="middle">
                                        <div class="chain">
                                            <img src={img12} />
                                        </div>
                                    </div>
                                </div>
                                <div className='news-card-intro'>
                                    <h3 style={{ fontSize: "1.3125rem" }} >Solid HTML Form Structure</h3>
                                    <h6 className='color-gray font-100' ><BsFillPersonFill /> By MJ VAGHASIYA  |  <FaTags /> Marketing</h6>
                                    <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
                                    <button type='button' id='btn-info' className='btn-info' >Read More!</button>
                                </div>
                            </div>
                            </div>

                            {/* THIRD */}
                            <div className='col-sm-9 col-md-4'>  <div className='news-card ds-grid '>
                                <div className='news-card-img first'>
                                    <img className='card-img' src={img3} />
                                    <div class="middle">
                                        <div class="chain">
                                            <img src={img12} />
                                        </div>
                                    </div>
                                </div>
                                <div className='news-card-intro'>
                                    <h3 style={{ fontSize: "1.3125rem" }} >New WordPress Theme</h3>
                                    <h6 className='color-gray font-100'><BsFillPersonFill />By MJ VAGHASIYA |  <FaTags /> Design</h6>
                                    <p>Quis autem velis etis reprehender etims quiste voluptate velite esse quam nihil etsa illum sedit consequatur quias quiste varias netsum.</p>
                                    <button type='button' id='btn-info' className='btn-info' >Read More!</button>
                                </div>
                            </div></div>
                        </div>
                    </div>
                </div>

                <div className='section-blue'>
                    <div className='row width-100 '>
                        <div className='col-sm-5 ds-flx border-right-padding '>
                            <div className="round">
                                <img src={img4} className='round-image' />
                            </div>
                            <div className='author-work'><p className='col-white' > <span className='fw-700' >ALICIA STEVENSON </span> <br /> Founder Freelancer</p></div>
                        </div>
                        <div className='col-sm-7  padding-start'>
                            <p className='author-info' >"Your time is limited, so do not waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."</p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-6 '>
                            <iframe src="https://player.vimeo.com/video/69988283?h=374ede24b7" className='video' frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className='col-lg-6 video-info news-padding'>
                            <h2>Watch the video presentation.</h2>
                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui ipsum quiaim netsum. Consequuntur sequimagni.</p>
                            <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque vetim quisquat, quia voluptas quistri ipsum quiaim magni eti ratione.</p>
                            <button className='dicover-more btn-blue small btn-lg'>Discover-more</button>
                        </div>
                    </div>
                </div>
                <div className='partner-logo mt-5'>
                    <div className='container cards-feature'>
                        <img className='sponsor-logo' src={img5} />
                        <img className='sponsor-logo' src={img6} />
                        <img className='sponsor-logo' src={img7} />
                        <img className='sponsor-logo' src={img8} />
                        <img className='sponsor-logo' src={img9} />
                    </div>
                </div>
                <div className='backround-color pt-4 pb-4'>
                    <div className='container'>
                    <div className='row bs-gutter-0 align-items-center'>
                    <div className='col-lg-6 text-start'>
                        <h3 className='text-light h1 mb-4' >Design & style should always work toward  making you feel good.</h3>
                        <p className='text-light fs-6 lh-lg mb-4'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.
                        </p>
                        <ul className='amazing-feature-list mb-5' style={{ letterSpacing: ".5px" }} >
                            <li className='text-light'><img className='width-3' src={img11} /> Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                            <li className='text-light'><img className='width-3' src={img11} /> Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                            <li className='text-light'><img className='width-3' src={img11} /> Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                            <li className='text-light'><img className='width-3' src={img11} /> Etiam tempor ante acum ipsum et finibus.</li>
                        </ul>
                        <button className='discover-more-news' >Discover more</button>
                    </div>
                    <div className='col-lg-6'>
                        <img src={img10} className='pc-image' />
                    </div>
                </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default News
