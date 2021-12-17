import React from 'react'
import sleepingDog from '../images/sleepingDog.png'

function NotFound() {
    return (
        <div className="errorPage">
            <h1 className="errorMessage">Page not found...</h1>
            <img src={sleepingDog} className="sleepingDog" />
        </div>
    )
}

export default NotFound
