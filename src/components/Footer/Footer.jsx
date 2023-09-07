import React from "react";
import FooterLogo from "../../assets/Images/FooterLog.png";
import { FaFacebookF, FaQuora } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Payment from "../../assets/Images/Link → payments.png";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-black px-3 md:px-16 lg:px-28 ">
        <div className="  flex gap-4 justify-center pt-12 pb-8  flex-col lg:flex-row md:justify-between   ">
          <div className=" lg:w-1/2 w-full ">
            <div className=" leading-10">
              <img src={FooterLogo} alt="logo" className="  " />
              <p className=" text-textColor text-sm font-light	 pt-2 leading-5">
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, eu vulputate magna eros eu erat. Aliquam erat volutpat.
                Nam dui mi, tincidunt quis, accumsan porttitor, facilisis
                luctus, metus.
              </p>
            </div>
            <div className=" flex sm:flex-row flex-col pt-6 gap-6">
              <div>
                <p className=" text-textColor text-xs font-light pb-1 ">
                  Got Question? Call us 24/7
                </p>
                <h4 className="  text-white text-base font-normal ">
                  +98 765 432
                </h4>
              </div>
              <div>
                <p className=" text-textColor text-xs font-light pb-1">
                  Payment Method
                </p>
                <img src={Payment} alt="payment" />
              </div>
            </div>
          </div>

          <div className=" lg:w-1/2 w-full gap-4 flex  flex-wrap justify-between  ">
            <ul className=" text-textColor text-sm font-light cursor-pointer leading-7">
              <li className=" text-white text-base font-medium leading-10 ">
                Useful Links
              </li>
              <li>About Midas</li>
              <li>How to shop on</li>
              <li>FAQ</li>
              <li>Contact us</li>
              <li>Log in</li>
            </ul>
            <ul className=" text-textColor text-sm font-light cursor-pointer leading-7">
              <li className=" text-white text-base font-medium leading-10">
                Customer Service
              </li>
              <li>Payment Methods</li>
              <li>Money-back guarantee!</li>
              <li>Returns</li>
              <li>Shipping</li>
              <li>Terms and conditions</li>
              <li>Privacy Policy</li>
            </ul>
            <ul className=" text-textColor text-sm	font-light cursor-pointer leading-7">
              <li className=" text-white text-base font-medium leading-10">
                My Account
              </li>
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
              <li>Track My Order</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <div className="  w-full h-[1px] bg-[#888888]"></div>

        <div className=" flex-col gap-3 py-4 sm:flex-row flex items-center justify-between">
          <p className="text-LightGray font-light	text-sm	">
            Copyright © 2023 Simonelli. All Rights Reserved.
          </p>
          <div className="flex gap-3 items-center ">
            <p className="text-LightGray font-light	text-sm	">Social Media</p>
            <a href="/" className=" text-[#1977F2] w-5 h-5  ">
              <FaFacebookF />
            </a>
            <a href="/" className=" text-[#79C8ED]  w-5 h-5">
              <AiOutlineTwitter />
            </a>
            <a href="/" className=" text-[#DD6D9A]  w-5 h-5">
              <BsInstagram />
            </a>
            <a href="/" className=" text-[#E66262]  w-5 h-5">
              <AiFillYoutube />
            </a>
            <a href="/" className=" text-[#E66262]  w-5 h-5">
              <FaQuora />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
