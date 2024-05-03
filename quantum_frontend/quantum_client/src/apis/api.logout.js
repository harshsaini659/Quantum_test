import axios from 'axios';

export default async function logout() {
  try {
    const response = await axios.get('/logout');
    localStorage.clear()
    return response.data.message; 
  } catch (error) {
    console.error(error);
  }
}