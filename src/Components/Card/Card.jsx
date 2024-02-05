import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import AddCartBtn from "../AddCartBtn/AddCartBtn";
import styles from "./Card.module.scss";
import { addItemToCart } from "../../Data/cart";

const Card = ({ img, name, price, stock, inStock, isRare, setID }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleClick = () => {
    // (setID = "Unknown"),
    //   (name = "Unknown"),
    //   (img = "Unknown"),
    //   // (qty = 1),
    //   (price = "0"),
    //   // (totalPrice = 0),
    //   (stock = 0);
    addItemToCart({
      setID: setID,
      name: name,
      img: img,
      price: price,
      qty: qty,
      stock: stock,
    });
  };

  return (
    <article className={styles.card}>
      {inStock && !isRare ? (
        <div className={styles.card__banner}>In stock</div>
      ) : isRare && inStock ? (
        <div className={styles.card__rareBanner}>Rare find</div>
      ) : (
        <div className={styles.card__bannerRed}>Out of stock</div>
      )}

      <img className={styles.card__img} src={img} alt="product image" />
      <h1 className={styles.card__name}>{name}</h1>
      <p>${price}</p>
      <AddCartBtn inStock={inStock} handleClick={handleClick} />
    </article>
  );
};

export default Card;

// import React, { useContext } from "react";
// import { CartContext } from "../../Context/CartContext";
// import AddCartBtn from "../AddCartBtn/AddCartBtn";
// import styles from "./Card.module.scss";
// import { addItemToCart } from "../../Data/cart";

// const Card = ({ img, title, price, inStock, isRare }) => {
//   const { cart, setCart } = useContext(CartContext);

//   const handleClick = () => {
//     addItemToCart;
//     // const newItem = { title, price, img };

//     // const existingItemIndex = cart.findIndex((item) => item.title === title);

//     // if (existingItemIndex !== -1) {
//     //   const updatedCart = [...cart];
//     //   updatedCart[existingItemIndex].quantity += 1;

//     //   setCart(updatedCart);
//     // } else {
//     //   setCart((prevCart) => [...prevCart, { ...newItem, quantity: 1 }]);
//     // }
//   };

//   return (
//     <article className={styles.card}>
//       {inStock && !isRare ? (
//         <div className={styles.card__banner}>In stock</div>
//       ) : isRare && inStock ? (
//         <div className={styles.card__rareBanner}>Rare find</div>
//       ) : (
//         <div className={styles.card__bannerRed}>Out of stock</div>
//       )}

//       <img className={styles.card__img} src={img} alt="product image" />
//       <h1 className={styles.card__name}>{title}</h1>
//       <p>${price}</p>
//       <AddCartBtn inStock={inStock} handleClick={handleClick} />
//     </article>
//   );
// };

// export default Card;
