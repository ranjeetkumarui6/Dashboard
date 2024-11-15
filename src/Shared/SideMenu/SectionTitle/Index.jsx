import React from "react";
import styles from "./index.module.css";
const MenuTitle = ({name}) => {
  return (
    <>
      <div className={styles.menutitle}>
        <span>{name}</span>
      </div>
    </>
  );
};

export default MenuTitle;
