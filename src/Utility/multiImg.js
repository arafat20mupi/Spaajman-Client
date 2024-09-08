import axios from "axios";

export const imageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_URL}`, formData);
      return response.data.data.url;  // Returning the URL of the uploaded image
    } catch (error) {
      console.error('Image upload failed:', error);
      throw new Error('Image upload failed');
    }
  };
  