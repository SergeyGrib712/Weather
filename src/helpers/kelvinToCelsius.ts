const absoluteZero = 273.15;

const kelvinToCelsius = (kelvinDeg: number): number => (
    Math.round(kelvinDeg - absoluteZero)
);

export default kelvinToCelsius;