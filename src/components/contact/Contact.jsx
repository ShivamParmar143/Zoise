// import React from 'react'
// import './Contact.scss'
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const Contact = () => {

//     const formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             subject: '',
//             message: '',
//         },
//         validationSchema: Yup.object({

//             name: Yup.string()
//                 .required('Name is required')
//                 .matches(/^([^0-9]*)$/, "Don't allow Numeric Value"),
//             email: Yup.string()
//                 .required('Email is required')
//                 .email('Enter a valid email'),
//             subject: Yup.string()
//                 .required('Subject is required'),
//             message: Yup.string()
//                 .required('Message is required'),
//         }),
//         onSubmit: async (values, { resetForm }) => {
//             try {
//                 const { data } = await axios.post('http://localhost:3035/contact', values);
//                 // const { data } = await axios.post('https://zoise-backend.vercel.app/contact', values);
//                 if (data.success) {
//                     alert(data.message)
//                 } else {

//                     alert('try again');
//                 }
//                 resetForm();
//             } catch (error) {
//                 alert(error.message);
//             }
//         },
//     })

//   return (
//     <div className='contact'>
//         <div className='te10'>
//                 <pre className='p10'>Let's talk about <strong>everything!</strong></pre>
//             </div>
//             <div className='te11'>
//                 <pre className='p11'>We thrive when coming up with innovative ideas but also understand that a smart concept should<br />                 be supported with faucibus sapien odio measurable results.</pre>
//             </div>
//             <div className='contact-left'>
//                 <div className='leftdata'>
//                     <span className='sdata'>
//                     <span id='data-1'>Email Address</span>

//                     <span id='de-1'>JohnPBeau@jourrapide.com</span>
//                     </span>

//                     <span className='sdata'>
//                     <span id='data-2'>Contact Number</span>
//                     <span id='de-2'>+112 708-231-9668</span>
//                     </span>

//                     <span className='sdata'>
//                     <span id='data-3'>Office Address</span>
//                     <span id='de-3'>3429 Gnatty Creek Road<br /> Farmingdale, NY 11735</span>
//                     </span>
//                 </div>
//             </div>
//             <div className='contact-right'>
//                 {/* <div className='form1'> */}
//                 <form className='form1' onSubmit={formik.handleSubmit}>
//                     <span className='ne'>
//                     <input
//                         type="text"
//                         placeholder='Your Name'
//                         id='name'
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.touched.name && formik.errors.name && (
//                     <div>{formik.errors.name}</div>
//                     )}
//                     <input
//                         type="email"
//                         placeholder='Your Email'
//                         id='email'
//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.touched.email && formik.errors.email && (
//                     <div>{formik.errors.email}</div>
//                     )}
//                     {/* <input type='text' id='name' placeholder='Your name'></input>
//                     <input type='email' id='email' placeholder='Your email'></input> */}
//                     </span>
//                     <input
//                         type="text"
//                         placeholder='Your Subject..'
//                         id='subject'
//                         value={formik.values.subject}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.touched.subject && formik.errors.subject && (
//                     <div>{formik.errors.subject}</div>
//                     )}
//                     <textarea 
//                         type='textarea'
//                         placeholder='Your Message...'
//                         id='message'
//                         value={formik.values.message}
//                         onChange={formik.handleChange}
//                     />
//                     {formik.touched.message && formik.errors.message && (
//                     <div>{formik.errors.message}</div>
//                     )}

//                     {/* <input type='text' id='subject' placeholder='Your Subject..'></input>
//                     <textarea type='textarea' id='message' placeholder='Your message...' ></textarea> */}
//                     <button type='submit' id='sendmsg'>Send Message</button>
//                     </form>
//                 {/* </div> */}
//             </div>
//     </div>
//   )
// }

// export default Contact

import React from 'react';
import './Contact.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .matches(/^([^0-9]*)$/, "Don't allow numeric values"),
            email: Yup.string()
                .required('Email is required')
                .email('Enter a valid email'),
            subject: Yup.string().required('Subject is required'),
            message: Yup.string().required('Message is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const { data } = await axios.post('https://zoise-backend.vercel.app/api/contact', values);
                if (data.success) {
                    alert(data.message);
                } else {
                    alert('Try again');
                }
                resetForm();
            } catch (error) {
                alert(error.message);
            }
        },
    });

    return (
        <div className="contact">
            <p className='te10'>Let's talk about <strong>everything!</strong></p>
            <p className='te11'>
                We thrive when coming up with innovative ideas but also understand that a smart concept should
                be supported with faucibus sapien odio measurable results.
            </p>


            {/* Wrap both left and right in a flex container */}
            <div className="contact-container">
                <div className="contact-left">
                    <div className="leftdata">
                        <span className="sdata">
                            <span id="data-1">Email Address</span>
                            <span id="de-1">JohnPBeau@jourrapide.com</span>
                        </span>
                        <span className="sdata">
                            <span id="data-2">Contact Number</span>
                            <span id="de-2">+112 708-231-9668</span>
                        </span>
                        <span className="sdata">
                            <span id="data-3">Office Address</span>
                            <span id="de-3">3429 Gnatty Creek Road<br />Farmingdale, NY 11735</span>
                        </span>
                    </div>
                </div>

                <div className="contact-right">
                    <form className="form1" onSubmit={formik.handleSubmit}>
                        <div className="ne">
                            <input type="text" id="name" placeholder="Your Name" value={formik.values.name} onChange={formik.handleChange} />
                            <input type="email" id="email" placeholder="Your Email" value={formik.values.email} onChange={formik.handleChange} />
                        </div>

                        <input type="text" id="subject" placeholder="Your Subject..." value={formik.values.subject} onChange={formik.handleChange} />
                        <textarea id="message" placeholder="Your Message..." value={formik.values.message} onChange={formik.handleChange} />
                        <button type="submit" id="sendmsg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Contact;
