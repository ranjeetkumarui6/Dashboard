import React from "react";
import styles from "./index.module.css";
import { FaBars } from "react-icons/fa";
import NavSocials from "./NavSocialMedia/Index";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbarcontainer}>
        <div className={styles.toggleicon}>
          <div className={styles.icon}>
          <HiMiniBars3  size={25} />
          </div>
        </div>
        <div className={styles.searchinput}>
          <i className={styles.searchicon}>
          <IoSearch size={20}/>
          </i>
          <input type="text" placeholder="Search" />
          <i className={styles.crossicon}>
          <RxCross2 size={25} />
          </i>       
        </div>
        <div className={styles.socialmeadia}>
          <NavSocials />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
