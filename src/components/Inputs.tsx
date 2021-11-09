import React from 'react';
import { AppContext } from '../context'


function Inputs() {
    const [name1, setName1] = React.useState("")
    const [name2, setName2] = React.useState("")
    const { calculateLove } = React.useContext(AppContext)

    const onSubmit = () => {
        calculateLove(name1, name2)
    }

    return (
        <>
            <div className="text-inputs">
                <input type="text" value={name1} onChange={(e) => setName1(e.target.value)} />
                <span>Loves</span>
                <input type="text" value={name2} onChange={(e) => setName2(e.target.value)} />
            </div>
            <button className="calculate-btn" disabled={!name1 || !name2} onClick={onSubmit}>Calculate</button>
        </>
    );
}

export default Inputs;
