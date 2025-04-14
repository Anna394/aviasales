import React from "react";
import styles from "./Filter.module.scss";
import { useSelector, useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filter);

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
          onChange={() => dispatch({ type: "TOGGLE_FILTER", payload: "0" })}
          checked={filters[0]}
        />
        <span>Без пересадок</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "TOGGLE_FILTER", payload: "1" })}
          checked={filters[1]}
        />
        <span>1 пересадка</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "TOGGLE_FILTER", payload: "2" })}
          checked={filters[2]}
        />
        <span>2 пересадки</span>
      </label>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          onChange={() => dispatch({ type: "TOGGLE_FILTER", payload: "3" })}
          checked={filters[3]}
        />
        <span>3 пересадки</span>
      </label>
    </div>
  );
};

export default Filter;
