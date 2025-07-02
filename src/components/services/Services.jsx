// import React from 'react'
// import './Services.scss'
// import Card from '../cards/Card'

// const Services = () => {
//   return (
//     <div className='ser'>
//         <div className='te1'>
//             <pre className='p1'> Our many years of experience in business make us <br />expers at <strong>Best Web Services For Effective Business</strong>  <br />           your life and into your business.</pre>
//         </div>
//         <div className='te2'>
//           <pre className='p2'>        We craft digital, graphic and dimensional thinking, to create category leading brand experiences <br />                        that have meaning and add a value for our clients.</pre>
//         </div>
//         <div className='cards'>
//           <Card />
//         </div>
//     </div>
//   )
// }

// export default Services

import React from 'react';
import './Services.scss';
import Card from '../cards/Card';

const Services = () => {
  return (
    <div className="ser">
      <div className="te1">
        <h2 className="p1">
          Our many years of experience in business make us <br />
          experts at <strong>Best Web Services For Effective Business</strong><br />
          your life and into your business.
        </h2>
      </div>
      <div className="te2">
        <p className="p2">
          We craft digital, graphic and dimensional thinking to create category-leading brand experiences<br />
          that have meaning and add value for our clients.
        </p>
      </div>
      <div className="cards">
        <Card />
      </div>
    </div>
  );
};

export default Services;
