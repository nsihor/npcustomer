import axios from "axios";
import {jwtDecode} from "jwt-decode";

axios.defaults.baseURL = 'http://localhost:8080/api/v1/merchant/';

const setToken = token => {
  localStorage.setItem("jwt", token);
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = () => {
  (axios.defaults.headers.common.Authorization = '');
  localStorage.removeItem("jwt")
}

export const login =
  async (user) => {
    try {
      const {data} = await axios.post('login', user);
      setToken(data.token);
      const {company_name} = jwtDecode(data.token);

      return {...data, company_name};
    } catch (error) {
      throw new Error()
    }
  }

export const logOut =
  async () => {
    try {
      clearToken();
    } catch (error) {
      return error.message;
    }
  }

export const register =
  async (user) => {
    try {
      const {data} = await axios.post('register', user);

      return data;
    } catch (error) {
      return error.message;
    }
  };

export const profile =
  async () => {
    try {
      const {data} = await axios.post('profile');

      return data;
    } catch (error) {
      return error.message;
    }
  }

export const update =
  async () => {
    try {
      const {data} = await axios.post('update');

      return data;
    } catch (error) {
      return error.message;
    }
  }
export const changePassword =
  async () => {
    try {
      const {data} = await axios.post('change-password');

      return data;
    } catch (error) {
      return error.message;
    }
  }

export const deleteMerchant =
  async () => {
    try {
      const {data} = await axios.post('delete');

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
