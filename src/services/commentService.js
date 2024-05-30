import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchCommentsByPostId = async (postId) => {
    try {
        const response = await axios.get(`${BASE_URL}/comments?postId=${postId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};


