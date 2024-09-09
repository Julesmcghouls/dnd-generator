import axios from 'axios';

// Create an instance of axios with default settings
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Base URL for API requests
    headers: {
        'Content-Type': 'application/json',
    },
});

// Function to get a random backstory from the backend API
export const fetchBackstory = async () => {
    try {
        const response = await apiClient.get('/backstory');
        return response.data.backstory;
    } catch (error) {
        console.error('Error fetching backstory:', error);
        throw error;
    }
};

// Function to get a random quest from the backend API
export const fetchQuest = async () => {
    try {
        const response = await apiClient.get('/quest');
        return response.data.quest;
    } catch (error) {
        console.error('Error fetching quest:', error);
        throw error;
    }
};
