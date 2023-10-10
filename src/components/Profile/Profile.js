import React from "react";
import styles from "../../App.module.css";
import { SvgIcon } from "@mui/material";
import ProfileBlock from "../ProfileBlock/ProfileBlock";
import ProfileExpirience from "../ProfileExpirience/ProfileExpirience";
import { Route, Routes } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className={styles.navbar}>navigation</div>
      <div className={styles.profile}>
        <ProfileBlock SvgIcon={SvgIcon} />
        <div className={styles.profileSummary}>
          <Routes>
            <Route path="/" element={<ProfileExpirience SvgIcon={SvgIcon} />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Profile;
