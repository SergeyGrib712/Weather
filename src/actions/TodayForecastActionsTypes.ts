import { TWeatherApi } from "./BootstrapActionsTypes";

export const TODAY_FORECAST_SUCCESS = 'TODAY_FORECAST_SUCCESS';
export const TODAY_FORECAST_FAIL = 'TODAY_FORECAST_FAIL';

export interface ITodayForecast {
    temp: number,
    feelsLike: number,
    city: string,
    icon: string,
    windSpeed: number,
    clouds: number,
}

export interface ITodayForecastProps extends TWeatherApi {
    city: string,
}

export interface ITodayForecastSuccess {
    type: typeof TODAY_FORECAST_SUCCESS,
    payload: ITodayForecast,
}

export interface IWeatherForecastFail {
    type: typeof TODAY_FORECAST_FAIL
}

export type TTodayForecastDispatchTypes = ITodayForecastSuccess | IWeatherForecastFail;