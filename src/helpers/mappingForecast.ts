import kelvinToCelsius from './kelvinToCelsius';

const mappingForecast = <T extends any>(forecast: any = {}): T => {
    return {
        temp: kelvinToCelsius(forecast.main?.temp || 0),
        feelsLike: kelvinToCelsius(forecast.main?.feels_like || 0),
        city: forecast.name || '',
        icon: forecast.weather?.[0]?.icon || '',
        windSpeed: Math.round(forecast.wind?.speed || 0),
        clouds: forecast.clouds?.all || 0,
    } as T;
};

export default mappingForecast;