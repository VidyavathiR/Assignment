import React from "react";
import styles from "./engagementsection.module.css"

const EngagementSection = () => {
  const data = [
    "Send out a new assignments. Student attendance is below last 3 months average.",
    "It's been more than a month since the last fitness test. Conduct a new round.",
    "Only 20% of students have Students application.",
    "Ensure 100% installations for better communication.",
  ];

  return (
    <div className={styles["engagement-section"]}>
      <h3>ENGAGEMENT</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default EngagementSection;