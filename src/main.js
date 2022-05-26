import React, { useCallback, useEffect, useRef, useState } from "react";
import { windowHeight } from "./constants";

import styles from "./main.scss";
import Mainscreen from "./mainscreen";
import Modal from "./modal";
import Sidebar from "./sidebar";

function Main() {
  const sidebarwidth = (482 * windowHeight) / 1280;
  const mainRef = useRef(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const [nameValue, setNameValue] = useState("raja k");
  const [openModel, setOpenModel] = useState(false);

  const toggleSideBar = useCallback(() => {
    setShowSidebar(!showSidebar);
  }, [showSidebar]);

  useEffect(() => {
    if (showSidebar) {
      mainRef.current.style.right = `-${sidebarwidth}px`;
    } else {
      mainRef.current.style.right = `0px`;
    }
  }, [showSidebar]);

  useEffect(() => {
    if (!nameValue) {
      setOpenModel(true);
    } else {
      setOpenModel(false);
    }
  }, [nameValue]);

  return (
    <>
      <div className={styles["main"]} ref={mainRef}>
        <Sidebar showSidebar={showSidebar} nameValue={nameValue}/>
        <Mainscreen toggleSideBar={toggleSideBar} />
      </div>
      <Modal shouldShow={openModel} updateName={setNameValue} />
    </>
  );
}

export default Main;
