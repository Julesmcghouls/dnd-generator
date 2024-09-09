import axios from 'axios';

// Create an Axios instance with default settings
const apiClient = axios.create({
    baseURL: 'http://localhost:3008/api', // Update to the new port
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
