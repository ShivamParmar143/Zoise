import { useFormik } from 'formik'
import React, { useContext } from 'react'
import './Login.scss'
import axios from 'axios'
import * as Yup from 'yup';
import MyContext from '../context/MyContext';
import { IoClose } from 'react-icons/io5';

const Login = ({onClose}) => {
    
    const{setToken}=useContext(MyContext);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('Email is required')
                .email('Enter a valid email'),
            password: Yup.string()
                .required('Password is required')
                .min(8, 'Password must be at least 8 characters')
                .max(12, 'Password must be at most 12 characters'),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                const { data } = await axios.post('http://zoise-backend.vercel.app/login', values);
                setToken(data.data)
                if (data.success) {
                    alert(data.message)
                } else {

                    alert(data.error);
                }
                resetForm();
            } catch (error) {
                alert(error.message);
            }
        },
    })

    return (
        <div className='login'>
            <h2 id='log'>Login</h2>
            <IoClose id='clsbtn1' size={30} onClick={onClose}/>
            <form className='form3' onSubmit={formik.handleSubmit}>

                <label>
                    Email: <br />
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
                    Password: <br />
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

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login