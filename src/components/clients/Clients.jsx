// import React from 'react'
// import './Clients.scss'
// import img6 from '../../components/images/img-6.jpg'
// import img9 from '../../components/images/img-9.png'
// import img10 from '../../components/images/img-10.png'
// import img11 from '../../components/images/img-11.png'
// import img12 from '../../components/images/img-12.png'

// import {  MdOutlineStarPurple500 } from 'react-icons/md'

// const Clients = () => {
//     return (
//         <div className='clients'>
//             <div className='te5'>
//                 <pre className='p6'> What they say about us <strong>honest reviews</strong></pre>
//             </div>
//             <div className='te6'>
//                 <pre className='p9'>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild<br />                          Question Marks and devious Semikoli.</pre>
//             </div>
//             <div className='caraousel1'>
//                 <div className='comp1'>
//                     <div className='cdata'>
//                         <p>"I've learned that people will forget what you said, people will forget what you did, but<br /> people will never aliquam in nunc quis tincidunt forget how you never forget how donec<br /> in efficitur lectus, them feel."</p>
//                         <h3>Jeremiah Eskew</h3>
//                         <h4>-Developer</h4>
//                     </div>
//                     <div className='cimg'>
//                         <img src={img6} alt='img6' className='cimg1'></img>
//                     </div>
//                     <div className='rating'>
//                         <MdOutlineStarPurple500 />
//                         <MdOutlineStarPurple500 />
//                         <MdOutlineStarPurple500 />
//                         <MdOutlineStarPurple500 />
//                         <MdOutlineStarPurple500 />
//                     </div>
//                     <div className='logos'>
//                         <img src={img9} alt='img9' className='limg1' />
//                         <img src={img10} alt='img10'  className='limg1'/>
//                         <img src={img11} alt='img11'  className='limg1'/>
//                         <img src={img12} alt='img12'  className='limg1'/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Clients



import React from 'react';
import './Clients.scss';

import img6 from '../../components/images/img-6.jpg';
import img9 from '../../components/images/img-9.png';
import img10 from '../../components/images/img-10.png';
import img11 from '../../components/images/img-11.png';
import img12 from '../../components/images/img-12.png';

import { MdOutlineStarPurple500 } from 'react-icons/md';

const Clients = () => {
  return (
    <section className="clients">
      <h2 className="title">What they say about us <strong>honest reviews</strong></h2>
      <p className="subtitle">
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild
        <br />
        Question Marks and devious Semikoli.
      </p>

      <div className="testimonial-row">
        <div className="client-image-wrapper">
          <img src={img6} alt="client" className="client-img" />
        </div>

        <div className="testimonial-box">
          <p>
            "I've learned that people will forget what you said, people will forget what you did,
            but people will never forget how you made them feel."
          </p>
          <h3>Jeremiah Eskew</h3>
          <h4>- Developer</h4>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <MdOutlineStarPurple500 key={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="logos">
        <img src={img9} alt="logo1" />
        <img src={img10} alt="logo2" />
        <img src={img11} alt="logo3" />
        <img src={img12} alt="logo4" />
      </div>
    </section>
  );
};

export default Clients;


