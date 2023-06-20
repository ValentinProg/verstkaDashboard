import styles from "./SideBar.module.scss";
import SideBarTitle from "./SideBarTitle/SideBarTitle";
import SideBarLinks from "./SideBarLinks/SideBarLinks";
import SideBarUser from "./SideBarUser/SideBarUser";
import Burger from "../../assets/burger.svg";
import Close from "../../assets/close.svg";
import { useState } from "react";

const SideBar = () => {
  const [openBurger, setOpenBurger] = useState(false);

  return (
    <aside className={styles.sideBar}>
      <>
        {/* <div
          className={styles.sideBarBurger}
          onClick={() => setOpenBurger(!openBurger)}
        >
          <img src={Burger} />
        </div>
        <div
          className={styles.sideBarBurger}
          onClick={() => setOpenBurger(!openBurger)}
        >
          <img src={Close} />
        </div> */}
        <div className={styles.sideBarContent}>
          <div className={styles.sideBarMenu}>
            <SideBarTitle />
            <SideBarLinks />
          </div>
          <SideBarUser />
        </div>
      </>
    </aside>
  );
};

export default SideBar;
