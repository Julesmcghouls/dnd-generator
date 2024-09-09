import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3008/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchBackstory = async () => {
    try {
        const response = await apiClient.get('/backstory');
        return response.data.backstory;
    } catch (error) {
        console.error('Error fetching backstory:', error);
        throw error;
    }
};

export const fetchQuest = async () => {
    try {
        const response = await apiClient.get('/quest');
        return response.data.quest;
    } catch (error) {
        console.error('Error fetching quest:', error);
        throw error;
    }
};
