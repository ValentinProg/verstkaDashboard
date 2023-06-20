import styles from './SideBarUser.module.scss'
import evano from "../../../assets/Evano.png";

const SideBarUser = () => {
  return (
    <div className={styles.sideBarUser}>
      <img src={evano} alt="evano" />
      <div className={styles.sideBarUserInf}>
        <span>Evano</span>
        <div>Progect Manager</div>
      </div>
    </div>
  );
};

export default SideBarUser;
