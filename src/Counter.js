import { useState } from "react"
export const Counter = () => {
    const [count, setCount] = useState(0)
    const handlePlusClick = () => {
        setCount(count + 1)
    }
    const handleMinusClick = () => {
        setCount(count - 1)
    }
    return <div>
        <div>current value is {count}</div>
        <button onClick={handlePlusClick} >+</button>
        <button onClick={handleMinusClick} >-</button>
    </div>
}