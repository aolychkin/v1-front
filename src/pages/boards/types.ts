export type TCard = {
  id: string;
  description: string;
  columnID: string;
  order: number;
};

export type TColumn = {
  id: string;
  title: string;
};

export type TBoard = {
  columns: TColumn[];
  cards: TCard[];
};