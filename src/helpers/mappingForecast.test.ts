import mappingForecast from './mappingForecast';

describe('Helper mappingForecast should convert weather data', () => {
    test('mappingForecast should take an object and return an typed forecast object', () => {
        const inputTodayForecast: any = {
            "weather": [{ "icon": "01n" }],
            "main": { "temp": 281.1, "feels_like": 279.76, },
            "wind": { "speed": 1.47, },
            "clouds": { "all": 10 },
            "name": "London",
        };
        const outputData = {
            temp: 8,
            feelsLike: 7,
            city: 'London',
            icon: '01n',
            windSpeed: 1,
            clouds: 10,
        };

        expect(mappingForecast<any>(inputTodayForecast)).toEqual(outputData);
    });
});