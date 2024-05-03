import axios from 'axios';

export default async function performSignup(formData) {
        const res = await axios.post('/signup', {
            name: formData.name,
            dob: formData.dob,
            email: formData.email,
            password: formData.password,
        },
        {
            headers: {
              "Content-Type": "application/json"
            }
        });
        const data = res.data;
        localStorage.setItem("userData",JSON.stringify(data))
        return data;
}