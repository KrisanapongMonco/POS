import React, { useState } from "react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
}) => {
  const [selectedMood, setSelectedMood] = useState("hot");
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedSugar, setSelectedSugar] = useState("50%");
  const [selectedIce, setSelectedIce] = useState("50%");

  const handleSelection = (
    setState: (value: string) => void,
    value: string
  ) => {
    setState(value);
  };

  return (
    <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-5 ">
      <div className="flex">
        <img
          className="w-1/2 h-auto object-cover rounded-lg"
          src={image}
          alt={name}
        />
        <div className="pl-4 text-left">
          <h5 className="text-lg font-semibold">{name}</h5>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-xl font-bold mt-2">${price.toFixed(2)}</p>
        </div>
      </div>

      <div className="mt-4 flex justify-around">
        <div className="space-x-2">
          <button
            className={`px-3 py-1 rounded-full ${
              selectedMood === "hot" ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSelection(setSelectedMood, "hot")}
          >
            🔥
          </button>
          <button
            className={`px-3 py-1 rounded-full ${
              selectedMood === "cold" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => handleSelection(setSelectedMood, "cold")}
          >
            ❄️
          </button>
        </div>

        <div className="space-x-3">
          {["S", "M", "L"].map((size) => (
            <button
              key={size}
              className={`px-3 py-1 rounded-full ${
                selectedSize === size ? "bg-gray-400 text-white" : "bg-gray-200"
              }`}
              onClick={() => handleSelection(setSelectedSize, size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-around">
        {["Sugar", "Ice"].map((label, index) => (
          <div key={label} className="mt-3">
            <p className="text-sm font-medium">{label}</p>
            <div className="flex justify-center space-x-1 mt-1 text-xs">
              {["30%", "50%", "70%"].map((option) => (
                <button
                  key={option}
                  className={`px-2 py-1 rounded-full ${
                    (index === 0 ? selectedSugar : selectedIce) === option
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    handleSelection(
                      index === 0 ? setSelectedSugar : setSelectedIce,
                      option
                    )
                  }
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full py-2 bg-brown-600 text-black rounded-lg font-semibold hover:text-red-500">
        Add to Billing
      </button>
    </div>
  );
};

export default ProductCard;
