// import React, { useState } from 'react'
// import './Home.scss'
// import { IoMdArrowDropright } from 'react-icons/io'
// import Modal from '../modals/Modal';
// import Header from '../header/Header';

// const Home = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {

//     document.querySelector("body").style.overflow = "hidden";

//     setIsOpen(true);
//   };

//   const closeModal = () => {

//     document.querySelector("body").style.overflow = "auto";

//     setIsOpen(false);
//   };

//   return (
//     <>
//     <Header />
//     <div className='hero'>
//       <div className='innerbg'>
//         <pre id='heading1'>A digital web <b>design studio creating</b> <br />      modern & engaging online</pre>

//         <span className='dt'>
//         <button type='button' id='btn1' onClick={openModal}><b>Get Started Now  <IoMdArrowDropright size={20} id='arrowbtn1'/></b></button>
//         <pre id='call'>Call Us: (252) 501-631-7032</pre>
//         </span>
//       </div>
//     </div>

//     {isOpen &&
//       <Modal className='popup' open={isOpen} onClose={closeModal} center />
//     }
//     </>
//   )
// }

// export default Home

import React, { useState } from 'react';
import './Home.scss';
import { IoMdArrowDropright } from 'react-icons/io';
import Modal from '../modals/Modal';
import Header from '../header/Header';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <>
      <Header />
      <div className="hero">
        <div className="innerbg">
          <h1 id="heading1">
            A digital web <b>design studio creating</b><br />
            modern & engaging online
          </h1>


          <div className="dt">
            <button type="button" id="btn1" onClick={openModal}>
              <b>
                Get Started Now <IoMdArrowDropright size={20} id="arrowbtn1" />
              </b>
            </button>
            <div id="call">Call Us: (252) 501-631-7032</div>
          </div>
        </div>
      </div>

      {isOpen && <Modal className="popup" open={isOpen} onClose={closeModal} center />}
    </>
  );
};

export default Home;
