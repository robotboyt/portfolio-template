import React from "react";
import styles from "../../App.module.css";
import avatar from "../../assets/avatar.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profileBlock}>
        <div className={styles.profileContainer}>
          <div className={styles.avatar}>
            <img alt="avatar" src={avatar} />
          </div>
          <div className={styles.profileName}>
            <div className={styles}>
              <h2>Theodor Vazovski</h2>
            </div>
          </div>
          <div className={styles.profileLinks}></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
