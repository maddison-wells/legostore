import React, { useState, useContext, useEffect } from "react";
import logo from "../../img/lego-logo.webp";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faMagnifyingGlass,
  faHeart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { Searchbar } from "../Searchbar/Searchbar";
import { CartContext } from "../../Context/CartContext";

const Navbar = ({ setCollection, setSearchTerm, setLinkClicked }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [showCartCount, setShowCartCount] = useState(false);

  const { cart, setCart } = useContext(CartContext);

  const linkStyles = ({ isActive }) => {
    return isActive
      ? `${styles.nav__link} ${styles.nav__linkActive}`
      : `${styles.nav__link}`;
  };

  const handleLinkClick = () => {
    setLinkClicked(true);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
  };
  useEffect(() => {
    setShowCartCount(cart.length > 0);
  }, [cart.length]);
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__left}>
          <NavLink to="/">
            <img className={styles.nav__img} src={logo} alt="lego logo" />
          </NavLink>
          <NavLink to="/shop" className={linkStyles} onClick={handleLinkClick}>
            SHOP
          </NavLink>
          <button
            className={`${styles.nav__btn} ${linkStyles}`}
            onClick={() => {
              toggleDropdown();
              handleLinkClick();
            }}
          >
            COLLECTIONS
          </button>
          <div className={styles.nav__dropdown}>
            {isDropdownVisible && (
              <Dropdown
                setCollection={setCollection}
                setDropdownVisible={setDropdownVisible}
                setLinkClicked={setLinkClicked}
              />
            )}
          </div>
        </div>
        <div className={styles.nav__right}>
          {isSearchVisible && (
            <Searchbar
              className={styles.nav__searchbar}
              setSearchTerm={setSearchTerm}
            />
          )}
          <FontAwesomeIcon
            className={styles.nav__icon}
            icon={isSearchVisible ? faTimes : faMagnifyingGlass}
            onClick={toggleSearch}
          />
          <FontAwesomeIcon className={styles.nav__icon} icon={faHeart} />
          <NavLink to="cart" className={styles.nav__icon}>
            <FontAwesomeIcon icon={faShoppingCart} />
            {showCartCount && (
              <span className={styles.cartCount}>{cart.length}</span>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
