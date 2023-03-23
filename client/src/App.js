import "./App.css";
import ListView from "./components/ListView/ListView";

function App() {
  return (
    <div className="App">
      <ListView tasks={TASKS} />
    </div>
  );
}

export default App;

/*
Demo tasks
  dueDate will be a Date integer
*/
const TASKS = [
  {
    title: "Schedule furnace maintenance",
    comment: "No Comment",
    dueDate: 12345,
    duration: 365,
    recurring: true,
    priority: 2,
  },
  {
    title: "Vacuum bedrooms",
    comment: "",
    dueDate: 12346,
    duration: 365,
    recurring: true,
    priority: 5,
  },
  {
    title: "Empty litterbox",
    comment: "Do it every day!",
    dueDate: 12346,
    duration: 1,
    recurring: true,
    priority: 7,
  },
];
