import axios from "axios";
import { AddEntryStockDto } from "../Components/AddEntryStockModal/AddEntryStockModal";
import { AddExitStockDto } from "../Components/AddExitStockModal/AddExitStockModal";
import { IOStock, EntryStock, ExitStock } from "../helpers/declarations";
import { IOMapper } from "../helpers/formatters";
const apiBase = "http://localhost:8080";

export const GetAllIOStock = async (): Promise<IOStock[]> => {
  try {
    const entrys = await axios.get<any>(
      `${apiBase}/Api/EntryStock/GeAllEntryStock`
    );
    const exits = await axios.get<any>(
      `${apiBase}/Api/ExitStock/GeAlltExitStock`
    );
    const results: IOStock[] = IOMapper(entrys.data, exits.data);
    return results;
  } catch (error) {
    console.error("Error in GetAllSuppliers:", error);
    return [];
  }
};

export const CreateEntryStock = async (
  addEntryStockDto: AddEntryStockDto
): Promise<EntryStock | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/EntryStock/CreateEntryStock`,
      addEntryStockDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllEntryStocks:", error);
    return null;
  }
};
export const CreateExitStock = async (
  addExitStockDto: AddExitStockDto
): Promise<ExitStock | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/ExitStock/CreateExitStock`,
      addExitStockDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in getOutputProgress:", error);
    return null;
  }
};
