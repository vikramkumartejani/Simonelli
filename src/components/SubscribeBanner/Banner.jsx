import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Banner = () => {
    return (
        <div className=' mt-4 bg-banner p-3 gap-1 flex justify-center items-center flex-col'>
            <h3 className=' text-white text-xl font-medium'>Get The Latest Deals</h3>
            <p className=' text-LightGray text-base leading-7'>and receive <span className=' text-white'> $20 coupon</span> for first shopping</p>
            <div className=' flex justify-between mt-4 w-full sm:w-2/4 bg-white '>
                <input className=' outline-none w-full  bg-transparent text-sm py-3 px-3' type='text' placeholder='Enter your Email Address'  />
                <button className=' cursor-pointer flex gap-2 items-center text-sm	 text-white bg-LimeGreen py-3 px-4'>Subscribe <BsArrowRight /></button>
            </div>
        </div>
    )
}

export default Banner