import React, { useContext, useState } from "react"
import { InformationContext } from "../contexts/InformationContext"
import Swal from "sweetalert2";
const Task = ({ task }) => {
    let [showDescription, setShowDescription] = useState(false);
    const { editData } = useContext(InformationContext)
    const deleteTask = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    task.title + ' is Deleted',
                    'success'
                )
                editData(task.id, 'remove');
            }
        });
    }
    return (
        <div className="single-task" >
            <div className="d-flex justify-content-between">
                {
                    task.is_completed ? <del><span className="single-task-title">{task.title}</span></del> : <span className="single-task-title">{task.title}</span>
                }
                <p className={`font-weight-bolder ${task.priority === 1 ? "p1" : task.priority === 2 ? "p2" : task.priority === 3 ? "p3" : task.priority === 4 ? "p4" : task.priority === 5 ? "p5" : ""}   `}>P{task.priority}</p>
                <div>
                    <div onClick={() => { setShowDescription(!showDescription) }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas fa-angle-down"></i></div>
                    {
                        task.is_completed ? <div onClick={() => { deleteTask(task.id) }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas text-danger fa-trash-alt"></i></div> : <div onClick={() => { editData(task.id, 'mark_complete') }} className="cursor-pointer btn-no-bg btn-no-border d-inline btn-lg"><i className="fas text-success fa-check-double"></i></div>
                    }
                </div>
            </div>
            {
                showDescription ? <span className="single-task-desc">{task.description} <br /><span>{task.deadline}</span></span> : ''
            }
        </div>
    )
    // }

}

export default Task
