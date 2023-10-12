import moment from "moment";

export function formatDate(date) {
  if (!date) return "";

  date = moment(date);
  const today = moment().endOf("day");
  const tomorrow = moment().add(1, "day").endOf("day");
  const yesterday = moment().subtract(1, "day").endOf("day");
  const olderThanYesterday = moment().subtract(2, "day").endOf("day");

  if (date < olderThanYesterday) return `Overdue! ${date.fromNow()}`;
  if (date > tomorrow) return `Due ${date.fromNow()}`;
  if (date <= yesterday) return "Due yesterday";
  if (date <= today) return "Due today";
  if (date <= tomorrow) return "Due tomorrow";
}
