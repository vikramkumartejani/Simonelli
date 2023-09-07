import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import productData from "../../data.js";

const TopSellingProduct = () => {
  const [activeTab, setActiveTab] = useState("Classic");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className=" my-8 px-3 md:px-16 lg:px-28 ">
        <h1 className="text-2xl	font-medium	text-DarkGray text-center tracking-tight	py-3">
          Top Selling Products
        </h1>
        <div>
          <ul className=" flex justify-center items-center gap-4 py-2">
            <li
              className={` text-md cursor-pointer  ${
                activeTab === "" ? "border-b-2 text-DarkGray" : "text-textColor"
              }`}
              onClick={() => handleTabClick("")}
            >
              All
            </li>
            <li
              className={` text-md cursor-pointer  ${
                activeTab === "Classic"
                  ? "border-b-2 text-DarkGray"
                  : "text-textColor"
              }`}
              onClick={() => handleTabClick("Classic")}
            >
              Classic
            </li>
            <li
              className={` text-md cursor-pointer  ${
                activeTab === "Modern"
                  ? "border-b-2 text-DarkGray"
                  : "text-textColor"
              }`}
              onClick={() => handleTabClick("Modern")}
            >
              Modern
            </li>
            <li
              className={` text-md cursor-pointer  ${
                activeTab === "Sales"
                  ? "border-b-2 text-DarkGray"
                  : "text-textColor"
              }`}
              onClick={() => handleTabClick("Sales")}
            >
              Sales
            </li>
          </ul>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center  ">
            {productData
              .filter((product) =>
                activeTab === "" ? true : product.category === activeTab
              )
              .map((product) => (
                <div key={product.id} className="flex justify-center flex-col">
                  <div
                    key={product.id}
                    className=" flex justify-center flex-col"
                  >
                    <div className="relative mb-2">
                      {product.isDiscount && (
                        <div className="bg-MediumRed flex flex-col items-center justify-center text-white rounded-full w-12 h-12 absolute left-2 top-2">
                          <p className=" text-xs flex  items-center">Sale</p>
                          <p className=" text-xs flex  items-center">23%</p>
                        </div>
                      )}

                      <img
                        src={product.image}
                        alt="Products"
                        className="w-full sm:max-w-xs  "
                      />
                    </div>
                    <h3 className=" text-primary text-xs font-normal ">
                      {product.type}
                    </h3>
                    <p className=" text-DarkGray text-sm font-normal ">
                      {product.title}
                    </p>
                    <div className=" flex items-center justify-center gap-2 text-sm">
                      <p
                        className={`${
                          product.discountprice
                            ? "text-OrangeBrown"
                            : "text-dark"
                        }`}
                      >
                        {product.price}
                      </p>
                      <del className="  text-MediumGray">
                        {product.discountprice}
                      </del>
                    </div>
                    <div className="  flex justify-center items-center gap-2">
                      <ReactStars
                        value={product.rating}
                        size={24}
                        activeColor="#D26E4B"
                      />
                      <span className=" text-MediumGray text-xs">
                        (1 Review)
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellingProduct;
