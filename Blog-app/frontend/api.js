const API_BASE_URL = 'http://localhost:5000/posts';

export const api = {
  fetchPosts: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  createPost: async (post) => {
    try {
      const response = await axios.post(API_BASE_URL, post);
      return response.data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  },
};