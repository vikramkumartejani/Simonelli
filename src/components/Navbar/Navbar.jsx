import React, { useState } from "react";
import Logo from "../../assets/Images/Logo.webp";
import { GoPerson } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaHeart } from "react-icons/lia";
import { FcMenu } from "react-icons/fc";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="  ">
        <div className="   bg-bgColor w-full px-3 md:px-16 lg:px-28 py-2 flex justify-between items-center">
          <div className=" flex items-center gap-2 text-textColor text-xs sm:text-sm	">
            <p>Special collection already available. </p>
            <a href="/">Read more ...</a>
          </div>
          <ul className="  cursor-pointer hidden md:flex gap-3 items-center text-textColor text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
            <select className=" bg-transparent  outline-none">
              <option>USD</option>
              <option>USD</option>
              <option>USD</option>
            </select>
          </ul>
        </div>

        <div className=" bg-white w-full flex px-3 md:px-16 lg:px-28 justify-between  items-center py-4">
          <div className="  flex items-center justify-between md:gap-10 lg:gap-16">
            <img src={Logo} alt="logo" />
            <ul className=" cursor-pointer hidden md:flex justify-between gap-3 text-black text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>Product</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className=" hidden md:flex gap-8">
            <div className="  ">
              <div className=" relative flex flex-col items-center">
                <GoPerson className=" w-5	h-5" />
                <a href="/" className=" text-sm	">
                  Account
                </a>
              </div>
            </div>
            <div className="relative ">
              <span className=" absolute -top-1 -right-1 bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white">
                0
              </span>
              <div className=" relative flex flex-col items-center">
                <LiaHeart className=" w-5	h-5" />
                <a href="/" className=" text-sm	">
                  Wishlist
                </a>
              </div>
            </div>
            <div className="relative ">
              <span className=" absolute -top-1 -right-5 bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white">
                0
              </span>
              <div className=" relative flex flex-col items-center">
                <AiOutlineShoppingCart className=" w-5	h-5" />
                <a href="/" className=" text-sm	">
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div
            className=" md:hidden block cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <FcMenu className=" w-8 h-8 text-black" />
          </div>
        </div>
        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-24 z-50">
            <div className="fixed inset-y-0 right-0 w-72 bg-white h-full shadow-lg transform translate-x-0 transition-transform ease-in-out duration-300">
              {/* Drawer content goes here */}
              <div className="px-4 py-6">
                <ul className="text-black text-sm">
                  <li className="mb-4">Home</li>
                  <li className="mb-4">Shop</li>
                  <li className="mb-4">Product</li>
                  <li className="mb-4">Blog</li>
                  <li>Contact Us</li>
                </ul>
                <div className=" pt-4 ">
                  <div className=" relative flex items-center">
                    <GoPerson className=" w-5	h-5" />
                    <a href="/" className=" text-sm	">
                      Account
                    </a>
                  </div>
                </div>

                <div className=" relative flex gap-3 items-center py-2">
                  <LiaHeart className=" w-5	h-5" />
                  <a href="/" className=" text-sm	">
                    Wishlist
                  </a>
                  <span className=" bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white">
                    0
                  </span>
                </div>

                <div className=" relative flex gap-2 items-center">
                  <AiOutlineShoppingCart className=" w-5	h-5" />
                  <a href="/" className=" text-sm	">
                    Cart
                  </a>
                  <span className=" bg-primary p-1 w-5 h-5 text-xs  flex justify-center items-center rounded-full text-white">
                    0
                  </span>
                </div>
              </div>
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-black text-xl"
                onClick={closeMobileMenu}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
