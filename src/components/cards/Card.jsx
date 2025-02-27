import React from 'react'
import './Card.scss'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { HiOutlineCircleStack } from 'react-icons/hi2'
import { PiNetwork } from 'react-icons/pi'
import { BsArrowRight } from 'react-icons/bs'


const Card = () => {

    const GoToTop = () => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className='card'>
            <div className="service-container">
                <div className="service-card">
                    <div className='logo1'> <PiNetwork size={40} /></div>
                    <h4>Digital Design</h4>
                    <pre className='txt1'> Some quick example text to build on the<br />card title and bulk the card's content Moltin <br />         gives you platform.</pre>
                    <h5 className='read' onClick={GoToTop}>Read More <BsArrowRight id='arrow1' /></h5>
                </div>

                <div className="service-card">
                    <div className='logo1'><HiOutlineCircleStack size={40} /></div>
                    <h4>Strategy Solutions</h4>
                    <pre className='txt1'>Separated they live in Bookmark sgrove<br /> right at the coast of the Semtics langu<br />       ocean necessary regelialia.</pre>
                    <h5 className='read' onClick={GoToTop}>Read More <BsArrowRight id='arrow1' /></h5>
                </div>

                <div className="service-card">
                    <div className='logo1'><HiOutlineUserAdd size={40} /></div>
                    <h4>Awesome Support</h4>
                    <pre className='txt1'>It is a paradisematic country sentences, in<br />   which roasted parts of into your mouth<br />           leave for the World.</pre>
                    <h5 className='read' onClick={GoToTop}>Read More <BsArrowRight id='arrow1' /></h5>
                </div>
            </div>
        </div>
    )
}

export default Card