import React, { useState } from 'react';
import { fetchSaying } from '../services/apiService';

const SayingGenerator = () => {
    const [saying, setSaying] = useState('');

    const generateSaying = async () => {
        try {
            const fetchedSaying = await fetchSaying();
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
