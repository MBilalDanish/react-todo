import { useState } from "react";

const Story = ({ item }) => {
    const [expanded, setExpended] = useState(false);
    return (
        <div>
            <div className="single-story ">
                <div className="d-flex justify-content-between">
                    <a target="_blank" href={item.url} rel="noreferrer">
                        <h3 className={`${expanded ? '':'font-size-1rem'}`}>Title: {item.title} </h3>
                    </a>
                    <span className="btn" onClick={() => setExpended(!expanded)}><i className="fas fa-chevron-down"></i></span>
                </div>
                {
                    expanded ? <div> <p>Author: {item.by}</p>
                        <h5>Score: {item.score} </h5>
                        <p>Type:{item.type} </p></div> : ''
                }

            </div>
        </div>
    )
}

export default Story
