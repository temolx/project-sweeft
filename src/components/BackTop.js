import React from 'react'
import backTop from '../images/backTop.png'

function BackTop() {
    
    // Moves user to the very top of the page
    const backToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <div>
            <img src={backTop} alt="arrow pointing upwards" className="top-button" onClick={backToTop} />
        </div>
    )
}

export default BackTop
