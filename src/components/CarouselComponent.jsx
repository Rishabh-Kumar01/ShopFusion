import React, { useState } from "react";

const LeftArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
      clipRule="evenodd"
    />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

const Carousel = () => {
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: "Product 2",
      price: 99.99,
      description: "Description for product 2",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 4.5,
        count: 200,
      },
    },
    {
      id: 3,
      title: "Product 3",
      price: 89.99,
      description: "Description for product 3",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 4.0,
        count: 150,
      },
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex items-center justify-center">
      <LeftArrowIcon onClick={goToPrev} />
      <div className="flex flex-col items-center">
        <img
          src={products[activeIndex].image}
          alt={products[activeIndex].title}
          className="w-full h-64 object-cover"
        />
        <h2 className="text-lg font-bold">{products[activeIndex].title}</h2>
        <div className="flex items-center">
          <span className="text-sm">{products[activeIndex].rating.rate}</span>
          <span className="text-xs ml-1">
            ({products[activeIndex].rating.count})
          </span>
        </div>
        <div className="flex mt-2 w-full">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 w-[47%]">
            Details
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded w-[47%]">
            Add to Cart
          </button>
        </div>
      </div>
      <RightArrowIcon onClick={goToNext} />
    </div>
  );
};

export default Carousel;
