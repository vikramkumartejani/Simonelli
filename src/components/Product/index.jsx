import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Product = (props) => {
  const [selectedColor, setSelectedColor] = useState("Cyan");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className=" ">
      <div className="relative w-full">
        {selectedColor === "Cyan" && (
          <img src={props.data.image} alt="Cyanitem" className="w-full" />
        )}
        {selectedColor === "Pink" && (
          <img src={props.data.image2} alt="Pinkitem" className="w-full" />
        )}
        <div className="flex gap-3 absolute top-3 right-5 ">
          <button
            className={`relative bg-Cyan border ${
              selectedColor === "Cyan" ? "border-black" : "border-white"
            } w-6 h-6 rounded-full  `}
            onClick={() => handleColorChange("Cyan")}
          >
            {selectedColor === "Cyan" && (
              <span className="absolute inset-0 border border-white rounded-full"></span>
            )}
          </button>
          <button
            className={`relative bg-Pink border ${
              selectedColor === "Pink" ? "border-black" : "border-white"
            } w-6 h-6 rounded-full `}
            onClick={() => handleColorChange("Pink")}
          >
            {selectedColor === "Pink" && (
              <span className="absolute inset-0 border border-white rounded-full"></span>
            )}
          </button>
        </div>
      </div>
      <div className="leading-10">
        <h2 className="text-black font-normal text-xl leading-10">
          {props.data.title}
        </h2>
          <ReactStars
            value={props.data.rating}
            size={24}
            activeColor="#111111"
            classNames="-my-2 p-0"
          />
        <div className="flex gap-2">
          <span className="text-RedOrange">{props.data.price}</span>
          <del className="text-Gray">{props.data.discountPrice}</del>
        </div>
      </div>
    </div>
  );
};

export default Product;
