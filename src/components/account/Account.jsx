import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../context/MyContext'
import './Account.scss'
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';


const Account = ({onClose}) => {

    const { token, setToken } = useContext(MyContext);
    const [loader, setLoader] = useState(true);
    const [userdata, setUserdata] = useState([]);
    
    const Navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:3035/account-details', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const data = await response.json();
                setUserdata(data.accountInfo);
                sessionStorage.setItem('userdata', JSON.stringify(data.accountInfo));
            } catch (error) {
                console.error('Failed to fetch account details:', error);
            } finally {
                setLoader(false);
            }
        };

        fetchUserData();
    }, [setUserdata, token]);

    const hadleLogout = ()=>{
        onClose();
        setToken("");
        Navigate('/login');
    }

    // if (loader) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            {token ? (
                    <div className='account-details'>
                        <p id='userdata'><strong>Account Information</strong></p>
                        <IoClose id='clsbtn2' size={30} onClick={onClose}/>
                        <p><strong>Name:</strong> {userdata && userdata.name}</p>
                        <p><strong>Email:</strong> {userdata && userdata.email}</p>
                        <p><strong>Mobile:</strong> {userdata && userdata.mobile}</p>
                        <button onClick={hadleLogout}>logout</button>
                    </div>
                // )
            ) : (
                <div className='account-error'>
                    <p id='accp'>you should login first</p>
                    <IoClose id='clsbtn3' size={25} onClick={onClose}/>
                </div>
            )}
        </>
    );
};


export default Account