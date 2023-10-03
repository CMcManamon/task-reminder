import moment from "moment";

export function formatDate(date) {
  if (!date) return "";

  date = moment(date);
  const today = moment().endOf("day");
  const tomorrow = moment().add(1, "day").endOf("day");
  const yesterday = moment().subtract(1, "day").endOf("day");
  const olderThanYesterday = moment().subtract(2, "day").endOf("day");

  if (date < olderThanYesterday || date > tomorrow) return date.fromNow();
  if (date <= yesterday) return "yesterday";
  if (date <= today) return "today";
  if (date <= tomorrow) return "tomorrow";
}
