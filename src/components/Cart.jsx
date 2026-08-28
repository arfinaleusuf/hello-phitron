import React from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cart, setCart }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>

      <div className="product-cart-parent">
        {cart.map((product, ind) => {
          return (
            <ProductCard
              product={product}
              key={ind}
              cart={cart}
              setCart={setCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;