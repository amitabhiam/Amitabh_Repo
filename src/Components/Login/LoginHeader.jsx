import React from 'react'

const LoginHeader = () => {
    return (
    <div className="w-full h-[34px] sticky bg-indigo-800" >
        <div className='flex'>
            <div className='w-[11.67px] h-[9.33px] ml-[18px] mt-[15px]'>
                <img className='' src='\LoginPageImages\mail3.png' alt='' />
            </div>
            <div className="w-[121px] h-[22px] ml-[4px] text-zinc-200 text-[12px] font-['Inter'] mt-[10px]">
            support@pfrda.org.in
            </div>
            <div className="ml-[12px] h-[22px] w-[4px] mt-[10px] text-zinc-200 text-[12px] font-['Inter']">|</div>
            <div className='w-[12px] h-[12px] ml-[9px] mt-[14px]'>
                <img src='\LoginPageImages\call3.png' alt='' />
            </div>
            <div className="w-[76px] h-[22px] ml-[3px] text-zinc-200 text-[12px] font-['Inter'] mt-[10px]">120-243574</div>


        </div>
        
    </div>
    )
}

export default LoginHeader;