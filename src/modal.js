import React, { useState } from "react";
import styles from "./main.scss";

export default function Modal({ shouldShow, updateName }) {
  const [name, setName] = useState("");
  const submit = () => {
    if (name) {
      updateName(name);
    }
  };
  const onChangeText = (evt) => {
    setName(evt.target.value);
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div className={styles["modal"]}>
      <div className={styles["wrapper"]}>
        <input value={name} onChange={onChangeText} placeholder={"Name"} className={styles['input']}/>
        <button onClick={submit}  className={styles['button']}>Submit</button>
      </div>
    </div>
  );
}
