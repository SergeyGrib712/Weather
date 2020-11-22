import React, { FC, KeyboardEvent } from 'react'

export interface IInputProps {
    onChange: (value: string) => void
    onEnter: () => void
    className: string,
    placeholder: string
    value: string,
}

const Input: FC<Partial<IInputProps>> = ({
    className = '',
    placeholder = '',
    value = '',
    onChange = () => { },
    onEnter = () => { },
}) => {
    const handleKeyDown = (
        { key }: KeyboardEvent<HTMLInputElement>
    ) => {
        if (key === 'Enter') onEnter();
    }

    return (
        <input
            onChange={({ target: { value } }) => onChange(value)}
            placeholder={placeholder}
            value={value}
            className={`input ${className}`}
            onKeyDown={handleKeyDown}
        />
    )
}

export default Input;
