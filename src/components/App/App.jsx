import React, { useEffect } from "react";
import styles from "./App.module.scss";
import Filter from "../Filter/Filter";
import Tabs from "../Tabs/Tabs";
import TicketList from "../TicketList/TicketList";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dataActions";

import logoIcon from "../../Logo.svg";

const App = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.icon}>
        <img src={logoIcon} alt="Описание изображения" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Filter></Filter>
          </div>
          <div className={styles.right}>
            <Tabs></Tabs>
            <TicketList items={items} loading={loading} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
