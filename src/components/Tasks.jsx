import Task from "./Task"
import { InformationContext } from "../contexts/InformationContext"
import { useContext, useEffect, useState } from "react";
const Tasks = () => {
    const { tasks_data } = useContext(InformationContext);

    const sortArray = (arr) => {
        arr.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return arr
    }
    const [tasksDataSorted, setTasksDataSorted] = useState([]);
    useEffect(() => {
        if (tasks_data) {
            setTasksDataSorted(sortArray(tasks_data));
        }
    }, [tasks_data])
    return (
        <div className="tasks-list">
            {
                tasksDataSorted.length > 0 ?
                    tasksDataSorted.map((task, index) => (
                        <Task task={task} key={index} />
                    ))
                    : <span>No Task Available</span>
            }
        </div>
    )
}

export default Tasks
