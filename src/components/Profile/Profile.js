import React from "react";
import styles from "../../App.module.css";
import { SvgIcon } from "@mui/material";
import ProfileBlock from "../ProfileBlock/ProfileBlock";
import ProfileExpirience from "../ProfileExpirience/ProfileExpirience";
import { Link, Route, Routes } from "react-router-dom";
import ProfileEducation from "../ProfileEducation/ProfileEducation";
import ProfileAboutMe from "../ProfileAboutMe/ProfileAboutMe";

const Profile = () => {
  return (
    <>
      <div className={styles.navbar}>
        <Link to="/">Expiriencee</Link>
        <Link to="/education">Education</Link>
        <Link to="/aboutme">About Me</Link>
      </div>
      <div className={styles.profile}>
        <ProfileBlock SvgIcon={SvgIcon} />
        <div className={styles.profileSummary}>
          <Routes>
            <Route path="/" element={<ProfileExpirience SvgIcon={SvgIcon} />} />
            <Route path="/education" element={<ProfileEducation />} />
            <Route path="/aboutme" element={<ProfileAboutMe />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Profile;
