import React from "react";
import styles from "./profilesection.module.css"

const ProfileSection = () => {
  return (
    <div className={styles["profile-section"]}>
      <div className="profile-details">
        <h2>Mayur Francis Borsaikia</h2>
        <p>Shreyas Jain on Champions Club</p>
      </div>
      <div className={styles["quick-actions"]}>
        <button>Send Enrollment form</button>
        <button>Add Student</button>
        <button>Collect Fees</button>
      </div>
    </div>
  );
};

export default ProfileSection;