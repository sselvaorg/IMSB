import { Message } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://localhost:8080";

export const GetAllMessages = async (): Promise<Message[]> => {
  try {
    const reponse = await axios.get<any>(
      `${apiBase}/Api/Message/GetAllMessages`
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllSortieStocks:", error);
    return [];
  }
};
export const MarkAsRead = async (id: number): Promise<Message | null> => {
  try {
    const reponse = await axios.put<any>(
      `${apiBase}/Api/Message/MarkAsRead/${id}`
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllSortieStocks:", error);
    return null;
  }
};
