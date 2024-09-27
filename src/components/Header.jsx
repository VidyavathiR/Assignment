import React from "react";
import styles from "./header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>SpArts</h1>
      <input type="text" placeholder="Search students by name" />
    </div>
  );
};

export default Header;