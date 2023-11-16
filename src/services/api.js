import axios from "axios";

axios.defaults.baseURL = 'http://localhost:8080/api/v1/merchant/';

const setToken = token => {
    localStorage.setItem("jwt", token);
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => (axios.defaults.headers.common.Authorization = '');

export const login =
    async (user) => {
        try {
            const { data } = await axios.post('login', user);
            localStorage.setItem("userName", data.data.userName);
            setToken(data.data.token);
            return data;
        } catch (error) {
            return error.message;
        }
    }

export const profile =
    async () => {
        try {
            const { data } = await axios.post('profile');

            return data;
        } catch (error) {
            return error.message;
        }
    }

export const refreshUser =
    async () => {
        const token = localStorage.getItem("jwt");

        try {
            if (!token) return;
            setToken(token);
        } catch (error) {
            return error.message;
        }
    }
