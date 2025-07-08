import React, { useEffect, useState } from 'react'
import './Header.scss'
import Register from '../register/Register';
import Login from '../login/Login';
import { FaRegUser } from 'react-icons/fa';
import Account from '../account/Account';

const Header = () => {

  const [showHeader, setShowHeader] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerWidth <= 768) {
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        // near top (Home)
        setShowHeader(true);
      } else {
        // not on Home section
        setShowHeader(false);
      }
    } else {
      // Always show header on desktop
      setShowHeader(true);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);



  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openModal2 = () => {
    setIsOpen2(true);
  };

  const closeModal2 = () => {
    setIsOpen2(false);
  };

  const openModal1 = () => {
    setIsOpen1(true);
  };

  const closeModal1 = () => {
    setIsOpen1(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2) {
        setBgColor("white");
        setTextColor("#002d3a");
      } else {
        setBgColor("transparent");
        setTextColor("white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* <div className='header' style={{
        backgroundColor: bgColor,
        color: textColor,
        transition: "background-color 2s ease, color 2s ease",
      }}> */}
      <div
  className="header"
  style={{
    backgroundColor: bgColor,
    color: textColor,
    transform: showHeader ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease, background-color 0.5s ease, color 0.5s ease",
  }}
>


        <div className='left'>
          <h2>ZOISE</h2>
        </div>
        <div className='right'>
          <li onClick={() => {
            const element = document.querySelector('.hero');
            element?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            HOME
          </li>
          <li onClick={() => {
            const element1 = document.querySelector('.ser');
            element1?.scrollIntoView({
              behavior: 'smooth'
            })
          }}>
            SERVICES
          </li>
          <li onClick={() => {
            const element2 = document.querySelector('.features');
            element2?.scrollIntoView(
              {
                behavior: 'smooth'
              }
            )
          }}>
            FEATURES
          </li>
          <li onClick={() => {
            const element3 = document.querySelector('.clients');
            element3?.scrollIntoView(
              {
                behavior: 'smooth'
              }
            )
          }}>
            CLIENTS
          </li>
          <li onClick={() => {
            const element4 = document.querySelector('.pricing');
            element4?.scrollIntoView(
              {
                behavior: 'smooth'
              }
            )
          }}>
            PRICING
          </li>
          <li onClick={() => {
            const element5 = document.querySelector('.contact');
            element5?.scrollIntoView(
              { behavior: 'smooth' }
            )
          }}>
            CONTACT
          </li>
          <li onClick={openModal}>
            REGISTER
          </li>
          <li onClick={openModal1}>
            LOGIN
          </li>
          <li onClick={openModal2}>
            <FaRegUser size={20}/>
          </li>
        </div>
      </div>

      {isOpen &&
        <Register className='popup' open={isOpen} onClose={closeModal} center />
      }
      {isOpen1 &&
        <Login className='popup1' open={isOpen1} onClose={closeModal1} center />
      }
      {isOpen2 &&
        <Account className='popup2' open={isOpen2} onClose={closeModal2} center />
      }
    </>
  )
}

export default Header