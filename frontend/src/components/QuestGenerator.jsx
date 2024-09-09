import React, { useState } from 'react';
import axios from 'axios';

// Component to generate and display a random quest
const QuestGenerator = () => {
    const [quest, setQuest] = useState('');

    const generateQuest = async () => {
        try {
            const response = await axios.get('/api/quest');
            setQuest(response.data.quest);
        } catch (error) {
            console.error('Error fetching quest:', error);
        }
    };

    return (
        <div>
            <button onClick={generateQuest}>Generate Quest</button>
            <p>{quest}</p>
        </div>
    );
};

export default QuestGenerator;
