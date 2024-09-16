import { AddCategorieDto } from "../Components/AddCategoryModal/AddCategoryModal";
import { Categorie } from "../helpers/declarations";
import axios from "axios";

const apiBase = "http://localhost:8080";

export const AllCategories = async (): Promise<Categorie[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/Api/Category/GetAllCategories`
    );

    return response.data;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return [];
  }
};

export const CreateCategory = async (
  addCategoryDto: AddCategorieDto
): Promise<Categorie | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/Category/CreateCategory`,
      addCategoryDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return null;
  }
};
