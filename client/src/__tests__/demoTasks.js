import moment from "moment";
import { createTask } from "../api";

let demoTasks = [
  {
    // Due 1 week ago, Recurring 1 year
    title: "Schedule furnace maintenance",
    comment: "",
    creationDate: new Date(),
    dueDate: moment(new Date()).subtract(1, "week").toDate(),
    recurring: true,
    period: 1,
    periodType: "repeat_years",
    priority: 0,
  },
  {
    // Due 2 days ago, Recurring 1 week
    title: "Vacuum bedrooms",
    comment: "",
    creationDate: new Date(),
    dueDate: moment(new Date()).subtract(2, "days").toDate(),
    recurring: true,
    period: 1,
    periodType: "repeat_week",
    priority: 3,
  },

  {
    // Due today, Recurring daily
    title: "Empty litterbox",
    comment: "",
    creationDate: new Date(),
    dueDate: new Date(),
    recurring: true,
    period: 1,
    periodType: "repeat_days",
    priority: 4,
  },

  {
    // Due tomorrow, no recurrence
    title: "Bathe dog",
    comment: "Stinky!",
    creationDate: new Date(),
    dueDate: moment(new Date()).add(1, "days").toDate(),
    recurring: false,
    period: 1,
    periodType: "repeat_days",
    priority: 3,
  },
  {
    // Due in 2 days, Recurring every 2 weeks
    title: "Mow the lawn",
    comment: "",
    creationDate: new Date(),
    dueDate: moment(new Date()).add(2, "days").toDate(),
    recurring: true,
    period: 2,
    periodType: "repeat_weeks",
    priority: 3,
  },
  {
    // Due in 5 days, Recurring weekly
    title: "Clean downstairs bathroom",
    comment: "",
    creationDate: new Date(),
    dueDate: moment(new Date()).add(5, "days").toDate(),
    recurring: true,
    period: 1,
    periodType: "repeat_weeks",
    priority: 3,
  },
  {
    // Due 1 day ago, Recurring daily
    title: "Practice piano",
    comment: "",
    creationDate: new Date(),
    dueDate: moment(new Date()).subtract(1, "day").toDate(),
    recurring: true,
    period: 1,
    periodType: "repeat_days",
    priority: 3,
  },
];

window.addDemoTasks = () => {
  for (let task of demoTasks) {
    createTask(task);
  }
};
