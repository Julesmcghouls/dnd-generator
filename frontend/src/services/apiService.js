import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000/api', // Correct base URL for your backend server
    headers: {
        'Content-Type': 'application/json',
    },
});

// Fetch a random saying
export const fetchSaying = async () => {
    try {
        const response = await apiClient.get('/options/sayings'); // Correct path
        return response.data.saying;
    } catch (error) {
        console.error('Error fetching saying:', error);
        throw error;
    }
};

// Fetch a random backstory
export const fetchBackstory = async () => {
    try {
        const response = await apiClient.get('/backstory');
        return response.data.backstory;
    } catch (error) {
        console.error('Error fetching backstory:', error);
        throw error;
    }
};

// Fetch a random quest
export const fetchQuest = async () => {
    try {
        const response = await apiClient.get('/quest');
        return response.data.quest;
    } catch (error) {
        console.error('Error fetching quest:', error);
        throw error;
    }
};


// // Fetch a random task
// export const fetchTask = async () => {
//     try {
//         const response = await apiClient.get('/options/tasks');
//         return response.data.task;
//     } catch (error) {
//         console.error('Error fetching task:', error);
//         throw error;
//     }
// };

// // Fetch a random trick
// export const fetchTrick = async () => {
//     try {
//         const response = await apiClient.get('/options/tricks');
//         return response.data.trick;
//     } catch (error) {
//         console.error('Error fetching trick:', error);
//         throw error;
//     }
// };

// // Fetch a random ailment
// export const fetchAilment = async () => {
//     try {
//         const response = await apiClient.get('/options/ailments');
//         return response.data.ailment;
//     } catch (error) {
//         console.error('Error fetching ailment:', error);
//         throw error;
//     }
// };

// // Fetch a random reward
// export const fetchReward = async () => {
//     try {
//         const response = await apiClient.get('/options/rewards');
//         return response.data.reward;
//     } catch (error) {
//         console.error('Error fetching reward:', error);
//         throw error;
//     }
// };

// // Fetch a random encounter
// export const fetchEncounter = async () => {
//     try {
//         const response = await apiClient.get('/options/encounters');
//         return response.data.encounter;
//     } catch (error) {
//         console.error('Error fetching encounter:', error);
//         throw error;
//     }
// };
