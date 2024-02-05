import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { getAllLegoSets } from "../../../services/lego";
import styles from "./Collections.module.scss";

const Collections = ({ collection }) => {
  const [legoSets, setLegoSets] = useState([]);
  const capitalise = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

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

  return (
    <main>
      <h1 className={styles.shop__heading}>Shop {capitalise(collection)}</h1>
      <article className={styles.collections}>
        {legoSets
          .filter((set) => set.collection === collection)
          .map((set) => (
            <Card
              key={set.setID}
              img={set.image}
              name={set.name}
              price={set.price}
              inStock={set.inStock}
              isRare={set.rare}
              setID={set.setID}
              stock={set.stock}
            />
          ))}
      </article>
    </main>
  );
};

export default Collections;
