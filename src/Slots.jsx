import { useMemo, useState } from 'react';

export default function Slots({ fruits }) {
    const [val1, setVal1] = useState(fruits[Math.floor(Math.random() * 3)]);
    const [val2, setVal2] = useState(fruits[Math.floor(Math.random() * 3)]);
    const [val3, setVal3] = useState(fruits[Math.floor(Math.random() * 3)]);
    const [didSpin, setDidSpin] = useState(false);

    const isWinner = useMemo(() => {
        if (didSpin) {
            return val1 === val2 && val1 === val3;
        }
        return false;
    }, [didSpin, val1, val2, val3]);

    const spin = () => {
        setDidSpin(true);
        setVal1(fruits[Math.floor(Math.random() * 3)]);
        setVal2(fruits[Math.floor(Math.random() * 3)]);
        setVal3(fruits[Math.floor(Math.random() * 3)]);
    };

    return (
        <div>
            <h1>Slot machine</h1>
            <div className="slot-machine">
                <span key="1">{val1}</span>
                <span key="2">{val2}</span>
                <span key="3">{val3}</span>
            </div>
            <div className="result">
                {didSpin && (
                    <>
                        <h2 style={{ color: isWinner ? 'green' : 'red' }}>
                            {isWinner ? 'You are unstoppable!' : 'You lose!'}
                        </h2>
                        {isWinner && <h3>Congratz!</h3>}
                    </>
                )}
            </div>
            <button onClick={spin} disabled={isWinner}>Spin!</button>
            <br />
            {isWinner ? <button onClick={() => window.location.reload()}>{isWinner ? 'Play again' : ''}</button> : ''}


        </div>
    );
}
