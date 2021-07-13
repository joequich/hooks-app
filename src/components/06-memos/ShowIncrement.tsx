import React from 'react';

export const ShowIncrement = React.memo(({ increment }: { increment: (number: number) => void}) => {
    console.log('I regenerated');
    return (
        <button 
            className="btn btn-primary" 
            onClick={ () => {
                increment(5);
            }}
        >
            Increment
        </button>
    )
})
