import React from 'react'
import img2 from '../assets/pencil.png'
import img3 from '../assets/target.png'
import img4 from '../assets/talk.png'
import img5 from '../assets/partner1.png'
import img6 from '../assets/partner2.png'
import img7 from '../assets/partner3.png'
import img8 from '../assets/partner4.png'
import img9 from '../assets/partner5.png'





const Hero = () => {
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
      
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);
      
      
      

    return (
        <section id='hero'>
        <div>
            
       <div className='hero-page'>
        <div className='hero-under-page'>
    <div className='hero-concept'></div>
    <div className='hero-list'>
    
        <ul className='mrgn-80' >
            <li className='hero-header ' >
            Ready To Promote Your New<br/>
Business With BeSmart?
            </li>
            <li className='ds-flx reveal ' > 
                <span  ><img className='hero-icon' src={img2}/></span>
                <p className='pencil-text' >Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p>
            </li>
            <li className='ds-flx reveal' >
                <span  ><img className='hero-icon' src={img3}/></span>
                <p className='pencil-text' >Neque tempor ante acu ipsum nis finibus, atime quiamis ets netsumiteda qui tempor magni ets ipsum finibus.</p>
            </li>
            <li className='ds-flx reveal' > 
                <span  ><img className='hero-icon' src={img4}/></span>
                <p className='pencil-text' >Etiam tempor ante acu ipsum net finibus, atimus veilite nis netsumitedas qui tempor ratione estimat ipsum.</p>
            </li>
        </ul>
    </div>
            <div className='partner-logo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 '>
                    <img className='sponsor-logo' src={img5}/>
<img className='sponsor-logo' src={img6}/>
<img className='sponsor-logo' src={img7}/>
<img className='sponsor-logo' src={img8}/>
<img className='sponsor-logo' src={img9}/> 
                    </div>
                </div>
            </div>
            </div>
        </div>
       </div>
        </div>
        </section>
    )
}

export default Hero




// <div className='section-grey sponsors-padding'>
//     <div className='container'>
//         <div className='row text-center'>
//             <div className='col-sm-12 sponsors'>
//                 <img className='sponsor' src={img5} />
//                 <img className='sponsor' src={img6} />
//                 <img className='sponsor' src={img7} />
//                 <img className='sponsor' src={img8} />
//                 <img className='sponsor' src={img9} />
//             </div>
//         </div>
//     </div>
// </div>

// <div className='full-hero'>
// <div className='hero-concept container-fluid'>
//     <div className='hero-list container'>
//         <ul className='hero-ul'>
//             <li>
//                 <h1 className='hero-header m-b-2'>Ready To Promote Your New<br/> Business With BeSmart?</h1>
//             </li>
//             <li>
//                 <div className='hero-fst m-b-2 '>
//                 <span className='hero-icon'> <img className='hero-icon' width='100%' src={img2} /> </span>
//                     <p className='pencil-text'> Tendis tempor ante acu ipsum finibus, et atimus etims urna netsumiteda qui ratione lorem nets et sequi tempor.</p></div>
                
//                 <div className='hero-fst m-b-2'>
//                     <span className='hero-icon'> <img className='hero-icon' src={img3} /> </span>
//                     <p className='pencil-text'> Neque tempor ante acu ipsum nis finibus, atime quiamis ets netsumiteda qui tempor magni ets ipsum finibus.</p></div>
                
//                 <div className='hero-fst m-b-2'>
//                     <span className='hero-icon'> <img className='hero-icon' src={img4} /> </span>
//                     <p className='pencil-text'> Etiam tempor ante acu ipsum net finibus, atimus veilite nis netsumitedas qui tempor ratione estimat ipsum.</p></div>
//             </li>
//         </ul>
//     </div>
// </div>

// </div>