import React from "react";
import styles from "./AddCartBtn.module.scss";

const AddCartBtn = ({ stock, handleClick }) => {
  return (
    <button
      className={styles.btn}
      onClick={stock > 0 ? handleClick : null}
      disabled={stock === 0}
    >
      {stock > 0 ? "Add to Cart" : "Out of Stock"}
    </button>
  );
};

export default AddCartBtn;
