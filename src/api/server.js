export const apiRequest = async (endpoint, options = {}) => {
    const BASE_URL = 'https://portfolio-backend-mgvc.onrender.com';

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    });
    return response.json();
};