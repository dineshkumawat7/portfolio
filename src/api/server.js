export const apiRequest = async (endpoint, options = {}) => {
    const BASE_URL = 'http://localhost:8080';

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
    return response.json();
};