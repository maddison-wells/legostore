import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getAllLegoSets } from "../../../services/lego";
import styles from "./Carousel.module.scss";
import { addItemToCart } from "../../Data/cart";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [legoSets, setLegoSets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedLegoSets = await getAllLegoSets();
        setLegoSets(fetchedLegoSets);
      } catch (error) {
        console.error("Error fetching lego sets:", error);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? 5 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === 5 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <article className={styles.carousel}>
        <h1 className={styles.carousel__heading}>
          This week's<br></br> top picks
        </h1>

        {legoSets
          .filter((set) => set.collection === "ideas")
          .map((set, i) => (
            <div
              key={i}
              className={styles.carousel__card}
              style={{ display: i === index ? "flex" : "none" }}
            >
              <img
                className={styles.carousel__img}
                src={set.image}
                alt="top pick images"
              />

              <p className={styles.carousel__title}>{set.name}</p>
              <p>Price: ${set.price}</p>
              <NavLink to="/shop">Shop Now!</NavLink>
              <button className={styles.carousel__btnLeft} onClick={handlePrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className={styles.carousel__btnRight}
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ))}
      </article>
    </>
  );
};

export default Carousel;
