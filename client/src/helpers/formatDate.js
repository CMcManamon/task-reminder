import moment from "moment";

// Returns a text description of a due date relative to today
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

// Returns a description of how often a task repeats
// e.g. (⟳ 2W)
export function formatRepeat(task) {
  if (!task.recurring) {
    return "";
  }
  let str = "(⟳ ";
  str += task.period;
  switch (task.periodType) {
    case "repeat_days":
      str += "d";
      break;
    case "repeat_weeks":
      str += "w";
      break;
    case "repeat_months":
      str += "m";
      break;
    case "repeat_years":
      str += "y";
      break;
    default:
  }
  str += ")";
  return str;
}
