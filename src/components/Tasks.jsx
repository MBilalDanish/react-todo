import Task from "./Task"
import { InformationContext } from "../contexts/InformationContext"
import { useContext } from "react";
const Tasks = () => {
    const {tasks_data} = useContext(InformationContext);
    return (
        <div className="tasks-list">
            {
                tasks_data.length >0 ?
                tasks_data.map((task, index) => (
                    <Task task={task}  key={index} />
                ))
                : <span>No Task Available</span>
            }
        </div>
    )
}

export default Tasks
