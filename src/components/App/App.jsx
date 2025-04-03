import React from "react";
import styles from "./App.module.scss";
import Filter from "../Filter/Filter";
import Tabs from "../Tabs/Tabs";
import TicketList from "../TicketList/TicketList";

const App = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.left}>
        <Filter></Filter>
      </div>
      <div className={styles.right}>
        <Tabs></Tabs>
        <TicketList />
        <button className={styles.button}>Показать ещё билеты!</button>
      </div>
    </div>
  </div>
);

export default App;
