import React from 'react'

const LoginImageSection = () => {
    return (
    <div>
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
    </div>
    )
}

export default LoginImageSection;