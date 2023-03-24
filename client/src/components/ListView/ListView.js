import NavBar from "../NavBar/NavBar";
import Tasks from "./Tasks/Tasks";

const ListView = (props) => {
  const { tasks } = props;
  return (
    <div className={ListView}>
      <NavBar left={"LeftBtn"} center={"ListView NavBar"} right={"RightBtn"} />
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
};
export default ListView;
