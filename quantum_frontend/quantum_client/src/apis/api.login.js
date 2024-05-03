import axios from 'axios';

export default async function performLogin(email, password) {
    try {
        const res = await axios.post('/signin', {
            email,
            password
        }, {
            headers: {
              "Content-Type": "application/json"
            }
        });
        const data = res.data;
        localStorage.setItem("userData",JSON.stringify(data))
        return data;
    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}