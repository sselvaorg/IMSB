import axios from "axios";
import { showErrorModal } from "../helpers/handlers";
const apiBase = "http://localhost:8080";

export const Login = async (username: string, password: string) => {
  try {
    const reponse = await axios.post<any>(`${apiBase}/Api/Auth/Login`, {
      userName: username,
      password: password,
    });
    return reponse.data;
  } catch (error: any) {
    throw new Error(error.response);
  }
};
