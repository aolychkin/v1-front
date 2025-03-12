import { Edge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/dist/types/types";

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

export const objToTColumn = (obj: any) => {
  try {
    return <TColumn>{
      id: obj.id,
      title: obj.title,
    }
  } catch {
    console.log("Can't func (objToTColumn)")
    return <TColumn>{}
  }
}

export type TCardState =
  | {
    type: 'idle';
  }
  | {
    type: 'is-dragging';
  }
  | {
    type: 'is-dragging-and-left-self';
  }
  | {
    type: 'is-over';
    // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
    closestEdge: Edge;
  }
  | {
    type: 'preview';
    container: HTMLElement;
    // dragging: DOMRect;
  };

export type TColumnState =
  | {
    type: 'column-idle';
  }
  | {
    type: 'is-card-over';
    isOverChildCard: boolean;
    // dragging: DOMRect; // TODO: получить высоту элемента. Этот параметр нужен только для этого.
  };