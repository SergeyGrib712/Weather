import Axios from 'axios';
import { Dispatch } from 'redux';
import mappingForecast from '../helpers/mappingForecast';
import { TWeatherApi } from './BootstrapActionsTypes';
import {
    LOADER_HIDE,
    LOADER_SHOW,
    TLoaderDispatchTypes,
} from './LoadingActionsTypes';
import {
    ITodayForecast,
    TODAY_FORECAST_FAIL,
    TODAY_FORECAST_SUCCESS,
    TTodayForecastDispatchTypes,
} from './TodayForecastActionsTypes';

const GetTodayForecast = (city: string, apiProps: TWeatherApi) => async (
    dispatch: Dispatch<TTodayForecastDispatchTypes | TLoaderDispatchTypes>
) => {
    dispatch({ type: LOADER_SHOW });

    await Axios.get(`${apiProps.domain}?q=${city}&appid=${apiProps.key}`)
        .then(({ data }) => {
            const forecast = mappingForecast<ITodayForecast>(data);

            dispatch({
                type: TODAY_FORECAST_SUCCESS,
                payload: forecast,
            });
        }).catch(error => {
            console.error(error);

            dispatch({ type: TODAY_FORECAST_FAIL });
        }).finally(() => {
            dispatch({ type: LOADER_HIDE });
        });
}

export default GetTodayForecast;