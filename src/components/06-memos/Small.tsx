import React from 'react'

interface IProps{
    value: number;
}

export const Small = React.memo(({ value }: IProps) => {
    console.log('I called again :(');
    return (
        <small>{value}</small>
    )
})
