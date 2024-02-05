import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "./CartItem.module.scss";
import { removeItemFromCart } from "../../Data/cart";
import { getAllCartItems } from "../../Data/cart";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item, setTotal }) => {
  const { cart, setCart } = useContext(CartContext);

  // const quantityOptions = Array.from({ length: 5 }, (_, i) => i + 1);
  // const [itemTotal, setItemTotal] = useState(parseFloat(item.price * item.qty));
  // useEffect(() => {
  //   setItemTotal(parseFloat(item.price * item.newQty));
  // }, [item.price, item.qty, item.newQty]);

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
      </div>
      <div className={styles.cart__item}>
        <p className={styles.cart__price}>Price: ${item.price}</p>
        {/* <select
          value={item.newQty}
          onChange={() =>
            adjustQty(item.name, item.price, item.stock, item.newQty)
          }
          className={styles.cart__qty}
        > */}
        {/* {quantityOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select> */}
      </div>
      {/* <p className={styles.cart__price}>Total price: ${itemTotal.toFixed(2)}</p> */}
      <div className={styles.cart__item}>
        <button
          className={styles.cart__btn}
          onClick={() => {
            removeItemFromCart(item.id);
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
