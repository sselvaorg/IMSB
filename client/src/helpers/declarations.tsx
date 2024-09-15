export interface Fournisseur {
  id: number;
  nom: string;
  contact: string;
  adresse: string;
  telephone: string;
}

export interface Categorie {
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
  categorie: Categorie;
  fournisseur: Fournisseur;
  codeBarre: string;
}

export interface SortieStock {
  id: number;
  article: Article;
  quantite: number;
  date: Date;
  destination: string;
}
export interface EntreeStock {
  id: number;
  article: Article;
  quantite: number;
  date: Date;
  fournisseur: Fournisseur;
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
  nombreFournisseur: number;
  nombreArticle: number;
  nombreCategorie: number;
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
