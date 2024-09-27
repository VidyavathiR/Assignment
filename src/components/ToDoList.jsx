import React from "react";
import styles from "./todolist.module.css"

const ToDoList = () => {
  const data = [
    { task: "Follow up", count: 12, type: "enquiries" },
    {
      task: "You have",
      count: 21,
      type: "new enrollments awaiting approval",
    },
    { task: "Send fee reminders to", count: 32, type: "students" },
    { task: "Send upcoming fees alerts to", count: 20, type: "students" },
    {
      task: "You have",
      count: 10,
      type: "new assignment submissions to evaluate",
    },
    {
      task: "Promote",
      count: 42,
      type: "students to new certification levels",
    },
  ];

  return (
    <div className={styles["to-do-list"]}>
      <h3>TO-DO</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <span>{item.task}</span>
            <span>{item.count}</span>
            <span>{item.type}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;