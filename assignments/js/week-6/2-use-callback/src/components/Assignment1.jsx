import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here
    const handleIncrement=useCallback(()=> {
        // setCount(count +1)
        setCount(function(currentcount){
            return currentcount+1
        })

    },[])

    const handleDecrement= useCallback(()=> {
        // setCount(count -1)
        setCount(currentcount => currentcount-1)
        
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /> <hr />
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
}

const CounterButtons =  memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));
