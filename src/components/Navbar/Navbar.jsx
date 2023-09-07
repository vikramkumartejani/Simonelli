import React, { useState } from 'react'
import Logo from '../../Images/Logo.webp'
import { GoPerson } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { LiaHeart } from 'react-icons/lia'
import { FcMenu } from 'react-icons/fc'

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    // Function to close the mobile menu
    const closeMobileMenu = () => {
      setMobileMenuOpen(false);
    };

    return (
        <>
            <div className='  '>
                <div className='   bg-bgColor w-full px-3 md:px-16 lg:px-28 py-2 flex justify-between items-center'>
                    <div className=' flex items-center gap-2 text-textColor text-xs sm:text-sm	'>
                        <p>Special collection already available. </p>
                        <a href='/'>Read more ...</a>
                    </div>
                    <ul className='  cursor-pointer hidden md:flex gap-3 items-center text-textColor text-sm'>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <select className=" bg-transparent  outline-none">
                            <option>USD</option>
                            <option>USD</option>
                            <option>USD</option>
                        </select>
                    </ul>
                </div>

                <div className=' bg-white w-full flex px-3 md:px-16 lg:px-28 justify-between  items-center py-4'>
                    <div className='  flex items-center justify-between md:gap-10 lg:gap-16'>
                        <img src={Logo} alt='logo' />
                        <ul className=' cursor-pointer hidden md:flex justify-between gap-3 text-black text-sm'>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Product</li>
                            <li>Blog</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className=' hidden md:flex gap-8'>

                        <div className='  '>
                            <div className=' relative flex flex-col items-center'>
                                <GoPerson className=' w-5	h-5' />
                                <a href='/' className=' text-sm	'>Account</a>
                            </div>
                        </div>
                        <div className='relative '>
                            <span className=' absolute -top-1 -right-1 bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white'>0</span>
                            <div className=' relative flex flex-col items-center'>
                                <LiaHeart className=' w-5	h-5' />
                                <a href='/' className=' text-sm	'>Wishlist</a>
                            </div>
                        </div>
                        <div className='relative '>
                            <span className=' absolute -top-1 -right-5 bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white'>0</span>
                            <div className=' relative flex flex-col items-center'>
                                <AiOutlineShoppingCart className=' w-5	h-5' />
                                <a href='/' className=' text-sm	'>Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className=' md:hidden block'>
                        <FcMenu className=' w-8 h-8 text-black' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar