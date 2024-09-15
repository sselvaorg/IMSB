import { Stats } from "../helpers/declarations";
import axios from "axios";
const apiBase = "http://localhost:8080";

export const GetDashboardStats = async (): Promise<Stats | null> => {
  try {
    const reponse = await axios.get<any>(
      `${apiBase}/Api/Dashboard/GetDashboardStats`
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllSortieStocks:", error);
    return null;
  }
};
