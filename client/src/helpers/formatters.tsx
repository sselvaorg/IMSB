import { EntreeStock, IOStock, SortieStock } from "./declarations";

// utils/truncate.ts
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
export const IOMapper = (
  entreeStock: EntreeStock[],
  sortieStock: SortieStock[]
): IOStock[] => {
  const ioStock: IOStock[] = [
    ...entreeStock.map((entree) => ({
      id: entree.id,
      type: "Entree",
      intervenant: entree.fournisseur.nom,
      article: entree.article.nom,
      quantite: entree.quantite,
      date: new Date(entree.date), // Convert string to Date
    })),
    ...sortieStock.map((sortie) => ({
      id: sortie.id,
      type: "Sortie",
      intervenant: sortie.destination,
      article: sortie.article.nom,
      quantite: sortie.quantite,
      date: new Date(sortie.date), // Convert string to Date
    })),
  ].sort((a, b) => b.date.getTime() - a.date.getTime());

  return ioStock;
};
export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};
