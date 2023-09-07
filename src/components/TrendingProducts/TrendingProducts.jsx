import React from 'react'
import Product from './index.jsx'
import productImage1 from '../../Images/trending1.png'
import productImage2 from '../../Images/trending2.png'
import productImage3 from '../../Images/trending3.png'
import productImage4 from '../../Images/trending4.png'


const TrendingProducts = () => {
    return (
        <>
            <div className=' my-4 px-3 md:px-16 lg:px-28'>
                <div className=' text-center leading-9 py-8'>
                    <h3 className=' font-medium	text-3xl text-[#111111]'>Trending Products</h3>
                    <p className=' font-normal	text-sm	text-[#555555]'>Here’s some of our most popular products people are in love with.</p>
                </div>
                <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
                    <Product productImage={productImage1} producttitle={'Bag And Accessory Bout..'}  price='$116.00' dicountPrice='$120.00' />
                    <Product productImage={productImage2} producttitle={'Bag And Accessory Bout..'}  price='$116.00' dicountPrice='$120.00'/>
                    <Product productImage={productImage3} producttitle={'Bag And Accessory Bout..'}  price='$116.00' dicountPrice='$120.00'/>
                    <Product productImage={productImage4} producttitle={'Bag And Accessory Bout..'}  price='$116.00' dicountPrice='$120.00'/>
                </div>
            </div>
        </>
    )
}

export default TrendingProducts