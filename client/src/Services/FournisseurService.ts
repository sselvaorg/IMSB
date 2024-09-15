import { AddFournisseurDto } from "../Components/AddFournisseurModal/AddFournisseurModal";
import { Fournisseur } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://localhost:8080";

export const AllFournisseurs = async (): Promise<Fournisseur[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/Api/Fournisseur/GetAllFournisseurs`
    );

    return response.data;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return [];
  }
};

export const CreateFournisseur = async (
  addFournisseurDto: AddFournisseurDto
): Promise<Fournisseur | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/Fournisseur/CreateFournisseur`,
      addFournisseurDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return null;
  }
};
