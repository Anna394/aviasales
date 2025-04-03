import React from "react";
import styles from "./Tabs.module.scss";

const Tabs = () => (
  <div className={styles.tabs}>
    <span className={styles.tab}>САМЫЙ ДЕШЕВЫЙ</span>
    <span className={styles.tab}>САМЫЙ БЫСТРЫЙ</span>
    <span className={styles.tab}>ОПТИМАЛЬНЫЙ</span>
  </div>
);

export default Tabs;
