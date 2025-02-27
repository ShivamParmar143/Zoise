import React from 'react'
import { IoClose } from 'react-icons/io5'
import './Modal.scss'
import ReactPlayer from 'react-player'
import video from '../../components/images/mov_bbb.mp4'

const Modal = ({onClose}) => {
  return (
    <div className='mainModal' onClick={onClose}>
    <div className='modal'>
        <IoClose id='clsbtn' size={25} onClick={onClose}/>
        <ReactPlayer url={video} controls playing loop muted id="rvideo"  />
    </div>
    </div>
  )
}

export default Modal