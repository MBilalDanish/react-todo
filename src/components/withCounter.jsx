import { useState } from "react";
const withCounter = (WrappedComponent) => {
        const WithCounter = () => {
            const [count, setCount] = useState(0);
            const incrementCount =() => {
                setCount(count+1);
            }
            return (
                <WrappedComponent count={count} incrementCount={incrementCount} />
            )
        }
        return WithCounter;
}

export default withCounter;
