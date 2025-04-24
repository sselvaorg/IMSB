export interface Supplier {
  id: number;
  name: string;
  contact: string;
  address: string;
  phone: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
}

export interface Article {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  category: Category;
  Supplier: Supplier;
  barcode: string;
}

export interface ExitStock {
  id: number;
  article: Article;
  quantity: number;
  date: Date;
  destination: string;
}
export interface EntryStock {
  id: number;
  article: Article;
  quantity: number;
  date: Date;
  Supplier: Supplier;
}
export interface IOStock {
  id: number;
  type: string;
  article: string;
  quantity: number;
  date: Date;
  intervenant: string;
}
export interface Stats {
  namebreSupplier: number;
  namebreArticle: number;
  namebreCategory: number;
  stockEpuisee: number;
}
export interface Message {
  id: number;
  content: string;
  title: string;
  is_read: boolean;
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
