import React from 'react';
import { AppContext } from '../context'

interface IResultsProps {
    love: string
}

const Results: React.FC<IResultsProps> = ({ love }) => {
    const { clear } = React.useContext(AppContext)

    return (
        <div className="results">
            <span>{`${love}%`}</span>
            <br />
            <button className="clear-btn" onClick={clear}>Clear</button>
        </div>
    );
}

export default Results;
