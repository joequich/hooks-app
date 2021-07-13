import { useMemo } from 'react';
import { useState } from 'react';
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small></h3>
            <hr />
            <p>{heavyProcessMemo}</p>
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button 
                className="btn btn-outline-primary ms-3" 
                onClick={ () => {
                    setShow(!show);
                }}
            >
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
