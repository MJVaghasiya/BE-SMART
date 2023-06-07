
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import Lightbox from './Lightbox';
import { useState } from 'react';
import { BsFacebook, BsPinterest, BsTwitter, BsYoutube } from 'react-icons/bs'



const images = [
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p1.jpg',
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p2.jpg',
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p3.jpg',
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p4.jpg',
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p5.jpg',
  'https://demo.epic-webdesign.com/tf-besmart/v1/images/p6.jpg'
];


const Work = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // handle when the user clicks on an image to open the lightbox
  const handleImageClick = (index) => {
    setIsLightboxOpen(true);
    setLightboxIndex(index);
  };

  // handle when the user closes the lightbox
  const handleLightboxClose = () => {
    setIsLightboxOpen(false);
    setLightboxIndex(0);
  };
  return (
    <section id='Work'>

      <div className='work pd-6'>
        <div className='page'>

          <h2 className='page-header' >Our Latest Work</h2>
          <div className='page-underline '>
            <AiFillStar className='color' />
          </div>
          <p className='page-head'>There are many variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration, by injected humour, or new randomised words.</p>
        </div>



      </div>


     
      <div className="my-component">
      
        {images?.map((image, index) => (
          <img key={index} src={image} alt={`myimg ${index}`} onClick={() => handleImageClick(index)} />
        ))}

        {/* render the lightbox */}
        <div className='first'>
          <Lightbox
            images={images}
            index={lightboxIndex}
            isOpen={isLightboxOpen}
            onRequestClose={handleLightboxClose}
          />
        
        </div>
      </div>












    </section>
  )
}

export default Work