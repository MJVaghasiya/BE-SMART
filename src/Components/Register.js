import React from 'react'
import img1 from '../assets/register-form.jpg'


const Register = () => {
  return (
    <section id='Register'>
    <div id='Register' className='pd-4'>
  
      
<div className='row bs-gutter-0 w-100 backround-color register-row '>
  <div className='col-lg-6 padding-left-0 padding-right-0'>
<img style={{width:"100%"}}  src={img1}/>
  </div>
  <div className='col-lg-6 register-col'>
<h2 className='color' >Register Your Attendance Today.</h2>
<p className='color register-p'>Curabitur quam etsum lacus etsumis nulat iaculis etsum vitae etsum nisle varius loremis sed feugiat ligula aliquam ets vitae dictis netsum et ipsum netsum et quia nihilse etsa illum sedit consequatur quias sit coloris.</p>
 <div className='form'>
  <input className='form-input' type='text' placeholder='Full Name*'></input>
  <input className='form-input' type='text' placeholder='Email Adress*'></input>
  <input className='form-input' type='text' placeholder='Phone Number*'></input>
 
<select className='dropdown form-input' required name='register-ticket'>

  <option value>Ticket Type*</option>
  <option value='One Day Access'>One Day Access</option>
  <option value='Two Day Access'>Two Day Access</option>
  <option value='Three Day Access'>Three Day Access</option>
  
</select>
<input type='submit' value='REGISTER-NOW' className='form-input btn-submit' ></input>
<p className='color register-p-notice' >*We process the payment via a secure gateway.</p>
 </div>
  </div>
</div>
</div>

  
    </section>
    
  )
}

export default Register
