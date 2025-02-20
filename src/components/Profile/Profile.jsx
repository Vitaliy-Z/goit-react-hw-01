import PropTypes from "prop-types";

import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes }
}) {
  return (
    <div className={styles.card}>
      <div className={styles.userWrapper}>
        <img
          className={styles.avatar}
          src={image}
          alt={`Avatar of + ${name}`}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.statsList}>
        <li className={styles.statsItem}>
          <span>Followers</span>
          <span className={styles.statsText}>{followers}</span>
        </li>

        <li className={styles.statsItem}>
          <span>Views</span>
          <span className={styles.statsText}>{views}</span>
        </li>

        <li className={styles.statsItem}>
          <span>Likes</span>
          <span className={styles.statsText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};
