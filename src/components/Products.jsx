import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="products-parent">
      <h2>Products</h2>

      <Cart cart={cart} setCart={setCart} />

      <div className="product-cart-parent">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          products.map((product, ind) => {
            return (
              <ProductCard
                product={product}
                key={ind}
                cart={cart}
                setCart={setCart}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;