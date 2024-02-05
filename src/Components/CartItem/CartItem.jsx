import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartItem.module.scss";
import { removeItemFromCart, adjustQty } from "../../Data/cart";

const CartItem = ({ item, onUpdateQuantity, setTotal }) => {
  const quantityOptions = Array.from({ length: 5 }, (_, i) => i + 1);
  const [newQuantity, setNewQuantity] = useState(1);
  const [itemTotal, setItemTotal] = useState(parseFloat(item.price));

  return (
    <div className={styles.cart}>
      <div className={styles.cart__item}>
        <img
          className={styles.cart__img}
          src={item.img}
          alt="cart item image"
        />
      </div>
      <div className={styles.cart__item}>
        <h2 className={styles.cart__title}>{item.name}</h2>
        <p className={styles.cart__price}>Price: ${item.price}</p>
      </div>
      <div className={styles.cart__item}>
        <select
          value={newQuantity}
          onChange={() =>
            adjustQty(item.setID, item.price, item.stock, newQuantity)
          }
          className={styles.cart__qty}
        >
          {quantityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <p className={styles.cart__price}>Total price: ${itemTotal.toFixed(2)}</p>
      <div className={styles.cart__item}>
        <button
          className={styles.cart__btn}
          onClick={() => removeItemFromCart(item.setID)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
