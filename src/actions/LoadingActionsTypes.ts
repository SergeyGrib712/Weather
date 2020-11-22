export const LOADER_SHOW = 'LOADER_SHOW';
export const LOADER_HIDE = 'LOADER_HIDE';

export interface ILoaderShow {
    type: typeof LOADER_SHOW,
}

export interface ILoaderHide {
    type: typeof LOADER_HIDE,
}

export type TLoaderDispatchTypes = ILoaderShow | ILoaderHide;