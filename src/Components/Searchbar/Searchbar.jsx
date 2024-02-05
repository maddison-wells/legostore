import React, { useState } from "react";
import styles from "./Searchbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className={styles.form__button} type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        className={styles.form__search}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  );
};
