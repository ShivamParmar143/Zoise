// import React from 'react'
// import './Features.scss'
// import img4 from '../../components/images/img-4.png'
// import img5 from '../../components/images/img-5.png'
// import { LuMonitorPlay } from 'react-icons/lu'
// import { BsCalendarDate } from 'react-icons/bs'

// const Features = () => {
//     return (
//         <div className='features'>
            
//             <div className='te3'>
//                 <pre className='p1'> The Features that <strong>we present</strong></pre>
//             </div>
//             <div className='te4'>
//                 <pre className='p2'>        We craft digital, graphic and dimensional thinking, to create category leading brand experiences <br />                        that have meaning and add a value for our clients.</pre>
//             </div>
//             <div className='featureData'>
//                 <h2 id='fd1'>We love make things <strong>amazing and <br />simple</strong></h2>
//             </div>
//             <div className='featureData2'>
//                 <div className='d01'>01</div>
//                 <div className='d01data'>
//                     <h3>Marketing Performance</h3>
//                     <pre id='d01txt'>Separated they live in Bookmarksgrove right at the<br />coast the Semantics, a large language ocean. A small<br />river name Duden flows by regelialia.</pre>
//                 </div>
//             </div>
//             <div className='featureData3'>
//                 <div className='d02'>02</div>
//                 <div className='d02data'>
//                     <h3>Marketing business</h3>
//                     <pre id='d01txt'>Separated they live in Bookmarksgrove right at the<br />coast the Semantics, a large language ocean<br />publishing web page editors now.</pre>
//                 </div>
//             </div>
//             <div className='imgright'>
//                 <img src={img4} alt='img4' height={280} width={450}></img>
//             </div>
//             <div className='imgleft'>
//                 <img src={img5} alt='img5' height={250} width={450}></img>
//             </div>
//             <div className='featureData4'>
//                 <h2 id='fd1'>Creative solutions to<strong> expand your <br />business!</strong></h2>
//             </div>
//             <div className='featureData5'>
//                 <div className='d03'><LuMonitorPlay size={35} /></div>
//                 <div className='d03data'>
//                     <h3>We put a lot of effort in design.</h3>
//                     <pre id='d03txt'>Some quick example text to build on the card title and<br />make up the bulk of the card's content. Moltin gives<br />platform web sites still in their infancy..</pre>
//                 </div>
//             </div>
//             <div className='featureData6'>
//                 <div className='d04'><BsCalendarDate size={35} /></div>
//                 <div className='d04data'>
//                     <h3>Submit Your Orgnization.</h3>
//                     <pre id='d04txt'>Credibly brand standards compliant on users without<br />extensible services. Anibh euismod tincidunt laoreet<br />Ipsum combined with a passage.</pre>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Features

import React from 'react';
import './Features.scss';
import img4 from '../../components/images/img-4.png';
import img5 from '../../components/images/img-5.png';
import { LuMonitorPlay } from 'react-icons/lu';
import { BsCalendarDate } from 'react-icons/bs';

const Features = () => {
  return (
    <div className='features'>
      <div className='te3'>
        <h2>The Features that <strong>we present</strong></h2>
      </div>
      <div className='te4'>
        <p>
          We craft digital, graphic and dimensional thinking, to create category
          leading brand experiences that have meaning and add a value for our
          clients.
        </p>
      </div>

      {/* Left text + Right image */}
      <div className='feature-section'>
        <div className='feature-text'>
          <h2>We love make things <strong>amazing and simple</strong></h2>
          <div className='feature-item'>
            <div className='feature-number'>01</div>
            <div className='feature-description'>
              <h3>Marketing Performance</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast the Semantics, a large
                language ocean. A small river name Duden flows by regelialia.
              </p>
            </div>
          </div>
          <div className='feature-item'>
            <div className='feature-number'>02</div>
            <div className='feature-description'>
              <h3>Marketing business</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast the Semantics, a large
                language ocean publishing web page editors now.
              </p>
            </div>
          </div>
        </div>
        <div className='imgright'>
          <img src={img4} alt='Feature Illustration 1' />
        </div>
      </div>

      {/* Left image + Right text */}
      <div className='feature-section'>
        <div className='imgleft'>
          <img src={img5} alt='Feature Illustration 2' />
        </div>
        <div className='feature-text-right'>
          <h2>Creative solutions to <strong>expand your business!</strong></h2>
          <div className='feature-item'>
            <div className='feature-icon'><LuMonitorPlay size={18} /></div>
            <div className='feature-description'>
              <h3>We put a lot of effort in design.</h3>
              <p>
                Some quick example text to build on the card title and make up the bulk of the
                card's content. Moltin gives platform web sites still in their infancy.
              </p>
            </div>
          </div>
          <div className='feature-item'>
            <div className='feature-icon'><BsCalendarDate size={18} /></div>
            <div className='feature-description'>
              <h3>Submit Your Organization.</h3>
              <p>
                Credibly brand standards compliant on users without extensible services. Anibh
                euismod tincidunt laoreet Ipsum combined with a passage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;


