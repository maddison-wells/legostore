import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { getAllLegoSets } from "../../../services/lego";
import styles from "./Shop.module.scss";

const Shop = () => {
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

  return (
    <main>
      <h1 className={styles.shop__heading}>Shop all sets</h1>
      <article className={styles.shop}>
        {legoSets.map((set) => (
          <Card
            key={set.setID}
            img={set.image}
            name={set.name}
            price={set.price}
            inStock={set.inStock}
            isRare={set.rare}
            stock={set.stock}
            setID={set.setID}
          />
        ))}
      </article>
    </main>
  );
};

export default Shop;
