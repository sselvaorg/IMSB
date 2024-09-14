import axios from "axios";
import {
  Article,
  Categorie,
  EntreeStock,
  Fournisseur,
  IOStock,
  Message,
  SortieStock,
  Stats,
} from "../helpers/declarations";
import { IOMapper } from "../helpers/formatters";
import { AddArticleDto } from "../Components/AddArticleModal/AddArticleModal";
import { AddCategorieDto } from "../Components/AddCategoryModal/AddCategoryModal";
import { AddFournisseurDto } from "../Components/AddFournisseurModal/AddFournisseurModal";
import { AddEntreeStockDto } from "../Components/AddEntreeStockModal/AddEntreeStockModal";
import { AddSortieStockDto } from "../Components/AddSortieStockModal/AddSortieStockModal";

const apiBase = "http://localhost:8080";
export const AllArticles = async (): Promise<Article[]> => {
  try {
    const response = await axios.get<any>(
      `${apiBase}/Api/Article/GetAllArticles`
    );

    return response.data;
  } catch (error) {
    console.error("Error in GetAllArticles:", error);
    return [];
  }
};
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
export const CreateArticle = async (
  addArticleDto: AddArticleDto
): Promise<Article | null> => {
  try {
    const reponse = await axios.post<any>(
      `${apiBase}/Api/Article/CreateArticle`,
      addArticleDto
    );

    return reponse.data;
  } catch (error) {
    console.error("Error in GetAllFournisseurs:", error);
    return null;
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
