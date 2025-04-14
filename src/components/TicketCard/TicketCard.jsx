import React from "react";
import styles from "./TicketCard.module.scss";
import { formatTimeRange } from "../../formatTimeRange";

const TicketCard = ({ price, carrier, segments }) => {
  function formatDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}ч ${mins}м`;
  }

  function getTransferText(segment) {
    if (segment.stops.length === 0) return "БЕЗ ПЕРЕСАДОК";
    if (segment.stops.length === 1) {
      return `1 ПЕРЕСАДКА`;
    } else return `${segment.stops.length} ПЕРЕСАДКИ`;
  }

  return (
    <div className={styles.card}>
      <div className={styles.price}>{price.toLocaleString("ru-RU")} P</div>
      <div className={styles.logo}>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Логотип авиакомпании"
        />
      </div>

      {segments.map((segment, idx) => (
        <React.Fragment key={idx}>
          <div className={idx === 0 ? styles.infoThere : styles.infoBack}>
            <p className={styles.topText}>
              {segment.origin}-{segment.destination}
            </p>
            <p className={styles.bottomText}>
              {formatTimeRange(segment.date, segment.duration)}
            </p>
          </div>

          <div className={idx === 0 ? styles.timeThere : styles.timeBack}>
            <p className={styles.topText}>В ПУТИ</p>
            <p className={styles.bottomText}>
              {formatDuration(segment.duration)}
            </p>
          </div>

          <div
            className={idx === 0 ? styles.transfersThere : styles.transfersBack}
          >
            <p className={styles.topText}>{getTransferText(segment)}</p>
            <p className={styles.bottomText}>{segment.stops.join(", ")}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default TicketCard;
