import React from 'react'

export const Child = React.memo(({number, increment}: { number: number, increment: (num: number) => void }) => {
    console.log('Child render');
    return (
        <button 
            className="btn btn-primary me-3"
            onClick={() => increment(number)}
        >
            {number}
        </button>
    )
})
