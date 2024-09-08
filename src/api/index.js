import instanceAxios from "../axios";


class Request {
    async fetchNew(name, surname, age, email, password, endpoint) {
        try {
            const response = await instanceAxios.post(`${endpoint}`, {
                name,
                surname,
                age,
                email,
                password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
}
export default new Request();