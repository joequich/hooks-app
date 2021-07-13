import { useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';
import { useCallback } from 'react';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const increment = useCallback((num) => {
        setCounter(counter => counter + num);
    }, [setCounter]);

    useEffect(() => {
        // ???
    }, [increment])

    return (
        <div>
            <h1>useCallback Hook</h1>
            <h3>Counter: {counter}</h3>
            <hr />
            <ShowIncrement increment={increment}/>
        </div>
    )
}
