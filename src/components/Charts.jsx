import React from "react";
import BarChart from "./BarChart";
import styles from "./charts.module.css"

const Charts = ({ activeTab, handleTabChange }) => {
  const data = {
    cashInflow: [
      { month: "Jun'23", value: 30 },
      { month: "Jul'23", value: 70 },
      { month: "Aug'23", value: 100 },
    ],
    amountCollected: [
      { month: "Jun'23", value: 50 },
      { month: "Jul'23", value: 60 },
      { month: "Aug'23", value: 90 },
    ],
    studentsAdded: [
      { month: "Jun'23", value: 25 },
      { month: "Jul'23", value: 80 },
      { month: "Aug'23", value: 65 },
      { month: "Sep'23", value: 45 },
      { month: "Oct'23", value: 55 },
      { month: "Nov'23", value: 85 },
      { month: "Dec'23", value: 60 },
      { month: "Jan'24", value: 90 },
    ],
  };

  return (
    <div className={styles["charts"]}>
      <div className={styles["chart-container"]}>
        <h3>MONTH-ON-MONTH GROWTH</h3>
        <div className={styles["chart-tabs"]}>
          <button
            className={activeTab === "cashInflow" ? "active" : ""}
            onClick={() => handleTabChange("cashInflow")}
          >
            CASH INFLOW
          </button>
          <button
            className={activeTab === "amountCollected" ? "active" : ""}
            onClick={() => handleTabChange("amountCollected")}
          >
            AMOUNT COLLECTED
          </button>
        </div>
        <div className={styles["chart"]}>
          {activeTab === "cashInflow" ? (
            <BarChart data={data.cashInflow} />
          ) : activeTab === "amountCollected" ? (
            <BarChart data={data.amountCollected} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={styles["chart-container"]}>
        <h3>STUDENTS ADDED</h3>
        <div className={styles["chart"]}>
          <BarChart data={data.studentsAdded} />
        </div>
      </div>
    </div>
  );
};

export default Charts;