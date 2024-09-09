import React, { useState } from 'react';
import { fetchQuest } from '../services/apiService'; // Import the API service function

const QuestGenerator = () => {
    const [quest, setQuest] = useState('');

    const generateQuest = async () => {
        try {
            const fetchedQuest = await fetchQuest(); // Call the API service function
            setQuest(fetchedQuest);
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
