export default function Slots({ val1, val2, val3 }) {
    const isWinner = val1 === val2 && val1 === val3
    const random = Math.floor(Math.random() * 4)
    const fruits = ['🍒', '🍉', '🍺', '🍆']
    return (
        <div>
            <h1>{fruits[random]} {fruits[random]} {fruits[random]}</h1>
            <h2 style={{ color: isWinner ? 'green' : 'red' }}>{isWinner ? 'Milje pivi!' : 'You lose!'}</h2>
            {isWinner && <h3>Congratz!</h3>}
        </div >
    )
}