import React, { FC } from 'react'
import { Button, Input } from '../common';

interface ISearchProps {
    city: string,
    setCity: (city: string) => void,
    handleSearch: () => void,
}

const Search: FC<ISearchProps> = ({ city, setCity, handleSearch }) => {
    return (
        <div className='search'>
            <Input
                value={city}
                onChange={setCity}
                placeholder='Search City'
                className='search__input'
                onEnter={handleSearch}
            />
            <Button
                text='Search'
                className='search__button'
                onClick={handleSearch}
            />
        </div>
    )
}

export default Search
