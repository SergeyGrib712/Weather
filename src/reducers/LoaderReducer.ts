import {
    LOADER_SHOW,
    LOADER_HIDE,
    TLoaderDispatchTypes,
} from '../actions/LoadingActionsTypes';

interface IDefaultState {
    status: boolean,
    counter: number,
}

const defaultState = { status: true, counter: 1 };

const loaderReducer = (
    state: IDefaultState = defaultState,
    action: TLoaderDispatchTypes,
): IDefaultState => {
    let { counter } = state;

    switch (action.type) {
        case LOADER_SHOW:
            return {
                counter: ++counter,
                status: true,
            };
        case LOADER_HIDE:
            return {
                counter: --counter,
                status: counter > 0,
            };
        default:
            return state;
    }
}

export default loaderReducer;