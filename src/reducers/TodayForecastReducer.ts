import {
    ITodayForecast,
    TODAY_FORECAST_FAIL,
    TODAY_FORECAST_SUCCESS,
    TTodayForecastDispatchTypes,
} from '../actions/TodayForecastActionsTypes';

const todayForecastReducer = (
    state: ITodayForecast | null = null,
    action: TTodayForecastDispatchTypes,
): ITodayForecast | null => {
    switch (action.type) {
        case TODAY_FORECAST_SUCCESS:
            return { ...action.payload };
        case TODAY_FORECAST_FAIL:
        default:
            return state;
    }
}

export default todayForecastReducer;