import React, { useState } from 'react';
import Modal from 'react-modal';
import {AiOutlineClose} from 'react-icons/ai'
import {BsCaretRightFill, BsMenuButton} from 'react-icons/bs'
import {BsCaretLeftFill} from 'react-icons/bs'

// define custom styles for the modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -42%)',
    width: '80%',
    height: '80%',
    padding: 0,
    background:'none',
    border:'none'
  },
};

// define the Lightbox component
const Lightbox = ({ images, index, isOpen, onRequestClose }) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  // update the current index when the user clicks the next or previous button
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Lightbox"
    >
      <div className="lightbox">
        <div className="lightbox__image-container">
          <img src={images[currentIndex]} alt={`Image ${currentIndex}`} />
        </div>
      
        <BsCaretLeftFill className="lightbox__prev-button" onClick={handlePrev}/>
        
        <BsCaretRightFill   className="lightbox__next-button" onClick={handleNext}/>
          <AiOutlineClose className="lightbox__close-button" onClick={onRequestClose}/>
          
      </div>
    </Modal>
  );
};

export default Lightbox;