import PropTypes from "prop-types";
import TransactionItem from "../TransactionItem/TransactionItem";

import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((el) => (
          <TransactionItem
            key={el.id}
            type={el.type}
            amount={el.amount}
            currency={el.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
};
