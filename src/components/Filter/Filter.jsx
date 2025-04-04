import React from "react";
import styles from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state);
  return (
    <div className={styles.filter}>
      <h3 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "TOGGLE_ALL" })}
          checked={filters.all}
        />
        <span>Все</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "TOGGLE_FILTER", payload: "noTransfer" })
          }
          checked={filters.noTransfer}
        />
        <span>Без пересадок</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "TOGGLE_FILTER", payload: "oneTransfer" })
          }
          checked={filters.oneTransfer}
        />
        <span>1 пересадка</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "TOGGLE_FILTER", payload: "twoTransfer" })
          }
          checked={filters.twoTransfer}
        />
        <span>2 пересадки</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "TOGGLE_FILTER", payload: "threeTransfer" })
          }
          checked={filters.threeTransfer}
        />
        <span>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
