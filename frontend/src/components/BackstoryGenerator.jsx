import React, { useState } from 'react';
import axios from 'axios';

// Component to generate and display a random backstory
const BackstoryGenerator = () => {
    const [backstory, setBackstory] = useState('');

    const generateBackstory = async () => {
        try {
            const response = await axios.get('/api/backstory');
            setBackstory(response.data.backstory);
        } catch (error) {
            console.error('Error fetching backstory:', error);
        }
    };

    return (
        <div>
            <button onClick={generateBackstory}>Generate Backstory</button>
            <p>{backstory}</p>
        </div>
    );
};

export default BackstoryGenerator;
