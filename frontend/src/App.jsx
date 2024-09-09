import React from 'react';
import BackstoryGenerator from './components/BackstoryGenerator';
import QuestGenerator from './components/QuestGenerator';
import './styles/App.css';

// Main App component
const App = () => (
    <div className="App">
        <h1>Dungeons & Dragons Generator</h1>
        <BackstoryGenerator />
        <QuestGenerator />
    </div>
);

export default App;