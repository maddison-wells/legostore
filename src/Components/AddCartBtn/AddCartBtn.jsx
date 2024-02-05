import React from "react";
import styles from "./AddCartBtn.module.scss";

const AddCartBtn = ({ inStock, handleClick }) => {
  return (
    <button
      className={styles.btn}
      onClick={inStock ? handleClick : null}
      disabled={!inStock}
    >
      {inStock ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};

export default AddCartBtn;
