import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/Product_Card";

const Products: React.FC = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Caramel Frappuccino",
      price: 3.95,
      description: "Caramel syrup with coffee, milk, and whipped cream",
      image: "src/assets/images/images_orders/Caramel Frappuccino.webp",
    },
    {
      id: 2,
      name: "Chocolate Frappuccino",
      price: 4.51,
      description: "Sweet chocolate with coffee, milk, and whipped cream",
      image: "src/assets/images/images_orders/Chocolate Frappuccino.webp",
    },
    {
      id: 3,
      name: "Peppermint Macchiato",
      price: 5.34,
      description: "Fresh peppermint mixed with choco and blended cream",
      image: "src/assets/images/images_orders/Peppermint Macchiato.webp",
    },
    {
      id: 4,
      name: "Peppermint Macchiato",
      price: 5.34,
      description: "Fresh peppermint mixed with choco and blended cream",
      image: "src/assets/images/images_orders/Peppermint Macchiato.webp",
    },
    // Add more products as needed
  ];

  return (
    <>
      <Header />
      <div className="p-4 grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
