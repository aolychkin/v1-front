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

export const objToTCard = (obj: any) => {
  try {
    return <TCard>{
      id: obj.id,
      description: obj.description,
      columnID: obj.columnID,
      order: obj.order,
    }
  } catch {
    console.log("Can't func (objToTCard)")
    return <TCard>{}
  }
}