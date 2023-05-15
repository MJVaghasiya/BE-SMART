import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import img1 from '../assets/services 1.png'
import img2 from '../assets/pencil.png'
import  img3 from '../assets/setting-blue.png'
import img4 from '../assets/target.png'
import img5 from '../assets/umbrella.png'
import img6 from '../assets/receipt.png'
import img7 from '../assets/talk.png'
import WOW from 'wowjs';




class Services extends React.Component {
    componentDidMount() {
        new WOW.WOW({
          live: false
      }).init();
      }
   render(){ 
  return (
    <section id='Work'>
    <div>
       <div className='work pd-6' id='Services'>
                <div className='page'>

                    <h2 className='page-header' >Amazing Services</h2>
                    <div className='page-underline '>
                        <AiFillStar className='color' />
                    </div>
                    <p style={{ color: "gray", fontSize: "17px", margin:"auto", width:"50%" }} >There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words.</p>
                </div>
</div>


<div className='container'>
<img className='services-img' src={img1}/>
<div className='services-card'>
    <div className='row'>
        <div className='col-lg-4'><div className='full-des  wow fadeIn'  data-wow-delay="0.15s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img2}/>
    </div><div className='description'>
        <h5 className='des-title'  >Top Notch Design</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>



{/* SECOND */}

        <div className='col-lg-4'><div className='full-des  wow fadeIn '  data-wow-delay="0.30s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img3}/>
    </div><div className='description'>
        <h5 className='des-title'  >Well Explain Code</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>


{/* THIRD */}

        <div className='col-lg-4'><div className='full-des  wow fadeIn'  data-wow-delay="0.45s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img4}/>
    </div><div className='description'>
        <h5 className='des-title'  >Free Updates</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>


{/* FOURTH */}

        <div className='col-lg-4'><div className='full-des  wow fadeIn'  data-wow-delay="0.6s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img5}/>
    </div><div className='description'>
        <h5 className='des-title'>Monthly Awards</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>


{/* FIFTH */}

        <div className='col-lg-4'><div className='full-des  wow fadeIn'  data-wow-delay="0.75s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img6}/>
    </div><div className='description'>
        <h5 className='des-title'  >Easy Customizable</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>


{/* SIXTH */}

        <div className='col-lg-4'><div className='full-des  wow fadeIn '  data-wow-delay="0.9s">
    <div className='des-icon'>
<img className='amazing-card-icon' src={img7}/>
    </div><div className='description'>
        <h5 className='des-title'  >24/7 Support</h5>
        <p>Curabitur quas nets lacus et nulat niste iaculis etimusad nisle varius etim vitae seditum ligulase quiste net sequi.</p>
    </div>
</div></div>
    </div>
</div>
</div>


{/* OVERLAP FUNCTION */}
<div className='overlap-fixed-img-2'>

<div className='try-it wow fadeIn '  data-wow-delay="0.60s"  data-wow-duration="3s">
    <h1 className='try-it-heading' >Seen enough? Let's get started</h1>
    <p className='our-features' >No Fixed Contarct. No Installation Required. Trusted & Secure.</p>
    <button className='try-it-free' >TRY IT FOR FREE!</button>
</div>

</div>

    </div>
    </section>
  )
}
}

export default Services
