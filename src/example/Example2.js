import React, { useState, useEffect } from 'react'

const Example2 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
    }, [])

    return (
        <div>
            <h1>{windowWidth}</h1>
        </div>
    )
}

export default Example2
