import React from "react";
import styles from "./main.scss";

export default function Sidebar({nameValue}) {
  

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["name"]}>{nameValue}</div>
      <img src={"../images/sidebar.jpeg"} className={styles["image"]} />
    </div>
  );
}
