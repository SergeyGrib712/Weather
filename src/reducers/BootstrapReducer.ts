import {
    BOOTSTRAP_DATA_FAIL,
    BOOTSTRAP_DATA_SUCCESS,
    TBootstrapData,
    TBootstrapDataDispatchTypes,
} from '../actions/BootstrapActionsTypes';

type TBootstrap = TBootstrapData | null;

const defaultState = null;

const bootstrapReducer = (
    state: TBootstrap = defaultState,
    action: TBootstrapDataDispatchTypes,
): TBootstrap => {
    switch (action.type) {
        case BOOTSTRAP_DATA_SUCCESS:
            return { ...action.payload };
        case BOOTSTRAP_DATA_FAIL:
        default:
            return state;
    }
}

export default bootstrapReducer;