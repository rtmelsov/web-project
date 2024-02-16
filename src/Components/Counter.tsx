import { useState } from 'react'
import './counter-style.scss'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={
                () => {
                    const count = counter + 1
                    setCounter(count)
                }
            }>count</button>
        </div>
    )
}