import React, { useState } from 'react';
import { fetchBackstory } from '../services/apiService'; // Import the API service function

const BackstoryGenerator = () => {
    const [backstory, setBackstory] = useState('');

    const generateBackstory = async () => {
        try {
            const fetchedBackstory = await fetchBackstory(); // Call the API service function
            setBackstory(fetchedBackstory);
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
