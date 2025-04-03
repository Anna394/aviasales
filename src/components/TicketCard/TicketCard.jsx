import React from "react";
import styles from "./TicketCard.module.scss";

const TicketCard = () => (
  <div className={styles.ticketCard}>
    <div className={styles.title}>
      <div className={styles.price}>19500</div>
      <div className={styles.company}>Airlines</div>
    </div>
    <div className={styles.info}>
      <div className={styles.city}>
        <span>MOW – HKT</span>
        <span>10:45 – 08:00</span>
      </div>
      <div className={styles.time}>
        <span>В ПУТИ</span>
        <span>21ч 15м</span>
      </div>
      <div className={styles.transfer}>
        <span>2 ПЕРЕСАДКИ</span>
        <span>HKG, JNB</span>
      </div>
    </div>
  </div>
);

export default TicketCard;
