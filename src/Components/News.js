import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/work2.jpg'
import img2 from '../assets/work3.jpg'
import img3 from '../assets/work6.jpg'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaTags } from 'react-icons/fa'
import img4 from '../assets/authorimg.jpg'
import img5 from '../assets/partner1.png'
import img6 from '../assets/partner2.png'
import img7 from '../assets/partner3.png'
import img8 from '../assets/partner4.png'
import img9 from '../assets/partner5.png'
import img10 from '../assets/imac.png'
import img11 from '../assets/check-mark-white.png'
import img12 from '../assets/chain2.png'
// import { BsFacebook, BsInstagram, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'




const News = () => {
    return (
        <section id='News'>
        <div id='News' >
            <div className='container'>
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

                <div className='news-card-main '>
                    <div className='row w-104 '>
                        <div className='col-sm-4'> <div className='news-card ds-grid '>
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
                        </div></div>




                        {/* SECOND */}

                        <div className='col-sm-4'> <div className='news-card ds-grid '>
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

                        <div className='col-sm-4'>  <div className='news-card ds-grid '>
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
                <div className='row w-100 padding'>
                    <div className='col-sm-5 ds-flx border-right '>
                        <div className='author-img'><img className='author' src={img4} /></div>
                        <div className='author-work'><p className='col-white' > <span className='fw-700' >ALICIA STEVENSON </span> <br /> Founder Freelancer</p></div>
                    </div>
                    <div className='col-sm-7'>
                        <p className='author-info' >"Your time is limited, so do not waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."</p>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row '>
                    <div className='col-lg-6 '>
                        <iframe src="https://player.vimeo.com/video/69988283?h=374ede24b7" width='100%' height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className='col-lg-6 video-info '>
                        <h2>Watch the video presentation.</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui ipsum quiaim netsum. Consequuntur sequimagni.</p>
                        <p>Consequuntur magni netsum es qui ratione sequi nesciunt. Neque vetim quisquat, quia voluptas quistri ipsum quiaim magni eti ratione.</p>
                        <button className='dicover-more btn-blue small btn-lg'>Discover-more</button>
                    </div>
                </div>
            </div>



            <div className='partner-logo mt-6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 '>
                            <img className='sponsor-logo' src={img5} />
                            <img className='sponsor-logo' src={img6} />
                            <img className='sponsor-logo' src={img7} />
                            <img className='sponsor-logo' src={img8} />
                            <img className='sponsor-logo' src={img9} />
                        </div>
                    </div>
                </div>
            </div>





            {/* <div className='row w-100  backround-color register-row '>
  <div className='col-lg-6 padding-left-0 '>
  <h3 style={{ fontSize: "2rem" }} >Design & style should always work toward  making you feel good.</h3>
                                <p style={{ fontSize: ".9375rem" }} >Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.
                                </p>
                                <ul className='feature-list' >
                                    <li><img className='width-3' src={img5} /> Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                                    <li><img className='width-3' src={img5} /> Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                                    <li><img className='width-3' src={img5} /> Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                                    <li><img className='width-3' src={img5} /> Etiam tempor ante acum ipsum et finibus.</li>
                                </ul>
  </div>
  <div className='col-lg-6 register-col'>
<img src={img10}/>
  </div>
</div> */}
            <div className='row  backround-color w-100'>
                <div className='col-lg-6 design '>
                    <h3 style={{ fontSize: "2.2rem" }} className='col-white' >Design & style should always work toward  making you feel good.</h3>
                    <p style={{ fontSize: "1rem" }} className='col-white' >Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum lorem fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia volupti tempor ante netsum quia magni.
                    </p>
                    <ul className='feature-list' >
                        <li><img className='width-3' src={img11} /> Netsum est, qui ipsum quiaim netsum sequi net tempor.</li>
                        <li><img className='width-3' src={img11} /> Etiam tempor ante acu ipsum finibus, atimus urnas.</li>
                        <li><img className='width-3' src={img11} /> Atimus urnas netsudat, qui ipsum quiaim netsum.</li>
                        <li><img className='width-3' src={img11} /> Etiam tempor ante acum ipsum et finibus.</li>
                    </ul>
                    <button className='discover-more-news' >Discover More</button>
                </div>
                <div className='col-lg-6'>
                    <img src={img10} style={{ width: "85%", paddingTop: "90px" }} />
                </div>
            </div>


        </div>
        </section>
    )
}

export default News
