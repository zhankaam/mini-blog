import axios from "../axios";

const endpoints = {
  registration: (data: {[key: string]: string}) => axios.post("/v1/auth/email/register", data),
  login: (data: {[key: string]: string}) => axios.post("/v1/auth/email/login", data),
  forgotPassword: (data: any) => axios.post("/v1/auth/forgot/password", data),
  getProfile: () => axios.get("/v1/auth/me"),
  updateProfile: (data: {[key: string]: string}) => axios.patch("/v1/auth/me", data),
};

export default endpoints