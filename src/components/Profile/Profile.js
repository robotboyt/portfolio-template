import React from "react";
import styles from "../../App.module.css";
import avatar from "../../assets/avatar.jpg";
import { SvgIcon } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PlaceIcon from "@mui/icons-material/Place";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Profile = () => {
  let links = [
    {
      icon: LinkedInIcon,
      info: "https://www.linkedin.com/in/mark-buchynskyi-b0baa8226/",
    },
    { icon: GitHubIcon, info: "link", id: 1 },
    { icon: AlternateEmailIcon, info: "link", id: 2 },
    { icon: ContactPhoneIcon, info: "link", id: 3 },
    // { icon: PlaceIcon, info: "link", id: 4 },
  ];

  let skills = [
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SCSS",
    "ReactJS",
    "React-Hooks",
    "React-Router",
    "Redux",
    "Material-UI",
    "Chakra-UI",
    "WebSocket",
    "Figma",
    "OOP",
  ];

  let language = [
    { leng: "English", level: "B2" },
    { leng: "Ukrainian", level: "C2" },
    { leng: "Russian", level: "C2" },
  ];

  let expirience = [
    {
      companyName: "Pinta Web-Were",
      position: "Rect Developer",
      startDate: "03/2023",
      finishDate: "Present",
      tasks: "make sites",
      typeOfWork: "Hybrid",
    },
  ];

  return (
    <div className={styles.profile}>
      <div className={styles.profileBlock}>
        <div className={styles.profileUser}>
          <div className={styles.profileAvatar}>
            <img src={avatar} alt="avatar" />
          </div>
          <div className={styles.profileName}>
            <div className={styles.name}>
              <h2>Mark Buchynskyi</h2>
            </div>
          </div>
          <div className={styles.profileLinks}>
            {links.map((item) => (
              <a
                href={item.info}
                target="_blank"
                rel="noreferrer"
                key={item.id}
              >
                <SvgIcon component={item.icon} fontSize="large" />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.profileSkills}>
          {skills.map((item) => (
            <span>{item}</span>
          ))}
        </div>
        <div className={styles.profileLanguage}>
          {language.map((item) => (
            <div className={styles.language}>
              <span>{item.leng}</span>
              <span>{item.level}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.profileSummary}>
        <div className={styles.profileExpirience}>
          <h2>Expirience:</h2>
          <div>
            {expirience.map((item) => (
              <div className={styles.expirienceItem}>
                <div className={styles.company}>
                  <h4>
                    <SvgIcon component={ApartmentIcon} />
                    {item.companyName}
                  </h4>
                  <span>{item.position}</span>
                </div>
                <div className={styles.timePeriod}>
                  <span>
                    {item.startDate} / {item.finishDate}
                  </span>
                </div>
                <div className={styles.tasks}>
                  <span>{item.tasks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
