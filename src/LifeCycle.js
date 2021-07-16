import React, { useState, useEffect } from 'react'

const LifeCycle = () => {

    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    useEffect(() => {
        console.log('useEffect no dependency');
    })

    useEffect(() => {
        console.log('useEffect [] ');
    }, [])

    useEffect(() => {
        console.log('useEffect [counter] ');
    }, [counter])


    return (
        <div>
        </div>
    )
}

export default LifeCycle
