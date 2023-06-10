import React from 'react'
import { AiFillStar } from 'react-icons/ai'


const Price = () => {
    return (
        <section id='Price'>
        <div id='Price'>
        <div className='price-page'  id='Price'>
            <div className='work pd-6'>
                <div className='page'>

                    <h2 className='page-header' >Choose Your Pricing Plan</h2>
                    <div className='page-underline '>
                        <AiFillStar className='color' />
                    </div>
                    <p className='page-head' >There are many variations of passages of Lorem Ipsum available, but the majority
                        have suffered alteration, by injected humour, or new randomised words.</p>
                </div>
            </div>
            <div className='container'>

                <div className='row justify-center'>
                <div className='col-sm-7 col-md-4 col-lg-4 mt-4 price-width'>
                        <div className='price-card'>
                            <div className='price'>
                                <h4 className='col-white'>STARTER</h4>
                                <h5 className='col-white' >
                                    <span >$</span>
                                    <span className='package-price font-size ' >99</span>
                                    p/month</h5>
                            </div>
                            <div className='storage'>
                                <ul>
                                    <li>1 GB of space</li>
                                    <li>200 messages</li>
                                    <li>unlimited updates</li>
                                    <li>1 user accounts</li>
                                    <li>2 databases</li>
                                </ul>
                                <button className='btn-submit register-today' >REGISTER TODAY</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-7 col-md-4 col-lg-4 mt-4 price-width'>
                        <div className='price-card'>
                            <div className='price'>
                                <h4 className='col-white' >  ADVANCED</h4>
                                <h5 className='col-white' >
                                    <span >$</span>
                                    <span className='package-price font-size ' >199</span>
                                    p/month</h5>
                            </div>
                            <div className='storage'> <ul>
                                <li>1 GB of space</li>
                                <li>200 messages</li>
                                <li>unlimited updates</li>
                                <li>1 user accounts</li>
                                <li>2 databases</li>
                            </ul>
                                <button className='btn-submit register-today' >REGISTER TODAY</button></div>
                        </div>
                    </div>
                    <div className='col-sm-7 col-md-4 col-lg-4 mt-4 price-width'>
                        <div className='price-card'>
                            <div className='price'>
                                <h4 className='col-white' >  INTERMEDIATE</h4>
                                <h5 className='col-white' >
                                    <span >$</span>
                                    <span className='package-pric font-size e'>299</span>
                                    p/month</h5>
                            </div>
                            <div className='storage'> <ul>
                                <li>1 GB of space</li>
                                <li>200 messages</li>
                                <li>unlimited updates</li>
                                <li>1 user accounts</li>
                                <li>2 databases</li>
                            </ul>
                                <button className='btn-submit register-today' >REGISTER TODAY</button></div>
                        </div>
                    </div>
                </div>
                <p className='font-margin' >*With more than <span style={{ fontWeight: "700" }} >25078 clients,</span> we aim to offer premium <span style={{ fontWeight: "700" }}>marketing solutions</span> for your business.</p>
            </div>
        </div>
        </div>
        </section>
    )
}

export default Price
