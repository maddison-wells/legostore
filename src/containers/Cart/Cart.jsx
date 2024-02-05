import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../../Components/CartItem/CartItem";
import styles from "./Cart.module.scss";
import { getAllCartItems } from "../../Data/cart";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [itemTotal, setItemTotal] = useState(0);
  const [total, setTotal] = useState(0);
  // const [legoSets, setLegoSets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCart = await getAllCartItems();
        setCart(fetchedCart);
      } catch (error) {
        console.error("Error fetching lego sets:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(newTotal);
  }, [cart]);

  return (
    <article>
      <h2 className={styles.cart__title}>{cart.length} ITEMS IN YOUR CART</h2>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          index={index}
          // onRemove={(itemTotal) => handleRemoveItem(index, itemTotal)}
          // onUpdateQuantity={handleUpdateQuantity}
          setItemTotal={setItemTotal}
          setTotal={setTotal}
        />
      ))}
      {cart.length === 0 && (
        <h2 style={{ textAlign: "center" }}>Your shopping cart is empty.</h2>
      )}

      <div className={styles.cart__summary}>
        <h2>ORDER SUMMARY</h2>
        <h2>Total: ${total.toFixed(2)}</h2>
      </div>
    </article>
  );
};

export default Cart;
