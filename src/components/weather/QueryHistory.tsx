import React, { FC, useState } from 'react'
import When from '../When';

interface IQueryHistoryProps {
    requestList: string[],
    forecastRequest: (city: string) => void,
    setCity: (city: string) => void,
}

const QueryHistory: FC<IQueryHistoryProps> = ({
    requestList,
    forecastRequest,
    setCity,
}) => {
    const [isListShown, toggleList] = useState(false);
    const repeatQuery = (city: string) => {
        setCity(city);
        forecastRequest(city);
    };

    return (
        <div className='query-history'>
            <div
                className='query-history__switcher'
                onClick={() => toggleList(!isListShown)}>
                Query history
            </div>
            <ul className={`query-history__list ${isListShown ? '--show' : ''}`}>
                <When condition={requestList.length === 0}>
                    <div className='query-history__list-empty'>
                        Query history is empty
                    </div>
                </When>
                {requestList.map((query: string) => (
                    <li
                        onClick={() => repeatQuery(query)}
                    >{query}</li>
                ))}
            </ul>
        </div>
    )
};

export default QueryHistory;
