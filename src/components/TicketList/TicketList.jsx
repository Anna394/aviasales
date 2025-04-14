import React, { useState } from "react";
import styles from "./TicketList.module.scss";
import TicketCard from "../TicketCard/TicketCard";
import { useSelector } from "react-redux";

const TicketList = ({ items, error }) => {
  const filters = useSelector((state) => state.filter);
  const sortBy = useSelector((state) => state.tab.activeTab);
  const [visibleCount, setVisibleCount] = useState(5);

  let selectedStops = Object.keys(filters).filter(
    (key) => filters[key] === true
  );

  const filteredItems = items.filter((item) => {
    if (selectedStops.includes("all")) return true;
    const thereStops = item.segments[0].stops.length;
    const backStops = item.segments[1].stops.length;

    return (
      selectedStops.includes(String(thereStops)) ||
      selectedStops.includes(String(backStops))
    );
  });

  const sortTickets = (filteredItems, sortBy) => {
    return [...filteredItems].sort((a, b) => {
      switch (sortBy) {
        case "cheap":
          return a.price - b.price;
        case "fast":
          return (
            a.segments[0].duration +
            a.segments[1].duration -
            (b.segments[0].duration + b.segments[1].duration)
          );
        case "optimal":
          const priceA = a.price;
          const priceB = b.price;

          const durationA = a.segments[0].duration + a.segments[1].duration;
          const durationB = b.segments[0].duration + b.segments[1].duration;

          const weight = 10;

          const scoreA = priceA + durationA * weight;
          const scoreB = priceB + durationB * weight;

          return scoreA - scoreB;
        default:
          return [...filteredItems];
      }
    });
  };

  const sortedItems = sortTickets(filteredItems, sortBy);

  if (!items.length) {
    return <span>Загрузка билетов...</span>;
  }

  if (error) {
    return <span>Ошибка: {error}</span>;
  }

  if (!filteredItems.length) {
    return <span>Рейсов, подходящих под заданные фильтры, не найдено</span>;
  }

  return (
    <div className={styles.ticketList}>
      {sortedItems.slice(0, visibleCount).map((ticket, index) => (
        <div key={index}>
          <TicketCard
            price={ticket.price}
            carrier={ticket.carrier}
            segments={ticket.segments}
          ></TicketCard>
        </div>
      ))}
      {visibleCount < sortedItems.length && (
        <button
          className={styles.button}
          onClick={() => setVisibleCount(visibleCount + 5)}
        >
          Показать ещё билеты!
        </button>
      )}
    </div>
  );
};

export default TicketList;
