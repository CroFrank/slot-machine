import { useState } from "react"

export default function Slots({ fruits }) {
    const val1 = fruits[Math.floor(Math.random() * 3)]
    const val2 = fruits[Math.floor(Math.random() * 3)]
    const val3 = fruits[Math.floor(Math.random() * 3)]
    const isWinner = val1 === val2 && val1 === val3
    const [value, setValue] = useState('a')
    const spin = () => {
        setValue(Math.random())
        console.log(value)
    }
    return (
        <div>
            <h1 className="slot-machine">
                <span>{val1}</span>
                <span>{val2}</span>
                <span>{val3}</span>
            </h1>
            <h2 style={{ color: isWinner ? 'green' : 'red' }}>{isWinner ? 'Milje pivi!' : 'You lose!'}</h2>
            {isWinner && <h3>Congratz!</h3>}
            <button onClick={spin}>
                Spin!
            </button>
        </div >
    )
}