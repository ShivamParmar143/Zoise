import React, { useEffect, useState } from 'react'
import './Header.scss'

const Header = () => {

  const [bgColor, setBgColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

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
    <div className='header' style={{
      backgroundColor: bgColor,
      color: textColor,
      transition: "background-color 2s ease, color 2s ease",
      }}>
        <div className='left'>
            <h2>ZOISE</h2>
        </div>
        <div className='right'>
            <li onClick={() => {
              const element = document.querySelector('.hero');
              element?.scrollIntoView({
              behavior : 'smooth'
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
                  behavior : 'smooth'
                }
              )
            }}>
              PRICING
            </li>
            <li onClick={() => {
              const element5 = document.querySelector('.contact');
              element5?.scrollIntoView(
                {behavior : 'smooth'}
              )
            }}>
              CONTACT
            </li>
        </div>
    </div>
  )
}

export default Header