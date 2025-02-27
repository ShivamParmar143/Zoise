import React from 'react'
import './Contact.scss'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='te10'>
                <pre className='p10'>Let's talk about <strong>everything!</strong></pre>
            </div>
            <div className='te11'>
                <pre className='p11'>We thrive when coming up with innovative ideas but also understand that a smart concept should<br />                 be supported with faucibus sapien odio measurable results.</pre>
            </div>
            <div className='contact-left'>
                <div className='leftdata'>
                    <span className='sdata'>
                    <span id='data-1'>Email Address</span>

                    <span id='de-1'>JohnPBeau@jourrapide.com</span>
                    </span>

                    <span className='sdata'>
                    <span id='data-2'>Contact Number</span>
                    <span id='de-2'>+112 708-231-9668</span>
                    </span>

                    <span className='sdata'>
                    <span id='data-3'>Office Address</span>
                    <span id='de-3'>3429 Gnatty Creek Road<br /> Farmingdale, NY 11735</span>
                    </span>
                </div>
            </div>
            <div className='contact-right'>
                <div className='form1'>
                    <span className='ne'>
                    <input type='text' id='name' placeholder='Your name'></input>
                    <input type='email' id='email' placeholder='Your email'></input>
                    </span>
                    <input type='text' id='subject' placeholder='Your Subject..'></input>
                    <textarea type='textarea' id='message' placeholder='Your message...' ></textarea>
                    <button type='button' id='sendmsg'>Send Message</button>
                </div>
            </div>
    </div>
  )
}

export default Contact