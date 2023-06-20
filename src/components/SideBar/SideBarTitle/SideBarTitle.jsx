import sideBarLogo from "../../../assets/menuLogo.png";
import styles from "./SideBarTitle.module.scss";

const SideBarTitle = () => {
  return (
    <div className={styles.sideBarTitle}>
      <img src={sideBarLogo} alt="logo" />
      <h1>
        Dashboard<span>v.01</span>
      </h1>
    </div>
  );
};

export default SideBarTitle;
