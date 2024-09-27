import React from "react";
import styles from "./activeStudents.module.css";

const ActiveStudents = ({ students = [] }) => {
  return (
    <div className={styles["active-students"]}>
      <h2>Active Students: {students.length}</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              <span>{student.name}</span>
              <span>{student.email}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active students available.</p>
      )}
    </div>
  );
};

export default ActiveStudents;
