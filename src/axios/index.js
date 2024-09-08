import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://66dd6577f7bcc0bbdcddfd65.mockapi.io/'
});
export default instanceAxios;

