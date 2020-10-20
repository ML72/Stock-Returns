import React from 'react';
import './App.css';
import Graph from './components/Graph';
import Description from './components/Description';

function App() {
    return (
        <section className="App">
            <section className="container">
                <h1>TongLeC Stock Distribution Simulation</h1>
                <Graph />
                <Description />
            </section>
        </section>
    );
}

export default App;
