import styles from "./MainTable.module.scss";

const MainTable = (props) => {
  return (
    // <div className={styles.mainTableWrapper}>
    <div className={styles.mainTable}>
      {props.filteredCustomers.length < 1 ? (
        <span>No results!</span>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Customer name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {props.filteredCustomers.map((customer) => (
              <tr key={customer.id} >
                <td data-cell="Customer name">{customer.customerName}</td>
                <td data-cell="Company">{customer.company}</td>
                <td data-cell="Phone Number">{customer.phoneNumber}</td>
                <td data-cell="Email">{customer.email}</td>
                <td data-cell="Country">{customer.country}</td>
                <td data-cell="Status">
                  <p
                    className={`${styles.status} ${
                      customer.status === "Active"
                        ? styles.statusActive
                        : styles.statusInActive
                    }`}
                  >
                    {customer.status}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    // </div>
  );
};

export default MainTable;
