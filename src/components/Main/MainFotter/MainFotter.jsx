import styles from "./MainFotter.module.scss";

const MainFotter = () => {
  return (
    <div className={styles.mainFotter}>
      <div className={styles.mainFotterInfo}>
      Showing data 1 to 8 of  256K entries
      </div>
      <div className={styles.mainFotterPages}>
        <button>&#60;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <span>. . .</span>
        <button>40</button>
        <button>&#62;</button>
      </div>
    </div>
  );
};

export default MainFotter;
