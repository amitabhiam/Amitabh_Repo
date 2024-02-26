import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import handleToast from '../../Utils/toast';

const LoginCaptcha = ({captchaValidation}) => {

    const [numbers, setNumbers] = useState([]);
    const [selectNumber, setSelectNumber] = useState(null);

    const randomNumber = () => {

        return Math.floor(Math.random() * 900 + 100);
    }

    useEffect(() => {
        generateNumbers();
    }, []);


    const generateNumbers = () => {
        const newNumbers = Array.from({length: 3},() => randomNumber());
        setNumbers(newNumbers);
    }

    const resetNumbers = () => {
        generateNumbers();
    }


    const handleMaxNumber = (clickedNumber) => {
        setSelectNumber(clickedNumber);
        // const maxNumber = Math.max(...numbers); 
        if (clickedNumber === (Math.max(...numbers))) {
            captchaValidation(true)
        } else {
            captchaValidation(false)
        }
        // if (clickedNumber === maxNumber) {
        //     captchaValidation(false);
        //     console.log("YAY, YOU GOT THE RIGHT NUMBER")
        //     // toast.success("YAY, YOU GOT THE RIGHT NUMBER")
            
        // } else {
        //     captchaValidation(false);
        //     console.log("OPPS TRY AGAIN")
        //     // toast.error("INVALID CAPTCHA")
        //     // handleToast("OPPSS")
        // }
    }

    

    const renderRandomNumber = () => {
        return (
            <div className='flex items-center gap-[13px] ml-[32px]'>
                {numbers.map((number, index) => (
                    <div 
                    onClick={() => handleMaxNumber(number)}
                    className={`
                        w-[87.88px] h-[40px] flex rounded-[4px] px-[32px] py-[8px] text-[14px] font-[400] font-['Inter']
                        ${selectNumber === number ? 'border-[2px] border-[#000] font-bold text-[#000000]' : 'border-[1px] border-[#8692A6] text-[#99A0A8]'}
                    `}
                    >
                        {number}
                    </div>
                ))}

                <img className='w-[16px] h-[16px] ml-[4px]' 
                    src='\LoginPageImages\reseticon.png' 
                    alt='reseticon'
                    onClick={resetNumbers}                
                />

            </div>
        );
    }


    return (
    <div>
        {renderRandomNumber()}
    </div>
    )
}

export default LoginCaptcha;