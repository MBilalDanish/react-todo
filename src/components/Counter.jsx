import { useEffect, useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        document.title = count;
    });
    return (
        <div>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <div className="btn text-primary" onClick={()=>setCount(count+1)}><i className="fas fa-2x fa-arrow-up"></i></div>
            <div className="btn text-primary" onClick={()=>setCount(count-1)}><i className="fas fa-2x fa-arrow-down"></i></div>
        </div>
    )
}

export default Counter
