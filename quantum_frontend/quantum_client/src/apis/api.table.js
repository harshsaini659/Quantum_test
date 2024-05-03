import axios from 'axios';

export default async function getTableData() {
        const res = await axios.get('/table', {
            headers: {
              "Content-Type": "application/json"
            }
        });
        if(res.status !== 200) {
            const error = new Error(res.error);
            throw error;
        }
        const data = res.data;
        return data;
}