// import React from 'react'
// import './Pricing.scss'


// const Pricing = () => {

//     const GoToTop = () => {
//         window.scrollTo({
//             top: 0,
//             left: 0,
//             behavior: 'smooth'
//         });
//     }

//     return (
//         <div className='pricing'>
//             <div className='te7'>
//                 <pre className='p7'>Start your creative project <strong>with the right plans</strong></pre>
//             </div>
//             <div className='te8'>
//                 <pre className='p8'>Call to action pricing table is really crucial to your for your business website. Make your bids<br />                                 stand-out with amazing options.</pre>
//             </div>
//             <div className='priceCards'>
//                 <div className='priceCard'>
//                     <div className='sec1'>
//                         <h3 id='free'>Free Plan</h3>
//                     </div>
//                     <div className='sec2'>
//                         <span id='money'>$79</span>
//                         <p id='moneytxt'>Billing Per Month</p>
//                     </div>
//                     <div className='sec3'>
//                         <span id='sectxt'>Up to <b>10</b> Users</span>
//                         <span id='sectxt'><b>5</b> Projects</span>
//                         <span id='sectxt'><b>Free</b> Update</span>
//                         <span id='sectxt'><b>10GB</b> Storage</span>
//                         <span id='sectxt'><b>1</b> Domain Name</span>
//                         <span id='sectxt'><b>2</b> Month pcense</span>
//                         <span id='sectxt'><b>24/7</b> Support</span>
//                         <button type='button' id='pricebtn' onClick={GoToTop}>design studio creatinge</button>
//                     </div>
//                 </div>
//                 <div className='priceCard'>
//                     <div className='sec1'>
//                         <h3 id='free'>Basic Plan</h3>
//                     </div>
//                     <div className='sec2'>
//                         <span id='money'>$129</span>
//                         <p id='moneytxt'>Billing Per Month</p>
//                     </div>
//                     <div className='sec3'>
//                         <span id='sectxt'>Up to <b>10</b> Users</span>
//                         <span id='sectxt'><b>5</b> Projects</span>
//                         <span id='sectxt'><b>Free</b> Update</span>
//                         <span id='sectxt'><b>10GB</b> Storage</span>
//                         <span id='sectxt'><b>1</b> Domain Name</span>
//                         <span id='sectxt'><b>2</b> Month pcense</span>
//                         <span id='sectxt'><b>24/7</b> Support</span>
//                         <button type='button' id='pricebtn' onClick={GoToTop}>Start with Zoise</button>
//                     </div>
//                 </div>
//                 <div className='priceCard'>
//                     <div className='sec1'>
//                         <h3 id='free'>Premium Plan</h3>
//                     </div>
//                     <div className='sec2'>
//                         <span id='money'>$249</span>
//                         <p id='moneytxt'>Billing Per Month</p>
//                     </div>
//                     <div className='sec3'>
//                         <span id='sectxt'>Up to <b>10</b> Users</span>
//                         <span id='sectxt'><b>5</b> Projects</span>
//                         <span id='sectxt'><b>Free</b> Update</span>
//                         <span id='sectxt'><b>10GB</b> Storage</span>
//                         <span id='sectxt'><b>1</b> Domain Name</span>
//                         <span id='sectxt'><b>2</b> Month pcense</span>
//                         <span id='sectxt'><b>24/7</b> Support</span>
//                         <button type='button' id='pricebtn' onClick={GoToTop}>Start with Zoise</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Pricing

import React from 'react'
import './Pricing.scss'


const Pricing = () => {

    const GoToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div className='pricing'>
            <div className='te7'>
                <h2>Start your creative project <strong>with the right plans</strong></h2>
            </div>
            <div className='te8'>
                <p>
                    Call to action pricing table is really crucial to your business website. <br />
                    Make your bids stand-out with amazing options.
                </p>
            </div>

            <div className='priceCards'>
                <div className='priceCard'>
                    <div className='sec1'>
                        <h3 id='free'>Free Plan</h3>
                    </div>
                    <div className='sec2'>
                        <span id='money'>$79</span>
                        <p id='moneytxt'>Billing Per Month</p>
                    </div>
                    <div className='sec3'>
                        <span id='sectxt'>Up to <b>10</b> Users</span>
                        <span id='sectxt'><b>5</b> Projects</span>
                        <span id='sectxt'><b>Free</b> Update</span>
                        <span id='sectxt'><b>10GB</b> Storage</span>
                        <span id='sectxt'><b>1</b> Domain Name</span>
                        <span id='sectxt'><b>2</b> Month pcense</span>
                        <span id='sectxt'><b>24/7</b> Support</span>
                        <button type='button' id='pricebtn' onClick={GoToTop}>design studio creatinge</button>
                    </div>
                </div>
                <div className='priceCard'>
                    <div className='sec1'>
                        <h3 id='free'>Basic Plan</h3>
                    </div>
                    <div className='sec2'>
                        <span id='money'>$129</span>
                        <p id='moneytxt'>Billing Per Month</p>
                    </div>
                    <div className='sec3'>
                        <span id='sectxt'>Up to <b>10</b> Users</span>
                        <span id='sectxt'><b>5</b> Projects</span>
                        <span id='sectxt'><b>Free</b> Update</span>
                        <span id='sectxt'><b>10GB</b> Storage</span>
                        <span id='sectxt'><b>1</b> Domain Name</span>
                        <span id='sectxt'><b>2</b> Month pcense</span>
                        <span id='sectxt'><b>24/7</b> Support</span>
                        <button type='button' id='pricebtn' onClick={GoToTop}>Start with Zoise</button>
                    </div>
                </div>
                <div className='priceCard'>
                    <div className='sec1'>
                        <h3 id='free'>Premium Plan</h3>
                    </div>
                    <div className='sec2'>
                        <span id='money'>$249</span>
                        <p id='moneytxt'>Billing Per Month</p>
                    </div>
                    <div className='sec3'>
                        <span id='sectxt'>Up to <b>10</b> Users</span>
                        <span id='sectxt'><b>5</b> Projects</span>
                        <span id='sectxt'><b>Free</b> Update</span>
                        <span id='sectxt'><b>10GB</b> Storage</span>
                        <span id='sectxt'><b>1</b> Domain Name</span>
                        <span id='sectxt'><b>2</b> Month pcense</span>
                        <span id='sectxt'><b>24/7</b> Support</span>
                        <button type='button' id='pricebtn' onClick={GoToTop}>Start with Zoise</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing