import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/team1.webp'
import img2 from '../assets/team2.webp'
import img3 from '../assets/team3.webp'
import img4 from '../assets/team3(1).webp'
import img5 from '../assets/team5.webp'
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'



const Team = () => {

    return (
        <section id='Team'>
            <div id='Team' >
                <div className='work pd-6'>
                    <div className='page'>

                        <h2 className='page-header' >Meet Our Amazing Team</h2>
                        <div className='page-underline '>
                            <AiFillStar className='color' />
                        </div>
                        <p className='page-head' >There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration, by injected humour, or new randomised words.</p>
                    </div>









                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">


                                <div className='container'>
                                    <div className='row justify-center '>


                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card'>
                                                <div className='img-card first'>

                                                    <img className='card-img' src={img1} />
                                                    <div class="middle">
                                                        <div class="social-links text" >
                                                            <BsTwitter className='twitter' />
                                                            <BsFacebook className='facebook' />
                                                            <BsPinterest className='pinterest' />
                                                            <BsYoutube className='youtube' />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >JOANNA HAWKINS</h3>
                                                    <p className='team-work'>graphic designer</p>
                                                </div>

                                            </div></div>



                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card1'>
                                                <div className='img-card'>
                                                    <div className='first'>
                                                        <img className='card-img' src={img2} />
                                                        <div class="middle">
                                                            <div class="social-links text" >
                                                                <BsTwitter className='twitter' />
                                                                <BsFacebook className='facebook' />
                                                                <BsPinterest className='pinterest' />
                                                                <BsYoutube className='youtube' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >JOHNATAN SMITHS</h3>
                                                    <p className='team-work'>SEO Specialist</p>
                                                </div>
                                            </div></div>



                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card2'>
                                                <div className='img-card'>
                                                    <div className='first'>
                                                        <img className='card-img' src={img3} />
                                                        <div class="middle">
                                                            <div class="social-links text" >
                                                                <BsTwitter className='twitter' />
                                                                <BsFacebook className='facebook' />
                                                                <BsPinterest className='pinterest' />
                                                                <BsYoutube className='youtube' />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >RICHARD JOHANSON</h3>
                                                    <p className='team-work'>Web Developer</p>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>


                            </div>
                            <div class="carousel-item">

                                <div className='container'>
                                    <div className='row justify-center  '>


                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card3'>
                                                <div className='img-card'>
                                                    <div className='first'>
                                                        <img className='card-img' src={img3} />
                                                        <div class="middle">
                                                            <div class="social-links text" >
                                                                <BsTwitter className='twitter' />
                                                                <BsFacebook className='facebook' />
                                                                <BsPinterest className='pinterest' />
                                                                <BsYoutube className='youtube' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >CHRISTINA HAWKINS</h3>
                                                    <p className='team-work'>graphic designer</p>
                                                </div>


                                            </div></div>
                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card4'>
                                                <div className='img-card'>
                                                    <div className='first'>
                                                        <img className='card-img' src={img4} />
                                                        <div class="middle">
                                                            <div class="social-links text" >
                                                                <BsTwitter className='twitter' />
                                                                <BsFacebook className='facebook' />
                                                                <BsPinterest className='pinterest' />
                                                                <BsYoutube className='youtube' />
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >RICHARD JOHANSON</h3>
                                                    <p className='team-work'>SEO Specialist</p>
                                                </div>
                                            </div></div>



                                        <div className='col-sm-7 col-md-4 col-lg-4 mt-4 team-width'>
                                            <div className='main-card5'>
                                                <div className='img-card'>
                                                    <div className='first'>
                                                        <img className='card-img' src={img5} />
                                                        <div class="middle">
                                                            <div class="social-links text">
                                                                <BsTwitter className='twitter' />
                                                                <BsFacebook className='facebook' />
                                                                <BsPinterest className='pinterest' />
                                                                <BsYoutube className='youtube' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='name-card'>
                                                    <h3 className='team-name' >ALEXANDRA SMITHS</h3>
                                                    <p className='team-work'>Web Developer</p>
                                                </div>
                                            </div></div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                    {/* CARD */}






                </div>
            </div>
        </section>
    )
}

export default Team







// onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}