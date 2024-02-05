import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import { getAllLegoSets } from "../../../services/lego";
import styles from "./SearchResults.module.scss";

const SearchResults = ({ searchTerm }) => {
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
  }, [searchTerm]);

  return (
    <main>
      <h1 className={styles.search__heading}>
        Search results for: {capitalise(searchTerm)}
      </h1>
      <article className={styles.search}>
        {legoSets
          .filter(
            (set) =>
              set.description &&
              set.description.toLowerCase().includes(searchTerm.toLowerCase())
          )
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

export default SearchResults;
