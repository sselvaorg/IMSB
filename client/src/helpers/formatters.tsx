import { EntryStock, IOStock, ExitStock } from "./declarations";

// utils/truncate.ts
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};
export const IOMapper = (
  EntryStock: EntryStock[],
  ExitStock: ExitStock[]
): IOStock[] => {
  const ioStock: IOStock[] = [
    ...EntryStock.map((entry) => ({
      id: entry.id,
      type: "Entry",
      intervenant: entry.Supplier.nom,
      article: entry.article.nom,
      quantite: entry.quantite,
      date: new Date(entry.date), // Convert string to Date
    })),
    ...ExitStock.map((exit) => ({
      id: exit.id,
      type: "Exit",
      intervenant: exit.destination,
      article: exit.article.nom,
      quantite: exit.quantite,
      date: new Date(exit.date), // Convert string to Date
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
