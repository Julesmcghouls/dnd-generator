import React from 'react';
import BackstoryGenerator from './components/BackstoryGenerator';
import QuestGenerator from './components/QuestGenerator';
import SayingGenerator from './components/SayingGenerator';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Dungeons & Dragons Generator</h1>
            <BackstoryGenerator />
            <QuestGenerator />
            <SayingGenerator />
        </div>
    );
};

export default App;
