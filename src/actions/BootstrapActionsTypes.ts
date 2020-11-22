export const BOOTSTRAP_DATA_SUCCESS = 'BOOTSTRAP_DATA_SUCCESS';
export const BOOTSTRAP_DATA_FAIL = 'BOOTSTRAP_DATA_FAIL';

export interface TWeatherApi {
    domain: string,
    key: string,
}

export interface TBootstrapData {
    weatherApi: TWeatherApi
    iconUrl: string,
    defaultCity: string,
}

export interface IBootstrapDataSuccess {
    type: typeof BOOTSTRAP_DATA_SUCCESS,
    payload: TBootstrapData
}

export interface IBootstrapDataFail {
    type: typeof BOOTSTRAP_DATA_FAIL
}

export type TBootstrapDataDispatchTypes = IBootstrapDataSuccess | IBootstrapDataFail;