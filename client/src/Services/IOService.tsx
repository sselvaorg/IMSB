import axios from "axios";
import { AddEntreeStockDto } from "../Components/AddEntreeStockModal/AddEntreeStockModal";
import { AddSortieStockDto } from "../Components/AddSortieStockModal/AddSortieStockModal";
import { IOStock, EntreeStock, SortieStock } from "../helpers/declarations";
import { IOMapper } from "../helpers/formatters";
const apiBase = "http://localhost:8080";

export const GetAllIOStock = async (): Promise<IOStock[]> => {
  try {
    const entrees = await axios.get<any>(
      `${apiBase}/Api/EntreeStock/GeAllEntreeStock`
    );
    const sorties = await axios.get<any>(
      `${apiBase}/Api/SortieStock/GeAlltSortieStock`
    );
    const results: IOStock[] = IOMapper(entrees.data, sorties.data);
    return results;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return [];
  }
};

export const CreateEntreeStock = async (
  addEntreeStockDto: AddEntreeStockDto
): Promise<EntreeStock | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/EntreeStock/CreateEntreeStock`,
      addEntreeStockDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllEntreeStocks:", error);
    return null;
  }
};
export const CreateSortieStock = async (
  addSortieStockDto: AddSortieStockDto
): Promise<SortieStock | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/SortieStock/CreateSortieStock`,
      addSortieStockDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllSortieStocks:", error);
    return null;
  }
};
