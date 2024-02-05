import React from "react";
import { Link } from "react-router-dom";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ setCollection, setDropdownVisible, setLinkClicked }) => {
  const handleTabClick = (tabName) => {
    setCollection(tabName.toLowerCase());
    setDropdownVisible(false);
  };

  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.dropdown__link} ${styles.dropdown__linkActive}`
      : `${styles.dropdown__link}`;
  };

  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  const tabs = ["STAR WARS", "IDEAS", "CLASSIC", "HARRY POTTER", "DISNEY"];

  return (
    <div className={styles.dropdown}>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => {
              handleTabClick(tab);
              handleLinkClick();
            }}
          >
            <Link className={styles.dropdown__link} to={"/collections"}>
              {tab}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
