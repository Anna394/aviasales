import React from "react";
import styles from "./Tabs.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Tabs = () => {
  const dispatch = useDispatch();
  const tab = useSelector((state) => state.tab);

  return (
    <div className={styles.tabs}>
      <button
        className={`${styles.tab} ${
          tab.activeTab === "cheap" ? styles.active : ""
        }`}
        onClick={() => dispatch({ type: "TOGGLE_TAB", payload: "cheap" })}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${styles.tab} ${
          tab.activeTab === "fast" ? styles.active : ""
        }`}
        onClick={() => dispatch({ type: "TOGGLE_TAB", payload: "fast" })}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${styles.tab} ${
          tab.activeTab === "optimal" ? styles.active : ""
        }`}
        onClick={() => dispatch({ type: "TOGGLE_TAB", payload: "optimal" })}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Tabs;
