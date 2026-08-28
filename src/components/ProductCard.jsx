import { useState } from "react";

const ProductCard = ({ product, cart, setCart }) => {

  if (!product) return null;

  const StarIcon = ({ filled }) => (
    <svg viewBox="0 0 12 12" className={filled ? "filled" : ""}>
      <path d="M6 0.5l1.66 3.62 3.84.42-2.9 2.66.78 3.9L6 8.9 2.62 11.1l.78-3.9-2.9-2.66 3.84-.42L6 0.5z" />
    </svg>
  );

  const { title, price, description, category, image, rating } = product;
  const rate = rating?.rate ?? 0;
  const count = rating?.count ?? 0;

  const handleCart = () => {
    setCart([...cart, product]);
  };

  const removeFromCart = ()=> {
    
  }

  console.log(cart, "cart from product card");

  const isAlreadyInCart = cart.find(pd=> pd.id === product.id)

  return (
    <div className="card">
      <div className="card-tag">{category}</div>

      <div className="media">
        <img src={image} alt={title} />
      </div>

      <div className="body">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="desc">{description}</p>

        <div className="strap">
          <div className="price">
            ${price.toFixed(2)}
            <span>USD</span>
          </div>
          <div className="rating">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} filled={i <= Math.round(rate)} />
              ))}
            </div>
            <span className="rating-count">
              {rate} &middot; {count} reviews
            </span>
          </div>
        </div>

        <button className="cta" onClick={isAlreadyInCart ? removeFromCart :  handleCart}>
          {isAlreadyInCart ? "Remove from cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;