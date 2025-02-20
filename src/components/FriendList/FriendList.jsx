import PropTypes from "prop-types";

import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendsList}>
      {friends.map((el) => (
        <li className={styles.friendItem} key={el.id}>
          <FriendListItem
            avatar={el.avatar}
            name={el.name}
            isOnline={el.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired
};
