import React from 'react';
import LoadingAnimation from '../animations/loading.svg'


function Loading() {

    return (
        <div>
            <img src={LoadingAnimation} alt="loading..." />
        </div>
    );
}

export default Loading;
