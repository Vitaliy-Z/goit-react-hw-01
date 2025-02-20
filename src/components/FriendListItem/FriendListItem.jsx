import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={clsx(
          styles.status,
          isOnline ? styles.isOnline : styles.isOffline
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
