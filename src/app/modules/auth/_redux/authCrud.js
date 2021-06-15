import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const REQUEST_PASSWORD_URL = `${REACT_APP_BASE_URL}/auth/request-reset-password`;
const REQUEST_PASSWORD_CONFIRMATION_URL = `${REACT_APP_BASE_URL}/auth/password-reset-confirmation`;  
const REQUEST_EMAIL_VERIFICATION =`${REACT_APP_BASE_URL}/auth/verify/`;
const REQUEST_RESEND_EMAIL_VERIFICATION = `${REACT_APP_BASE_URL}/auth/resend-verification`;
const GENERATE_ACCESS_TOKEN_MAIL = `${REACT_APP_BASE_URL}/auth/generate-2f-token`;
const SEND_ACCESS_TOKEN = `${REACT_APP_BASE_URL}/auth/validate-2f-token`;

const requestPassword = async (email) => {
    const response = await axios.post(REQUEST_PASSWORD_URL, { email });
    return response;
  };

const requestPasswordConfirmation = async (id, password, passwordResetCode) => {
  const response = await axios.put(REQUEST_PASSWORD_CONFIRMATION_URL, {
    id,
    password,
    passwordResetCode,
  });
  return response;
};

const requestEmailVerification = async (id, code) => {
  const response = await axios.post(`${REQUEST_EMAIL_VERIFICATION}${id}`, {
    code,
  });
  return response;
};

const requestResendEmailVerification = async (email) => {
  const response = await axios.post(REQUEST_RESEND_EMAIL_VERIFICATION, {email});
  return response;
}

const generateAccessTokenAndSendMail = async () => { 
  const response = await axios.post(GENERATE_ACCESS_TOKEN_MAIL);
  return response;
}

const sendAccessToken = async (token) => {
  const response = await axios.post(SEND_ACCESS_TOKEN, {token});
  return response;
}

export {
    requestPassword,
    requestPasswordConfirmation,
    requestEmailVerification,
    requestResendEmailVerification,
    generateAccessTokenAndSendMail,
    sendAccessToken,
  };