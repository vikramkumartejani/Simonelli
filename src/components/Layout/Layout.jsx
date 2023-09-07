import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Layout = () => {
    return (
        <>
            <div className=' px-3 md:px-16 lg:px-28 '>

                <div className=' grid grid-cols-1 md:grid-cols-12 gap-3 my-8 w-full'>
                    <div className=" sm:col-span-5 bg-ImgOne flex justify-start items-end pb-12 px-12 ">
                        <div className=' leading-10 min-w-[183px] text-white '>
                            <p className=' text-xs font-normal mb-2'>Clearence</p>
                            <h3 className=' text-2xl font-bold'>Office Bags</h3>
                            <p className=' text-lg font-light'>from $19.99</p>
                            <button className=' cursor-pointer bg-white mt-2 py-3 px-4 text-black font-normal text-xs border border-btnColor'>SHOP NOW</button>
                        </div>
                    </div>

                    <div className=' sm:col-span-3 flex-1 bg-ImgTwo flex justify-start items-start pt-12 px-4 lg:px-12 '>
                        <div className=' min-w-[150px] text-white '>
                            <p className=' text-sm font-normal'>On Sale</p>
                            <h3 className=' leading-10 font-bold text-xl'>Bag Title</h3>
                            <p className=' font-light leading-9 text-2xl'>from $39.00</p>
                            <div className=' cursor-pointer border-b-2 w-28 flex justify-center'>
                                <p className=' leading-9 flex items-center text-xs  font-normal mt-2 gap-2'>Discover Now <BsArrowRight /></p>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-4 gap-4 flex flex-col  '>

                        <div className='bg-ImgThree flex justify-start items-start pt-12 px-12 '>
                            <div className=' min-w-[150px] text-white'>
                                <p className=' text-sm font-normal'>Clearance</p>
                                <h3 className=' font-bold leading-10 text-xl'>Classic Bags</h3>
                                <p className=' font-light leading-9 text-2xl'>up to 30% off</p>
                                <div className=' cursor-pointer border-b-2 w-28 flex justify-center '>
                                    <p className=' leading-9 flex items-center text-xs  font-normal mt-2 gap-2'>Discover Now <BsArrowRight /></p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-ImgFour  flex justify-start items-start pt-12 px-12'>
                            <div className=' min-w-[127px] text-white '>
                                <p className=' leading-8 text-sm font-normal'>New Arrivals</p>
                                <p className=' text-xl font-bold'>Bag Title</p>
                                <h3 className=' font-bold text-xl'>Goes here</h3>
                                <p className=' font-light  leading-9 text-2xl'>from $39.00</p>
                                <div className=' cursor-pointer border-b-2 w-28 flex justify-center '>
                                    <p className=' leading-9 flex items-center text-xs  font-normal mt-2 gap-2'>Shop Now<BsArrowRight /></p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Layout