import PropTypes from "prop-types";

import styles from "./TransactionItem.module.css";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <tr className={styles.tableRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};
