import React from "react";
import styles from "./Filter.module.scss";

const Filter = () => (
  <div className={styles.filter}>
    <h3 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>Все</span>
    </label>
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>Без пересадок</span>
    </label>
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>1 пересадка</span>
    </label>
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>2 пересадки</span>
    </label>
    <label className={styles.checkbox}>
      <input type="checkbox" />
      <span>3 пересадки</span>
    </label>
  </div>
);

export default Filter;
