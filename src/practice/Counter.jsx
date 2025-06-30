import {useState} from "react";

const Counter = () => {

    let [count, setCount] = useState(0)

    const add = () => {
        setCount(count++)
    }
    const subtract = () => {
        setCount(count--)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <>
            <div className="container">
                <h1 className="text-primary">Counter Game</h1>
                <h1><p><acronym>{count}</acronym></p></h1>
                <button className="btn btn-primary" onClick={add}> Add</button>
                <button className="btn btn-secondary" onClick={subtract}> SUBTRACT</button>
                <button className="btn btn-danger" onClick={reset}> RESET</button>
            </div>

        </>
    )
}

export default Counter;