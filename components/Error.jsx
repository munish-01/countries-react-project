import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    return (
        <>
            <div className="error-container">
                <h1>Something went wrong!</h1>
                <p>{error.status}</p>
                <p>{error.statusText}</p>
            </div>
        </>
    )
}

export default Error