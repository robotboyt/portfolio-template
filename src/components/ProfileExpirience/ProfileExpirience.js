import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import styles from "../../App.module.css";

const ProfileExpirience = ({ SvgIcon }) => {
  let expirience = [
    {
      companyName: "Pinta Web-Were",
      position: "Rect Developer",
      startDate: "03/2023",
      finishDate: "Present",
      tasks: [
        "Creating and maintaining user interfaces using React, Redux.",
        "Using asynchronous code for backend requests.",
        "Covered features by tests.",
      ],
      typeOfWork: "Hybrid",
    },
    {
      companyName: "ETER-solution",
      position: "Rect Developer",
      startDate: "11/2022",
      finishDate: "03/2023",
      tasks: [
        "Creating and maintaining user interfaces using React, Redux.",
        "Using asynchronous code for backend requests.",
        "Covered features by tests.",
      ],
      typeOfWork: "Hybrid",
    },
  ];
  return (
    <div className={styles.profileExpirience}>
      <h2>Expirience:</h2>
      <div className={styles.expirience}>
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
                {item.startDate} - {item.finishDate}
              </span>
            </div>
            <div className={styles.tasks}>
              <span>Achievements/Tasks:</span>
              <ul>
                {item.tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileExpirience;
