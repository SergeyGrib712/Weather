import kelvinToCelsius from './kelvinToCelsius';

describe('Helper kelvinToCelsius should convert Kelvin degree to Celsius degree', () => {
    test('kelvinToCelsius should take a positive number and return an integer number', () => {
        const inputValue = 290.15;
        const outputValue = 17;

        expect(kelvinToCelsius(inputValue)).toBe(outputValue);
    });
});