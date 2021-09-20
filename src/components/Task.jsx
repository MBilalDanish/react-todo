import React, { useContext, useState } from "react"
import { InformationContext } from "../contexts/InformationContext"
const Task = ({ task }) => {
    let [showDescription, setShowDescription] = useState(false);
    const { editData } = useContext(InformationContext)
    return (
        <div className="single-task" >
            <div className="d-flex justify-content-between">
                {
                    task.is_completed ? <del><span className="single-task-title">{task.title}</span></del> : <span className="single-task-title">{task.title}</span>
                }
                <p className={`font-weight-bolder ${task.priority==1 ? "p1":task.priority==2 ? "p2":task.priority==3 ? "p3":task.priority==4 ? "p4":task.priority==5 ? "p5":""}   `}>P{task.priority}</p>
                <div>
                    <div onClick={() => { setShowDescription(!showDescription) }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas fa-angle-down"></i></div>
                    {
                        task.is_completed ? <div onClick={() => { editData(task.id, 'remove') }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas text-danger fa-trash-alt"></i></div> : <div onClick={() => { editData(task.id, 'mark_complete') }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas text-success fa-check-double"></i></div>
                    }
                </div>
            </div>
            {
                showDescription ? <span className="single-task-desc">{task.description}</span> : ''
            }

        </div>
    )
    // }

}

export default Task
