import React, { useState } from "react";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import Charts from "./Charts";
import ToDoList from "./ToDoList";
import EngagementSection from "./EngagementSection";
import styles from "./maincontent.module.css"
import ActiveStudents from "./ActiveStudents";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("cashInflow");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles["main-content"]}>

      <Header />
      <ProfileSection />
      <ActiveStudents/>
      <Charts activeTab={activeTab} handleTabChange={handleTabChange} />
      <ToDoList />
      <EngagementSection />
    </div>
  );
};

export default MainContent;