import React from 'react';
import axios from 'axios';

const LoginButton = ({handleLogin}) => {

    return (
    <>
        <div>
            <button
            className="mt-[16px] w-[290px] h-[40px] bg-[#3E4095] rounded-[6px] text-[#FFFFFF] text-[16px] leading-[19.36px] font-['Inter']"
            onClick={handleLogin} 
            >
                Login
            </button>
        </div>
    </>
    )
}

export default LoginButton;



 // const response = await axios.post(APIURL, { email, password });