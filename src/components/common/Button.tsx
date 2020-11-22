import React, { FC } from 'react'

interface IButtonProps {
    text: string,
    className: string,
    onClick: () => void
}

const Button: FC<Partial<IButtonProps>> = ({
    text = '',
    className = '',
    onClick = () => { },
}) => {
    return (
        <button
            className={`button ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
