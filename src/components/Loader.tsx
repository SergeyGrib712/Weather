import React, { FC } from 'react';
import { ReactComponent as LoaderSVG } from '../assets/images/loader.svg';

interface ILoaderProps {
    status: boolean
};

const Loader: FC<ILoaderProps> = ({ status }) => {
    if (!status) return null;

    return (
        <div className='loader'>
            <LoaderSVG />
        </div>
    );
};

export default Loader;
