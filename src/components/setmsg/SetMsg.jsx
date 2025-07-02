import React, { useContext, useEffect, useState } from 'react'
import './SetMsg.scss'
import MyContext from '../context/MyContext';

const Setmsg = () => {

    const { msg, msgAvailable, setmsgAvailable } = useContext(MyContext);

    useEffect(() => {
        if (msgAvailable) {
            const timer = setTimeout(() => {
                setmsgAvailable(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [msgAvailable, setmsgAvailable])

    return (
        <>
            {msgAvailable && (
                <div className='setmsg'>
                    <div className='innermsg'>
                        <span className='msg'>
                            {msg}
                        </span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Setmsg