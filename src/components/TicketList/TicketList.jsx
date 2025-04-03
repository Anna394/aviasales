import React from "react";
import styles from "./TicketList.module.scss";
import TicketCard from "../TicketCard/TicketCard";

const TicketList = () => (
  <div className={styles.ticketList}>
    <TicketCard></TicketCard>
    <TicketCard></TicketCard>
    <TicketCard></TicketCard>
  </div>
);

export default TicketList;
