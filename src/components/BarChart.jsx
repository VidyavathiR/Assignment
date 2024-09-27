import React from "react";
import styles from "./barchart.module.css";

const BarChart = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className={styles["bar-chart"]}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles["bar"]}
          style={{
            height: `${(item.value / maxValue) * 100}%`, /* Calculate the height of each bar based on its value */
          }}
        >
          <div
            className={styles["bar-fill"]}
            style={{
              height: `${(item.value / maxValue) * 100}%`, /* Calculate the height of each bar based on its value */
            }}
          >
            <span>{item.value}</span>
          </div>
          <div className={styles["bar-label"]}>
            <span>{item.month}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;