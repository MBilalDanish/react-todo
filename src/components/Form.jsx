import React, { useContext, useState } from "react"
import { InformationContext } from "../contexts/InformationContext"

const Form = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    const [deadline, setDeadline] = useState('')
    const { editData } = useContext(InformationContext)
    const getPriority = (e) => {
        let index = ['high', 'significant', 'moderate', 'minor', 'low'].indexOf(e.id);
        setPriority(index + 1);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let id = Math.floor(Math.random() * 100000);
        editData({
            title: title,
            id: id,
            description: description,
            priority: priority,
            deadline: deadline,
            is_completed: false
        }, 'add');
    }
    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="deadline">Deadline</label>
                    <input type="text" className="form-control" id="deadline" onChange={(e) => { setDeadline(e.target.value) }} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Task Description</label>
                    <textarea className="form-control" id="description" rows="2" onChange={(e) => { setDescription(e.target.value) }} ></textarea>
                </div>
                <div className="form-group">
                    <input type="radio" name="priority" id="high" onChange={(e) => getPriority(e.target)} />
                    <label htmlFor="high">Very High</label>

                    <input type="radio" name="priority" id="significant" onChange={(e) => getPriority(e.target)} />
                    <label htmlFor="significant">Significant</label>

                    <input type="radio" name="priority" id="moderate" onChange={(e) => getPriority(e.target)} />
                    <label htmlFor="moderate">Moderate</label>

                    <input type="radio" name="priority" id="minor" onChange={(e) => getPriority(e.target)} />
                    <label htmlFor="minor">Minor</label>

                    <input type="radio" name="priority" id="low" onChange={(e) => getPriority(e.target)} />
                    <label htmlFor="low">Low</label>
                </div>
                <input type="submit" className="btn btn-custom full-width" value="Add" />
            </form>
        </div>
    )
}

export default Form
