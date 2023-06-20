import { useState } from "react";
import styles from "./Main.module.scss";
import MainFooter from "./MainFotter/MainFotter";
import MainHeader from "./MainHeader/MainHeader";
import MainTable from "./MainTable/MainTable";
import { customers } from "../../constants/constants";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredCustomers = customers.filter((object) =>
    JSON.stringify(object).toLowerCase().includes(searchValue.toLowerCase())
  );

  // const filteredCustomers = customers.filter(customer => {
  //   return (

  //     customer.customerName.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
  //     customer.company.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
  //     customer.phoneNumber.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
  //     customer.email.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
  //     customer.country.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
  //     customer.status.toLocaleLowerCase().includes(searchValue.toLowerCase())
  //   );
  // });

  return (
    <main className={styles.main}>
      <h2>Hello Evano 👋🏼,</h2>
      <div className={styles.mainContent}>
        <MainHeader setSearchValue={setSearchValue} />
        <MainTable filteredCustomers={filteredCustomers} />
        <MainFooter />
      </div>
    </main>
  );
};

export default Main;
