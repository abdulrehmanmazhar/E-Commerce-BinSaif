import { CiShoppingCart } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import styles from "./styles/Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar({ LOGO, LINKS, toggleSlide }) {
  // const {badge, setBadge} = useContext(Contextfile);
  let [badge, setBadge] = useState(0);
  // console.log(mycontext)

  return (
    <div className={styles.nav}>
      <div className={styles.hamburger} onClick={toggleSlide}>
        <GiHamburgerMenu className={styles.hamIcon} />
      </div>
      <div className={styles.logo}>
        <h1>{LOGO}</h1>
      </div>
      <div className={styles.aLinks}>
        {LINKS.map(
          (
            link,
            index // Add index parameter to map function
          ) => (
            <NavLink className={styles.navLinks} key={index} to={link.link}>
              {link.text}
            </NavLink> // Use key prop for each anchor tag
          )
        )}
      </div>
      <div className={styles.searchBar}>
        <input type="text" name="" id="" placeholder="Search" />
        <FaSearch className={styles.searchIcon} />
      </div>
      <div className={styles.cart}>
        <div className={styles.cartIconDiv}>
          <Link key={"wishlist"} to={"wishlist"}>
            <CiHeart className={styles.cartIcon} />
          </Link>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.cartIconDiv}>
          <Link key={"cart"} to={"cart"}>
            <CiShoppingCart className={styles.cartIcon} />
          </Link>
        </div>
        <p className={styles.badge}>{badge}</p>
      </div>
      <div className={styles.before}>
        <Link key={"sign-up"} to={"signup"}>
          <div className={styles.icon}>Sign up</div>{" "}
        </Link>
      </div>
      <div className={styles.spacer}>

      </div>
    </div>
  );
}

export default Navbar;
