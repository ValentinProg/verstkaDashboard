import styles from "./SideBarLinks.module.scss";
// import arrow from "../../../assets/arrow.svg";
// import { links } from "../../../constants/constants";
import {ReactComponent as Arrow} from "../../../assets/arrow.svg"
import {ReactComponent as Square} from "../../../assets/square.svg"
import {ReactComponent as Key} from "../../../assets/key.svg";
import {ReactComponent as Discount} from "../../../assets/discount.svg";
import {ReactComponent as Message} from "../../../assets/message.svg";
import {ReactComponent as Money} from "../../../assets/money.svg";
import {ReactComponent as User} from "../../../assets/user.svg";

 const links = [
    {
      id: 1,
      name: "Dashboard",
      logo: <Key className={styles.hoverStroke}/>,
    },
    {
      id: 2,
      name: "Product",
      logo: <Square className={styles.hoverFill}/>,
    },
    {
      id: 3,
      name: "Customers",
      logo: <User className={styles.hoverUser} />,
    },
    {
      id: 4,
      name: "Income",
      logo: <Money className={styles.hoverStroke}/>,
    },
    {
      id: 5,
      name: "Promote",
      logo: <Discount className={styles.hoverFill}/>,
    },
    {
      id: 6,
      name: "Help",
      logo: <Message className={styles.hoverFill}/>,
    },
  ];


const SideBarLinks = () => {
  return (
    <div className={styles.sideBarLinks}>
      {links.map((link) => (
        // <a key={link?.id} className={styles.sideBarLink}>
        <a key={link?.id} className={link.name !== "Customers" ? styles.sideBarLink :`${styles.sideBarLink} ${styles.activeLink}`}>
          <div className={styles.sideBarLinkInfo}>
            {link?.logo}
            <span>{link?.name}</span>
          </div>
          {/* {link?.name !== "Dashboard" && <img src={arrow} alt="arrow" />} */}
          {link?.name !== "Dashboard" && <Arrow className={styles.hoverStroke}/>}
        </a>
      ))}
    </div>
  );
};

export default SideBarLinks;
