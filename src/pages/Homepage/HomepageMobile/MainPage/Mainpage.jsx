import styles from "./Mainpage.module.css";
import Transactions from "../../../../components/Transactions/Transactions.jsx";

const Mainpage = () => {
  return (
    <>
      <div className={styles.balance}>BALANCE PLACEHOLDER</div>
      <Transactions />
    </>
  );
};

export default Mainpage;
