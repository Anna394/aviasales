import { format, addMinutes } from "date-fns";

export function formatTimeRange(dateString, durationInMinutes) {
  const departureDate = new Date(dateString);
  const arrivalDate = addMinutes(departureDate, durationInMinutes);

  const timeFormat = "HH:mm";

  return `${format(departureDate, timeFormat)} - ${format(
    arrivalDate,
    timeFormat
  )}`;
}
