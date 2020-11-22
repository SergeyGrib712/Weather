import { Dispatch } from 'redux';
import {
    LOADER_HIDE,
    LOADER_SHOW,
    TLoaderDispatchTypes,
} from './LoadingActionsTypes';

const Loader = (status: boolean) => (
    dispatch: Dispatch<TLoaderDispatchTypes>
) => {
    dispatch({
        type: status ? LOADER_SHOW : LOADER_HIDE,
    });
}

export default Loader;