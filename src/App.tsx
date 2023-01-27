import React, { useState } from 'react';
import './App.scss';
import { Button } from "./components/Button";

function App() {
    const [date, setDate] = useState<Date>(new Date());

    const handleRestart = () => {
        setDate(new Date());
        console.log(date);
    };

    return (
        <div className="App">
            <div className="header">
                <div>
                    <h1>Play 2048</h1>
                </div>
                <div>
                    <Button onClick={handleRestart}>Restart</Button>
                </div>
            </div>
        </div>
    );

}

export default App;
