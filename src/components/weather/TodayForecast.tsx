import React, { FC } from 'react'
import { ITodayForecast } from '../../actions/TodayForecastActionsTypes';

interface ITodayForecastProps {
    todayForecast: ITodayForecast | null
    iconUrl: string,
}

const TodayForecast: FC<ITodayForecastProps> = ({ todayForecast, iconUrl }) => {
    if (!todayForecast)
        return <div className='today-forecast__absent'>Forecast is absent</div>;

    const forecast = todayForecast as ITodayForecast;

    return (
        <div className='today-forecast'>
            <div className='today-forecast__common'>
                <img
                    src={`${iconUrl}${forecast.icon}@2x.png`}
                    className='today-forecast__common-icon'
                    alt='' />
                <div className='today-forecast-row'>
                    {forecast.city}
                    <span className='today-forecast__common-temp'>
                        {forecast.temp}°C
                        </span>
                </div>
            </div>
            <div className='today-forecast__info'>
                <div className='today-forecast__info-item'>
                    Feels like: <span>{forecast.feelsLike}°C</span>
                </div>
                <div className='today-forecast__info-item'>
                    Wind speed: <span>{forecast.windSpeed} m/sec</span>
                </div>
                <div className='today-forecast__info-item'>
                    Clouds: <span>{forecast.clouds}%</span>
                </div>
            </div>
        </div>
    )
}

export default TodayForecast;
