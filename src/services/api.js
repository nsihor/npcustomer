import axios from "axios";
import {jwtDecode} from "jwt-decode";

axios.defaults.baseURL = 'http://localhost:8085/api/v1/merchant/';

const setToken = ({token, refreshToken}) => {
  localStorage.setItem("jwt", token);
  localStorage.setItem("rjwt", refreshToken);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  (axios.defaults.headers.common.Authorization = '');
  localStorage.removeItem("jwt");
  localStorage.removeItem("rjwt")
}

export const updateToken = () => axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("jwt")}`

export const login =
  async (user) => {
    try {
      const {data} = await axios.post('login', user);
      setToken(data);
      const {company_name} = jwtDecode(data.token);

      return company_name;
    } catch (e) {
      throw new Error(e.message)
    }
  }

export const logOut =
  async () => {
    try {
      clearToken();
    } catch (e) {
      return e.message;
    }
  }

export const register =
  async (user) => {
    try {
      const {data} = await axios.post('register', user);

      return data;
    } catch (e) {
      const details = e.response.data.details;
      throw new Error(Object.values(details)[0]);
    }
  };

export const profile =
  async () => {
    try {
      const {data} = await axios.post('profile');

      return data;
    } catch (e) {
      const details = e.response.data.details;
      throw new Error(Object.values(details)[0]);
    }
  }

export const refreshUser =
  async () => {
    try {
      const refresh_token = localStorage.getItem("rjwt")
      const {data} = await axios.post('refresh-token', {refresh_token});
      setToken(data);

      const {company_name} = jwtDecode(data.token);

      return company_name;
    } catch (e) {
      throw new Error(e.message)
    }
  }

export const update =
  async (userData) => {
    try {
      const {data} = await axios.post('update', userData);

      return data;
    } catch (e) {
      const details = e.response.data.details;
      throw new Error(Object.values(details)[0]);
    }
  }
export const changePassword =
  async () => {
    try {
      const {data} = await axios.post('change-password');

      return data;
    } catch (e) {
      return e.message;
    }
  }