import React from "react";
import styles from "../../App.module.css";
import avatar from "../../assets/avatar.png";
import { SvgIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const Profile = () => {
  let icons = [LinkedInIcon, GitHubIcon, AlternateEmailIcon, ContactPhoneIcon];

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
          <div className={styles.profileLinks}>
            {icons.map((item) => {
              return <SvgIcon component={item} sx={{ fontSize: 40 }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
