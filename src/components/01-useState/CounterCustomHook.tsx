import { useCounter } from '../../hooks/useCounter';
import './counter.css';

export const CounterCustomHook = () => {
    const { counter, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>Counter with Hooks: {counter}</h1>
            <hr />
            <button className="btn" onClick={ () => increment(1) }>+1</button>
            <button className="btn" onClick={ reset }>Reset</button>
            <button className="btn" onClick={ () => decrement(1) }>-1</button>
        </>
    );
};