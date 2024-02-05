import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./Card.module.scss";
import { addItemToCart } from "../../Data/cart";

const Card = ({
  img,
  name,
  price,
  stock,
  isRare,
  setID,
  qty = 1,
  totalPrice,
}) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    addItemToCart({
      setID: setID,
      name: name,
      img: img,
      price: price,
      qty: qty,
      newQty: stock - qty,
      stock: stock,
      totalPrice: price * qty,
    });
    alert(`${name} added to cart`);
  };

  return (
    <article className={styles.card}>
      {stock > 0 && !isRare ? (
        <div className={styles.card__banner}>In stock</div>
      ) : isRare && stock > 0 ? (
        <div className={styles.card__rareBanner}>Rare find</div>
      ) : (
        <div className={styles.card__bannerRed}>Out of stock</div>
      )}

      <img className={styles.card__img} src={img} alt="product image" />
      <h1 className={styles.card__name}>{name}</h1>
      <p>${price}</p>
      <AddCartBtn stock={stock} handleClick={handleClick} />
    </article>
  );
};

export default Card;
