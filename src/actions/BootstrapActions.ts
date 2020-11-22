import Axios from 'axios';
import { Dispatch } from 'redux';
import {
    TBootstrapDataDispatchTypes,
    BOOTSTRAP_DATA_FAIL,
    BOOTSTRAP_DATA_SUCCESS,
} from './BootstrapActionsTypes';
import {
    LOADER_HIDE,
    TLoaderDispatchTypes,
} from './LoadingActionsTypes';

const GetBootstrapData = () => async (
    dispatch: Dispatch<TBootstrapDataDispatchTypes | TLoaderDispatchTypes>
) => {
    await Axios.get('/bootstrap.json')
        .then(({ data }) => {
            dispatch({
                type: BOOTSTRAP_DATA_SUCCESS,
                payload: data,
            });
        }).catch(error => {
            console.error(error);

            dispatch({ type: BOOTSTRAP_DATA_FAIL });
        }).finally(() => {
            dispatch({ type: LOADER_HIDE });
        });
}

export default GetBootstrapData;