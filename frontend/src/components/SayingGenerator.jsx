import React, { useState } from 'react';
import { fetchSaying } from '../services/apiService'; // Import the API service function

const SayingGenerator = () => {
    const [saying, setSaying] = useState('');

    const generateSaying = async () => {
        try {
            const fetchedSaying = await fetchSaying(); // Call the API service function
            setSaying(fetchedSaying);
        } catch (error) {
            console.error('Error fetching saying:', error);
        }
    };

    return (
        <div>
            <button onClick={generateSaying}>Generate Saying</button>
            <p>{saying}</p>
        </div>
    );
};

export default SayingGenerator;
