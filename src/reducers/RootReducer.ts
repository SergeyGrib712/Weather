import { combineReducers } from 'redux';
import bootstrapReducer from './BootstrapReducer';
import loaderReducer from './LoaderReducer';
import todayForecastReducer from './TodayForecastReducer';

const RootReducer = combineReducers({
    loader: loaderReducer,
    bootstrapData: bootstrapReducer,
    todayForecast: todayForecastReducer,
});

export default RootReducer;