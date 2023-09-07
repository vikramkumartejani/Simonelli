import React from "react";
import Product from "../../components/Product";
import productImage1 from "../../assets/Images/trending1.png";
import productImage2 from "../../assets/Images/trending2.png";
import productImage3 from "../../assets/Images/trending3.png";
import productImage4 from "../../assets/Images/trending4.png";

const TrendingProducts = () => {
  const products = [
    {
      image: productImage1,
      image2: productImage2,
      title: "Bag And Accessory Bout..",
      rating: 5,
      price: "$116.00",
      discountPrice: "$120.00",
    },
    {
      image: productImage2,
      image2: productImage1,
      title: "Bag And Accessory Bout..",
      rating: 5,
      price: "$116.00",
      discountPrice: "$120.00",
    },
    {
      image: productImage3,
      image2: productImage2,
      title: "Bag And Accessory Bout..",
      rating: 4,
      price: "$116.00",
      discountPrice: "$120.00",
    },
    {
      image: productImage4,
      image2: productImage1,
      title: "Bag And Accessory Bout..",
      rating: 3,
      price: "$90.00",
      discountPrice: "$120.00",
    },
  ];
  return (
    <>
      <div className=" my-4 px-3 md:px-16 lg:px-28">
        <div className=" text-center leading-9 py-8">
          <h3 className=" font-medium	text-3xl text-[#111111]">
            Trending Products
          </h3>
          <p className=" font-normal	text-sm	text-[#555555]">
            Here’s some of our most popular products people are in love with.
          </p>
        </div>
        <div className=" grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                data={product}
                productImage={productImage1}
                producttitle={"Bag And Accessory Bout.."}
                price="$116.00"
                dicountPrice="$120.00"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TrendingProducts;
