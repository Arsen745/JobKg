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

    async fetchProfile(endpoint, id) {
        const response = await instanceAxios.get(`${endpoint}/${id}`)
        return response.data
    }
    async fetchLoginEmploye(endpoint, email, password) {
        const response = await instanceAxios.get(`${endpoint}/?password=${password}&email=${email}`)
        return response.data
    };
    async fetchResume(name, surname, email, adress, cityborn, age, svera, education, opyt, salary, phonenumber, trebovanya, myself) {
        try {
            const response = await instanceAxios.post(`${myself}`, {
                name,
                surname,
                email,
                adress,
                cityborn,
                age,
                svera,
                education,
                opyt,
                salary,
                phonenumber,
                trebovanya,
                myself
            });
            return response.data
        }
        catch (error) {
            console.error('Error posting data:', error);
            throw error;
        }
    }
}
export default new Request();