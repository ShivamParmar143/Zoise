// import React from 'react'
// import './Start.scss'
// import { BsArrowRight } from 'react-icons/bs'

// const Start = () => {

//   const GoToTop = () => {

//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// }

//   return (
//     <div className='main-start'>
//         <div className='start'>
//             <span id='start1'>Let's Get Started</span>

//             <pre id='start-txt'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there<br />                   suspendisse suscipit sapien sit amet live the blind texts.</pre>

//             <button type='button' id='startbtn' onClick={GoToTop}>Get Started  <BsArrowRight id='startarrow' size={15}/></button>

//             <p id='start-txt2'>Have a question? Give us a call 347-776-3316</p>
//         </div>
//     </div>
//   )
// }

// export default Start

import React from 'react'
import './Start.scss'
import { BsArrowRight } from 'react-icons/bs'

const Start = () => {

  const GoToTop = () => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className='main-start'>
      <div className='start'>
        <h2 id='start1'>Let's Get Started</h2>
        <p id='start-txt'>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
          suspendisse suscipit sapien sit amet live the blind texts.
        </p>
        <button type='button' id='startbtn' onClick={GoToTop}>
          Get Started <BsArrowRight id='startarrow' size={15} />
        </button>
        <p id='start-txt2'>Have a question? Give us a call 347-776-3316</p>
      </div>

    </div>
  )
}

export default Start