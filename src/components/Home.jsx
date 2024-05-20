import React from "react";
import ProductCard from "./ProductCard";
import CarouselComponent from "./CarouselComponent";

function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="flex justify-center items-center flex-wrap overflow-hidden">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Home;
