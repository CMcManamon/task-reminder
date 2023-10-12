const MILLISECONDS_IN_DAY = 8.64e7;
const PRIORITY_MULTIPLIER = [0.25, 0.75, 1.0, 1.25, 1.75];
export const sortTasks = () => {
  return function (a, b) {
    const priorityA = taskPriority(a);
    const priorityB = taskPriority(b);

    // Same calculated priority based on due date, defer to task priority setting
    if (priorityA === priorityB) return b.priority - a.priority;
    // Neither is due, sort by highest priority
    else if (priorityA > 0 && priorityB > 0) return priorityB - priorityA;
    // At least 1 task is overdue; sort by most negative
    else return priorityA - priorityB;
  };
};

const taskPriority = (task) => {
  if (!task) return 0;
  // Get diff between now and the duedate, and divide by milliseconds in a day
  let daysUntilDue = Math.round(
    (new Date(task.dueDate).getTime() - Date.now()) / MILLISECONDS_IN_DAY
  );

  const frequency = task.recurring ? taskFrequency(task) : 1;
  const priority =
    (PRIORITY_MULTIPLIER[task.priority] * daysUntilDue) / frequency;
  return priority;
};

const taskFrequency = (task) => {
  const type = task.periodType;
  const period = task.period;
  switch (type) {
    case "repeat_days":
      return period * 1;
    case "repeat_weeks":
      return period * 7;
    case "repeat_months":
      return period * 30; // only need approximations
    case "repeat_years":
      return period * 365;
    default:
      return 1;
  }
};

export const taskCardClass = (task) => {
  const priority = taskPriority(task);

  if (priority <= -10) return "taskCardDarkRed";
  if (priority <= -6) return "taskCardRed";
  if (priority <= -2.5) return "taskCardPink";
  if (priority <= -1) return "taskCardYellow";
  if (priority <= 0) return "taskCardGreen";
  return "taskCardWhite";
};
