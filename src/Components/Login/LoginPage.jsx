import React, { useState } from 'react';
import LoginButton from './LoginButton';
import LoginHeader from './LoginHeader';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginDetails, loginSuccess, setEmail, setPassword} from '../../Store/Slice/authSlice';
import LoginCaptcha from './LoginCaptcha';
import handleToast from '../../Utils/toast';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
import { UseSelector } from 'react-redux';


const LoginPage = () => {

    // const selector = useSelector((state) => state.auth.userId);
    // console.log(selector);

    // const correctEmail = useSelector((state) => state.auth.email);
    // const correctPassword = useSelector((state) => state.auth.password);

    const dispatch = useDispatch();
    // const [userId, setUserId] = useState('');
    // const [password,setPassword]=useState('');
    const { email, password } = useSelector((state) => state.auth);
    // const [showPassword, setShowPassword] = useState(false);
    const [isCaptchaValid, setIsCaptchaValid] = useState(true);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    // dispatch(getLoginDetails(userId, password));

    const handleLogin = () => {

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("isAuthenticated:", isAuthenticated);
        console.log("isCaptchaValid:", isCaptchaValid);

        if (!email || !password || !isAuthenticated) {
            handleToast("Invalid Credentials");
        } else if (!isCaptchaValid) {
            handleToast("Invalid Captcha")
        } else {
            // dispatch(loginSuccess({email}));
            dispatch(getLoginDetails({email, password}));
            
            }
            // dispatch(getLoginDetails(email, password));
        
        // if (userId !== correctEmail || password !== correctPassword) {
        //     handleToast("Invalid Credentials")
        // } else if (!isCaptchaValid) {
        //     handleToast("Invalid Captcha")
        // } else {
        //     dispatch(getLoginDetails(userId, password));
        // } 
    }

    const handleCaptchaValidation = (isValid) => {
        setIsCaptchaValid(isValid);
    }
    

    return (
    
    <div className='h-[100vh] w-[100%]'>
        <div className='relative'>
            <LoginHeader />
        </div>

        <div className='flex absolute'>
            <div className='w-[60%] h-[auto] ml-0 relative'>
                <div className=''>
                    <img src='\LoginPageImages\LoginCover.png' alt='Img' className='w-full h-auto' />
                </div>
                <div className="absolute top-0 mt-[128px] ml-[110px] text-[58px] font-extrabold font-['Inter'] leading-[60px]">
                    <div className='text-[#FFFFFF]'>
                        WE <br/>BUILD
                    </div>
                    <div className='text-[#00A859]'>PENSIONED</div>
                    <div className='text-[#FFFFFF]'>INDIA</div>
                </div>
                <div className="absolute top-0 ml-[110px] mt-[375px] text-[18.96px] text-[#FFFFFF] font-['Inter'] font-normal leading-[36.03px]">
                The organized / unorganized sector of Indian citizen <br/> across the geography / Income category.
                </div>
                <button className="w-[128px] h-[40px] ml-[110px] mt-[473px] absolute top-0 border-[1px] rounded-[3px] border-[#DEDEDE] text-[#FFFFFF] text-sm font-medium font-['Inter']">
                    How to Login
                </button>
                <img className='absolute top-0 w-[31.76px] h-[31.29px] ml-[581px] mt-[480px]' src='\LoginPageImages\vector.png' alt='' />

            </div>

            <div className='w-[40%] flex flex-col items-center mt-[80px] mr-auto ml-[65px]'>
                <div className='w-[120px] h-[64px] mt-[18px]'>
                    <img src='\LoginPageImages\Logo.png' alt='' />
                </div>

                <div className="text-center text-indigo-950 text-3xl font-['Inter'] font-bold" >
                Welcome Back!
                </div>

                <div class="w-80 text-center text-slate-400 text-base font-normal font-['Inter'] leading-normal mt-[8px]">
                    To begin this journey, please enter your login details
                </div>
                
                <div className="w-[290px] h-[14px] mt-[30px] text-left text-[14px] font-['Inter']">
                    Email Id/Mobile Number
                </div>

                <div>
                    <input 
                    className='w-[290px] h-[40px] mt-[8px] pl-3 pr-2 border-[1px] border-gray-400 rounded-md text-gray-400 text-[14px] font-normal leading-normal gap-2'
                    type='email' 
                    placeholder='Enter'
                    value={email}
                    onChange={(e) => 
                        // setUserId(e.target.value)
                        dispatch(setEmail(e.target.value))
                    }
                    />
                </div>

                <div className="w-[290px] h-[14px] mt-[8px] text-left text-[14px] font-['Inter']">
                Password
                </div>

                <div>
                    <input
                    className='w-[290px] h-[40px] mt-[8px] pl-3 pr-2 border-[1px] border-gray-400 rounded-md text-gray-400 text-[14px] font-normal leading-normal gap-2'
                    type='password' 
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => 
                        // setPassword(e.target.value)
                        dispatch(setPassword(e.target.value))
                    }
                    
                    />
                </div>

                <div className="text-[20px] text-[#B4B4B4] font-[700] font-['Inter'] leading-[24.2px] mt-[8px]">
                    Captcha
                </div>

                <div className="w-[290px] h-[14px] text-[14px] font-['Inter'] leading-[21px] font-[500]">
                Press the highest number
                </div>

                <div className='mt-[10px]'>
                    <LoginCaptcha captchaValidation = {handleCaptchaValidation} />
                </div>


                <div className='mt-[8px]'>
                    <LoginButton 
                    handleLogin={handleLogin}
                    />
                    <ToastContainer autoClose={false}/>
                </div>
                
                <Link to='/forgot-password'>
                <div className="text-[14px] text-[#3E4095] font-['Inter']">
                Forgot Password ?
                </div>
                </Link>

            </div>

        </div>
        
    </div>
    )
}

export default LoginPage;