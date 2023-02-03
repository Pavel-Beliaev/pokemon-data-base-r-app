import React from 'react';
import './loaderdefault.css'

const LoaderDefault = () => {
    return (
        <div className='loader_wrapper'>
            <div className='loader'>
                <div className='loader_block'>
                    <div className='loader_center'>
                        <div className='loader_dot'></div>
                    </div>
                </div>
                <div className='half right'>
                    <div className='loader_center'>
                        <div className='loader_dot'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoaderDefault;