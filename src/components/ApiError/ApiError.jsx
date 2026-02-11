import React from 'react';
import './ApiError.css';

function ApiError({retry=null}) {

    return (
        <div className="container__api-error">
            <img className="error-icon" src="/icon-error.svg" alt="error icon" />
            <h2>Something went wrong</h2>
            <p>We couldn't connect to the server (API error). Please try again in a few monents.</p>
            <button className="icon-btn" onClick={retry}>
                <img src="/icon-retry.svg" alt="error icon" />
                Retry
            </button>
        </div>
    )
}

export default ApiError;