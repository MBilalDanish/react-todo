import React, { useContext, useState } from "react"
import { InformationContext } from "../contexts/InformationContext"
const Task = ({ task }) => {
    let [showDescription, setShowDescription] = useState(false);
    const { editData } = useContext(InformationContext)
    if (task.is_completed) {
        return (
            <div className="single-task completed" >
                <div className="flex">
                    <del>
                    <span className="single-task-title">{task.title}</span>
                        <div   onClick={() => { setShowDescription(!showDescription) }} className=" btn-no-bg btn-no-border d-inline"><i className="fas fa-angle-down"></i></div>
                        {
                            showDescription  ? <span className="single-task-desc">{task.description}</span>:''
                        }
                    </del>
                    <div onClick={() => { editData(task.id, 'remove') }} className="btn-no-bg btn-no-border d-inline"><i className="fas text-danger fa-trash-alt"></i></div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="single-task" >
                <div className="flex">
                    <del>
                        <span className="single-task-title">{task.title}</span>
                        <div   onClick={() => { setShowDescription(!showDescription) }} className=" btn-no-bg btn-no-border d-inline"><i className="fas fa-angle-down"></i></div>
                        {
                            showDescription  ? <span className="single-task-desc">{task.description}</span>:''
                        }
                    </del>
                    <div onClick={() => { editData(task.id, 'mark_complete') }} className=" btn-no-bg btn-no-border d-inline"><i className="fas text-success fa-check-double"></i></div>
                </div>

            </div>
        )
    }

}

export default Task
