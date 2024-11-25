import React from "react";

let done = false;

function strike() {
    done = true;
}

function unStrike() {
    done = false;
}

function App() {
    return (
        <div>
            <p style={done ? { textDecoration: "line-through" } : null}>Buy Food</p>
            <button onClick={strike}>Change to strike through</button>
            <button onClick={unStrike}>Change back</button>
        </div>
    )
}

export default App
