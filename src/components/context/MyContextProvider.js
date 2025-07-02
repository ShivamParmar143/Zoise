import React, { useEffect, useState } from 'react'
import MyContext from './MyContext'

const MyContextProvider = ({children}) => {

    
    const[msgAvailable, setmsgAvailable] = useState(false);
    const[msg, setMsg] = useState('');
    const[token, setToken] = useState('');

    return (
        <MyContext.Provider value={{msg, setMsg, msgAvailable, setmsgAvailable, token, setToken}}>
            {children};
        </MyContext.Provider>
      )
    }
    
    export default MyContextProvider