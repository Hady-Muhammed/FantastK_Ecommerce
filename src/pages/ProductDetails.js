import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import MainBtn from "../components/MainBtn";
const ProductDetails = () => {
  const products = useSelector((state) => state.data.products);
  const { id } = useParams();
  console.log(products);
  return (
    <section className="py-12 xs:px-0 md:px-24 space-y-5">
      <h1 className="text-4xl">Product Details</h1>
      <Link className="flex items-center" to="/FantastK_Ecommerce/">
        <RiArrowLeftCircleFill
          className="text-[#673ab7] font-semibold mr-2"
          size={30}
        />
        Back To Products
      </Link>
      <div className="flex xs:flex-col lg:flex-row justify-around">
        <img
          src={products[id - 1].image}
          alt="x"
          className="border p-10 border-gray-300 w-[500px] h-[500px] mx-auto"
        />
        <div className="space-y-5 text-center p-5">
          <h2 className="text-2xl font-medium">
            {products[id - 1].title} <br />{" "}
            <span className="text-sm text-gray-600">
              rating: {products[id - 1].rating.rate} | recommendations:{" "}
              {products[id - 1].rating.count}{" "}
            </span>{" "}
          </h2>
          <span className="block text-[#673ab7] font-bold text-lg">
            Price: ${products[id - 1].price}
          </span>
          <p className="text-gray-600">{products[id - 1].description}</p>
          <MainBtn content="Add To Cart" />
        </div>
      </div>
      <div className="space-y-5">
        <h3 className="text-thin text-4xl border-b border-b-gray-300 py-4">Product Reviews</h3>
        <div className="flex space-x-1">
          <FaStar className="text-yellow-600 hover:animate-bounce" size={30} />
          <FaStar className="text-yellow-600 hover:animate-bounce" size={30} />
          <FaStar className="text-yellow-600 hover:animate-bounce" size={30} />
          <FaStar className="text-yellow-600 hover:animate-bounce" size={30} />
          <FaStar className="text-yellow-600 hover:animate-bounce" size={30} />
        </div>
        <h3>This Product is great and it's a high quality one , can't recommend it more! </h3>
        <span className="font-bold">By: Mahmoud Abdullah</span>
      </div>
    </section>
  );
};

export default ProductDetails;
