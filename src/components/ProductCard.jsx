import React from "react";

const ProductCard = () => {
  const product = {
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
  };

  // Truncate the title and description as per the requirements
  const title =
    product.title.length > 10
      ? product.title.substring(0, 10) + "..."
      : product.title;
  const description =
    product.description.length > 20
      ? product.description.substring(0, 20) + "..."
      : product.description;

  return (
    <div className="w-[47.5%] p-2 mx-[.10rem] my-1 border border-white rounded ">
      <div className="bg-white rounded overflow-hidden shadow-lg max-w-xs m-auto">
        <img className="w-full" src={product.image} alt={title} />
        <div className="px-2 py-2">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-2 pt-2 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${product.price}
          </span>
          <div className="flex items-center">
            <svg
              className="fill-current text-yellow-500 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.5 3 1-5.7-4.5-4 5.7-1L10 2l2.3 5.3 5.7 1-4.5 4 1 5.7z" />
            </svg>
            <span className="ml-1">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
