import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {BsPinterest} from 'react-icons/bs'
import {BsDribbble} from 'react-icons/bs'
import {ImInstagram} from 'react-icons/im'
import {ImFacebook} from 'react-icons/im'
import {BsSkype} from 'react-icons/bs'


const Touch = () => {
    
    return (
        <section id='Touch'>
        <div id='Touch'>
        <div>
        <div className='touch' id='Touch'>
            <div className='work'>
                <div className='page'>

                    <h2 className='page-header col-white' >Get In Touch</h2>
                    <div className='page-underline-touch '>
                        <AiFillStar className='col-white' />
                    </div>
                    <p className='page-head' style={{color:"#bbb"}}>There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration, by injected humour, or new randomised words.</p>
                </div>
            </div>


            <div className='container'>
                <div className='footer-grid'>
                    <input className=' form-input-width' type='text' placeholder='Full Name'></input>
                    <input className=' form-input-width' type='text' placeholder='Email Adress'></input>
                    <input className=' form-input-width' type='text' placeholder='Subject'></input>
                    <input className=' form-input-width' type='text' placeholder='Phone Number'></input>
            </div>
                    <textarea className='form-textarea w-100' type='text'  placeholder='Your Message...' ></textarea>
                    <button className='send-message' >SEND MESSAGE</button>
            </div>
        </div>


        {/* FOOTER */}
        <div className='touch-footer'>
    <h1 class="footer-logo col-white"><span className='blue' >Bé</span>Smart</h1>
    <p>Copyright 2016. Design & Developed by <a href='#'>MJ VAGHASIYA</a></p>

    {/* LOGO */}
    <div className='ds-flx justify-center '>
    <div className='logo-border' ><BsTwitter className='col-gray' /></div>
    <div className='logo-border' ><BsPinterest className='col-gray' /></div>
    <div className='logo-border' ><ImFacebook  className='col-gray' /></div>
    <div className='logo-border' ><ImInstagram className='col-gray' /></div>
    <div className='logo-border' ><BsSkype className='col-gray' /></div>
    <div className='logo-border' ><BsDribbble className='col-gray' /></div>
    </div>

        </div>
        
        </div>
        </div>
        </section>
    )
}

export default Touch
