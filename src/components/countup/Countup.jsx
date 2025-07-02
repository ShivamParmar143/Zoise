// import React from 'react'
// import CountUp from 'react-countup'

// import './Countup.scss'
// import { FaRegUserCircle } from 'react-icons/fa'
// import { VscBriefcase } from 'react-icons/vsc'
// import { CiMedal, CiStopwatch } from 'react-icons/ci'

// const Countup = () => {
//     return (
//         <div className='main-incr'>
//             <div className='increment'>

//                 <div className='main-in'>
//                     <FaRegUserCircle className='icon' size={55} />
//                     <div className='counting'>
                    
//                         <CountUp
//                             start={0}
//                             end={345}
//                             duration={2.75}
//                             separator=" "
//                             decimals={0}
//                             decimal=","
                            

//                         />
//                         <h2 className='txth2'>Happy Clients </h2>
//                     </div>
//                 </div>

//                 <div className='main-in'>
//                     <VscBriefcase className='icon' size={55}/>
//                     <div className='counting'>
//                         <CountUp
//                             start={0}
//                             end={685}
//                             duration={2.75}
//                             separator=" "
//                             decimals={0}
//                             decimal=","
                            

//                         />
//                         <h2 className='txth2'>Projects Done</h2>
//                     </div>
//                 </div>

//                 <div className='main-in'>
//                     <CiMedal className='icon' size={55}/>
//                     <div className='counting'>
//                         <CountUp
//                             start={0}
//                             end={125}
                            
//                             duration={2.75}
//                             separator=" "
//                             decimals={0}
//                             decimal=","

//                         />
//                         <h2 className='txth2'>Award Won</h2>
//                     </div>
//                 </div>

//                 <div className='main-in'>
//                     <CiStopwatch className='icon' size={55}/>
//                     <div className='counting' style={{ borderRight: "none" }}>
//                         <CountUp
//                             start={0}
//                             end={500}
//                             duration={2.75}
//                             separator=" "
//                             decimals={0}
//                             decimal=","
//                             suffix='K'

//                         />

//                         <h2 className='txth2'>Hours of Work</h2>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Countup

import React from 'react';
import CountUp from 'react-countup';

import './Countup.scss';
import { FaRegUserCircle } from 'react-icons/fa';
import { VscBriefcase } from 'react-icons/vsc';
import { CiMedal, CiStopwatch } from 'react-icons/ci';

const Countup = () => {
    return (
        <section className='main-incr'>
            <div className='increment'>
                <div className='main-in'>
                    <div className='icon-box'>
                        <FaRegUserCircle className='icon' size={50} />
                    </div>
                    <div className='counting'>
                        <span className='count'><CountUp start={0} end={345} duration={2.75} /></span>
                        <p className='txth2'>Happy Clients</p>
                    </div>
                </div>

                <div className='main-in'>
                    <div className='icon-box'>
                        <VscBriefcase className='icon' size={50} />
                    </div>
                    <div className='counting'>
                        <span className='count'><CountUp start={0} end={685} duration={2.75} /></span>
                        <p className='txth2'>Projects Done</p>
                    </div>
                </div>

                <div className='main-in'>
                    <div className='icon-box'>
                        <CiMedal className='icon' size={50} />
                    </div>
                    <div className='counting'>
                        <span className='count'><CountUp start={0} end={125} duration={2.75} /></span>
                        <p className='txth2'>Award Won</p>
                    </div>
                </div>

                <div className='main-in'>
                    <div className='icon-box'>
                        <CiStopwatch className='icon' size={50} />
                    </div>
                    <div className='counting'>
                        <span className='count'><CountUp start={0} end={500} duration={2.75} suffix="K" /></span>
                        <p className='txth2'>Hours of Work</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Countup;


