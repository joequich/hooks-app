import { useState, useRef, useLayoutEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import './layout.css'

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = data![0] || {};

    const pTag = useRef<HTMLParagraphElement>(null);
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(() => pTag.current?.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p ref={pTag} className="mb-0">{quote}</p>
                    </blockquote>
                </figure>
                <pre>{ JSON.stringify(boxSize, null, 3) }</pre>
            <div className="text-end">
                <button className="btn btn-primary text-end" onClick={ increment }>Next quote</button>
            </div>
        </div>
    )
}
