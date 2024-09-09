const apiClient = axios.create({
    baseURL: 'http://localhost:3008/api', // Ensure this matches your backend port and route
    headers: {
        'Content-Type': 'application/json',
    },
});
