import React from 'react'
import { useState } from 'react';
import { Child } from './Child'

import '../02-useEffect/effects.css';
import { useCallback } from 'react';

export const Father = () => {
    const numbers = [2,4,6,8,10];
    const [value, setValue] = useState(0);

    const increment = useCallback((num: number) => {
        setValue(value => value + num);
    }, [setValue]);

    return (
        <div>
            <h1>Father</h1>
            <p>Total: {value}</p>
            <hr />
            {
                numbers.map(n => {
                    return (
                        <Child 
                            key={n}
                            number={n}
                            increment={increment}
                        />
                    )
                })
            }
        </div>
    )
}
