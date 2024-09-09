import React, { useState } from 'react';
import { fetchBackstory } from '../services/apiService'; // Make sure this matches the export

const BackstoryGenerator = () => {
    const [backstory, setBackstory] = useState('');

    const generateBackstory = async () => {
        try {
            const fetchedBackstory = await fetchBackstory();
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
