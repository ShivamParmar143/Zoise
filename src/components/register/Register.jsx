import React, { useContext, useState } from 'react'
import './Register.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MyContext from '../context/MyContext';
import { IoClose } from 'react-icons/io5';

const Register = ({onClose}) => {
    const{setMsg,setmsgAvailable} = useContext(MyContext);

    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            password: '',
            file: null,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .matches(/^([^0-9]*)$/, "Don't allow Numeric Value"),
            email: Yup.string()
                .required('Email is required')
                .email('Enter a valid email'),
            mobile: Yup.string()
                .required('Mobile number is required')
                .matches(/^[0-9]{10}$/, 'Mobile number is not valid'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters')
                .max(12, 'Password must be at most 12 characters'),
        }),
        onSubmit: 
        
        
        
        async (values, { resetForm }) => {
            
            try {
                const {data} = await axios.post('https://zoise-backend.vercel.app/api/register', values);
                if(data.success){
                    setMsg(data.message);
                    setmsgAvailable(true);
                }else{
                    setMsg(data.error);
                    setmsgAvailable(true);
                    // alert("try again")
                }
                
                
                resetForm();
            } catch (error) {
                alert(error.message);
            }
        },
    })
    






    return (
        <>
        <div className='register'>
            <h2 id='reg'>Register</h2>
            <IoClose id='clsbtn' size={30} onClick={onClose}/>
            <form className='form1' onSubmit={formik.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.touched.name && formik.errors.name && (
                    <div>{formik.errors.name}</div>
                )}

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.touched.email && formik.errors.email && (
                    <div>{formik.errors.email}</div>
                )}

                <label>
                    Mobile:
                    <input
                        type="text"
                        name="mobile"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.touched.mobile && formik.errors.mobile && (
                    <div>{formik.errors.mobile}</div>
                )}

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                </label>
                {formik.touched.password && formik.errors.password && (
                    <div>{formik.errors.password}</div>
                )}

                <button type="submit">Register</button>
            </form>

        </div>

    
    </>
    )
}

export default Register