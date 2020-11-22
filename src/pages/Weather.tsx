import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { TBootstrapData } from '../actions/BootstrapActionsTypes';
import GetTodayForecast from '../actions/TodayForecastActions';
import { QueryHistory, Search, TodayForecast } from '../components/weather';
import { TRootReducer } from '../Store';

const Weather: FC = () => {
    const dispatch = useDispatch();
    const {
        bootstrapData,
        todayForecast,
    } = useSelector((state: TRootReducer) => state);
    const { weatherApi, defaultCity } = bootstrapData as TBootstrapData;
    
    const [city, setCity] = useState<string>(defaultCity);
    const [requestList, setRequestList] = useState<string[]>([]);

    const forecastRequest = (city: string) => dispatch(GetTodayForecast(city, weatherApi));
    const handleSearch = () => {
        const newRequestList = [city, ...requestList].slice(0, 10);

        setRequestList(newRequestList);
        forecastRequest(city);
    };

    useEffect(() => {
        forecastRequest(city);
    }, [dispatch]);

    return (
        <div className='weather'>
            <div className='weather-sidebar'>
                <Search
                    setCity={setCity}
                    city={city}
                    handleSearch={handleSearch} />
                <QueryHistory
                    requestList={requestList}
                    forecastRequest={forecastRequest}
                    setCity={setCity} />
                <TodayForecast
                    iconUrl={bootstrapData?.iconUrl || ''}
                    todayForecast={todayForecast} />
            </div>
            <div className='weather-week-forecast'>
                The full forecast is temporarily unavailable
            </div>
        </div>
    )
}

export default Weather;