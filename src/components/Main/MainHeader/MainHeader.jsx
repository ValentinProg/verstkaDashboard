import styles from "./MainHeader.module.scss";
import search from "../../../assets/search.svg";

const MainHeader = (props) => {
  return (
    <div className={styles.mainHeader}>
      <div className={styles.mainHeaderTitle}>
        <h2>All Cutomers</h2>
        <p>Active Members</p>
      </div>
      <div className={styles.mainHeaderSearch}>
        <button>
          <img src={search} alt="" />
        </button>
        <input type="text" placeholder="Search" onChange={(event) => props.setSearchValue(event.target.value)}></input>
      </div>
    </div>
  );
};

export default MainHeader;
