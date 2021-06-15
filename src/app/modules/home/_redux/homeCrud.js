import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const LOGIN_URL = `${REACT_APP_BASE_URL}/auth/login`;
const REGISTER_URL = `${REACT_APP_BASE_URL}/auth/register`;

const login = async (email, password) => {
  const res = await axios.post(LOGIN_URL, { email, password });
  return res
};

const register = async (email, firstname, lastname, password) => {
  const res = await axios.post(REGISTER_URL, {
    email,
    firstName: firstname,
    lastName: lastname,
    password,
  });
  return res;
};

export {
    login,
    register,
  };