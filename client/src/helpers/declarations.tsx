export interface Supplier {
  id: number;
  nom: string;
  contact: string;
  adresse: string;
  telephone: string;
}

export interface Category {
  id: number;
  nom: string;
  description: string;
}

export interface Article {
  id: number;
  nom: string;
  description: string;
  quantite: number;
  prix: number;
  categorie: Category;
  Supplier: Supplier;
  barcode: string;
}

export interface ExitStock {
  id: number;
  article: Article;
  quantite: number;
  date: Date;
  destination: string;
}
export interface EntryStock {
  id: number;
  article: Article;
  quantite: number;
  date: Date;
  Supplier: Supplier;
}
export interface IOStock {
  id: number;
  type: string;
  article: string;
  quantite: number;
  date: Date;
  intervenant: string;
}
export interface Stats {
  nombreSupplier: number;
  nombreArticle: number;
  nombreCategory: number;
  stockEpuisee: number;
}
export interface Message {
  id: number;
  contenu: string;
  titre: string;
  estLu: boolean;
  createdAt: Date;
}
export interface AuthToken {
  accessToken: string;
  tokenType: string;
}
export type UserProfile = {
  userName: string;
  email: string;
};
export interface IOStockCharts {
  month: string;
  totalQuantity: number;
}
