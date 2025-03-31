import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ name, price, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>${price}</p>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>Buy Now</button>
    </div>
  );
};

export default ProductCard;
